// (function ($) {
//     $(function () {
  
  
//       $(window).on('scroll', function () {
//         fnOnScroll();
//       });
  
//       $(window).on('resize', function () {
//         fnOnResize();
//       });
  
  
//   var agTimeline = $('.js-timeline'),
//     agTimelineLine = $('.js-timeline_line'),
//     agTimelineLineProgress = $('.js-timeline_line-progress'),
//     agTimelinePoint = $('.js-timeline-card_point-box'),
//     agTimelineItem = $('.js-timeline_item'),
//     agOuterHeight = $(window).outerHeight(),
//     agHeight = $(window).height(),
//     f = -1,
//     agFlag = false;

//   function fnOnScroll() {
//     agPosY = $(window).scrollTop();

//     fnUpdateFrame();
//   }

//   function fnOnResize() {
//     agPosY = $(window).scrollTop();
//     agHeight = $(window).height();

//     fnUpdateFrame();
//   }
  
//   function fnUpdateWindow() {
//     agFlag = false;

//     agTimelineLine.css({
//       top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
//       bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
//     });

//     f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
//   }
  
//     function fnUpdateProgress() {
//       var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

//       i = agTop + agPosY - $(window).scrollTop();
//       a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
//       n = agPosY - a + agOuterHeight / 2;
//       i <= agPosY + agOuterHeight / 2 && (n = i - a);
//       agTimelineLineProgress.css({height: n + "px"});

//       agTimelineItem.each(function () {
//         var agTop = $(this).find(agTimelinePoint).offset().top;

//         (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
//       })
//     }

//     function fnUpdateFrame() {
//       agFlag || requestAnimationFrame(fnUpdateWindow);
//       agFlag = true;
//     }


//   });
// })(jQuery);




// let pos = 185.73;
// const pacArray = [
//     ['PacMan1.png', 'PacMan2.png'],
//     ['PacMan3.png', 'PacMan4.png']
// ];
// var direction = 0;
// var focus = 0;


// function Run() {
//     let img = document.getElementById("PacMan");
//     let imgWidth = img.width
//     focus = (focus + 1) % 2;
//     direction = checkPageBounds(direction, imgWidth, pos);
//     img.src = pacArray[direction][focus];
//     if (direction) {
//         pos -= 20;
//         img.style.left = pos + "px";
//     } else {
//         pos += 20;
//         img.style.left = pos + 'px';
//     }
//     // Use setTimeout to call Run every 200 millesecs
//     setTimeout(Run,200);
// }

// function checkPageBounds(direction, imgWidth, pos) {
//   // const windowWidth = window.innerWidth; // Get the width of the window
//   let element = document.getElementById("pacMen");
//   let elementWidth = element.getBoundingClientRect();

//   console.log(elementWidth)
//   if (pos > elementWidth.right - imgWidth) {
//     direction = (direction + 1) % 2;
//   } else {
//     if (pos < 50) {
//         direction = (direction + 1) % 2;
//     }
//   }

//   return direction;
// }

// //eyes porfpolio
// var balls = document.getElementsByClassName("ball");
//     document.onmousemove = () => {
//       var x = (event.clientX * 100) / window.innerWidth + "%";
//       var y = (event.clientY * 100) / window.innerHeight + "%";

//       for (let i = 0; i < 2; i++) {
//         balls[i].style.left = x;
//         balls[i].style.top = y;
//         balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
//       }
//     };

// //Real time Bus Tracker 
// async function run(){
//   // get bus data    
// const locations = await getBusLocations();
// console.log(new Date());
// console.log(locations);

// // timer
// setTimeout(run, 15000);
// }

// // Request bus data from MBTA
// async function getBusLocations(){
// const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
// const response = await fetch(url);
// const json     = await response.json();
// return json.data;
// }

// run();
