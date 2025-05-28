$(document).ready(function(){
  var swiper = new Swiper(".pofol", {
      slidesPerView: '1.6',
      autoplay: {
        delay: 2000
      },
      centeredSlides: true,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  var swiper = new Swiper(".porfol-2", {
    spaceBetween: 30,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  $('.tab-btn').click(function () {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
  
    $('.tab-con').removeClass('active').hide();
    const target = $(this).data('tab');
    $('#' + target).show().addClass('active');
  
    new Swiper('#' + target + ' .porfol-2', {
      spaceBetween: 30,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '#' + target + ' .swiper-pagination',
      },
    });
  });
});