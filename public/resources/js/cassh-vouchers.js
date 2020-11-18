// (function (window, document, version, callback) {
//   let j, d
//   let loaded = false
//   if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'
//     script.onload = script.onreadystatechange = function () {
//       if (!loaded && (!(d = this.readyState) || d === 'loaded' || d === 'complete')) {
//         callback((j = window.jQuery).noConflict(1), loaded = true)
//         j(script).remove()
//       }
//     }
//
//     document.getElementsByTagName('head')[0].appendChild(script)
//   }
// })(window, document, '1.7.2', function ($, jquery_loaded) {
//   if ($('#panel-gift-items').length > 0) {
//     $('#panel-gift-items').text('')
//     // $('<iframe id="cassh-vouchers-iframe" name="cassh-vouchers" width="100%" scrolling="no" frameborder="0"></iframe>').appendTo('#panel-gift-items')
//     $('<iframe id="cassh-vouchers-iframe" name="cassh-vouchers" width="100%" scrolling="no" frameborder="0" sandbox="allow-scripts"></iframe>').appendTo('#panel-gift-items')
//     $('#cassh-vouchers-iframe').attr({
//       'src': 'https://phplaravel-498523-1577626.cloudwaysapps.com/',
//       'style': 'border: 0 none; overflow-y: hidden; min-height: 2000px;'
//     })
//
//     if (!Array.prototype.forEach) {
//       Array.prototype.forEach = function (fun /*, thisArg */) {
//         'use strict'
//         if (this === void 0 || this === null || typeof fun !== 'function') throw new TypeError()
//
//         let
//           t = Object(this),
//           len = t.length >>> 0,
//           thisArg = arguments.length >= 2 ? arguments[1] : void 0
//
//         for (let i = 0; i < len; i++)
//           if (i in t)
//             fun.call(thisArg, t[i], i, t)
//       }
//     }
//
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = 'https://cassh-software.github.io/cassh-vouchers-iframe/public/resources/js/iframe-resizer.js'
//     script.onload = script.onreadystatechange = function () {
//       if (typeof iFrameResize !== 'undefined') {
//         iFrameResize({ checkOrigin: false, enablePublicMethods: true }, '#cassh-vouchers-iframe')
//       }
//     }
//
//     /**
//      * Receives message when fancybox has been opened
//      *
//      * @return
//      * @param e
//      */
//     function receiver (e) {
//       console.log(`receiver - e.data=${e.data}`)
//       console.log(`receiver - e >>>`, e)
//
//       if (e.data === 'show details clicked' || e.data === 'page loaded') {
//         let iframe = document.getElementById('cassh-vouchers-iframe')
//         let set = {
//           'scrollTop': $(window).scrollTop(),
//           'offset': $('#cassh-vouchers-iframe').offset().top,
//           'height': $(window).height(),
//           // 'offsetHeight': $(window).height(),
//           'offsetBottom': Math.abs($(window).height() - $('#cassh-vouchers-iframe').offset().top - $('#cassh-vouchers-iframe').height()),
//           'clickOverride': true,
//           'iframeHeight': $('#cassh-vouchers-iframe').height()
//         }
//
//         // Send message to iframe
//         console.log(`send message to iframe - receiver >>>`, JSON.stringify(set))
//         iframe.contentWindow.postMessage(JSON.stringify(set), 'https://phplaravel-498523-1577626.cloudwaysapps.com/')
//         console.log(`receiver... >>> window.height=${$(window).height()} >>> window.offsetHeight=${$(window).offsetHeight} >>> iframe.height=${iframe.height} >>> iframe.offsetHeight=${iframe.offsetHeight}`)
//       } else if (e.data === 'fixed iframe height') {
//         $('#cassh-vouchers-iframe').height('1200px')
//       } else if (e.data === 'scroll to top') {
//         // Attempt to scroll them 150px above the top of the iframe
//         let scrollOffset = $('#cassh-vouchers-iframe').offset().top
//         if (scrollOffset < 0) scrollOffset = 0
//         $('html, body').animate({ scrollTop: scrollOffset }, 200)
//       } else if (e.data === 'scroll to middle') {
//
//         let el = $('#cassh-vouchers-iframe')
//         let elOffset = el.offset().top
//         let elHeight = el.height()
//         let windowHeight = $(window).height()
//         let offset
//
//         if (elHeight < windowHeight) {
//           offset = elOffset - ((windowHeight / 2) - (elHeight / 2))
//         } else {
//           offset = elOffset + ((elHeight - windowHeight) / 2)
//         }
//
//         $('html, body').animate({ scrollTop: offset }, 200)
//         return false
//       }
//     }
//
//     if (window.addEventListener) {
//       window.addEventListener('message', receiver, false)
//       console.log(`addEventListener`)
//     } else {
//       window.attachEvent('message', receiver)
//       console.log(`attachEvent`)
//     }
//
//     // Sends messages to iframe on scroll
//     $(window).scroll(function () {
//       // console.log(`scrolling... >>> window.height=${$(window).height()} >>> window.offsetHeight=${$(window).offsetHeight}`)
//       let iframe = document.getElementById('cassh-vouchers-iframe')
//       let set = {
//         'scrollTop': $(window).scrollTop(),
//         'offset': $('#cassh-vouchers-iframe').offset().top,
//         'height': $(window).height(),
//         // 'offsetHeight': $(window).height(),
//         'offsetBottom': Math.abs($(window).height() - $('#cassh-vouchers-iframe').offset().top - $('#cassh-vouchers-iframe').height()),
//       }
//       // console.log(`scrolling... >>> window.height=${$(window).height()} >>> window.offsetHeight=${$(window).offsetHeight} >>> iframe.height=${iframe.height} >>> iframe.offsetHeight=${iframe.offsetHeight}`)
//
//       // Send message to iframe
//       console.log(`send message to iframe - scroll >>>`, JSON.stringify(set))
//       iframe.contentWindow.postMessage(JSON.stringify(set), 'https://phplaravel-498523-1577626.cloudwaysapps.com/')
//       console.log(`scrolling... >>> window.height=${$(window).height()} >>> window.offsetHeight=${$(window).offsetHeight} >>> iframe.height=${iframe.height} >>> iframe.offsetHeight=${iframe.offsetHeight}`)
//     })
//
//     document.getElementsByTagName('head')[0].appendChild(script)
//   }
// })

