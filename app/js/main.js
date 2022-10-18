document.addEventListener('DOMContentLoaded', () => {

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
  $(".catalog__item-rating").rateYo({
    starWidth: "17px",
    normalFill: "#A0A0A0",
    ratedFill: "#E15241",
    readOnly: true
  });
  $(".card__content-rating").rateYo({
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



$('.catalog__inner-slider').slick({
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        infinite:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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





  const pageboxmobileone = document.querySelector('.page-box__mobile-one');
  const pageboxinfomobileone = document.querySelector('.page-box__info-mobile-one');
  const pageboxmobiletwo = document.querySelector('.page-box__mobile-two');
  const pageboxinfomobiletwo = document.querySelector('.page-box__info-mobile-two');
  const pageboxmobilethree = document.querySelector('.page-box__mobile-three');
  const pageboxinfomobilethree = document.querySelector('.page-box__info-mobile-three');
  const pageboxmobilefour = document.querySelector('.page-box__mobile-four');
  const pageboxinfomobilefour = document.querySelector('.page-box__info-mobile-four');
  const pageboxmobilefife = document.querySelector('.page-box__mobile-fife');
  const pageboxinfomobilefife = document.querySelector('.page-box__info-mobile-fife');


    if(pageboxmobileone){
      pageboxmobileone.addEventListener('click', function(){
        pageboxmobileone.classList.toggle('arrows');
        pageboxinfomobileone.classList.toggle('show');
      });
    }
   if(pageboxmobiletwo){
    pageboxmobiletwo.addEventListener('click', function(){
      pageboxmobiletwo.classList.toggle('arrows');
      pageboxinfomobiletwo.classList.toggle('show');
    });
   }
  
   if(pageboxmobilethree){
    pageboxmobilethree.addEventListener('click', function(){
      pageboxmobilethree.classList.toggle('arrows');
      pageboxinfomobilethree.classList.toggle('show');
    });
   }
   
   if(pageboxmobilefour){
    pageboxmobilefour.addEventListener('click', function(){
      pageboxmobilefour.classList.toggle('arrows');
      pageboxinfomobilefour.classList.toggle('show');
    });
   }
   
   if(pageboxmobilefife){
    pageboxmobilefife.addEventListener('click', function(){
      pageboxmobilefife.classList.toggle('arrows');
      pageboxinfomobilefife.classList.toggle('show');
    });
   }
   



    const buttonBtn = document.querySelector('.button-btn');
    const contentHide = document.querySelector('.content-hidden');
    const btnShow = document.querySelector('.content-hide_btn');

      if(buttonBtn){
        buttonBtn.addEventListener('click', function(){
          // contentHide.classList.toggle('card');
          buttonBtn.style.display = 'none';
          contentHide.classList.add('show');
      });
      }
      

       if(btnShow){
        btnShow.addEventListener('click', function(){
          contentHide.classList.remove('show');
          contentHide.classList.add('hide');
          buttonBtn.style.display = 'block';
      });
       }
      



    // const productpagemobileone = document.querySelector('.product-page__mobile-one');
    // const productPageOne = document.querySelector('.product-page-mobile-one');
    // productpagemobileone.addEventListener('click',function(){
    //   productPageOne.classList.toggle('show');
    // });
  
  });
