///SITE FEITO BY:PAULO... [ATENÇAO] NAO AUTORIZO REVENDA DESTE PRODULTO, A NAO SER MINHA PESSOA, CASO AJA ALGUMA INFRAÇAO ESTAREI PROCURANDO MEUS DIREITOS, VC QUE ADQUIRIU O PROJETO PARABENS FAÇA BOM APROVEITO E NAO REVENDA ESTE PROJETO... ASS: PAULO DATA DE CRIAÇAO DOS TERMOS 21/10/2023 AS 09:13 AM
///---------------------------------------///
PauloOfc = process.cwd()
//―――――――――――――――――――――――――――――――――――――――――― ┏  MÓDULOS ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
const express = require('express');
const axios = require("axios")
const router = express.Router();
const fs = require('fs');
const path = require('path');
const imageToBase64 = require('image-to-base64');
const deepai = require('deepai')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const translate = require('translate-google-api')
const util = require('util')
const isUrl = require("is-url")
const { rastrearEncomendas } = require('correios-brasil');
const fetch = require('isomorphic-unfetch')
//const { getData, getPreview, getTracks, getDetails } = require('spotify-url-info')(fetch)
const BitlyClient = require('bitly').BitlyClient
const TinyURL = require('tinyurl');
const Vagalume = require('@eugabrielsilva/vagalume');
const lyricsFinder = require("@jeve/lyrics-finder");
const lyricsFinder2 = require('lyrics-finder');
const savefrom = require('../lib/savefrom')
//―――――――――――――――――――――――――――――――――――――――――― ┏  MÓDULO FIM ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
//―――――――――――――――――――――――――――――――――――――――――― ┏  MÓDULO NA PASTA LIB ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
const { download_Url } = require("../lib/function");
const { ytmp4, ytmp3 } = require('../lib/y2mate')
const { readFileTxt, readFileJson} = require('../lib/function');
const {fetchJson} = require('../lib/myfunc')
const { getBuffer , getRandom} = require("../lib/buff");
//const { create } = require('../lib/attp');
const { audioMeme } = require('../lib/sociais-2');
const { init, askAI, Chat } = require('../lib/modulos/bard-ai');
const linkfy = require('../lib/modulos/linkifyjs')
const ytSearch = require('../lib/modulos/yt-search')
const yt = require('../lib/modulos/ytdl-core')
const yts = require('../lib/modulos/yt-search')
const openai = require('../lib/modulos/openai')
const { palavrasANA, quizanime, quizanimais} = require('../lib/jogos')
//const PauloOfccanvas = require(PauloOfc + '/lib/PauloOfc-canvas');
const { cekKey, limitAdd, isLimit } = require('../database/db');
//const knights = require(PauloOfc + '/lib/PauloOfc-knights');
//const Cannvas = require(PauloOfc + '/lib/PauloOfc-welcome2');
//const PauloOfcrank = require(PauloOfc + '/lib/PauloOfc-rank');
const mintake = require(PauloOfc + '/lib/mintake');
const { UploadFileUgu, webp2mp4File, TelegraPh } = require("../lib/uploader");
const PauloOfc1 = require("../lib/listdl");
const PauloOfc2 = require("../lib/PauloOfcapis");
const { creator} = require('../lib/settings');
const { emailsend } = require("../lib/email/index");
const { loghandler } = require("../index.js");
const InstaStalker = require("../lib/instaStalker.js")
const { yt2mate, yt1s, savef, get } = require('../lib/scraper-paulo.js');
const { instagramStoryUser, igProfileStalk, unsplashSearch } = require('../lib/get.js')
const { BrasileirãoFutebol, getNoticiasEsporte } = require("../lib/futebol.js")
var { tiktok2, FacebookMp4 } = require('../lib/teste.js');
var { InArtificial, CorretorOpenAi } = require('../lib/scrapper-vip.js');
var { iFunny } = require("../lib/ifunny.js")
var { ChatGpt, animedif, attp } = require('../lib/scrape');
//―――――――――――――――――――――――――――――――――――――――――― ┏  MÓDULO NA PASTA LIB FIM┓ ―――――――――――――――――――――――――――――――――――――――――― \\

//―――――――――――――――――――――――――――――――――――――――――― ┏  MÓDULO NA PASTA  DATABASE ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
const { checkLimit, resetLimit } = require('../database/db'); 
//―――――――――――――――――――――――――――――――――――――――――― ┏  MÓDULO NA PASTA DATABASE FIM┓ ―――――――――――――――――――――――――――――――――――――――――― \\
//―――――――――――――――――――――――――――――――――――――――――― ┏  MÓDULO NA controllers ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
const { assistithtr, assistithtdlr } = require('../controllers/assistiht');
const { pornogratisr } = require('../controllers/pornogratis');
const { lerimg } = require('../controllers/lerimg');
const { soundll } = require('../controllers/soundl');
const { styleTextr } = require('../controllers/styleText');
const { twitterdlr } = require('../controllers/twitterdl');
const { wallmobr } = require('../controllers/wallmob');
const { htdlr } = require('../controllers/hentaistubedl');
const { xvideosr } = require('../controllers/xvideos');
const { xvideossr } = require('../controllers/xvideos_ofc');
const { pornhubr } = require('../controllers/pornhub');
const { xnxxsearchr } = require('../controllers/xnxx');
const { gpwhatsappr } = require('../controllers/gprandom');
const { hentaigifr } = require('../controllers/hentaigif');
const { str } = require('../controllers/st');
const { gpsrcr } = require('../controllers/gpsrc');
const { dafontDownr, dafontSearchr } = require('../controllers/datafonte');
const { WAModss } = require('../controllers/WAMods');
const { towebp, tomp3, sticker, togif } = require('../controllers/convert');
const { hentaistubes } = require('../controllers/hentaissrc');
const { pinterestr } = require('../controllers/pinterest');
const { lirikr } = require('../controllers/lirik');
const { ddd, cep, ip, covid } = require('../controllers/consulta');
const { simih } = require('../controllers/simi');
const { animer,mangar } = require('../controllers/anime');
const { mDo } = require('../controllers/media');
const { happymodr } = require('../controllers/happymod')
const moment = require("moment-timezone");
const os = require('os')
const { performance } = require('perf_hooks');
//―――――――――――――――――――――――――――――――――――――――――― ┏  MÓDULO NA PASTA controllers FIM┓ ―――――――――――――――――――――――――――――――――――――――――― \\

async function japa(url) {
he = await fetch(url).then(c => c.json())
 return he
}

function ping() {
  const speed = require('performance-now');
  const timestampm = speed();
  const latency = speed() - timestampm;
  const ms = latency.toFixed(4);
    return ms
}
//=========KEY DE ENCURTA LINK======\\
apicuttly = ['4786cc6a0f19de9c67ea6a4282c494323c932','2038c1a7754b408aa8f9055282638c00e668e','89d73b3a07209177d0251e30d49d66bd669ac','e841147455d0fdfbf50f74aefe63b6728adc0','27f3aa3f45cb4460bcbac69b782ca470a4570','31a8df09d5a9d8d009790df0b5642e3d76919','09b4e764ff07b10eac1682e71aaf95a78f358','75fe576ce040b619176af22f5a718b2f574f5','e24ee36f9c1519c0a779667a5182a31fb7ccf','903869065d29e23455ddca922071f4bbeb133']

//Get Api Bittly From https://bitly.com/a/sign_in?rd=/settings/api/    \\
apibitly = ['6cfc18e9bfa554714fadc10a1f6aff7555642348','2243940c230ad0d748059aee58ddf126b65fd8e7','c71b6658a1d271ddaf2a5077de3dcb9d67f68025','cddbceccdc2f1c9d11e4cdd0d2b1d1078e447c43','7915c671fbd90eca96310e5c9442d761225a1080','e5dee46eb2d69fc9f4b0057266226a52a3555356','f09ab8db9cf778b37a1cf8bc406eee5063816dec','964080579f959c0cc3226b4b2053cd6520bb60ad','a4f429289bf8bf6291be4b1661df57dde5066525','3d48e2601f25800f375ba388c30266aad54544ae','4854cb9fbad67724a2ef9c27a9d1a4e9ded62faa','d375cf1fafb3dc17e711870524ef4589995c4f69','43f58e789d57247b2cf285d7d24ab755ba383a28','971f6c6c2efe6cb5d278b4164acef11c5f21b637','ae128b3094c96bf5fd1a349e7ac03113e21d82c9','e65f2948f584ffd4c568bf248705eee2714abdd2','08425cf957368db9136484145aa6771e1171e232','dc4bec42a64749b0f23f1a8f525a69184227e301','0f9eb729a7a08ff5e73fe1860c6dc587cc523035','037c5017712c8f5f154ebbe6f91db1f82793c375']


apissweb = ['BJGTA0D-7XQ4QNP-J7T430K-ESGV4P8','QGHX8PS-T9JMP8G-KM1RP0G-R1KKMK5','ARNKJD1-HW8M0JF-NZNT8SH-D92J35C','MQG5H3G-X9GMF8J-M1QQ52Q-Z511QFG','5378V5A-DA0MWYY-J5WK76K-00Y5EQ2','8KZA62F-0FM4T6A-HK4X0YA-W1XRNEC','BZQPB3J-DG7436X-MW21EW1-EP0DMGM','5FTSA4G-WSEMHX7-QCGCATV-CYKJZRX','0XPA3XK-T6G4435-KAVV1R0-HX089Y1','40GH6M0-JP4MSAZ-PPJYP3Z-1G5SM3K']
//=========FIM KEY DE ENCURTA LINK======\\
var chaveapi = 'Gata_Dios'

const invalidKey = PauloOfc + '/views/apikeyinvalida.html' // Apikey Invalid

router.get('/verificarkey', async (req, res) => {
    const apikey = req.query.apikey;
   if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.sendFile(invalidKey)
    const limit = await checkLimit(apikey);
    res.send({status: 200, apikey: apikey, limit: limit});
});

