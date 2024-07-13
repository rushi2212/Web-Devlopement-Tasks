"use strict";

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}
let comp = getComputerChoice();
let you = "";

function check(you, comp) {
  if (you === comp) {
    document.querySelector(".choose").textContent = "❌ No one Win!"; 
  } else if (you === "rock" && comp === "scissor") {
    document.querySelector(".choose").textContent = "🎉 You Win!";
  } else if (you === "paper" && comp === "rock") {
    document.querySelector(".choose").textContent = "🎉 You Win!";
  } else if (you === "scissor" && comp === "paper") {
    document.querySelector(".choose").textContent = "🎉 You Win!";
  } else {
    document.querySelector(".choose").textContent = "😭 You Lost!";
  }
}

document.querySelector(".rock").addEventListener("click", function () {
  you = "rock";
  check(you, comp);
});
document.querySelector(".paper").addEventListener("click", function () {
  you = "paper";
  check(you, comp);
});
document.querySelector(".scissor").addEventListener("click", function () {
    you = "scissor";
    check(you, comp);
});

document.querySelector(".play").addEventListener("click", function () {
  document.querySelector(".choose").textContent = "✅ Select Option!";
  comp = getComputerChoice();
  you = "";
});
