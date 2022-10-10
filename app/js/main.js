$(function () {
$('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev-btn"></button>',
        nextArrow:  '<button type="button"class="slick-next-btn"></button>',
        dots: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              arrows: false,
              infinite: false
             
            }
          }

        ]
});


$('.slider-top__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
})

$('.certificates-slider__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    appendArrows: '.certificates-slider__curent-arrows',
    dots: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite:false
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});


$(".tachographs-slider__item-rating").rateYo({
    starWidth: "17px",
    normalFill: "#A0A0A0",
    ratedFill: "#E15241",
    readOnly: true
  });
  $(".tachographs-slider__item-rating-bottom").rateYo({
    starWidth: "17px",
    normalFill: "#A0A0A0",
    ratedFill: "#E15241",
    readOnly: true
  });


$('.tachographs-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    appendArrows: '.tachographs-slider__curent-arrows',
    dots: true,
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1015,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            infinite:false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});



$('.tachographs-slider__inner-bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1015,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            dots: true,
            infinite:false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

const buttonBtn = document.querySelector('.button-btn');
const contentHide = document.querySelector('.content-hidden');
const btnShow = document.querySelector('.content-hide_btn')
    buttonBtn.addEventListener('click', ()=>{
        contentHide.classList.toggle('card');
        buttonBtn.style.display = 'none';
    })
    btnShow.addEventListener('click', ()=>{
        contentHide.classList.toggle('card');
        buttonBtn.style.display = 'block';
    })

 const modalBtn = document.querySelectorAll('[data-modal]');
 const modal = document.querySelector('.modal');
 const modalClose = document.querySelector('[data-close]'); 


 modalBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        modal.classList.add('show')
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'
    })
})



modalClose.addEventListener('click', ()=> {
    modal.classList.remove('show')
    modal.classList.add('hide');
    document.body.style.overflow = ''
})

var element = document.getElementById('input-mask');
var maskOptions = {
	mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);


const menuAroows = document.querySelector('#sub-menu');
const subMenu = document.querySelector('#mobile');
const sub = document.querySelector('.sub-menu')

menuAroows.addEventListener('click', ()=>{
  subMenu.classList.toggle('show');
  sub.classList.toggle('arrows');
})

const menu = document.querySelector('.menu');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function(){
this.classList.toggle('nav-icon--active');
menu.classList.toggle('nav--active');
});

});