router.get('/styleText', styleTextr);

router.get('/lerimg', lerimg);

router.get('/st', str);

router.get('/happymod', happymodr);

router.get('/lirik', lirikr);

router.get('/simi', simih);
//***************PESQUISA*************************\\

router.get('/downloader/ytmp3v2', async (req, res, next) => {
  const link = req.query.link;
   const apikey = req.query.apikey;
       if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `insira o parâmetro apikey`
      });
      if (!link) return res.json({ status : false, criador : `${creator}`, message : "[!] entrada de parâmetro link"}) 
        const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
          status: 403,
          mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
      const { Youtube } = require(PauloOfc + '/lib/ytdownloader.js')
      new Youtube().ytmp3(link, false).then((data) => { 
 res.json(data)
  }).catch(e => {
	res.json(loghandler.noturl)
})
});

   router.get('/downloader/spotify', async (req, res, next) => {
  const link = req.query.link;
   const apikey = req.query.apikey;
       if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `insira o parâmetro apikey`
      });
      if (!link) return res.json({ status : false, criador : `${creator}`, message : "[!] entrada de parâmetro link"}) 
        const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
          status: 403,
          mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
           const { Youtube } = require(PauloOfc + '/lib/ytdownloader.js')
         const data = getPreview(link)
  .then((bolo) => {
    new Youtube().ytmp3(bolo.title, true).then((data) => { 
 res.json({
		status: true,
		criador: `${creator}`,
		resultado:{ 
nome: bolo.title, 
 artista: bolo.artists,
 image: bolo.image,
 trecho_music: bolo.audio,
 link_music: bolo.link,
 data_de_upload: bolo.date,
embed: bolo.embed,
 link: data.dl_link
 }
 })
     // Let's write the buffer to the woofer (i mean file, hehehe) 
    })
    })
});
   router.get('/downloader/ytmp4v2', async (req, res, next) => {
  const link = req.query.link;
   const apikey = req.query.apikey;
       if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `insira o parâmetro apikey`
      });
      if (!link) return res.json({ status : false, criador : `${creator}`, message : "[!] entrada de parâmetro link"}) 
        const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
          status: 403,
          mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
      const { Youtube } = require(PauloOfc + '/lib/ytdownloader.js')
  const youtube = new Youtube();
  await youtube.ytmp4(link, false);
  let tentativas = 0;
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      tentativas++;
      try {
        const data = await youtube.ytmp4(link, false);
        const pagamentoStatus = data.status;
        if (tentativas >= 1200 || pagamentoStatus === '200') {
          clearInterval(interval);
          res.json(data);
        }
      } catch (error) {
        clearInterval(interval);
        reject(error);
      }
    }, 2000);
  });
})

router.get('/downloader/ytmp3v3', async (req, res, next) => {
  const link = req.query.link;
   const apikey = req.query.apikey;
       if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `insira o parâmetro apikey`
      });
      if (!link) return res.json({ status : false, criador : `${creator}`, message : "[!] entrada de parâmetro link"}) 
        const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
          status: 403,
          mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
       const { Youtube } = require(PauloOfc + '/lib/x2download')
      new Youtube().ytmp3(link, false).then((data) => { 
 res.json(data)
  }).catch(e => {
	res.json(loghandler.noturl)
})
});

router.get('/downloader/ytmp4v3', async (req, res, next) => {
  const link = req.query.link;
   const apikey = req.query.apikey;
       if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `insira o parâmetro apikey`
      });
      if (!link) return res.json({ status : false, criador : `${creator}`, message : "[!] entrada de parâmetro link"}) 
        const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
          status: 403,
          mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
      const { Youtube } = require(PauloOfc + '/lib/x2download')
  const youtube = new Youtube();
  await youtube.ytmp4(link, false);
  let tentativas = 0;
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      tentativas++;
      try {
        const data = await youtube.ytmp4(link, false);
        const pagamentoStatus = data.status;
        if (tentativas >= 1200 || pagamentoStatus === '200') {
          clearInterval(interval);
          res.json(data);
        }
      } catch (error) {
        clearInterval(interval);
        reject(error);
      }
    }, 2000);
  });
})

router.get('/pesquisa/ytplaymp4', async (req, res, next) => {
	var nome = req.query.nome
 const apikey = req.query.apikey;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro nome & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
let yts = require("yt-search")
let pesquisa = await yts(nome)
let url = pesquisa.all[Math.floor(Math.random() * pesquisa.all.length)]
ytmp4(url.url).then(data => {
 if (!data) return res.json(loghandler.noturl)
	res.json({
	    status: true,
	    creator: `${creator}`,
	    resultado: data
	})
	
})
})
router.get('/pesquisa/ytplaymp3', async (req, res, next) => {
	var nome = req.query.nome
 const apikey = req.query.apikey;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro nome & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
let yts = require("yt-search")
let pesquisa = await yts(nome)
let url = pesquisa.all[Math.floor(Math.random() * pesquisa.all.length)]
ytmp3(url.url).then(data => {
 if (!data) return res.json(loghandler.noturl)
	res.json({
	    status: true,
	    creator: `${creator}`,
	    resultado: data
	})
	
})
})
router.get('/downloader/tiktokv1', async (req, res, next) => {
	var url = req.query.url
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] entrada de parâmetro url"})  
	const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
PauloOfc1.musically(url).then(data => {
    if (!data) return res.json(loghandler.noturl)
	res.json({
	    status: true,
	    creator: `${creator}`,
	    resultado: data
	})
}).catch(e => {
	res.json(loghandler.noturl)
})
})
router.get('/downloader/tiktokv2', async (req, res, next) => {
	var url = req.query.url
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] entrada de parâmetro url"})
  const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);  
	PauloOfc1.tiklydown(url).then(result => {
    if (!result) return res.json(loghandler.noturl)
	res.json({
	    status: true,
	    creator: `${creator}`,
	    resultado: result
	})
}).catch(e => {
	res.json(loghandler.noturl)
})
})
router.get('/teste', async (req, res, next) => {
const anime = require('./lib/toanime');

anime.transform({
    photo: 'https://media.gq.com.mx/photos/5e220ec2ffa8c7000803441e/16:9/w_1920,c_limit/40-datos-curiosos-para-descubrir-a-scarlett-johansson.jpg',
   
    destinyFolder: './images'
})
.then(data => {
    res.json(data);
})
.catch(err => {
    res.json(err);
});
})
router.get('/downloader/fbdown', async (req, res, next) => {
	const url = req.query.url;
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] entrada de parâmetro url"})  
	const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
PauloOfc1.fbdown(url).then(data => {
if (!data.Normal_video ) return res.json(loghandler.noturl)
	res.json({
	status: true,
	creator: `${creator}`,
	resultado:	data
	})
	})
	 .catch(e => {
		res.json(loghandler.error)
})
})
//===========pesquisa=====\\\
router.get('/pesquisa/sticker', async (req, res, next) => {
	var texto = req.query.texto
 const apikey = req.query.apikey;
     if (texto === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
	PauloOfc1.stickersearch(texto).then(data => {
		if (!data ) return res.json(loghandler.notfound)
	
		res.json({
			status: true,
	        criador: `${creator}`,
			resultado: data
		})
		}).catch(e => {
	 res.json(loghandler.error)
})
})
router.get('/pesquisa/filmes', async (req, res, next) => {
	var texto = req.query.texto
 if (!texto) return res.status(403).send({
     status: 403,
     mensagem: ` não encontrada, por favor registre-se primeiro!`
 });
 const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  

 PauloOfc1.filmes1(texto).then(data => {
		if (!data ) return res.json(loghandler.notfound)
	
		res.json({
			status: true,
	        criador: `${creator}`,
			resultado: data
		})
		}).catch(e => {
	 res.json(loghandler.error)
})
})
router.get('/pesquisa/githubstalk', cekKey, async (req, res, next) => {
var user = req.query.user
const apikey = req.query.apikey;
   if (user === undefined || apikey === undefined) return res.status(404).send({
      status: 404,
      message: `insira o parâmetro texto & apikey`
  });
  const check = await cekKey(apikey);
  if (!check) return res.status(403).send({
      status: 403,
      mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
  });
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'})
let gitstalk = await fetchJson(`https://api.github.com/users/${user}`)
if (!gitstalk.login ) return res.json(loghandler.notfound)
res.json({
status: true,
creator: `${creator}`,
resultado: gitstalk
})

})
router.get('/pesquisa/sticker', async (req, res, next) => {
	var texto = req.query.texto
 const apikey = req.query.apikey;
     if (texto === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
	PauloOfc1.stickersearch(texto).then(data => {
		if (!data ) return res.json(loghandler.notfound)
	
		res.json({
			status: true,
	        criador: `${creator}`,
			resultado: data
		})
		}).catch(e => {
	 res.json(loghandler.error)
})
})
router.get('/pesquisa/letramusic', async (req, res, next) => {
	var texto = req.query.nome
 const apikey = req.query.apikey;
     if (texto === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    vaga = ['ccc9079cf3c27172d5411aa9e20ce058','dc7df8eef97c82470a3b5e8d560aa473', 'e31555154b3650beb5f61303dd5933ea']
    let selectedCode = vaga[Math.floor(Math.random() * vaga.length)]
    console.log(selectedCode)
    const vagalume = new Vagalume(selectedCode); // sua token
    vagalume.search(`${texto}`).then(data => {
      res.json({
        status: true,
            criador: `${creator}`,
        resultado: data
      })    }).catch(error => {
        res.json({
          status: true,
              criador: `${creator}`,
          resultado: "erro"
        }) 
    });
  })
router.get('/pesquisa/letramusic2', async (req, res, next) => {
	var texto = req.query.nome
 const apikey = req.query.apikey;
     if (texto === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
      const response =  lyricsFinder.LyricsFinder(`letra ${texto}`).then((data) => {
        if (!data ) return res.status(403).send({
          status: 403,
          mensagem: `ERRO! chama 5522988175732 e manda o link`
      });
        res.json({
          status: true,
              criador: `${creator}`,
          resultado: data
        })      });
	
		})
    router.get('/pesquisa/letramusic3', async (req, res, next) => {
      var texto = req.query.nome
     const apikey = req.query.apikey;
         if (texto === undefined || apikey === undefined) return res.status(404).send({
            status: 404,
            message: `insira o parâmetro texto & apikey`
        });
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
            status: 403,
            mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
const songName = `Letra ${texto}`;
const response = lyricsFinder2(songName)
  .then((lyrics) => {
    // As letras foram encontradas
       if (!lyrics ) return res.status(403).send({
              status: 403,
              mensagem: `ERRO! chama 5522988175732 e manda o link`
          });
            res.json({
              status: true,
                  criador: `${creator}`,
              resultado: lyrics
            })     
           });     
        })
//***************FIM_DA_PESQUISA*************************\\


//***************DOWNLOAD*************************\\

router.get('/downloader/igdownloader', async (req, res, next) => {
    var url = req.query.url
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) {
        return res.status(404).send({
            status: 404,
            message: `insira o parâmetro url & apikey`
        });
    }
    const check = await cekKey(apikey);
    if (!check) {
        return res.status(403).send({
            status: 403,
            message: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
        });
    }
    let limit = await isLimit(apikey);
    if (limit) {
        return res.status(403).send({
            status: 403,
            message: 'seu limit acabou volte amanhã ou compre o premium...'
        });
    }
    let links = savefrom.savefrom(url).then((data) => {
        res.json({
            status: true,
            creator: `${creator}`,
            resultado: data
        });
    });
});
router.get('/downloader/alldown', async (req, res, next) => {
    var url = req.query.url
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) {
        return res.status(404).send({
            status: 404,
            message: `insira o parâmetro url & apikey`
        });
    }
    const check = await cekKey(apikey);
    if (!check) {
        return res.status(403).send({
            status: 403,
            message: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
        });
    }
    let limit = await isLimit(apikey);
    if (limit) {
        return res.status(403).send({
            status: 403,
            message: 'seu limit acabou volte amanhã ou compre o premium...'
        });
    }
    let links = savefrom.savefrom(url).then((data) => {
        res.json({
            status: true,
            creator: `${creator}`,
            resultado: data
        });
    });
});


router.get('/downloader/ytmp3v1', async (req, res, next) => {
const url = req.query.url;
 const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro apikey`
    });
    if (!url ) return res.json({ status : false, criador : `${creator}`, message : "[!] entrada de parâmetro url"}) 
	    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
ytmp3(url).then(data => {
		if (!data ) return res.json(loghandler.notfound)
	
		res.json({
			status: true,
	        criador: `${creator}`,
			resultado: data
		})
	   })
})
router.get('/downloader/ytmp4v1', async (req, res, next) => {
const url = req.query.url;
 const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro apikey`
    });
    if (!url ) return res.json({ status : false, criador : `${creator}`, message : "[!] entrada de parâmetro url"}) 
	    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
ytmp4(url).then(data => {
		if (!data ) return res.json(loghandler.notfound)
	
		res.json({
			status: true,
	        criador: `${creator}`,
			resultado: data
		})
	   })
})
//***************FIM_DE_DONWLOADS*************************\\

