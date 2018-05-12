// ==UserScript==
// @name        Tweet quoter
// @description Formats tweets in a way suitable for quoting
// @version     1
// @grant       none
// @include     https://twitter.com/*/status/*
// @include     http://twitter.com/*/status/*
// ==/UserScript==

// Get the full name of the tweet author
var fullNameElement = document.querySelector("div.tweet .fullname");
var fullName = "???";
if (fullNameElement)
	fullName = fullNameElement.textContent;

// Get the user name of the tweet author
var userNameElement = document.querySelector("div.tweet .username");
var userName = "???";
if (userNameElement)
  userName = userNameElement.textContent;

// Create the attribution line
var attributionText = `  - ${fullName} (${userName}) auf Twitter`;

// Find the tweet text
var tweetTextElement = document.querySelector("div.tweet .tweet-text");
if (tweetTextElement) {
  // Get the text of the tweet
  var tweetText = tweetTextElement.textContent;

  // Remove empty lines
  tweetText = tweetText.replace(/\n+/g, "\n");

  // Create the textarea
  var ta = document.createElement("textarea");

  // Set the size of the text area - 100% of its parent wide, 10em high.
  ta.style.width = "100%";
  ta.style.height = "10em";

  // Add the text area to the document
  tweetTextElement.parentNode.parentNode.appendChild(ta);

  // Fill in the text area with the tweet and the attribution line
  ta.value = tweetText + "\n" + attributionText;
}

