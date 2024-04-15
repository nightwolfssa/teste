// ==UserScript==
// @name         RECARREGAR
// @namespace    http://tampermonkey.net/
// @version      2024-04-14
// @description  try to take over the world!
// @author       You
// @match        https://www.segurobet.com/cassino/slots/395/395/playtech-live/26559-40013837-roleta-brasileira?mode=real&provider=all
// @icon         https://www.google.com/s2/favicons?sz=64&domain=segurobet.com
// @grant        GM_log
// ==/UserScript==

function recarrega_pagina(){
  console.log('VOU RESETAR')
  window.parent.location.reload()

}
//setInterval(recarrega_pagina,10000)


//window.top.location.reload();