//***************TEXTMAKER*************************\\

router.get('/maker/bateria', async (req, res) => {
    const apikey = req.query.apikey;
    const texto = req.query.texto;
    const porcentagem = req.query.porcentagem;
     if (texto === undefined || apikey === undefined || porcentagem === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & porcentagem & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
  var result = await imageToBase64(`https://eruakorl.sirv.com/Bot%20dudinha/images%20(1).jpeg?text.0.text=BATERIA&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=24&text.0.color=ffffff&text.0.font.family=Teko&text.0.font.weight=600&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${porcentagem}%&text.1.position.gravity=center&text.1.size=22&text.1.color=2aff00&text.1.font.family=Teko&text.1.font.weight=600&text.1.background.opacity=100&text.1.outline.blur=100&text.2.text=${texto}&text.2.position.gravity=center&text.2.position.y=26%25&text.2.size=24&text.2.color=ffffff&text.2.font.family=Teko&text.2.font.weight=600&text.2.background.opacity=100&text.2.outline.blur=100`)
	 var hasil = Buffer.from(result, 'base64')
  await fs.writeFileSync(PauloOfc + '/tmp/bateria.png', hasil)
  res.sendFile(PauloOfc + '/tmp/bateria.png')
  limitAdd(apikey);
  });

    router.get('/maker/ttp', async (req, res) => {
      const texto = req.query.texto;  
    const apikey = req.query.apikey;
     if (texto === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   ttplink = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.blur=0&text.0.outline.opacity=0&text.0.font.family=Passion%20One`
   figuresultado = await sticker(ttplink)
  await fs.writeFileSync(PauloOfc + '/tmp/ttp.webp', figuresultado)
  await res.sendFile(PauloOfc + '/tmp/ttp.webp')
  limitAdd(apikey);
  });

router.get('/maker/ttp2',  async (req, res) => {
const apikey = req.query.apikey;
texto = req.query.texto
if(!texto)return res.json({
status:false,
message:'Cade o parametro texto??'
})
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`
res.type('jpg')
res.send(await getBuffer(sitee))
})

router.get('/maker/ttp3', async (req, res) => {
texto = req.query.texto
var apikey = req.query.apikey;
if(!texto)return res.json({
status:false,
message:'Cade o parametro texto??'
})
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
let hasil = await getBuffer(`https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeURIComponent(texto)}&text.0.color=ffffff&text.0.background.color=0000ff&text.0.font.family=Changa%20One&&text.0.outline.color=0000`)
res.set({'Content-Type': 'image/png'})
res.send(hasil)
})
      router.get('/maker/attp', async (req, res) => {
    const apikey = req.query.apikey;
    const texto = req.query.texto;   
     if (texto === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
  		let attp = await create(texto)
				ran = './tmp/attp.mp4'
    rano = './tmp/attp.mp4'
    fs.writeFileSync(ran, attp)
    anu = await TelegraPh(ran)
   figuresultado = await sticker(util.format(anu))
  await fs.writeFileSync(PauloOfc + '/tmp/attp.webp', figuresultado)
  await res.sendFile(PauloOfc + '/tmp/attp.webp')
  limitAdd(apikey);
    });
router.get('/maker/attp2', async (req, res, next) => {
texto = req.query.texto
var apikey = req.query.apikey;
if(!texto)return res.json({
status:false,
message:'Cade o parametro texto??'
})
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
let hasil = await getBuffer(`https://api.erdwpe.com/api/maker/attp?text=${texto}`)
res.set({'Content-Type': 'image/gif'})
res.send(hasil)
})

router.get('/maker/emojimix', async (req, res, next) => {
	var emoji1 = req.query.emoji1
	var emoji2 = req.query.emoji2
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji1"})
	if (!emoji2 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji2"})  
const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
	let data = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	res.json({
	status: true,
	Criador: `${creator}`,
		resultado: data.results
})
})

router.get('/maker/emojimix2', async (req, res, next) => {
	var emoji1 = req.query.emoji
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})
	const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
	let emojii = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}`)
		res.json({
	status: true,
	Criador: `${creator}`,
		resultado: emojii.results
})
})

router.get('/maker/emojimix3', async (req, res, next) => {
var emoji1 = req.query.emoji1
var emoji2 = req.query.emoji2
var apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
if (!emoji1) return res.json({ status : false, mensagem : "[!] parâmetros de entrada  emoji1"})
if (!emoji2) return res.json({ status : false, mensagem : "[!] parâmetros de entrada  emoji2"})  
let data = await japa(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
let jadi = data.results[Math.floor(Math.random() * data.results.length)]
if (!jadi ) return res.json({erro: "Erro no Servidor Interno."})
for (let ress of data.results) {
resul = await getBuffer(ress.url)
res.set({'Content-Type': 'image/png'})
res.send(resul)
}
})
//***************CANVAS*************************\\

router.get('/canvas/gay', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    ran = getRandom('.jpg')
    rano = getRandom('.jpg')
    buff = await getBuffer(img)
    fs.writeFileSync(ran, buff)
    anu = await TelegraPh(ran)
   imgr = await new PauloOfccanvas.Gay().getImage(`${util.format(anu)}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/gay.png', imgr)
  res.sendFile(PauloOfc+'/tmp/gay.png')
});

router.get('/sticker/wasted', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});    
   imgr = await new PauloOfcrank.wasted().getImage(`${img}`)
//   imgr = await new PauloOfcrank.wasted().getImage(`${img}`)
   limitAdd(apikey);
   ran = getRandom('.jpg')
   rano = getRandom('.jpg')
   fs.writeFileSync(ran, imgr)
   anu = await TelegraPh(ran)
  figuresultado = await sticker(util.format(anu))
  await fs.writeFileSync(PauloOfc + '/tmp/wasted.webp', figuresultado)
  await res.sendFile(PauloOfc + '/tmp/wasted.webp')
});

router.get('/canvas/blur', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Blur().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Blur.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Blur.png')
});

router.get('/canvas/invert', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Invert().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Invert.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Invert.png')
});

router.get('/canvas/sepia', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Sepia().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Sepia.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Sepia.png')
});

router.get('/canvas/ad', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Ad().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Ad.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Ad.png')
});

router.get('/canvas/affect', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Affect().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Affect.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Affect.png')
});

router.get('/canvas/beautiful', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Beautiful().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Beautiful.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Beautiful.png')
});

router.get('/canvas/bobross', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Bobross().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Bobross.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Bobross.png')
});

