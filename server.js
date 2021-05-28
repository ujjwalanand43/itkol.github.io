// var http = require("http");
// http.createServer(function(res,req){
//     res.writeHead(200,{"content-type":text/html});
//     res.end("Hello World")
// }).listen(8080)
let openNav = () => {
    let nav = (document.querySelector(".nav").style.width = "400px");
  };
  
  // counter
  // let inner = +firstCounter.innerText
  // let target = +firstCounter.getAttribute('data-target')
  // firstCounter.innerText = "0"
  
  // function counter(){
  //     if(inner<target){
  //         inner.innerText = inner++
  //         console.log(inner++)
  //     }else{
  //         inner.innerText = target
  //     }
  // }
  // counter()
  
  let firstCounter = document.getElementById("counter1");
  let number = 0;
  setInterval(() => {
    if (number <= 1500) {
      number++;
      firstCounter.innerText = `${number - 1} +`;
    } else {
    }
  }, 1);
  let secondCounter = document.getElementById("counter2");
  // let number2 = 1;
  setInterval(() => {
    if (number <= 350) {
      number++;
      secondCounter.innerText = `${number + 1} +`;
    }
  }, 1);
  
  let thirdCounter = document.getElementById("counter3");
  // let number2 = 1;
  setInterval(() => {
    if (number <= 100) {
      number++;
      thirdCounter.innerText = `${number} +`;
    }
  }, 20);
  