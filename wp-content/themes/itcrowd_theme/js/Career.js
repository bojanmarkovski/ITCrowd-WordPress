// LOADER
window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

$(document).ready(function() {

    // NAVBAR BUTTON CHANGED TO X (HAMBURGER MENU)
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
      });

    if ($(window).width() > 991) {

      $(document).on("scroll", function() {
          if ($(document).scrollTop() > 15) {
            $(".logo").css({
                "padding-top": "0px",
                "transition": "0.4s"
              })
            $(".header ul li").css({
                "padding": "0",
                "transition": "0.4s"
              });
          }
          else {
            $(".logo").css({
                "padding-top": "5px",
                "transition": "0.4s"
              });
            $(".header ul li").css({
                "padding": "5px 0px",
                "transition": "0.4s"
              });
          }
        });

      $(".career-left").on('click', '.row.pd-box', function() {
          let boxShadow = $(this).find(".career-box").children("div");

          if (boxShadow.hasClass("shadow-paragraph")) {
            boxShadow.removeClass("shadow-paragraph");
            boxShadow.slideDown();
            boxShadow.addClass('clicked-cart');
          }
          else {
            boxShadow.addClass("shadow-paragraph");
            $($(".career-box")[i]).children("div").slideUp();
          }

          for (var i = 0; i < $(".career-box").length; i++) {
            if (!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
              $($(".career-box")[i]).children("div").slideUp();
              let inputJobApply = $($(this).find("h3")[0]).text();
              $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
            }
          }

          boxShadow.removeClass("clicked-cart");

          $(this).parents(".career-left").append($(this));

          $('html, body').animate({
              scrollTop: $(".row.pd-70px")
                .offset()
                .top + -30
            }, 1000);

          $('.career-left').animate({
              scrollTop: $(this)
                .offset()
                .top
            }, 900);

        })
    }
    else {
      // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.header').outerHeight();

      $(window).scroll(function(event) {
          didScroll = true;
        });

      setInterval(function() {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 250);

      function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
          return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
          // Scroll Down
          $('.header').removeClass('nav-down').addClass('nav-up').css("top", "-330px");
          $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
        } else {
          // Scroll Up
          if (st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
            $(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down");
          }
        }

        lastScrollTop = st;
      }

      $(".career-left").on('click', '.row.pd-box', function() {

          let boxShadow = $(this).find(".career-box").children("div");
          for (var i = 0; i < $(".career-box").length; i++) {
            if (!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
              $($(".career-box")[i]).children("div").slideUp("shadow-paragraph");
              // $(this).children("div").children("div").addClass("shadow-paragraph")
              let inputJobApply = $($(this).find("h3")[0]).text();
              $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
            }
          }
          if (boxShadow.hasClass("shadow-paragraph")) {
			$(this).children("div").children("div").slideDown().css("max-height", "none");
            $(this).children("div").children("div").removeClass("shadow-paragraph");
          }
          else {
            boxShadow.slideUp("shadow-paragraph");
            for (var i = 0; i < $(".career-box").length; i++) {
              if (!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
                $(this).children("div").children("div").addClass("shadow-paragraph")
                let inputJobApply = $($(this).find("h3")[0]).text();
                $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
              }

            }
            $(this).children("div").children("div").addClass("shadow-paragraph")
          }
        });
    }

    // CLOSE AN OPEN COLLAPSED NAVBAR WHEN CLICKING OUTSIDE
    $(document).click(function(event) {
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
          $navbar.collapse('hide');
          $("#nav-icon3").toggleClass('open');
        }
      });

    // INPUT UPLOAD FILE
    $("form").on("change", ".file-upload-field", function() {
        $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/, ''));
      });

    $(".file-upload-field").on("click", function() {
        $(this).css("border", "1px solid red")
      });

    $('.dropdown').change(function(e) {

        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too
        $(this).removeClass("input-holder");
        $(".first-option").css({
            "display": "none"
          }).text("");

        if ($(".input.select").val() == "") {
          $(".first-option").css({
              "display": "block",
              "transition": "0.7s"
            })
            .text("I am applying for *");
        } else if ($(".input.select").val() !== "I am applying for *") {
          $(this).removeClass("input-holder");
        }
      });

    $('body').click(function() {
        if (!$(".dropdown").hasClass("input-holder") && $(".first-option").css("display") == "none") {
          $(".dropdown").addClass("input-holder");
          $(".first-option").css({
              "display": "block",
              "transition": "0.7s"
            }).text("I am applying for *");
        }

        if ($(".input.select").val() !== "I am applying for *") {
          $(".dropdown").removeClass("input-holder");
          $(".first-option").css({
              "display": "none",
              "transition": "0.4s"
            }).text("");
        }
        else if ($(".input.select").val() == "I am applying for *") {
          $(".dropdown").addClass("input-holder");
        }
      });

    // CHECKBOX PRIVACY POLICY
    $(".modal-dialog button").on('click', function() {
        $(".form-check-input").prop('checked', true);
      })
  });