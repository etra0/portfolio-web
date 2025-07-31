document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".glide").forEach(function (carousel) {
    new Glide(carousel, { type: 'carousel', perView: 1, focusAt: 'center' }).mount();
  });
});