router.get('/canvas/confusedStonk', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.ConfusedStonk().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/ConfusedStonk.png', imgr)
  res.sendFile(PauloOfc+'/tmp/ConfusedStonk.png')
});

router.get('/canvas/delete', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Delete().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Delete.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Delete.png')
});

router.get('/canvas/discordBlack', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.DiscordBlack().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/DiscordBlack.png', imgr)
  res.sendFile(PauloOfc+'/tmp/DiscordBlack.png')
});

router.get('/canvas/discordBlue', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.DiscordBlue().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/DiscordBlue.png', imgr)
  res.sendFile(PauloOfc+'/tmp/DiscordBlue.png')
});

router.get('/canvas/facepalm', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Facepalm().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Facepalm.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Facepalm.png')
});

router.get('/canvas/hitler', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Hitler().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Hitler.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Hitler.png')
});

router.get('/canvas/jail', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Jail().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Jail.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Jail.png')
});

router.get('/canvas/karaba', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Karaba().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Karaba.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Karaba.png')
});

router.get('/canvas/mms', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Mms().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Mms.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Mms.png')
});

router.get('/canvas/notStonk', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.NotStonk().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/NotStonk.png', imgr)
  res.sendFile(PauloOfc+'/tmp/NotStonk.png')
});

router.get('/canvas/poutine', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Poutine().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Poutine.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Poutine.png')
});

router.get('/canvas/rip', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Rip().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Rip.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Rip.png')
});

router.get('/canvas/stonk', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Stonk().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Stonk.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Stonk.png')
});

router.get('/canvas/tatoo', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Tatoo().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Tatoo.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Tatoo.png')
});

router.get('/canvas/thomas', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Thomas().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Thomas.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Thomas.png')
});

router.get('/canvas/trash', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Trash().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Trash.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Trash.png')
});

router.get('/canvas/circle', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Circle().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Circle.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Circle.png')
});

router.get('/canvas/kiss', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
    const img2 = req.query.img2;
     if (img === undefined  || img2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & img2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Kiss().getImage(`${img}`,`${img2}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Kiss.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Kiss.png')
});

router.get('/canvas/batslap', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
    const img2 = req.query.img2;
     if (img === undefined  || img2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & img2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Batslap().getImage(`${img}`,`${img2}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Batslap.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Batslap.png')
});

router.get('/canvas/bed', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
    const img2 = req.query.img2;
     if (img === undefined  || img2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & img2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Bed().getImage(`${img}`,`${img2}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Bed.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Bed.png')
});

router.get('/canvas/doubleStonk', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
    const img2 = req.query.img2;
     if (img === undefined  || img2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & img2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.DoubleStonk().getImage(`${img}`,`${img2}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/DoubleStonk.png', imgr)
  res.sendFile(PauloOfc+'/tmp/DoubleStonk.png')
});

router.get('/canvas/spank', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
    const img2 = req.query.img2;
     if (img === undefined  || img2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & img2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Spank().getImage(`${img}`,`${img2}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Spank.png', imgr)
  res.sendFile(PauloOfc+'/tmp/Spank.png')
});

router.get('/canvas/triggered', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
     if (img === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Triggered().getImage(`${img}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Triggered.gif', imgr)
  res.sendFile(PauloOfc+'/tmp/Triggered.gif')
});

router.get('/canvas/blink', async (req, res) => {
    const apikey = req.query.apikey;
    const img = req.query.img;
    const img2 = req.query.img2;
     if (img === undefined  || img2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro img & img2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   imgr = await new PauloOfccanvas.Blink().getImage(`${img}`,`${img2}`)
   limitAdd(apikey);
   await fs.writeFileSync(PauloOfc +'/tmp/Blink.gif', imgr)
  res.sendFile(PauloOfc+'/tmp/Blink.gif')
});

//***************@ EPHOTO360*************************\\

//video 1 text
router.get('/ephoto/pubgv', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/tao-avatar-video-pubg-phong-cach-nhieu-song-glitch-627.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.mp4', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.mp4'))
 })
  })
});

router.get('/ephoto/anonovo', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/tao-thiep-video-new-year-countdown-2022-888.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.mp4', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.mp4'))
 })
  })
});

router.get('/ephoto/natalmsg', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/tao-thiep-video-giang-sinh-dep-va-an-tuong-danh-tang-ban-be-va-nguoi-than-885.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.mp4', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.mp4'))
 })
  })
});

router.get('/ephoto/trigrev', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-video-logo-con-ho-ky-thuat-so-862.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.mp4', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.mp4'))
 })
  })
});

// 1 texto
router.get('/ephoto/areia', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu-tren-nen-cat-trang-tuyet-dep-663.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/tela', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-tren-vai-62.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});
//daqui
router.get('/ephoto/blackpink', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu-phong-cach-blackpink-doc-dao-712.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/brotoluz', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/balckpingv2', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-tao-logo-phong-cach-blackpink-truc-tuyen-843.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/borracha', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/tao-hieu-ung-tay-xoa-chu-truc-tuyen-850.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/brilhante', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/tao-hieu-ung-chu-phat-sang-online-834.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/papel', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu-cat-giay-nghe-thuat-online-824.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/diabo', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu-neon-canh-ac-quy-online-808.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/urso', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/tao-logo-mascot-gau-xam-phong-cach-den-trang-truc-tuyen-801.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/blur', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-viet-chu-len-cua-kinh-mua-tam-trang-dep-682.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/vietnam', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/tao-hieu-ung-chu-quoc-ky-viet-nam-truc-tuyen-884.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/crack', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/tao-hieu-ung-chu-vet-nut-3d-online-832.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/goldt', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-vang-moi-271.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/grafit4', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu/viet-chu-graffiti-4-178.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/biscoito', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu/tao-chu-banh-vung-103.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

router.get('/ephoto/pig', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/hieu-ung-chu-3d-cung-heo-cute-dang-yeu-397.html", [
    nome,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});

//radio 1 texto
router.get('/ephoto/seta', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    let radio = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6"
mintake 
  .ephoto("https://ephoto360.com/tao-hieu-ung-mui-ten-dinh-kem-chu-ky-nhieu-mau-846.html", [
    nome,
  ],radio)
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});
// 2 texto
router.get('/ephoto/grafite', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
    const nome2 = req.query.texto2;
     if (nome === undefined || nome2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & texto2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .ephoto2("https://ephoto360.com/viet-chu-graffiti-nghe-thuat-tren-tuong-day-mau-sac-792.html", [
    nome, nome2,
  ])
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './media/ephoto.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/ephoto.jpg'))
 })
  })
});
//―――――――――――――――――――――――――――――――――――――――――― ┏  Phootoxy  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\


