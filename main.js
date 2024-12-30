// Wait for the message to fade in, then display the flower
setTimeout(function() {
  document.querySelector('.flower').style.display = 'block';
}, 2000);  // 2000 ms = 2 seconds (after the message fade-in)


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };