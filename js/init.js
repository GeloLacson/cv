/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(function() {
    $("h1.responsive-headline").fitText(1, {
      minFontSize: "40px",
      maxFontSize: "90px"
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $(".smoothscroll").on("click", function(e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing",
        function() {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav-wrap a");

  sections.waypoint({
    handler: function(event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: "35%"
  });

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $("header").css({ height: $(window).height() });
  $(window).on("resize", function() {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on("scroll", function() {
    var h = $("header").height();
    var y = $(window).scrollTop();
    var nav = $("#nav-wrap");

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut("fast");
    } else {
      if (y < h * 0.2) {
        nav.removeClass("opaque").fadeIn("fast");
      } else {
        nav.addClass("opaque").fadeIn("fast");
      }
    }
  });
  $(document).bind("scroll", function(ev) {
    console.log($(document).scrollTop());
    var skills = $(".skills");
    var scrollOffset = $(document).scrollTop();
    var containerOffset = skills.offset().top - window.innerHeight / 2;
    var containerBottomOffset = skills.offset().top + window.innerHeight / 2;
    if (
      scrollOffset >= containerOffset &&
      scrollOffset <= containerBottomOffset
    ) {
      $(document).unbind("scroll");
      for (var i = 0; i < $(".skills .bar-expand").length; i++) {
        switch (i) {
          case 0:
            $(".skills .bar-expand")
              .eq(0)
              .addClass("html5");
            break;
          case 1:
            $(".skills .bar-expand")
              .eq(1)
              .addClass("asp");
            break;
          case 2:
            $(".skills .bar-expand")
              .eq(2)
              .addClass("sitecore");
            break;
          case 3:
            $(".skills .bar-expand")
              .eq(3)
              .addClass("kendo");
            break;
          case 4:
            $(".skills .bar-expand")
              .eq(4)
              .addClass("sql");
            break;
          case 5:
            $(".skills .bar-expand")
              .eq(5)
              .addClass("reactjs");
            break;
        }
      }
    } else {
      $(document).bind("scroll");
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $(".item-wrap a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: "mfp-fade"
  });

  $(document).on("click", ".popup-modal-dismiss", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*	Flexslider
/*----------------------------------------------------*/
  $(".flexslider").flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false
  });

  /*----------------------------------------------------*/
  /*	contact form
------------------------------------------------------*/

  $("form#contactForm button.submit").click(function() {
    $("#image-loader").fadeIn(1000);

    setTimeout(function() {
      $("#image-loader").fadeOut();
      $("#message-success").fadeIn();
    }, 1000);
    //   var contactName = $("#contactForm #contactName").val();
    //   var contactEmail = $("#contactForm #contactEmail").val();
    //   var contactSubject = $("#contactForm #contactSubject").val();
    //   var contactMessage = $("#contactForm #contactMessage").val();

    //   var data =
    //     "contactName=" +
    //     contactName +
    //     "&contactEmail=" +
    //     contactEmail +
    //     "&contactSubject=" +
    //     contactSubject +
    //     "&contactMessage=" +
    //     contactMessage;

    //   $.ajax({
    //     type: "POST",
    //     url: "inc/sendEmail.php",
    //     data: data,
    //     success: function(msg) {
    //       // Message was sent
    //       if (msg == "OK") {
    //         $("#image-loader").fadeOut();
    //         $("#message-warning").hide();
    //         $("#contactForm").fadeOut();
    //         $("#message-success").fadeIn();
    //       }
    //       // There was an error
    //       else {
    //         $("#image-loader").fadeOut();
    //         $("#message-warning").html(msg);
    //         $("#message-warning").fadeIn();
    //       }
    //     }
    //   });
    //   return false;
  });
});
