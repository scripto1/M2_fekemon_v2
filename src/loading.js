const loader = document.querySelector('.loading-screen');
window.addEventListener('load', function () {
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
})  


//   // 투명도 변화 이벤트 감지
//   loadingScreen.addEventListener('transitionend', (handleTransitionEnd = () => {
//       document.documentElement.style.setProperty("--display", "none");
//     })
//   );
// });