router.get('/photooxy/flaming', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/shadow-sky', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/metallic', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/naruto', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/pubg', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	var Texto2 = req.query.texto2
	if (!Texto2 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto2"})  
	PauloOfc1.photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text1,Texto2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/under-grass', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/harry-potter', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/photooxy/flower-typography', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/art-effects/flower-typography-text-effect-164.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/picture-of-love', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/coffee-cup', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/butterfly', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/night-sky', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/carved-wood', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/illuminated-metallic', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/sweet-candy', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
	PauloOfc1.photooxy("https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

//***************@ TEXTPRO*************************\\
router.get('/textpro/lapis', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"}) 
	 const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
 const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
	PauloOfc1.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/naturalleaves', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/candycane', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/3dchristmas', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/merrychristmas', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/3ddeep', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/drug', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/plastic-bag-drug-text-effect-867.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/americanflag', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-american-flag-3d-text-effect-online-1051.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/scifi', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/3drainbow', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/waterpipe', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/skeleton', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/sketch', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/bluecircuit', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/spacetext', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-space-text-effects-online-free-1042.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/metallic', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/fiction', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/green-horror', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/transformer', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/berry', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/thunder', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/magma', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/stone', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/3d-neon-light', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/glitch', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/embossed', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/broken', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/paper', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/gradient', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/glossy', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/watercolor', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/multicolor', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/generator', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/wonderful', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/holiday', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/technology', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/winter', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/cloud', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/luxury', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/gradient', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/blackpink', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/sandsummer', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/sandwriting', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/sandengraved', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/summerysand', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/glue', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/dark', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/metal-dark-gold-text-effect-984.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});
router.get('/textpro/neon', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'}); 
	PauloOfc1.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/textpro/logobear', async (req, res, next) => {
const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'}); 
	PauloOfc1.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/textpro/3dboxtext', async (req, res, next) => {
	const apikey = req.query.apikey;
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
if (text1 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'}); 
	PauloOfc1.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/textpro/glitch2', async (req, res, next) => {
const apikey = req.query.apikey;
       if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `insira o parâmetro apikey`
      });      
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})   
	if (!Texto2 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto2"}) 
const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
	PauloOfc1.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,Texto2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/textpro/glitchtiktok', async (req, res, next) => {
const apikey = req.query.apikey;
       if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `insira o parâmetro apikey`
      });      
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})   
	if (!Texto2 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto2"}) 
const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
	PauloOfc1.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,Texto2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/textpro/galaxystyle', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/1917', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/minion', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/horrorgift', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/horror-gift-text-effect-866.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/holographic', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/metalpurple', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/metal-purple-dual-effect-973.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/deluxe', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/deluxe-silver-text-effect-970.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/glossyblue', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/deluxegold', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/deluxe-gold-text-effect-966.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/glossycarbon', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/glossy-carbon-text-effect-965.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/fabric', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/neontext', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/neon-text-effect-online-963.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/blood', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/halloweenfire', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/metaldark', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/metal-dark-gold-text-effect-online-939.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/darkgold', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/metal-dark-gold-text-effect-online-939.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/joker', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-logo-joker-online-934.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/wicker', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/wicker-text-effect-online-932.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/firework', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/skeleton', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/skeleton-text-effect-online-929.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/steeltext', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/steel-text-effect-online-921.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/goldfoil', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/gold-foil-balloon-text-effect-922.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/ultragloss', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/ultra-gloss-text-effect-online-920.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/denimtext', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/denim-text-effect-online-919.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/stargreen', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/decorate-green-text-effect-918.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/starpurple', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/decorate-purple-text-effect-917.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/peridot', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/peridot-stone-text-effect-916.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/rock', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/rock-text-effect-online-915.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/lava', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/lava-text-effect-online-914.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/purpleshiny', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/purple-shiny-glass-text-effect-906.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/captain', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/captain-america-text-effect-905.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/robotr2', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/robot-r2-d2-text-effect-903.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/rainbowequalizer', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/rainbow-equalizer-text-effect-902.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/toxic', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
     if (nome === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    nome,
  ])
  .then((data) => {
 return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

//2 texto
router.get('/textpro/ninjalogo', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
    const nome2 = req.query.texto2;
     if (nome === undefined || nome2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto texto2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/create-ninja-logo-online-935.html", [
    nome, nome2
  ])
  .then((data) => {
return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});

router.get('/textpro/pornhub', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.texto;
    const nome2 = req.query.texto2;
     if (nome === undefined || nome2 === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro texto texto2 & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
mintake 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    nome, nome2
  ])
  .then((data) => {
return download_Url(data, './media/textpro.jpg', function(){
limitAdd(apikey);
 return res.sendFile(path.resolve('./media/textpro.jpg'))
 })
  })
});
router.get('/textpro/video-game-classic', async (req, res, next) => {
  const apikey = req.query.apikey;
  const nome = req.query.texto;
  const nome2 = req.query.texto2;
   if (nome === undefined || nome2 === undefined || apikey === undefined) return res.status(404).send({
      status: 404,
      message: `insira o parâmetro texto texto2 & apikey`
  });
  const check = await cekKey(apikey);
  if (!check) return res.status(403).send({
      status: 403,
      mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
  });
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'}); 
	PauloOfc1.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [nome,nome2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/marvel-studios', async (req, res, next) => {
  const apikey = req.query.apikey;
  const nome = req.query.texto;
  const nome2 = req.query.texto2;
   if (nome === undefined || nome2 === undefined || apikey === undefined) return res.status(404).send({
      status: 404,
      message: `insira o parâmetro texto texto2 & apikey`
  });
  const check = await cekKey(apikey);
  if (!check) return res.status(403).send({
      status: 403,
      mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
  });
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'}); 
	PauloOfc1.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [nome,nome])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

//***************CARD CANVAS*************************\\

    router.get('/card/rank', async (req, res) => {
     apikey = req.query.apikey;
     username = req.query.nome,
     perfil = req.query.perfil,
     fundo = req.query.fundo,           
     xp = req.query.xp,           
     fullxp = req.query.fullxp,           
     level = req.query.level,
     rank = req.query.rank,
     discrim = req.query.contagem
     cor = req.query.cor
     if (apikey === undefined || username === undefined || xp === undefined || perfil === undefined || discrim === undefined || fundo === undefined || fullxp === undefined || level === undefined || rank === undefined || cor === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey & nome & fundo & xp & fullxp & level & rank & contagem & cor`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);        
     ran = getRandom('.jpg')
    rano = getRandom('.jpg')
    buff = await getBuffer(perfil)
    fs.writeFileSync(ran, buff)
    anu = await TelegraPh(ran)
     let img = await PauloOfcrank.rank({ 
            username, 
            discrim, 
            level: level, 
            rank: rank, 
            neededXP: xp, 
            currentXP: fullxp, 
            avatarURL: util.format(anu), 
            color: cor, 
            background: `${fundo}`
        });
  await fs.writeFileSync(PauloOfc +'/tmp/rank.png', img)
  res.sendFile(PauloOfc+'/tmp/rank.png')
   });
   
   
   router.get('/card/menu', async (req, res) => {
    apikey = req.query.apikey;
    usuario = req.query.nome,
    numero = req.query.numero,
    perfil = req.query.perfil,
    fundo = req.query.fundo,
    titulo = req.query.titulo,
    cor1 = req.query.cor1,
    cor2 = req.query.cor2
     if (apikey === undefined || usuario === undefined || numero === undefined || titulo === undefined || fundo === undefined || perfil === undefined || cor1 === undefined || cor2 === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey & nome & numero & titulo & membros & fundo & perfil & cor1 & cor2`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    let img = await PauloOfcrank.welcome({ 
            username: usuario, 
            discrim: numero,
            avatarURL: perfil,
            fundo: fundo,
            titulo: titulo,
            cor1: `#${cor1}`,
            cor2: `#${cor2}`
        });
   await fs.writeFileSync(PauloOfc +'/tmp/menu.png', img)
  res.sendFile(PauloOfc+'/tmp/menu.png')
   });
   
   
   router.get('/canvas/welcome', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nome = req.query.nome,
            numero = req.query.numero,
            perfil = req.query.perfil,
            fundo = req.query.fundo,
            titulo = req.query.titulo,
            cor1 = req.query.cor1,
            cor2 = req.query.cor2
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nome) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nome"})
    if (!numero) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô numero"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})                
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})    
    if (!titulo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô titulo"})  
    if (!cor1) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô cor1"})  
    if (!cor2) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô cor2"})      
     let img = await PauloOfcrank.welcome({ 
            username: nome, 
            discrim: numero,
            avatarURL: perfil,
            fundo: fundo,
            titulo: titulo,
            cor1: `#${cor1}`,
            cor2: `#${cor2}`
        });
        await fs.writeFileSync(__path +'/tmp/welcome.png', img)
  res.sendFile(__path+'/tmp/welcome.png')
         .catch(e => {
         	res.sendFile(error)
})
})

    router.get('/card/welcome', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.nome;    
    const nomegp = req.query.nomegp;    
    const fotogp = req.query.fotogp;    
    const perfil = req.query.perfil;            
    const membros = req.query.membros;
    const fundo = req.query.fundo;        
     if (apikey === undefined || nome === undefined || nomegp === undefined || fotogp === undefined || membros === undefined || fundo === undefined || perfil === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey & nome & nomegp & fotogp & membros & fundo & perfil`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
var image = await new knights.Welcome()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(PauloOfc +'/tmp/bemvindo.png', data)
  res.sendFile(PauloOfc +'/tmp/bemvindo.png')
   });
   
   router.get('/card/welcomev2', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.nome;    
    const nomegp = req.query.nomegp;    
    const perfil = req.query.perfil;            
    const membros = req.query.membros;
    const titulo = req.query.titulo;        
    const numero = req.query.numero;
    const cor = req.query.cor;
    const lcor = req.query.lcor;
    const tcor = req.query.tcor;
    const fundo = req.query.fundo;
     if (apikey === undefined || nome === undefined || nomegp === undefined || titulo === undefined || membros === undefined || fundo === undefined || perfil === undefined || numero === undefined || cor === undefined || lcor === undefined || tcor === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey & nome & nomegp & titulo & membros & fundo & perfil & numero & cor & lcor`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
var image = await new Cannvas.Welcome()
   .setTextTitle(`${titulo}`)
  .setUsername(`${nome}`)
  .setDiscriminator(`${numero}`)
  .setMemberCount(`${membros}`)
  .setGuildName(`${nomegp}`)
  .setAvatar(`${perfil}`)
  .setColor("border", `#${cor}`)
  .setColor("username-box", `#${cor}`)
  .setColor("discriminator-box", `#${cor}`)
  .setColor("message-box", `#${cor}`)
  .setColor("title", `#${tcor}`)
  .setColor("avatar", `#${cor}`)
  .setColor("Username", `#${lcor}`)
  .setColor("Message", `#${lcor}`)
  .setColor("Discriminator", `#${lcor}`)
  .setColor("Hashtag", `#${lcor}`)    
  .setBackground(`${fundo}`)
  .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(PauloOfc +'/tmp/bemvindov2.png', data)
  res.sendFile(PauloOfc+'/tmp/bemvindov2.png')
   });
   
    router.get('/card/goodbye', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.nome;    
    const nomegp = req.query.nomegp;    
    const fotogp = req.query.fotogp;    
    const perfil = req.query.perfil;            
    const membros = req.query.membros;
    const fundo = req.query.fundo;        
     if (apikey === undefined || nome === undefined || nomegp === undefined || fotogp === undefined || membros === undefined || fundo === undefined || perfil === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey & nome & nomegp & fotogp & membros & fundo & perfil`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
var image = await new knights.Goodbye()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(PauloOfc +'/tmp/adeus.png', data)
  res.sendFile(PauloOfc +'/tmp/adeus.png')
   });
   
   router.get('/card/goodbyev2', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.nome;    
    const nomegp = req.query.nomegp;    
    const perfil = req.query.perfil;            
    const membros = req.query.membros;
    const titulo = req.query.titulo;        
    const numero = req.query.numero;
    const cor = req.query.cor;
    const lcor = req.query.lcor;
    const tcor = req.query.tcor;
    const fundo = req.query.fundo;
     if (apikey === undefined || nome === undefined || nomegp === undefined || titulo === undefined || membros === undefined || fundo === undefined || perfil === undefined || numero === undefined || cor === undefined || lcor === undefined || tcor === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey & nome & nomegp & titulo & membros & fundo & perfil & numero & cor & lcor`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
var image = await new Cannvas.Goodbye()
 .setTextTitle(`${titulo}`)
   .setUsername(`${nome}`)
  .setDiscriminator(`${numero}`)
  .setMemberCount(`${membros}`)
  .setGuildName(`${nomegp}`)
  .setAvatar(`${perfil}`)
  .setColor("border", `#${cor}`)
  .setColor("username-box", `#${cor}`)
  .setColor("discriminator-box", `#${cor}`)
  .setColor("message-box", `#${cor}`)
  .setColor("title", `#${tcor}`)
  .setColor("avatar", `#${cor}`)
  .setColor("Username", `#${lcor}`)
  .setColor("Message", `#${lcor}`)
  .setColor("Discriminator", `#${lcor}`)
  .setColor("Hashtag", `#${lcor}`)    
  .setBackground(`${fundo}`)
  .toAttachment();

  data = image.toBuffer();
  await fs.writeFileSync(PauloOfc +'/tmp/adeusv2.png', data)
  res.sendFile(PauloOfc+'/tmp/adeusv2.png')
   });   
   
   router.get('/card/promote', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.nome;    
    const nomegp = req.query.nomegp;    
    const fotogp = req.query.fotogp;    
    const perfil = req.query.perfil;            
    const membros = req.query.membros;
    const fundo = req.query.fundo;        
     if (apikey === undefined || nome === undefined || nomegp === undefined || fotogp === undefined || membros === undefined || fundo === undefined || perfil === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey & nome & nomegp & fotogp & membros & fundo & perfil`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
var image = await new knights.Promote()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(PauloOfc +'/tmp/promover.png', data)
  res.sendFile(PauloOfc +'/tmp/promover.png')
   });
   
   router.get('/card/demote', async (req, res) => {
    const apikey = req.query.apikey;
    const nome = req.query.nome;    
    const nomegp = req.query.nomegp;    
    const fotogp = req.query.fotogp;    
    const perfil = req.query.perfil;            
    const membros = req.query.membros;
    const fundo = req.query.fundo;        
     if (apikey === undefined || nome === undefined || nomegp === undefined || fotogp === undefined || membros === undefined || fundo === undefined || perfil === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey & nome & nomegp & fotogp & membros & fundo & perfil`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
var image = await new knights.Demote()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(PauloOfc +'/tmp/despromover.png', data)
  res.sendFile(PauloOfc +'/tmp/despromover.png')
   });
   
