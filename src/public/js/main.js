$(document).ready(function() {
    $(".slider-wrapp").slick({
       
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });
});


  $(document).ready(function(){
    $("#myLinks").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});

$(document).ready(function() {
    
    $(".hamburger-container").click(function() {
      $("#myLinks").slideToggle();
    });
  
    $(window).resize(function() {
      if (window.innerWidth > 1024) {
        $("#myLinks").removeAttr("style");
      }
    });
  
    var topBar = $(".hamburger li:nth-child(1)"),
      middleBar = $(".hamburger li:nth-child(2)"),
      bottomBar = $(".hamburger li:nth-child(3)");
  
    $(".hamburger-container").on("click", function() {
      if (middleBar.hasClass("rot-45deg")) {
        topBar.removeClass("rot45deg");
        middleBar.removeClass("rot-45deg");
        bottomBar.removeClass("hidden");
      } else {
        bottomBar.addClass("hidden");
        topBar.addClass("rot45deg");
        middleBar.addClass("rot-45deg");
      }
    });
  });
