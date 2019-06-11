"use strict";

function loadLink(links = [], scripts = []) {
  if (links) links.forEach( link => document.head.insertAdjacentHTML("beforeEnd",link) );

  // scripts.forEach( src => {
  //   var script = document.createElement('script');
  //   script.src = src;
  //   document.body.appendChild(script);
  // });
  var i = 0;

  function createScript() {
    if (i < scripts.length) {
      var script = document.createElement('script');
      script.src = scripts[i];
      document.body.appendChild(script);
      script.onload = createScript;
      ++i;
    }
  }

  if (scripts) createScript();



  // function onLoad() {
  //   i++;
  // }
  //
  // let i = 0;
  // while(i < scripts.length) {
  //   var script = document.createElement('script');
  //   script.src = scripts[i];
  //   document.body.appendChild(script);
  //   script.onload = onLoad;
  // }

  // for (let i = 0; i < scripts.length; i++) {
  //   var script = document.createElement('script');
  //   script.src = scripts[i];
  //   document.body.appendChild(script);
  //   script.onload = onLoad;
  // }

}