//***************ANIME*************************\\   
    router.get('/anime/metadinha', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/metadinha.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.json(random)
   });   

router.get('/anime/metadinha2', async (req, res) => {
  const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
	let resultt = await fetchJson('https://raw.githubusercontent.com/AlipBot/data-rest-api/main/kopel.json')
	let random = resultt[Math.floor(Math.random() * resultt.length)]
	res.json({
	status: true,
	creator: `${creator}`,
		resultado: {
			mulher: random.male,
			homem: random.female
		}
	})

})


router.get('/imagens_aleatorias/dadu', async (req, res) => {
const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
	let dadu = await fetchJson('https://raw.githubusercontent.com/AlipBot/data-rest-api/main/dadu.json')
	let random = dadu[Math.floor(Math.random() * dadu.length)]
	var result = await getBuffer(random.result)
	res.set({'Content-Type': 'image/webp'})
	res.send(result)
})

//***************HENTAI*************************\\

    router.get('/hentai/nsfwloli', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/nsfwlolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   
   router.get('/hentai/ahegao', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/ahegao.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   
    router.get('/hentai/ass', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/ass.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   router.get('/hentai/bdsm', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/bdsm.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });   
   
   router.get('/hentai/blowjob', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/blowjob.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });

   router.get('/hentai/cuckold', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/cuckold.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });            
   
   router.get('/hentai/cum', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/cum.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   
    router.get('/hentai/ero', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/ero.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   router.get('/hentai/femdom', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/femdom.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });   
   
   router.get('/hentai/gangbang', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/gangbang.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });

   router.get('/hentai/foot', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/foot.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });               
   
   router.get('/hentai/glasses', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/glasses.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   
    router.get('/hentai/hentai', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/hentai.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   router.get('/hentai/hnt_gifs', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/hnt_gifs.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('gif')
   res.send(await getBuffer(random))
   });   
   
   router.get('/hentai/jahy', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/jahy.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });

   router.get('/hentai/masturbation', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/masturbation.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });               
   
   router.get('/hentai/nsfwNeko', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/nsfwNeko.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   
    router.get('/hentai/orgy', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/orgy.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });
   router.get('/hentai/pussy', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/pussy.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });   
   
   router.get('/hentai/sfwNeko', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/sfwNeko.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });

   router.get('/hentai/tentacles', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/tentacles.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });               
   
  router.get('/hentai/thighs', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/thighs.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });          
   
  router.get('/hentai/yuri', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/yuri.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });          
   
  router.get('/hentai/zettaiRyouiki', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   json = JSON.parse(fs.readFileSync('lib/anime/zettaiRyouiki.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   });          
   
   //***************JOGOS*************************\\   
    router.get('/jogos/anagrama', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   random = palavrasANA[Math.floor(Math.random() * palavrasANA.length)]
   res.send(random)
   });  
       router.get('/jogos/quizanime', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   random = quizanime[Math.floor(Math.random() * quizanime.length)]
   res.send(random)
   });
   router.get('/jogos/quizanimais', async (req, res) => {
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
   random = quizanimais[Math.floor(Math.random() * quizanimais.length)]
   res.send(random)
   });   
  //―――――――――――――――――――――――――――――――――――――――――― ┏  Emoji  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

router.get('/emoji/apple', async (req, res, next) => {
	var emoji1 = req.query.emoji
   const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})

	emoji.get(emoji1)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[0].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.sendFile(error)
	})
})

router.get('/emoji/google', async (req, res, next) => {
	var emoji1 = req.query.emoji
   const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})

	emoji.get(emoji1)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[1].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.sendFile(error)
	})
})

router.get('/emoji/samsung', async (req, res, next) => {
	var emoji1 = req.query.emoji
   const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})

	emoji.get(emoji1)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[2].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.sendFile(error)
	})
})


router.get('/emoji/microsoft', async (req, res, next) => {
	var emoji1 = req.query.emoji
   const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})

	emoji.get(emoji1)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[3].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.sendFile(error)
	})
})

router.get('/emoji/whatsapp', async (req, res, next) => {
	var emoji1 = req.query.emoji
   const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})

	emoji.get(emoji1)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[4].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.sendFile(error)
	})
})

router.get('/emoji/twitter', async (req, res, next) => {
var emoji1 = req.query.emoji
   const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})

	emoji.get(emoji1)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[5].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.sendFile(error)
	})
})

router.get('/emoji/facebook', async (req, res, next) => {
var emoji1 = req.query.emoji
   const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})

	emoji.get(emoji1)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[6].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.sendFile(error)
	})
})

