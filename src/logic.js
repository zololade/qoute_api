import data from "./data.js";

export function grabRandomData() {
  let randomIndex = data.length;
  let index = Math.floor(Math.random() * randomIndex);
  return data[index];
}
