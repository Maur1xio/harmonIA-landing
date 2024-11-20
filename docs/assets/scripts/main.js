import { mouseStart } from "./components/mouse.js";
import { scrollAnimationStart } from "./components/scroll-animations.js";
import { subMenuHamburguerStart } from "./components/submenu-hamburger.js";

document.addEventListener("DOMContentLoaded", function() {
    mouseStart();
    subMenuHamburguerStart();
    scrollAnimationStart();
});
  