// Olvasd ki az összes adatot a 'log.txt' fájlból.
// Minden sor egy üzenetet jelöl egy webszervertől
// Írj egy föggvényt, ami visszaad egy tömböt az egyedi IP címekkel
// Írj egy függvényt, ami visszaadja a GET / POST kérések arányát

let fs = require("fs");

function getIpAddress() {
  let newContent = [];
  let ipAddressArr = [];
  let uniqueIp = [];
  let content = fs.readFileSync("log.txt", "utf8");
  for (let i = 0; i < content.split("/").length - 1; i++) {
    newContent.push(content.split("/")[i]);
    ipAddressArr.push(newContent[i].split(" ")[8]);
  }

  for (let i = 0; i < ipAddressArr.sort().length; i++) {
    if (ipAddressArr.sort()[i] != ipAddressArr.sort()[i + 1]) {
      uniqueIp.push(ipAddressArr.sort()[i]);
    }
  }
  return uniqueIp;
}

console.log(getIpAddress());

function getPostProportion() {
  let newContent = [];
  let postCount = [];
  let getCount = [];
  let content = fs.readFileSync("log.txt", "utf8");
  for (let i = 0; i < content.split("/").length - 1; i++) {
    newContent.push(content.split("/")[i]);
    if (newContent[i].split(" ")[11] == "POST") {
      postCount.push(newContent[i].split(" ")[11]);
    } else {
      getCount.push(newContent[i].split(" ")[11]);
    }
  }
  return "POST:" + postCount.length + "/" + "GET:" + getCount.length;
};

console.log(getPostProportion());