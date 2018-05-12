# tweet-quoter
A userscript that formats tweets in a way suitable for copy & pasting.

## Purpose

This userscript adds a text area below the tweet. The text area contains the
tweet text (with empty lines removed) and an attribution line.

The contents of the text area can be selected by clicking the text area and
pressing Ctrl+A, rather than manually selecting the tweet content. It also
works around and issue on Firefox where copying the text of a tweet removes
line breaks.

## Prerequisites

Install a userscript manager such as [Tampermonkey](https://tampermonkey.net/)
or [Greasemonkey](https://www.greasespot.net/).

## Installation

Open the [raw userscript file](https://github.com/deffi/tweet-quoter/raw/master/tweet-quoter.user.js)
from this repository. The userscript manager should offer to install the script.