router.get('/emoji/skype', async (req, res, next) => {
	var emoji1 = req.query.emoji
   const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
    
	if (!emoji1 ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  emoji"})

	emoji.get(emoji1)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[7].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.sendFile(error)
	})
}) 
//―――――――――――――――――――――――――――――――――――――――――― ┏  ferramentas  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/info/translate', async (req, res, next) => {
	var text = req.query.texto
    var ling = req.query.ling
    const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
	if (!text ) return res.json({ status : false, Criador : `${creator}`, message : "[!] digite o parâmetro de texto"})  
	if (!ling ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  ling.  Você pode ver a lista de idiomas em https://cloud.google.com/translate/docs/languages"})  

	const defaultLang = 'en'
	const tld = 'pt'
	

	let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: ling,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        
    } finally {
		res.json({
			status: true,
			Criador: `${creator}`,
			result: result[0]
		})
        
    }
})
router.get('/tools/ssweb', async (req, res, next) => {
	var link = req.query.link
 const apikey = req.query.apikey;
     if (link === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro link & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
	var islink = isUrl(link)
	if (!islink ) return res.json({ status : false, criador : `${creator}`, message : "[!] entrada de parâmetro link apenas"})  

	PauloOfc1.ssweb(link).then((data) =>{ 
		if (!data ) return res.json(loghandler.notfound)
		res.set({'Content-Type': 'image/png'})
		res.send(data)
	}).catch((err) =>{
	 res.json(loghandler.notfound)
	
	})

})
//―――――――――――――――――――――――――――――――――――――――――― ┏  Link Short  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

router.get('/linkshort/tinyurl', async (req, res, next) => {
	var link = req.query.link
 const apikey = req.query.apikey;
     if (link === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro link & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);

    var islink = isUrl(link)
	if (!islink ) return res.json({ status : false, Criador : `${creator}`, message : "[!] insira uma url valida"})  


TinyURL.shorten(link, function(link, err) {
  if (err) return res.json(loghandler.error)
	res.json({
		status: true,
		Criador: `${creator}`,
		result: link
		})
});
	
})
	
router.get('/linkshort/cuttly', async (req, res, next) => {
var link = req.query.link
 const apikey = req.query.apikey;
     if (link === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro link & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
    var islink = isUrl(link)
	if (!islink ) return res.json({ status : false, Criador : `${creator}`, message : "[!] insira uma url valida"})  

	let randomapicuttly = apicuttly[Math.floor(Math.random() * apicuttly.length)]
	var hasil = await fetchJson(`https://cutt.ly/api/api.php?key=${randomapicuttly}&short=${link}`)
  if (!hasil.url.shortLink ) return res.json(loghandler.error)

	res.json({
		status: true,
		Criador: `${creator}`,
		result: hasil.url.shortLink
		})
});


router.get('/linkshort/bitly', async (req, res, next) => {
var link = req.query.link
 const apikey = req.query.apikey;
     if (link === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro link & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);

	var islink = isUrl(link)
	if (!islink ) return res.json({ status : false, Criador : `${creator}`, message : "[!] insira uma url valida"})  

	let randomapibitly = apibitly[Math.floor(Math.random() * apibitly.length)]
	const bitly = new BitlyClient(randomapibitly)
	bitly
	.shorten(link)
	.then(function(result) {
		res.json({
			status: true,
			Criador: `${creator}`,
			result : result.link
			})
	 
	})
	.catch(function(error) {
	 res.json(loghandler.error)
	});
})

//===============MENU DE TRAVAS===========//
router.get('/menutrava/desbanirnumero', async (req, res, next) => {
  var texto = req.query.texto
	var motivo = req.query.motivo
  const apikey = req.query.apikey;
     if (apikey === undefined) return res.status(404).send({
    status: 404,
    message: `insira o parâmetro apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
    status: 403,
    mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
    limitAdd(apikey);
	if (!texto ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  texto"})
	if (!motivo ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  motivo"})  
  emailsend(texto,motivo)
		res.json({
			status: true,
	        criador: `${creator}`,
          mensagem: "Já foi enviado"
		})
	})
  router.get('/aleatorio/pensador', async (req, res, next) => {
    var texto = req.query.texto
   if (!texto) return res.status(403).send({
       status: 403,
       mensagem: ` não encontrada, por favor registre-se primeiro!`
   });
   const apikey = req.query.apikey;
   if (apikey === undefined) return res.status(404).send({
      status: 404,
      message: `insira o parâmetro apikey`
  });
  const check = await cekKey(apikey);
  if (!check) return res.status(403).send({
      status: 403,
      mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
  });
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});  
   PauloOfc1.pensadorSearch(texto).then(data => {
      if (!data ) return res.json(loghandler.notfound)
    
      res.json({
        status: true,
            criador: `${creator}`,
            feito_por: "vitor",
        resultado: data
      })
      }).catch(e => {
     res.json(loghandler.error)
  })
  })
 router.get('/aleatorio/chatgpt', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
   status: 404,
   message: `insira o parâmetro apikey`
   });
   const check = await cekKey(apikey);
   if (!check) return res.status(403).send({
   status: 403,
   mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
   });
   let limit = await isLimit(apikey);
   if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
   limitAdd(apikey);
   const { Configuration, OpenAIApi } = require("openai");
   require('dotenv').config()
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    async function runCompletion () {
      var texto = req.query.texto
if (!texto ) return res.json({ status : false, Criador : `${creator}`, message : "[!] parâmetros de entrada  texto"})
        const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${texto}`,
      max_tokens: 2048, // Tamanho da resposta gerada pela openai.
       temperature: 0.9, // Criatividade da resposta gerada pela openai.
        echo: false
        });
//console.log(completion.data.choices[0].text);
res.json({
status: true,
criador: `${creator}`,
resultado:{ 
              resposta: completion.data.choices[0].text
        }
})
}
runCompletion();
})
//
//―――――――――――――――――――――――――――――――――――――――――― ┏  ferramentas JS ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/towebp', towebp);

router.get('/togif', togif);

router.get('/tomp3', tomp3);

//―――――――――――――――――――――――――――――――――――――――――― ┏  ferramentas JS FIM ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

//―――――――――――――――――――――――――――――――――――――――――― ┏  PORNO JS ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/xvp', xvideossr);

router.get('/xnxxsearch', xnxxsearchr);

router.get('/assistiht', assistithtr);

router.get('/assistihtdl', assistithtdlr);

router.get('/pornogratis', pornogratisr);

router.get('/xvideos', xvideosr);

router.get('/pornhub', pornhubr);

router.get('/hentaistube', hentaistubes);

router.get('/hentaigif', hentaigifr);

router.get('/httubedl', htdlr);
//―――――――――――――――――――――――――――――――――――――――――― ┏  PORNO JS FIM┓ ―――――――――――――――――――――――――――――――――――――――――― \\

//―――――――――――――――――――――――――――――――――――――――――― ┏  ANIME JS ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/random/animerandom', wallmobr);

router.get('/anime', animer);

router.get('/manga', mangar);

//―――――――――――――――――――――――――――――――――――――――――― ┏  ANIME JS FIM ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

//―――――――――――――――――――――――――――――――――――――――――― ┏  PESQUISA JS ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/twitterdl', twitterdlr);

router.get('/mediafire', mDo);

router.get('/soundl', soundll);

router.get('/wamod', WAModss);

router.get('/consulta/ddd', ddd);

router.get('/consulta/cep', cep);


router.get('/pinterest', pinterestr);

router.get('/consulta/ip', ip);

router.get('/consulta/covidbr', covid);

router.get('/gpwa', gpwhatsappr);

router.get('/gpsearch', gpsrcr);

router.get('/dafontsearch', dafontSearchr);
//―――――――――――――――――――――――――――――――――――――――――― ┏  PESQUISA JS FIM ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

//―――――――――――――――――――――――――――――――――――――――――― ┏  DOWNLOAD JS  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/dafontdown', dafontDownr);
//―――――――――――――――――――――――――――――――――――――――――― ┏  pesquisa ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

router.get('/pesquisa/correios', async (req, res, next) => {
	var codigo = req.query.codigo
	if (!codigo ) return res.json({ status : false, creator : `${creator}`, message : "[!] entrada de parâmetro codigo"})
  const apikey = req.query.apikey;
  if (apikey === undefined) return res.status(404).send({
 status: 404,
 message: `insira o parâmetro apikey`
 });
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
 status: 403,
 mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
 });
 let limit = await isLimit(apikey);
 if (limit) return res.status(403).send({status: 403, cridor: `Paulo -_- 82 9601-1095`, message: 'seu limit acabou volte amanhã ou compre o premium...'});
 limitAdd(apikey); 
 let codRastreio = [codigo];
 rastrearEncomendas(codRastreio).then(response => {
    if (!response) return res.json(loghandler.noturl)
    corno = (response[0]);
	res.json({
	    status: true,
	    creator: `${creator}`,
      resultado: corno
	})
}).catch(e => {
	res.json(loghandler.noturl)
})
})

router.get('/gpt', async(req, res, next) => {
query = req.query.query
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, cridor: `Paulo -_- 82 9601-1095`, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
fetch(encodeURI(`https://vihangayt.me/tools/chatgpt5?q=${query}`))
.then(response => response.json())
.then(hasil => {
var resultado = hasil.data;
res.json({
status: true,
cridor: `Paulo -_- 82 9601-1095`,
resultado
})
})
.catch(function(error) {
res.json(loghandler.error)
});
})

