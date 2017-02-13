// ==UserScript==
// @name        GitHub dark navbar revert
// @version      1
// @description  Revert the GitHub dark navbar change
// @author       cubeee (https://github.com/cubeee)
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

document.querySelector('.header-dark').classList.remove('header-dark');