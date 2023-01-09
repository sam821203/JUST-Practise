


document.addEventListener("DOMContentLoaded", initTouchAnimate);

const animationDuration = 0.6;

function initTouchAnimate() {
  document.addEventListener("touchmove", animateFirecrackerMove);
  document.addEventListener("touchend", animateFirecrackerEnd);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};

// touch move
function animateFirecrackerMove(touches) {
  const touchWrap = document.querySelector(".touch__wrap");
  
  // 設定隨機顏色
  const colors = ["#0066E7", "#D4070F", "#FFDA13"];

  // 偵測不同手指
  [...touches.changedTouches].forEach((touch) => {

    const firecracker = document.createElement("div");

    // 給予隨機的顏色
    let color = colors[Math.floor(Math.random() * colors.length)];

    // 偵測 X 與 Y 軸
    firecracker.classList.add('firecracker');
    firecracker.style.top = `${touch.clientY}px`;
    firecracker.style.left = `${touch.clientX}px`;
    firecracker.style.backgroundColor = color;

    // 讓生成出來的元素能有過渡的時間
    // 把 settimeout 放來這裡
    firecracker.style.animation = `fade-out ${animationDuration}s ease-out forwards`;

    // firecracker.style.width = "100px";
    // firecracker.style.height = "100px";

    // firecracker.style.borderWidth = "5px";
    // firecracker.style.opacity = 0;

    // 新增至頁面上
    touchWrap.append(firecracker);

    // setTimeout( function() {
    //   removeAllChildNodes(touchWrap);
    // }, 2000);
  });
}

// touch end
function animateFirecrackerEnd() {
  const touchWrap = document.querySelector(".touch__wrap");
  const delayTime =  animationDuration * 2 * 1000;
  
  setTimeout( function() {
    removeAllChildNodes(touchWrap);
  }, delayTime);
};