router.get('/audiomeme', async(req, res, next) => {
query = req.query.query
query = req.query.query
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, cridor: `Paulo -_- 82 9601-1095`, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
audioMeme.get(query).then(data => {
res.json({resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

router.get('/videomeme', async(req, res, next) => {
query = req.query.query
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, cridor: `Paulo -_- 82 9601-1095`, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
iFunny().then(dados => {
res.json(dados)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

router.get('/teste/play', async (req, res, next) =>  {
query = req.query.query
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, cridor: `Paulo -_- 82 9601-1095`, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
try {
zan = await yts(query)
res.json({
status: true,
criador: `@PAULO - 55 82 9601-1095`,
Titulo: zan.all[0].title,
Thumb: zan.all[0].image,
Descricao: zan.all[0].description,
Duracao: zan.all[0].timestamp,
Views: zan.all[0].views, 
Autor : zan.all[0].author.name,
Canal : zan.all[0].author.name,
Link: zan.all[0].url,
})
} catch (err) {
console.log(err)
};
})

router.get('/facebook2', async(req, res, next) => {
url = req.query.url
if (!url) return res.json({ status : false, criador : `@PAULO - 8296011095`, mensagem : "Coloque o parametro: url"})
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
FacebookMp4(url).then(resultado => {
res.json({
status: true,
mensagem: 'JAPA APIS - MELHOR SITE DE APIS',
criador: `@PAULO - 8296011095`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

router.get('/youtube/search', async(req,res) => {
query = req.query.query
if(!query)return res.json({status:false,msg:'Cade o parametro query??'})
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
ytSearch(query)
.then(e => {
res.json({
status:true,
criador:'@PAULO - 8296011095',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/plaq',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${textoo}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
res.type('jpg')
res.send(bala)
})

router.get('/plaq1',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${textoo}`)
res.type('jpg')
res.send(bala)
})

router.get('/plaq2',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${textoo}&text.0.outline.blur=63`)
res.type('jpg')
res.send(bala)
})

router.get('/plaq3',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${textoo}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
res.type('jpg')
res.send(bala)
})

router.get('/plaq4',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${textoo}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
res.type('jpg')
res.send(bala)
})

router.get('/plaq5',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${textoo}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
res.type('jpg')
res.send(bala)
})

router.get('/plaq6',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://blackzin.sirv.com/Plaq18/20220212_213215.jpg?text.0.text=${textoo}&text.0.position.gravity=northwest&text.0.position.x=43%25&text.0.position.y=18%25&text.0.size=15&text.0.color=000000&text.0.opacity=57&text.0.font.family=Vollkorn&text.0.font.weight=800&text.0.font.style=italic&text.0.background.color=000000&text.0.outline.blur=32&text.0.outline.opacity=46&text.1.text=Dark Domina bb%3F&text.1.position.gravity=center&text.1.position.x=10%25&text.1.position.y=30%25&text.1.size=20&text.1.color=000000&text.1.opacity=59&text.1.font.family=Playball&text.1.font.weight=700&text.1.outline.opacity=0" width="718" height="1009" alt="" />`)
res.type('jpg')
res.send(bala)
})

router.get('/plaq7',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${textoo}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light20Two&text.0.outline.blur=15`)
res.type('jpg')
res.send(bala)
})

router.get('/plaq8',async (req,res,next) => {
var textoo = req.query.texto
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
bala = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${textoo}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`)
res.type('jpg')
res.send(bala)
})
/// FIM IAS///

///TESTE
router.get('/tiktokt', async(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cadê o parâmetro: URL'
})
tiktok2(url).then(result => {
res.json({
status:true,
criador:'@PAULO - 8296011095',
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/ytaudio2', (req, res, next) => {
url = req.query.url
if (!url) return res.json({ status : false, criador : `@PAULO - 8296011095`, mensagem : "Coloque o parametro: url"})
get.all(url).then(async(e) => {
res.type('mp4')
res.send(await getBuffer(e[0].dl_link))
}).catch(e => {
res.json({erro: "Erro: "+e})
})
})

router.get('/ytvideo2', (req, res, next) => {
url = req.query.url
if (!url) return res.json({ status : false, criador : `@PAULO - 8296011095`, mensagem : "Coloque o parametro: url"})
get.all(url, "mp4").then(async(e) => {
res.type('mp4')
res.send(await getBuffer(e[0].dl_link))
}).catch(e => {
res.json({erro: "Erro: "+e})
})
})


router.get('/signo', async (req, res, next) => {
signo = req.query.signo
if(!signo) return res.json({message: "Faltando o parametro signo"})
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
DFN_SG = signo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!JSON.stringify(["aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]).includes(DFN_SG)) return res.json({message: "Este signo não existe, os signos existentes são: Áries, Touro, Gêmeos, Câncer, Leão, Virgem, Libra, Escorpião, Sagitário, Capricórnio, Aquário e Peixes."})
var { horoshoje } = require("../lib/horoscopo.js");
limitAdd(apikey);
await horoshoje(DFN_SG).then(signo => {
res.json({status: 200, cridor: `Paulo -_- 82 9601-1095`, resultado: signo})
})
})

router.get('/esportes/brasileirao', async(req, res, next) => {
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
BrasileirãoFutebol().then((data) => {
res.json({status: 200, cridor: `Paulo -_- 82 9601-1095`, resultado: data})
}).catch(e => {
res.json({
mensagem: `Erro no Servidor Interno entre em contato com o "Paulo" para resolver o problema`
})
})
})

router.get('/esporte_noticias', async (req, res) => {
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
esporte = req.query.esporte
if(!JSON.stringify(['futebol', 'basquete', 'volei', 'tenis', 'atletismo', 'natacao', 'ciclismo', 'boxe', 'beisebol', 'judo', 'ginastica-artistica', 'futebol-americano', 'futsal', 'golfe', 'surfe', 'skate', 'formula-1']).includes(esporte)) return res.json({
status: 400, message: "De acordo com o esporte selecionado, não é possível encontrar resultados exatos sobre. Por favor, verifique o tipos disponíveis abaixo para obter resultados exatos sobre o esporte!",
esportes: ['futebol', 'basquete', 'volei', 'tenis', 'atletismo', 'natacao', 'ciclismo', 'boxe', 'beisebol', 'judo', 'ginastica-artistica', 'futebol-americano', 'futsal', 'golfe', 'surfe', 'skate', 'formula-1']
})
getNoticiasEsporte(esporte)
.then(esporteData => {
res.json({
status: 200,
criador: `Mc Xereca`,
esporte: esporte,
resultado: esporteData
 }) 
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/e-sports_noticias', async (req, res) => {
query = req.query.query
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
if(!JSON.stringify(["esports", "cod", "csgo", "fifa", "fortnite", "freefire", "gamexp", "pes", "pokemon", "rainbow-6", "valorant", "tcg"]).includes(query)) return res.json({
status: 400, 
message: "De acordo com o jogo selecionado, não é possível encontrar resultados exatos sobre. Por favor, verifique o tipos disponíveis abaixo para obter resultados exatos sobre o jogo!",
jogos: ["esports", "cod", "csgo", "fifa", "fortnite", "freefire", "gamexp", "pes", "pokemon", "rainbow-6", "valorant", "tcg"]
})
getNoticiasEsporte(query)
.then(esporteData => {
res.json({
status: 200,
cridor: `Paulo -_- 82 9601-1095`,
jogo_noticia: query,
resultado: esporteData
 }) 
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

function muptime(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return 'Horas: ' + pad(hours) + ' : ' + 'Minutos: ' + pad(minutes) + ' : ' + 'Segundos: ' +  pad(seconds)
}

router.get('/velocidade', async (req, res, next) => {
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
var hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
var data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
var old = performance.now();
var neww = performance.now();
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`;
var json = await (await fetch('https://api.ipify.org/?format=json')).json();
status = {
status: 'ONLINE',
uso_ram: ram,
local: 'japa-hosting.cloud',
ip: json.ip,
hora: hora,
data: data,
speed: ping(),
online: muptime(process.uptime()),
info:{       
criador: 'PAULO',
whatsapp: 'https://wa.me/8296011095'
}
}
res.json(status)
});

router.get('/igstalker', async(req, res, next) => {
user = req.query.user
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
const ig = new InstaStalker({
query: user,
reload: true,
saveFile: './lib/Instagram/',
headers: {
'rank_token': 0.0876234535087057,
Cookie: `mid=ZTOzRwABAAG3gf2U_KwhXHvjE9bH; ig_did=37CB04E6-B8E7-4AE4-BF23-5AFC78ED2A7B; ig_nrcb=1; datr=7LIzZTtlAcvu5BBHxWhMWeAW; dpr=2.2069265842437744; shbid="6675#05461313452882#0541730249178:01f7c508fa345f91d72d79418b5297d5001398f17c682ed6eb52b81201a0d8d4adab6107"; shbts="1698713178#05461313452882#0541730249178:01f750207b49406605d6c7823f520c6a6a23150a4ab7d627a37a80cfe03c94ac0f4dfa2f"; ds_user_id=59402648398; sessionid=59402648398%3AewCH2FCvDa7lJv%3A12%3AAYcmEE92bo6ZuW4dmSjsufwkvrf_7kP2EOCw0qW9Pg; csrftoken=M9lYtHZtJoqgKX30WgN93hHxsCFy7yq6; rur="NAO#05459402648398#0541730254469:01f78c92dc522e8ba00d4d2a435e79b13a45069e457f61525fffb3112ebbd14dd90ee95a"`,
'X-Csrftoken': 'M9lYtHZtJoqgKX30WgN93hHxsCFy7yq6',
'X-Ig-App-Id': 1217981644879628,
'X-Ig-Www-Claim': 'hmac.AR1Z6-2XER1n5rgoaPeoOk7B498Y8VZYN9_UA2Jg5j1ynMVC'
}
})
ig.instaUser().then((returnStalker) => {
 res.json({status: 200, criador: 'Paulo', creditos: "@Ethern | bit.ly/GroupEthern_", resultado: returnStalker})
}).catch(error => {
 res.json({status: 404, message: error})
})
})

router.get('/gpt-v2', async (req, res) => {
const q = req.query.q;
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
try {
const response = await fetchJson('https://aemt.me/openai?text=' + q);
const formattedResponse = { status: 'Online', criador: 'Paulo', resultado: { resposta: response.result }};
res.json(formattedResponse);
} catch (e) {
console.error(e);
res.json({ status: 'Offline' })}
});

router.get('/xnxx-v2', async (req, res, next) => {
var url = req.query.url;
 fetch(encodeURI(`https://api.lolhuman.xyz/api/xnxx?apikey=${chaveapi}&url=${url}`))
.then(response => response.json())
.then(dataf => {
var titulo = dataf.result.title;
var duracao = dataf.result.duration;
var visitas = dataf.result.view;
var like = dataf.result.like;
var dislike = dataf.result.dislike;
var descricao = dataf.result.description;
var imagem = dataf.result.thumbnail;
var link = dataf.result.link;
res.json({
criador: 'Paulo',
status: 'ativo',
titulo,
duracao,
visitas,
like,
dislike,
descricao,
imagem,
link
})
})
})

router.get('/xnxxsearch-v2', async (req, res, next) => {
var quero = req.query.quero;
fetch(encodeURI(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${chaveapi}&query=${quero}`))
.then(response => response.json())
.then(dataf => {
var resultado = dataf.result;
res.json({
criador: 'Paulo',
resultado
})
})
})

router.get('/outros/chatgpt', async (req, res, next) => {
var query = req.query.q
if (!query) return res.json(mess.notquery)
let data = await ChatGpt(query)
res.json({
status: true,
criador: 'Paulo',
resultado: data
})
})

router.get('/consultas', async (req, res) => {
var type = req.query.type
if(!type)return res.json({ status:false, resultado:'Cade o parametro type?'})
query = req.query.query
if(!query)return res.json({ status:false, resultado:'Cade o parametro query?'})
try {
data = await japa(`http://japa.top:8072/puxar/db3?type=${type}&data=${query}&apikey=paulo`)
data = data.resultado
res.json({
status: true,
mensagem: 'JAPA APIS',
criador: `PAULO OFC _-_ 8296011095`,
resultado: `${data.resultado}`,
})
} catch (error) {
return res.status(404).json({ resultado: "Banco De Dados Está Sendo Atualizado Agora - Consulte Novamente em 30 segundos", status: 500 });
}
})

router.get('/bard', async (req, res, next) => {
query = req.query.query
const apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({
status: 404,
message: `insira o parâmetro apikey`
});
const check = await cekKey(apikey);
if (!check) return res.status(403).send({
status: 403,
mensagem: `apikey: ${apikey} não encontrada, por favor registre-se primeiro!`
});
let limit = await isLimit(apikey);
if (limit) return res.status(403).send({status: 403, cridor: `Paulo -_- 82 9601-1095`, message: 'seu limit acabou volte amanhã ou compre o premium...'});
limitAdd(apikey);
const response = await init("dQhaQL7NxrrJSrdkwek9E6mlWFEip5KM9uVZ4EaoukIqxAa8GyIZOXdc8rJadxlLfdc7ig.");
const resultado = await askAI(query);
res.json({cridor: `Paulo -_- 82 9601-1095`, status: 'Online', resultado});
})

router.get('/simih', async (req, res) => {
const q = req.query.q;
try {
const response = await axios.post('https://api.simsimi.vn/v2/simtalk', new URLSearchParams({ 'text': q, 'lc': 'pt' }));
const { message, status } = response.data;
res.json({ status: 'Online', criador: 'PauloOfc', resultado: { mensagem: message }});
} catch (e) {
console.error(e);
res.json({ status: 'Offline' })}
});
///---------fim----------///
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Atualizado => ${__filename}`)
delete require.cache[file]
require(file)
})

module.exports = router;
