let winH = window.innerHeight;
console.log(winH);
let upperH = document.querySelector('.upper-bar').clientHeight ;
console.log(upperH);
let navH = document.querySelector('.navbar').clientHeight ;
console.log(navH);
let slider = document.querySelector('.slider');
let carousel = document.querySelector('.carousel-inner');
let shuffled = document.querySelectorAll('.featured-work ul li ');
let images = document.querySelectorAll('.shuffle-images .filterDiv');
 //Adjust the height of the slider
function resizing() {

    let i =  winH - (upperH + navH)  ;
    slider.style.height = i + 'px';
    carousel.style.height = i + 'px';
}
resizing();


//featured work shuffle



/*
      shuffled.forEach((li) => {
        li.addEventListener("click", (e) => {



         
         
          e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
          });
          e.target.classList.add("active");
         
         
        });
      });
      */


     

      
    $('.featured-work ul li').on('click' , function() {
      $(this).addClass('active').siblings().removeClass('active');
      if($(this).data('class')=== 'all') {
        $('.shuffle-images .filterDiv').css('opacity' , '1');
      } else {
        $('.shuffle-images .filterDiv').css('opacity' , '.08');
        $($(this).data('class')).parent().css('opacity' , '1');

      }
    });
    