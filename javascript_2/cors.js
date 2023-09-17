import XMLHttpRequest from 'xhr2';

// const xhr = new XMLHttpRequest();
// const url = "https://bar.other/resources/public-data/";

// xhr.open("GET", url);
// xhr.onreadystatechange = console.log('Log')
// xhr.send();

// The following is an example of a request that will be preflighted:
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://bar.other/doc");
xhr.setRequestHeader("X-PINGOTHER", "pingpong");
xhr.setRequestHeader("Content-Type", "text/xml");
xhr.onreadystatechange = console.log('Log');
xhr.send("<person><name>Arun</name></person>");


const invocation = new XMLHttpRequest();
const url = "https://bar.other/resources/credentialed-content/";

function callOtherDomain() {
  if (invocation) {
    invocation.open("GET", url, true);
    invocation.withCredentials = true;
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
