(function (window, document, version, callback) {
  console.log(`starting first script function...`)
  let j, d
  let loaded = false
  if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
    console.log(`tripped in first script function...`)
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'
    script.onload = script.onreadystatechange = function () {
      if (!loaded && (!(d = this.readyState) || d === 'loaded' || d === 'complete')) {
        callback((j = window.jQuery).noConflict(1), loaded = true)
        j(script).remove()
      }
    }
    document.getElementsByTagName('head')[0].appendChild(script)
  }
})(window, document, '1.7.2', function ($, jquery_loaded) {
  console.log(`starting second script...`)
  if ($('#panel-gift-items').length > 0) {
    console.log(`panel-gift-items found...`)
    $('#panel-gift-items').text('')
    $('<iframe id="cassh-vouchers-iframe" name="otsessionframe" width="100%" scrolling="no"' + ' frameborder="0"></iframe>').appendTo('#panel-gift-items')
    $('#cassh-vouchers-iframe').attr({
      'src': 'http://phplaravel-498523-1577626.cloudwaysapps.com/',
      'style': 'border: 0 none; overflow-y: hidden; min-height: 300px;'
    })

    // if (!Array.prototype.forEach) {
    //   Array.prototype.forEach = function (fun /*, thisArg */) {
    //     'use strict'
    //     if (this === void 0 || this === null || typeof fun !== 'function') throw new TypeError()
    //
    //     let t = Object(this),
    //       len = t.length >>> 0,
    //       thisArg = arguments.length >= 2 ? arguments[1] : void 0
    //
    //     for (let i = 0; i < len; i++)
    //       if (i in t)
    //         fun.call(thisArg, t[i], i, t)
    //   }
    // }

    // let script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.src = 'https://cassh-software.github.io/cassh-vouchers-iframe/public/resources/js/iframe-resizer.js'
    // script.onload = script.onreadystatechange = function () {
    //   if (typeof iFrameResize !== 'undefined') {
    //     iFrameResize({ checkOrigin: false, enablePublicMethods: true }, '#cassh-vouchers-iframe')
    //   }
    // }

    /**
     * Receives message when fancybox has been opened
     * @return
     * @param e
     */
    function receiver (e) {
      console.log(`e >>>`, e)
      if (e.data === 'show details clicked' || e.data === 'page loaded') {
        let iframe = document.getElementById('cassh-vouchers-iframe')
        let set = {
          'scrollTop': $(window).scrollTop(),
          'offset': $('#cassh-vouchers-iframe').offset().top,
          'height': $(window).height(),
          'offsetBottom': Math.abs($(window).height() - $('#cassh-vouchers-iframe').offset().top - $('#cassh-vouchers-iframe').height()),
          'clickOverride': true,
          'iframeHeight': $('#cassh-vouchers-iframe').height()
        }

        // Send message to iframe
        iframe.contentWindow.postMessage(JSON.stringify(set), 'https://cassh-software.github.io/cassh-vouchers-iframe/public/resources/js/cassh-vouchers.js')
      } else if (e.data === 'fixed iframe height') {
        $('#cassh-vouchers-iframe').height('1200px')
      } else if (e.data === 'scroll to top') {
        // Attempt to scroll them 150px above the top of the iframe
        let scrollOffset = $('#cassh-vouchers-iframe').offset().top
        if (scrollOffset < 0) scrollOffset = 0
        $('html, body').animate({ scrollTop: scrollOffset }, 200)
      } else if (e.data === 'scroll to middle') {
        let el = $('#cassh-vouchers-iframe')
        let elOffset = el.offset().top
        let elHeight = el.height()
        let windowHeight = $(window).height()
        let offset

        if (elHeight < windowHeight) {
          offset = elOffset - ((windowHeight / 2) - (elHeight / 2))
        } else {
          offset = elOffset + ((elHeight - windowHeight) / 2)
        }

        $('html, body').animate({ scrollTop: offset }, 200)
        return false
      }
    }

    // if (window.addEventListener) {
    //   window.addEventListener('message', receiver, false)
    // } else {
    //   window.attachEvent('message', receiver)
    // }

    // Sends messages to iframe on scroll
    // $(window).scroll(function () {
    //   let iframe = document.getElementById('cassh-vouchers-iframe')
    //   let set = {
    //     'scrollTop': $(window).scrollTop(),
    //     'offset': $('#cassh-vouchers-iframe').offset().top,
    //     'height': $(window).height(),
    //     'offsetBottom': Math.abs($(window).height() - $('#cassh-vouchers-iframe').offset().top - $('#cassh-vouchers-iframe').height()),
    //   }
    //
    //   // Send message to iframe
    //   iframe.contentWindow.postMessage(JSON.stringify(set), 'https://cassh-software.github.io/cassh-vouchers-iframe/public/resources/js/cassh-vouchers.js')
    // })

    document.getElementsByTagName('head')[0].appendChild(script)
  }
})