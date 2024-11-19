

export function mouseStart() {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");
  function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
  }
  const colors = [
    "#dcb0ff",  
    "#c885ff",  
    "#b06cff",  
    "#9955ff",  
    "#8338ff",  
    "#6d2dfc",  
    "#581ef5",  
    "#4c17df",  
    "#3e13b8",  
    "#321093",  
    "#290a7b",  
    "#210569",  
    "#190255",  
    "#130046",  
    "#0f0035"   
];




  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });



  animateCircles();
}
