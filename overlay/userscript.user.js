// ==UserScript==
// @name         r/PlaceTux Overlay
// @namespace    https://github.com/r-PlaceTux/place_tux
// @homepageURL  https://github.com/r-PlaceTux/place_tux/tree/main/overlay
// @version      1.0.13
// @description  FLOSS forever!
// @author       r/PlaceTux
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// @downloadURL  https://r-placetux.github.io/place_tux/userscript.user.js
// ==/UserScript==
if (window.top !== window.self) {
  window.addEventListener(
    "load",
    () => {
      document
        .getElementsByTagName("mona-lisa-embed")[0]
        .shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0]
        .shadowRoot.children[0].appendChild(
          (function () {
            const i = document.createElement("img");
            i.src = "https://hatsunearu.github.io/place_tux/Miku_3overlay.png";
            i.style =
              "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
          })()
        );
    },
    false
  );
}
