document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // show sub menu mb
  var subMenu = document.querySelector(".sub-menu-mb-wrapper");
  var showSubMenu = document.querySelectorAll(".show-submenu");

  // width document
  var widthDoc = document.querySelector("body");

  // dem so luong ky te de show hide
  var characterCount1 = document.querySelector('.podcast-primary__des');
  var characterCount2 = document.querySelector('.podcast-secondary__des');

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }
      // show sub menu
      if (showSubMenu) {
        showSubMenu.forEach(function(index){
          index.onclick = function () {
            if (subMenu) {
              subMenu.classList.add("active");
            }
          };
        })
      }
      if (subMenu) {
        var subListMenu = subMenu.querySelectorAll(".sub-menu-mb-item");
        var closeSubMenu = subMenu.querySelector(".close-sub-menu");
        subListMenu.forEach(function (a) {
          if (a.querySelector(".sub-menu-mb-icon")) {
            a.querySelector(".sub-menu-mb-icon").onclick = function () {
              if (a.classList.contains("active")) {
                a.classList.remove("active");
              } else {
                a.classList.add("active");
              }
            };
          }
        });
        closeSubMenu.onclick = function () {
          subMenu.classList.remove("active");
        };
      }

      //  dem so luong ky te de show hide
      if(characterCount1){
        var characterText1 = characterCount1.innerText;
        var characterExtend1 = characterCount1.parentElement.querySelector('.podcast-primary__extend');
        if(characterText1.length > 210) {
          characterCount1.innerText = characterText1.slice(0,210) + '...';
          characterExtend1.style.display = 'inline-block';
        }
        characterExtend1.onclick = function(){
          if(characterExtend1.innerText = 'Mở rộng '){
            characterCount1.innerText = characterText1;
            characterExtend1.style.display = 'none'
          }
        }
      }
      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {});
    },
    // slide navbar mb
    slideNavbarMb: function () {
      $(".navigation-bar-list--mb").slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth:true,
      });
    },
    // slide mutimedia
    slideMutimedia: function () {
      $(".mutimedia-container").slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1.5,
            },
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1.5,
            },
          },
        ],
      });
    },
    // slide podcast
    slidePodcast: function () {
      $(".podcast-secondary .field").slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    },
    // slide event
    slideEvent: function () {
      $(".event-content").slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
      });
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slide navbar mb
      // this.slideNavbarMb();
      // slide mutimedia
      this.slideMutimedia();
      // slide event
      this.slideEvent();
      // slide podcast
      this.slidePodcast();
    },
  };

  app.start();
});
