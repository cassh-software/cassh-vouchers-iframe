(function (window, document, version, callback) {
  var j, d
  var loaded = false
  if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'
    script.onload = script.onreadystatechange = function () {
      if (!loaded && (!(d = this.readyState) || d == 'loaded' || d == 'complete')) {
        callback((j = window.jQuery).noConflict(1), loaded = true)
        j(script).remove()
      }
    }

    document.getElementsByTagName('head')[0].appendChild(script)
  }
})(window, document, '1.7.2', function ($, jquery_loaded) {
  if ($('#panel-gift-items').length > 0) {
    $('#panel-gift-items').text('')
    $('<iframe id="onetree-iframe" name="otsessionframe" width="100%" scrolling="no" frameborder="0"></iframe>').appendTo('#panel-gift-items')
    $('#onetree-iframe').attr({
      'src': 'https://admin.one-tree.net/order/init/4?PHPSESSID=dlubipkm9ab6n5qrsvdi83sd02',
      'style': 'border: 0 none; overflow-y: hidden; min-height: 300px;'
    })

    if (!Array.prototype.forEach) {
      Array.prototype.forEach = function (fun /*, thisArg */) {
        'use strict'
        if (this === void 0 || this === null || typeof fun !== 'function') throw new TypeError()

        var
          t = Object(this),
          len = t.length >>> 0,
          thisArg = arguments.length >= 2 ? arguments[1] : void 0

        for (var i = 0; i < len; i++)
          if (i in t)
            fun.call(thisArg, t[i], i, t)
      }
    }

    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://admin.one-tree.net/assets/js/iframe-resizer/iframeResizer.min.js'
    script.onload = script.onreadystatechange = function () {
      if (typeof iFrameResize !== 'undefined') {
        iFrameResize({
          checkOrigin: false,
          enablePublicMethods: true
        }, '#onetree-iframe')
      }
    }

    /**
     * Receives message when fancybox has been opened
     * @param  message
     * @return
     */
    function receiver (e) {
      if (e.data == 'show details clicked' || e.data == 'page loaded') {
        var iframe = document.getElementById('onetree-iframe')
        var set = {
          'scrollTop': $(window).scrollTop(),
          'offset': $('#onetree-iframe').offset().top,
          'height': $(window).height(),
          'offsetBottom': Math.abs($(window).height() - $('#onetree-iframe').offset().top - $('#onetree-iframe').height()),
          'clickOverride': true,
          'iframeHeight': $('#onetree-iframe').height()
        }

        // Send message to iframe
        iframe.contentWindow.postMessage(JSON.stringify(set), 'https://admin.one-tree.net/order/init/4?PHPSESSID=dlubipkm9ab6n5qrsvdi83sd02')
      } else if (e.data == 'fixed iframe height') {
        $('#onetree-iframe').height('1200px')
      } else if (e.data == 'scroll to top') {
        // Attempt to scroll them 150px above the top of the iframe
        var scrollOffset = $('#onetree-iframe').offset().top
        if (scrollOffset < 0) scrollOffset = 0
        $('html, body').animate({ scrollTop: scrollOffset }, '200')
      } else if (e.data == 'scroll to middle') {

        var el = $('#onetree-iframe')
        var elOffset = el.offset().top
        var elHeight = el.height()
        var windowHeight = $(window).height()
        var offset

        if (elHeight < windowHeight) {
          offset = elOffset - ((windowHeight / 2) - (elHeight / 2))
        } else {
          offset = elOffset + ((elHeight - windowHeight) / 2)
        }

        $('html, body').animate({ scrollTop: offset }, 200)
        return false
      }
    }

    if (window.addEventListener) {
      window.addEventListener('message', receiver, false)
    } else {
      window.attachEvent('message', receiver)
    }

    // Sends messages to iframe on scroll
    $(window).scroll(function () {
      var iframe = document.getElementById('onetree-iframe')
      var set = {
        'scrollTop': $(window).scrollTop(),
        'offset': $('#onetree-iframe').offset().top,
        'height': $(window).height(),
        'offsetBottom': Math.abs($(window).height() - $('#onetree-iframe').offset().top - $('#onetree-iframe').height()),
      }

      // Send message to iframe
      iframe.contentWindow.postMessage(JSON.stringify(set), 'https://admin.one-tree.net/order/init/4?PHPSESSID=dlubipkm9ab6n5qrsvdi83sd02')
    })

    document.getElementsByTagName('head')[0].appendChild(script)

  }
})