const readline = require('readline');

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
  return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (url) => {
  console.log(isValidHttpUrl(url));
});
