import { TuyaContext } from "../src";
import * as dotenv from "dotenv";
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

const context = new TuyaContext({
  baseUrl: process.env.BASE_URL,
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_KEY,
});

const main = async () => {
  // auto init token
  // await context.client.init();
  const page_size = 100;
  let last_row_key = "";
  // const res  = await context.assets.childAssets({
  //   asset_id: '-1',
  //   page_size,
  //   last_row_key,
  // });
  // all api request you can use:
  let res = await context.request({
    path: `/v1.0/iot-02/assets/-1/sub-assets`,
    method: "GET",
    query: {
      page_size,
      last_row_key,
      key1: "支持中文",
      key2: [{ name: "support" }, { age: "array" }, { name: "object" }],
    },
  });

  if (!res.success) {
    new Error();
  }
  console.log(JSON.stringify(res.result.list, null, 2));

  //Get Device Details
  res = await context.device.detail({
    device_id: process.env.DEVICE_ID01,
  });

  if (!res.success) {
    new Error();
  }
  console.log(res);

  console.log([process.env.DEVICE_ID01, process.env.DEVICE_ID02]);

  //Get Device Status
  res = await context.deviceStatus.statusList({
    device_ids: [process.env.DEVICE_ID01, process.env.DEVICE_ID02],
  });

  if (!res.success) {
    new Error();
  }
  console.log(JSON.stringify(res, null, 2));
};

main().catch((err) => {
  console.log(err);
});
