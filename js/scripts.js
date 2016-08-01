
var quotes = ["wise", "wealth", "success", "happiness", "brocolli", "apple", "banana", "orange", "peach"]
;

$("button").click(function(){
  event.preventDefault()
var randomValue =  Math.ceil(Math.random()* quotes.length);
var randomQuote = quotes[randomValue];
$("#output").text(randomQuote);
}) ;

// var quotes = {
//   1: "wise",
//   2: "wealth",
//   3: "success",
//   4: "happiness"
// };
//
// function getRandomValue(){
//   return Math.ceil(Math.random()* 4);
//   console.log(gV);
// };
// $("button").click(function(){
//   var getRandomValue =  Math.ceil(Math.random()* 4;
//   $("#output").text(getRandomQuote);
// }) ;
//
// var getRandomQuote = quotes[getRandomValue()];



// var quotes = {
//   a: "wise",
//   b: "wealth",
//   c: "success",
//   d: "happiness"
// };
//
// function getRandomValue(){
//   return Math.ceil(Math.random()* 4);
// };
//
//
// $("button").click(function(){
//   // debugger;
//   var randomValue = getRandomValue();
//   if (randomValue === 1){
//     $("#output").text("wise");
//   }
//   else if (randomValue === 2){
//     $("#output").text("wealth");
//   }
//   else if (randomValue === 3){
//     $("#output").text("success");
//   }
//   else if (randomValue === 4){
//     $("#output").text("happiness");
//   }
// }) ;


// var randomValue = 1
// console.log(quotes["Q" + randomValue]);
//
// function generate() {s
//   debugger;
//   var randomValue = Math.floor((Math.random() * 4) + 1);
//   console.log(quotes.q);
//   if (randomValue === 1) {
//     $("#output").text(quotes.q);
//   }
//   if (randomValue === 2) {
//     $("#output").text(quotes.qa);
//   }
//   if (randomValue === 3) {
//     $("#output").text(quotes.qb);
//   }
//   if (randomValue === 4) {
//     $("#output").text(quotes.qc);
//   }
  // console.log(quotes["Q" + randomValue]);
  // var randomQuote = quotes["Q" + randomValue];
  // $("#output").text(randomQuote);
// };


// var randomValue = parseInt(Math.floor((Math.random() * 4) + 1));
// $("#output").text(quotes[randomValue]);
//
// $("button").click(function(){
//   debugger;
//   var randomValue = parseInt(Math.floor((Math.random() * 4) + 1));
//   console.log(quotes[randomValue]);
//   $("#output").text(quotes[randomValue]);
// }) ;


// var random = 2;
// var quotesA= {
//   name: "wise",
//   2: "wealth",
//   3: "success",
//   4: "happiness"
// };
//
// quotesA[random];
// "wealth"
// quotes.name;
//
// $("button").click(function(){
//   debugger;
//     var randomValue = Math.floor((Math.random() * 4) + 1);
//     console.log(randomValue);
//     console.log(quotes[randomValue]);
// $("#output").text(quotes[randomValue]);
// $("#output").text("something is working");
// }) ;



//
// $("button").click run(){
//   var animals = [
//     { name: 'Fluffykins', species:  'rabbit' },
//     { name: 'Caro',         species:  'dog' },
//     { name: 'Hamilton',  species: 'dog' },
//     { name: 'Harold',      species: 'fish' },
//     { name: 'Ursula',       species: 'cat' },
//     { name: 'Jimmy',       species:  'fish' },
//   ];
//
//   var dogs = animals.filter(function(animal){
//     return animals.species === 'dog';
//   });
//
//   console.log(dogs);
// }



// var quotes = [
//   {quote: "abe", randomValue: 1},
//   {quote: "fob", randomValue: 2},
//   {quote: "dlg", randomValue: 3},
//   {quote: "dlc", randomValue: 4},
// ];
//
// function random(quote){
//     var randomValue = Math.floor(Math.random() * 4 + 1);
//     return quote.randomValue === randomValue;
// };
//
// var randomQuote = quotes.filter(random);
//
// console.log(randomQuote);
