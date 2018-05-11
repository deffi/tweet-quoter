// ==UserScript==
// @name        Tweet quoter
// @description Formats tweets in a way suitable for quoting
// @version     1
// @grant       none
// @include     https://twitter.com/*/status/*
// @include     http://twitter.com/*/status/*
// ==/UserScript==

var fullNameElement = document.querySelector("div.tweet .fullname");
var fullName = "???";
if (fullNameElement)
	fullName = fullNameElement.textContent;

var userNameElement = document.querySelector("div.tweet .username");
var userName = "???";
if (userNameElement)
  userName = userNameElement.textContent;

var attributionText = `  - ${fullName} (${userName}) auf Twitter`;

console.log(attributionText)

var tweetTextElement = document.querySelector("div.tweet .tweet-text");
if (tweetTextElement) {
  var tweetText = tweetTextElement.textContent;
  tweetText = tweetText.replace(/\n+/g, "\n");

  var ta = document.createElement("textarea");
  ta.style.width = "100%";
  ta.style.height = "10em";
  tweetTextElement.parentNode.parentNode.appendChild(ta);
  ta.value = tweetText + "\n" + attributionText;
}


