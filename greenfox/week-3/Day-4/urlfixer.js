/* Egy vicces subreddit címét rosszul kaptuk meg, az "odds" helyett "bots" szerepel a linkben.
Ezen kívül az URL-ből hiányzik egy kulcsfontosságú elem.
Keresd meg és javítsd ki mindkét hibát!
let url = "https//www.reddit.com/r/nevertellmethebots";
console.log(url); */

let url = "https//www.reddit.com/r/nevertellmethebots";
url = url.replace("https","https:");
url = url.replace("bots","odds")
console.log(url);