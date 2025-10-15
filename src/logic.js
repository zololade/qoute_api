import { fileURLToPath } from "node:url";
import data from "./data.js";
import { readFile, open, appendFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { loadavg } from "node:os";

let __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const logFile = join(dirname(__dirname), "/assets/log.txt");

export function grabRandomData() {
  let randomIndex = data.length;
  let index = Math.floor(Math.random() * randomIndex);
  return data[index];
}

async function readLog() {
  let lastLine;
  let fileHandle;
  try {
    fileHandle = await open(logFile);
    for await (const data of fileHandle.readLines()) {
      lastLine = data;
    }
    return lastLine;
  } catch (err) {
    console.error(`something went wrong ${err}`);
  } finally {
    await fileHandle.close();
  }
}

async function writeLog() {
  let readLogTxt = await readLog();
  const thisDate = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
  //end goal : [id:2] quote for 2025-10-14T23:44:30.138Z
  if (readLogTxt === undefined) {
    await appendFile(
      logFile,
      `[id:${
        data[0].id
      }] quote for ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}\n`
    );
  } else if (
    thisDate !== readLogTxt.match(/\d{1,2}-\d{1,2}-\d{4}/)[0]
  ) {
    let id = readLogTxt.match(/(?<=\[id:)\d+(?=\])/)[0];
    await appendFile(
      logFile,
      `[id:${
        data[id].id
      }] quote for ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}\n`
    );
  } else {
    return;
  }
}

export async function grabTodayData() {
  await writeLog();
  let readLogTxt = await readLog();
  let id = readLogTxt.match(/(?<=\[id:)\d+(?=\])/)[0];
  return data[id - 1];
}
