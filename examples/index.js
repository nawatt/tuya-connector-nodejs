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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var src_1 = require("../src");
var dotenv = require("dotenv");
dotenv.config();
// const { TuyaContext } = require('../lib/index');
// import { TuyaContext } from '@tuya/tuya-connector-nodejs';
/**
 * api env entrypoint
 *
 * 'https://openapi.tuyacn.com',  // 亚洲 AY
 * 'https://openapi.tuyaus.com',  // 美区 US
 * 'https://openapi.tuyaeu.com',  // 欧洲 EU
 * 'https://openapi.tuyain.com',  // 印度 IN
 */
var context = new src_1.TuyaContext({
    baseUrl: process.env.BASE_URL,
    accessKey: process.env.ACCESS_KEY,
    secretKey: process.env.SECRET_KEY
});
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var page_size, last_row_key, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page_size = 100;
                last_row_key = "";
                return [4 /*yield*/, context.request({
                        path: "/v1.0/iot-02/assets/-1/sub-assets",
                        method: "GET",
                        query: {
                            page_size: page_size,
                            last_row_key: last_row_key,
                            key1: "支持中文",
                            key2: [{ name: "support" }, { age: "array" }, { name: "object" }]
                        }
                    })];
            case 1:
                res = _a.sent();
                if (!res.success) {
                    new Error();
                }
                console.log(JSON.stringify(res.result.list, null, 2));
                return [4 /*yield*/, context.device.detail({
                        device_id: process.env.DEVICE_ID01
                    })];
            case 2:
                //Get Device Details
                res = _a.sent();
                if (!res.success) {
                    new Error();
                }
                console.log(res);
                console.log([process.env.DEVICE_ID01, process.env.DEVICE_ID02]);
                return [4 /*yield*/, context.deviceStatus.statusList({
                        device_ids: [process.env.DEVICE_ID01, process.env.DEVICE_ID02]
                    })];
            case 3:
                //Get Device Status
                res = _a.sent();
                if (!res.success) {
                    new Error();
                }
                console.log(JSON.stringify(res, null, 2));
                return [2 /*return*/];
        }
    });
}); };
main()["catch"](function (err) {
    console.log(err);
});
