///SITE FEITO BY:PAULO... [ATENÇAO] NAO AUTORIZO REVENDA DESTE PRODULTO, A NAO SER MINHA PESSOA, CASO AJA ALGUMA INFRAÇAO ESTAREI PROCURANDO MEUS DIREITOS, VC QUE ADQUIRIU O PROJETO PARABENS FAÇA BOM APROVEITO E NAO REVENDA ESTE PROJETO... ASS: PAULO DATA DE CRIAÇAO DOS TERMOS 21/10/2023 AS 09:13 AM
//==========MÓDULOS=======//
const axios = require("axios")
const cheerio = require("cheerio")
const express = require('express');
//const expressLayout = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const schedule = require('node-schedule');
const MemoryStore = require('memorystore')(session);
const rateLimit = require("express-rate-limit");
const input = require("input");
const favicon = require('serve-favicon');
//=========módulo na pasta route=======\\
const apiRouters = require('./routes/api');
const userRouters = require('./routes/users');
const premiumRouters = require('./routes/premium');
//=========módulo na pasta route FIM=======\\

//=========módulo na pasta LIB=======\\
const { isAuthenticated } = require('./lib/auth');
const { port } = require('./lib/settings');
const { ignoreFavicon } = require('./lib/function');
//=========módulo na pasta LIB FIM=======\\

//=========módulo na pasta DATABASE=======\\
//const { connectMongoDb } = require('./database/connect');
const { getApikey, resetLimit } = require('./database/db');
const { ExpiredTime, getTotalReq, getTodayReq, getVisitor, getTotalUser, addRequest, addVisitor } = require('./database/premium');
//=========módulo na pasta DATABASE FIM=======\\
const PORT = process.env.PORT || 22555
//=========CONEXÃO======\\
keymongodb = "mongodb+srv://databasejapa:paulo2002@cluster0.supzdmr.mongodb.net/?retryWrites=true&w=majority"

//=========CONEXÃO DB======\\
mongoose.set("strictQuery", true);
mongoose.connect(keymongodb, { 
useNewUrlParser: true, 
useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log('[INFO] DB CONECTADA COM SUCESSO!');
});
//=========CONEXÃO DA DB FIM======\\
app.set('trust proxy', 1);
const limiter = rateLimit({
windowMs: 1 * 60 * 1000, 
max: 5000, 
message: 'Ops, muitos pedidos'
});
app.use(limiter);
app.set('view engine', 'ejs');
//app.use(expressLayout);
app.use(express.static('public'));

//app.use(ignoreFavicon)
app.use(favicon('./views/icone.ico'));
app.use(session({
secret: 'secret',  
resave: true,
saveUninitialized: true,
cookie: { maxAge: 86400000 },
store: new MemoryStore({
checkPeriod: 86400000 //remover entradas expiradas a cada 24h
}),
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
require('./lib/config')(passport);

app.use(flash());

app.use(function(req, res, next) {
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
res.locals.user = req.user || null;
next();
})

app.use(function(req, res, next) {
next();
})

if (!fs.existsSync('./public/file')) fs.mkdirSync('./public/file')

function makeid(length) {
let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() *
charactersLength));
}
return result;
}
creator = require('./lib/settings.js')
loghandler = {
error: {
status: false,
code: 503,
message: 'Serviço indisponível ou erro',
feito_por: `${creator}`
},
noturl: {
status: false,
code: 403,
message: 'Proibido ou Erro, URL inválido',
feito_por: `${creator}`
},
notfound: {
status: false,
code: 404,
message: 'Proibido ou Erro, Não Encontrado',
feito_por: `${creator}`
},
notid: {
status: false,
code: 404,
message: 'Proibido ou Erro, ID ou Zona Inválida',
feito_por: `${creator}`
}
}
//===≠=============FIM===≠=============\\
app.get('/', (req, res) => {
res.render('bemvindo', {
layout: 'bemvindo'
});
});

app.use(function(req, res, next) {
getTotalUser()
addRequest()
next();
})

app.use('/api', apiRouters);

app.get('/docs', isAuthenticated, async (req, res) => { 
addVisitor()
let { apikey, username, limit } = req.user
let total = await getTotalReq()
let today = await getTodayReq()
let visitor = await getVisitor()
let userTotal = await getTotalUser()
res.render('docs', {
limit: limit,
total: total,
today,
visitor,
userTotal,
username: username,
apikey: apikey,
layout: 'docs'
});
});

app.get('/planos',(req, res) => {
res.sendFile(path.join(__dirname, "./views/", "planos.html"))})

app.get('/perfil', isAuthenticated, async (req, res) => { 
let { apikey, username, limit, password } = req.user
res.render('perfil', {
limit: limit,
username: username,
apikey: apikey,
password: password,
layout: 'layouts/main'
});
});


app.use('/api', apiRouters);
app.use('/usuario', userRouters);
app.use('/moderador', premiumRouters);

app.set('json spaces', 4);

app.use(function (req, res, next) {
if (res.statusCode == '200') {
res.render('buyFull', {
layout: 'layouts/main'
});
}
});

app.listen(PORT, () => {
console.log(`APIS RODANDO NA PRTA: ${PORT}`);
schedule.scheduleJob('* * * * *', () => { 
ExpiredTime()
});
});
