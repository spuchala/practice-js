const encode = (input) => {
  let encodedUrl = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      encodedUrl = encodedUrl + "%20";
    } else if (input[i] === ":") {
      encodedUrl = encodedUrl + "%3A";
    } else if (input[i] === "/") {
      encodedUrl = encodedUrl + "%2F";
    } else {
      encodedUrl = encodedUrl + input[i];
    }
  }
  return encodedUrl;
};

const encodedUrl = encode("http://localhost:8080");
console.log(encodedUrl);
