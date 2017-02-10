// ==UserScript==
// @name         GitHub dark navbar undo
// @version      1
// @description  Revert the GitHub dark navbar change
// @author       cubeee (https://github.com/cubeee)
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

var headers = document.getElementsByClassName("header");
for(var i = 0; i < headers.length; i++) {
    var header = headers.item(i);
    header.className = header.className.replace(/\bheader-dark\b/,'');
}