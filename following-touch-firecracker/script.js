



const animationDuration = 0.7;

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};

// touch move
function animateFirecrackerMove(touches) {
  const container = document.querySelector(".container");
  // 設定隨機顏色
  const colors = ["#0066E7", "#D4070F", "#FFDA13"];

  // 偵測有幾隻手指
  [...touches.changedTouches].forEach((touch) => {

    const firecracker = document.createElement("div");
    firecracker.setAttribute("class", "firecracker");

    // 偵測 X 與 Y 軸
    firecracker.style.top = `${touch.pageY}px`;
    firecracker.style.left = `${touch.pageX}px`;

    // 給予隨機的顏色
    let color = colors[Math.floor(Math.random() * colors.length)];
    firecracker.style.backgroundColor = color;

    // 讓生成出來的元素能有過渡的時間
    // 把 settimeout 放來這裡
    firecracker.style.animation = `fade-out ${animationDuration}s ease-out forwards`;

    // firecracker.style.width = "100px";
    // firecracker.style.height = "100px";

    // firecracker.style.borderWidth = "5px";
    // firecracker.style.opacity = 0;

    // 新增至頁面上
    container.append(firecracker);

    // setTimeout( function() {
    //   removeAllChildNodes(container);
    // }, 2000);
  });
}

// touch end
function animateFirecrackerEnd() {
  const container = document.querySelector(".container");
  const delayTime =  animationDuration * 2 * 1000;
  
  setTimeout( function() {
    removeAllChildNodes(container);
  }, delayTime);
};

// document.addEventListener("touchstart", animateFirecrackerStart);
document.addEventListener("touchmove", animateFirecrackerMove);
document.addEventListener("touchend", animateFirecrackerEnd);