// (function (window, document, version, callback) {
//   console.log(`starting first script...`)
//   let j, d
//   let loaded = false
//   if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
//     console.log(`tripped in first script function...`)
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'
//     script.onload = script.onreadystatechange = function () {
//       if (!loaded && (!(d = this.readyState) || d === 'loaded' || d === 'complete')) {
//         callback((j = window.jQuery).noConflict(1), loaded = true)
//         j(script).remove()
//       }
//     }
//     document.getElementsByTagName('head')[0].appendChild(script)
//   }
// })(window, document, '1.7.2', function ($, jquery_loaded) {
//   console.log(`starting second script...`)
//   let panel = $('#panel-gift-items')
//   console.log(`panel >>>`, panel)
//
//   if (panel.length > 0) {
//     // if ($('#panel-gift-items').length > 0) {
//     console.log(`panel-gift-items found...`)
//     panel.text('')
//     // $('#panel-gift-items').text('')
//     $('<iframe id="cassh-vouchers-iframe" name="cassh-vouchers" width="100%"' + ' frameborder="0"></iframe>').appendTo('#panel-gift-items')
//     // $('<iframe id="cassh-vouchers-iframe" name="cassh-vouchers" width="100%" scrolling="no"' + ' frameborder="0"></iframe>').appendTo('#panel-gift-items')
//     let added_iframe = $('#cassh-vouchers-iframe')
//     added_iframe.attr({
//       'src': 'https://phplaravel-498523-1577626.cloudwaysapps.com/',
//       'style': 'border: 0 none; overflow-y: hidden; min-height: 1000px;'
//     })
//     console.log(`added_iframe`, added_iframe)
//
//     console.log(`this >>>`, this)
//     // if (!Array.prototype.forEach) {
//     //   Array.prototype.forEach = function (fun /*, thisArg */) {
//     //     'use strict'
//     //     if (this === void 0 || this === null || typeof fun !== 'function') throw new TypeError()
//     //
//     //     let t = Object(this),
//     //       len = t.length >>> 0,
//     //       thisArg = arguments.length >= 2 ? arguments[1] : void 0
//     //
//     //     for (let i = 0; i < len; i++)
//     //       if (i in t)
//     //         fun.call(thisArg, t[i], i, t)
//     //   }
//     // }
//
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = 'https://cassh-software.github.io/cassh-vouchers-iframe/public/resources/js/iframe-resizer.js'
//     script.onload = script.onreadystatechange = function () {
//       console.log(`iFrameResize_type=${typeof iFrameResize}`)
//       if (typeof iFrameResize !== 'undefined') {
//         iFrameResize({ checkOrigin: false, enablePublicMethods: true }, '#cassh-vouchers-iframe')
//       }
//     }
//
//     /**
//      * Receives message when fancybox has been opened
//      * @return
//      * @param e
//      */
//     function receiver (e) {
//       console.log(`e >>>`, e)
//       console.log(`e.data >>>`, e.data)
//       let iframe = document.getElementById('cassh-vouchers-iframe')
//       console.log(`iframe in receiver >>>`, iframe)
//       console.log(`window_height=${iframe.height}`)
//       // if (e.data === 'show details clicked' || e.data === 'page loaded') {
//       //   // let iframe = document.getElementById('cassh-vouchers-iframe')
//       //   let set = {
//       //     'scrollTop': $(window).scrollTop(),
//       //     'offset': iframe.offset().top,
//       //     // 'offset': $('#cassh-vouchers-iframe').offset().top,
//       //     'height': $(window).height(),
//       //     'offsetBottom': Math.abs($(window).height() - iframe.offset().top - iframe.height()),
//       //     // 'offsetBottom': Math.abs($(window).height() - $('#cassh-vouchers-iframe').offset().top - $('#cassh-vouchers-iframe').height()),
//       //     'clickOverride': true,
//       //     'iframeHeight': iframe.height()
//       //     // 'iframeHeight': $('#cassh-vouchers-iframe').height()
//       //   }
//       //   console.log(`set >>> type=${typeof set} >>>`, set)
//       //   // Send message to iframe
//       //   iframe.contentWindow.postMessage(JSON.stringify(set), 'https://cassh-software.github.io/cassh-vouchers-iframe/public/resources/js/cassh-vouchers.js')
//       // } else if (e.data === 'fixed iframe height') {
//       //   iframe.height('1200px')
//       //   // $('#cassh-vouchers-iframe').height('1200px')
//       // } else if (e.data === 'scroll to top') {
//       //   // Attempt to scroll them 150px above the top of the iframe
//       //   // let scrollOffset = $('#cassh-vouchers-iframe').offset().top
//       //   let scrollOffset = iframe.offset().top
//       //   if (scrollOffset < 0) scrollOffset = 0
//       //   $('html, body').animate({ scrollTop: scrollOffset }, 200)
//       // } else
//       // if (e.data === 'scroll to middle') {
//       //   // let el = $('#cassh-vouchers-iframe')
//       //   // let elOffset = el.offset().top
//       //   // let elHeight = el.height()
//       //   let elOffset = iframe.offset().top
//       //   let elHeight = iframe.height()
//       //   let windowHeight = $(window).height()
//       //   let offset
//       //
//       //   if (elHeight < windowHeight) {
//       //     offset = elOffset - ((windowHeight / 2) - (elHeight / 2))
//       //   } else {
//       //     offset = elOffset + ((elHeight - windowHeight) / 2)
//       //   }
//       //   console.log(`offset=${offset}`)
//       //
//       //   $('html, body').animate({ scrollTop: offset }, 200)
//       //   return false
//       // }
//     }
//
//     if (window.addEventListener) {
//       window.addEventListener('message', receiver, false)
//     } else {
//       window.attachEvent('message', receiver)
//     }
//     console.log(`attached event listener...`)
//
//     // Sends messages to iframe on scroll
//     $(window).scroll(function () {
//       let iframe = document.getElementById('cassh-vouchers-iframe')
//       console.log(`iframe on scroll >>>`, iframe)
//       // let set = {
//       //   'scrollTop': $(window).scrollTop(),
//       //   'offset': iframe.offset().top,
//       //   // 'offset': $('#cassh-vouchers-iframe').offset().top,
//       //   'height': $(window).height(),
//       //   'offsetBottom': Math.abs($(window).height() - iframe.offset().top - iframe.height()),
//       //   // 'offsetBottom': Math.abs($(window).height() - $('#cassh-vouchers-iframe').offset().top - $('#cassh-vouchers-iframe').height()),
//       // }
//       //
//       // // Send message to iframe
//       // console.log(`sending message to iframe`)
//       // iframe.contentWindow.postMessage(JSON.stringify(set), 'https://cassh-software.github.io/cassh-vouchers-iframe/public/resources/js/cassh-vouchers.js')
//     })
//
//     document.getElementsByTagName('head')[0].appendChild(script)
//     console.log(`done...`)
//   }
// })