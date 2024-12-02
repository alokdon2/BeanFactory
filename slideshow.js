
  $(document).ready(function(){
    $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
    nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
    });
  });



// let _img = document.getElementById("imgssd");
// let image = ["",
//   "https://cdn.discordapp.com/attachments/975450681991393285/984053808042745896/photo_2022-06-08_17-03-14.jpg",
//   "https://cdn.discordapp.com/attachments/975450681991393285/984053808437035029/photo_2022-06-08_17-03-13.jpg",
//   "https://cdn.discordapp.com/attachments/975450681991393285/984053808713850920/photo_2022-06-08_17-03-12_2.jpg",
//   "https://cdn.discordapp.com/attachments/975450681991393285/984053809007427604/photo_2022-06-08_17-03-12.jpg",
//   "https://cdn.discordapp.com/attachments/975450681991393285/984053809393324122/photo_2022-06-08_17-03-11_2.jpg",
//   "https://cdn.discordapp.com/attachments/975450681991393285/984053809816956938/photo_2022-06-08_17-03-11.jpg",


//   "https://cdn.discordapp.com/attachments/975450681991393285/984053810139914250/photo_2022-06-08_17-03-10_2.jpg",
//   "https://cdn.discordapp.com/attachments/975450681991393285/984053810479648778/photo_2022-06-08_17-03-10.jpg"
//   , "https://cdn.discordapp.com/attachments/975450681991393285/984063342320681000/western_union.jpg"
// ];
// let currentIndex = 0;



// function changeImage() {
//   if (currentIndex > 9) {
//     currentIndex = 0;
//   }

//   _img.src = image[currentIndex];


//   currentIndex++;



// }


// setInterval(changeImage, 2000)