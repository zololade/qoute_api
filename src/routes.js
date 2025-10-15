import {
  grabRandomData,
  grabTodayData,
  grabAllData,
} from "./logic.js";
export function root(req, res) {
  res.statusCode = 200;
  res.end(
    `Hello, This my quote api,\nwhy not try it out\n/random, /quotes, and /quote`
  );
}
export function quote(req, res) {
  grabTodayData().then((data) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  });
}

export function quotes(req, res) {
  let data = grabAllData();
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  res.end(JSON.stringify(data));
}

export function random(req, res) {
  let data = grabRandomData();
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  res.end(JSON.stringify(data));
}
