// const topHalf = document.getElementById("topHalf");

// document.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// topHalf.addEventListener("touchstart", (e) => {
//   // 避免原本預設的功能 (如: 兩個手指間距拉長，可以放大螢幕)
//   e.preventDefault();

//   if (e.targetTouches.length > 2) {
//     console.log("More than 2 fingers");
//   }
//   console.log("touches", e.touches.length);
//   console.log("Changed", e.changedTouches.length);
// });

// document.addEventListener("touchstart", (e) => {
//   [...e.changedTouches].forEach((touch) => {
//     const dot = document.createElement("div");
//     dot.classList.add("dot");
//     dot.style.top = `${touch.pageY}px`;
//     dot.style.left = `${touch.pageX}px`;
//     dot.id = touch.identifier;
//     document.body.append(dot);
//   });
// });

// document.addEventListener("touchmove", (e) => {
//   [...e.changedTouches].forEach((touch) => {
//     const dot = document.getElementById(touch.identifier);
//     dot.style.top = `${touch.pageY}px`;
//     dot.style.left = `${touch.pageX}px`;
//   });
// });

// document.addEventListener("touchend", (e) => {
//   [...e.changedTouches].forEach((touch) => {
//     const dot = document.getElementById(touch.identifier);
//     dot.remove();
//   });
// });

// document.addEventListener("touchcancel", (e) => {
//   [...e.changedTouches].forEach((touch) => {
//     const dot = document.getElementById(touch.identifier);
//     dot.remove();
//   });
// }f);

// 過濾 touches 的數量
// function filterElements(arr, num) {
//   return arr.length > num ? arr.filter((el, i) => i < num) : arr;
// }

// touch start
function animateFirecrackerStart(touches) {
  // 設定隨機顏色
  const colors = ["#0066E7", "#D4070F", "#FFDA13"];

  [...touches.changedTouches].forEach((touch) => {
    const firecracker = document.createElement("div");
    firecracker.setAttribute("class", "firecracker");

    // 新增至頁面上
    document.body.appendChild(firecracker);

    // 偵測 X 與 Y 軸
    firecracker.style.top = `${touch.pageY}px`;
    firecracker.style.left = `${touch.pageX}px`;

    // 修改點擊的那隻手指 id
    firecracker.id = touch.identifier;

    // 給予隨機的顏色
    let color = colors[Math.floor(Math.random() * colors.length)];
    firecracker.style.backgroundColor = color;

    // 讓生成出來的元素能有過渡的時間
    firecracker.style.transition = "all .3s linear 0s";
    // firecracker.style.left = firecracker.offsetLeft - 10 + "px";
    // firecracker.style.top = firecracker.offsetTop - 10 + "px";

    // firecracker.style.width = "50px";
    // firecracker.style.height = "50px";
    // firecracker.style.borderWidth = "5px";
    // firecracker.style.opacity = 0;

    // 新增至頁面上
    // document.body.append(firecracker);
  });
}

function animateFirecrackerMove(touches) {
  const container = document.querySelector('.container');
  // 設定隨機顏色
  const colors = ["#0066E7", "#D4070F", "#FFDA13"];

  // 新增動態效果
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
    firecracker.style.transition = "all .3s linear 0s";
    firecracker.classList.add("animation");

    console.log(firecracker.clientLeft);
    console.log(firecracker.clientTop);

    // 新增至頁面上
    container.append(firecracker);
  });
}

// touch move
// function animateFirecrackerMove(touches) {
//   [...touches.changedTouches].forEach((touch) => {
//     const firecracker = document.getElementById(touch.identifier);
//     firecracker.style.top = `${touch.pageY}px`;
//     firecracker.style.left = `${touch.pageX}px`;
//   });
// };

// touch end
function animateFirecrackerEnd(touches) {
  [...touches.changedTouches].forEach((touch) => {
    const firecracker = document.getElementById(touch.identifier);
    firecracker.remove();
  });
}

// document.addEventListener("touchstart", animateFirecrackerStart);
document.addEventListener("touchmove", animateFirecrackerMove);
// document.addEventListener("touchend", animateFirecrackerEnd);

// document.addEventListener("touchstart", (e) => {
//   [...e.changedTouches].forEach((touch) => {
//     const dot = document.createElement("div");
//     const img = document.createElement("img");

//     dot.classList.add("dot");
//     img.classList.add("animation");

//     dot.style.top = `${touch.pageY}px`;
//     dot.style.left = `${touch.pageX}px`;

//     // 修改點擊的那隻手指 id
//     dot.id = touch.identifier;

//     img.setAttribute(
//       "src",
//       "https://orig00.deviantart.net/df6e/f/2012/287/f/8/i_want_to_be_a_hero__apng_animated__by_tamalesyatole-d5ht8eu.png"
//     );

//     // 將點生成在頁面上
//     dot.appendChild(img);
//     document.body.append(dot);
//   });
// });

// document.addEventListener("touchmove", (e) => {
//   [...e.changedTouches].forEach((touch) => {
//     const dot = document.getElementById(touch.identifier);
//     dot.style.top = `${touch.pageY}px`;
//     dot.style.left = `${touch.pageX}px`;
//   });
// });

// document.addEventListener("touchend", (e) => {
//   [...e.changedTouches].forEach((touch) => {
//     const dot = document.getElementById(touch.identifier);
//     dot.remove();
//   });
// });
