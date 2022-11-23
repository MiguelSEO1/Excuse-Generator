/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //array with the words

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // declaring random variables
  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  //creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    who[random1] + action[random2] + what[random3] + when[random4];
};
