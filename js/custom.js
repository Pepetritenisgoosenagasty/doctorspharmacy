function toggle(){
    var header = document.querySelector("header");
    header.classList.toggle("active");
}

//  active class
     $(document).on('click', 'ul li', function() {
       $(this).addClass('active').siblings().removeClass('active');
     });




    $(document).ready(function() {
      // Nav page
    $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
          //I get fired when the animation is starting
        },
        end: function() {
          //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
          //I get fired when you enter a section and I pass the list item of the section
        }
      });


      $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      
      
    });
    
    

