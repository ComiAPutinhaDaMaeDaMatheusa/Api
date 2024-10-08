"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ytv = void 0;
const request_1 = __importDefault(require("request"));
const __1 = require("..");
function ytv(url, needSearch, headers) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            if (needSearch) {
                const search = yield new __1.Youtube().ytsearch(url);
                url = search[0].url;
            }
            (0, request_1.default)({
                url: 'https://yt1s.io/api/ajaxSearch',
                method: 'POST',
                headers: headers.ytis,
                form: { 'q': url, 'vt': 'mp4' }
            }, function (error, response, body) {
                const result = JSON.parse(body);
                var thumb = `https://i.ytimg.com/vi/${result.vid}/0.jpg`;
                let quality = [];
                Object.keys(result.links.mp4).map((i) => {
                    quality.push(result.links.mp4[i].k);
                });
                (0, request_1.default)({
                    url: 'https://backend.svcenter.xyz/api/convert-by-45fc4be8916916ba3b8d61dd6e0d6994',
                    method: 'POST',
                    headers: headers.download,
                    form: {
                        'v_id': result.vid,
                        'ftype': 'mp4',
                        'fquality': quality[0],
                        'token': result.token,
                        'timeExpire': result.timeExpires,
                        'client': 'yt1s.io'
                    }
                }, function (error, response, body) {
                    (0, request_1.default)({
                        url: `${JSON.parse(body).c_server}/api/json/convert`,
                        method: 'POST',
                        headers: headers.download,
                        form: {
                            'v_id': result.vid,
                            'ftype': 'mp4',
                            'fquality': quality[0],
                            'fname': result.title,
                            'token': result.token,
                            'timeExpire': result.timeExpires
                        }
                    }, function (error, response, body2) {
                        resolve({
                            status:`${JSON.parse(body2).statusCode}`,  
                            dl_link: JSON.parse(body2).result,
                            thumbnail: thumb,
                            title: result.title,
                            quality: quality[0],
                            qualitys: quality,
                            url: url,
                            channel: result.a,
                            needSearch: needSearch
                        });
                    });
                });
            });
            } catch {
            resolve({ 
           status:`200`,  
                            dl_link: "error",
                            thumbnail: thumb,
                            title: result.title,
                            quality: "error",
                            qualitys: "error",
                            url: "error",
                            channel: result.a,
                            needSearch: "error"
                            })
                            }
        }));
    });
}
exports.ytv = ytv;
;
