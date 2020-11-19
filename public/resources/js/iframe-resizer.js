window.onload = () => {
  console.log(`Loading js file...`)
  let head = window.document.getElementsByTagName(`head`)[0]
  console.log(`head --->>>`, head)

  let jquery = window.document.createElement(`script`)
  jquery.setAttribute(`src`, `http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js`)
  // jquery.setAttribute(`defer`, `defer`)
  console.log(`jquery --->>>`, jquery)
  head.appendChild(jquery)

  let resizer = window.document.createElement(`script`)
  resizer.setAttribute(`type`, `text/javascript`)
  resizer.setAttribute(`src`, `https://cassh-software.github.io/cassh-vouchers-iframe/public/resources/js/iframeResizer.min.js`)
  // resizer.setAttribute(`defer`, `defer`)
  console.log(`resizer --->>>`, resizer)
  head.appendChild(resizer)

  let function_call = function () {
    console.log(`Running iFrameResize...`)
    iFrameResize({
      log: false,
      enablePublicMethods: true,
      resizedCallback: function (messageData) {
        $('p#callback').html(
          '<b>Frame ID:</b> ' + messageData.iframe.id +
          ' <b>Height:</b> ' + messageData.height +
          ' <b>Width:</b> ' + messageData.width +
          ' <b>Event type:</b> ' + messageData.type
        )
      },
      messageCallback: function (messageData) {
        $('p#callback').html(
          '<b>Frame ID:</b> ' + messageData.iframe.id +
          ' <b>Message:</b> ' + messageData.message
        )
        alert(messageData.message)
      },
      closedCallback: function (id) {
        $('p#callback').html(
          '<b>IFrame (</b>' + id +
          '<b>) removed from page.</b>'
        )
      }
    })
  }
  console.log(`function_call --->>>`, function_call)

  let resize = window.document.createElement(`script`)
  resize.setAttribute(`type`, `text/javascript`)
  resize.onload = function_call
  // resize.setAttribute(`defer`, `defer`)
  console.log(`resize --->>>`, resize)
  head.appendChild(resize)
  function_call()

  console.log(`Done...`)
}