var activeModal;

function toggleFCView(showAdvanced) {
  var fcAdvancedButton = document.getElementById("fc-advanced-button")
  var isAdvancedShown = fcAdvancedButton.classList.contains("fc-button-active")
  if (showAdvanced === isAdvancedShown) return

  document.getElementById("fc-simple-button").classList.toggle("fc-button-active");
  fcAdvancedButton.classList.toggle("fc-button-active");
  toggle("fcSimple");
  toggle("fcAdvanced");
}

function toggleBRSpeedView(showMedian) {
  var brspeedMedianButton = document.getElementById("brspeed-median-button")
  var isMedianShown = brspeedMedianButton.classList.contains("brspeed-button-active")
  if (showMedian === isMedianShown) return

  document.getElementById("brspeed-95-button").classList.toggle("brspeed-button-active");
  brspeedMedianButton.classList.toggle("brspeed-button-active");
  toggle("brspeed95");
  toggle("brspeedMedian");
}



var kofiwidget = function () {
  var style = "";
  var html = "";
  var color = "";
  var text = "";
  var id = "";
  return {
      init: function (pText, pColor, pId) {
          color = pColor;
          text = pText;
          id = pId;
          style =
              "img.kofiimg{display: initial!important;vertical-align:middle;height:13px!important;width:20px!important;padding-top:0!important;padding-bottom:0!important;border:none;margin-top:0;margin-right:5px!important;margin-left:0!important;margin-bottom:3px!important;content:url('https://storage.ko-fi.com/cdn/cup-border.png')}.kofiimg:after{vertical-align:middle;height:25px;padding-top:0;padding-bottom:0;border:none;margin-top:0;margin-right:6px;margin-left:0;margin-bottom:4px!important;content:url('https://storage.ko-fi.com/cdn/whitelogo.svg')}.btn-container{display:inline-block!important;white-space:nowrap;min-width:160px}span.kofitext{color:#fff !important;letter-spacing: -0.15px!important;text-wrap:none;vertical-align:middle;line-height:33px !important;padding:0;text-align:center;text-decoration:none!important; text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);}.kofitext a{color:#fff !important;text-decoration:none:important;}.kofitext a:hover{color:#fff !important;text-decoration:none}a.kofi-button{box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);line-height:36px!important;min-width:150px;display:inline-block!important;background-color:#29abe0;padding:2px 12px !important;text-align:center !important;border-radius:7px;color:#fff;cursor:pointer;overflow-wrap:break-word;vertical-align:middle;border:0 none #fff !important;font-family:'Quicksand',Helvetica,Century Gothic,sans-serif !important;text-decoration:none;text-shadow:none;font-weight:700!important;font-size:14px !important}a.kofi-button:visited{color:#fff !important;text-decoration:none !important}a.kofi-button:hover{opacity:.85;color:#f5f5f5 !important;text-decoration:none !important}a.kofi-button:active{color:#f5f5f5 !important;text-decoration:none !important}.kofitext img.kofiimg {height:15px!important;width:22px!important;display: initial;animation: kofi-wiggle 3s infinite;}";
          style = style + "@keyframes kofi-wiggle{0%{transform:rotate(0) scale(1)}60%{transform:rotate(0) scale(1)}75%{transform:rotate(0) scale(1.12)}80%{transform:rotate(0) scale(1.1)}84%{transform:rotate(-10deg) scale(1.1)}88%{transform:rotate(10deg) scale(1.1)}92%{transform:rotate(-10deg) scale(1.1)}96%{transform:rotate(10deg) scale(1.1)}100%{transform:rotate(0) scale(1)}}";
          style = "<style>" + style + "</style>";
          html =
              "<link href='https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>";
          html +=
              '<div class=btn-container><a title="Support me on ko-fi.com" class="kofi-button" style="background-color:[color];" href="https://ko-fi.com/[id]" target="_blank"> <span class="kofitext"><img src="https://storage.ko-fi.com/cdn/cup-border.png" class="kofiimg"/>[text]</span></a></div>';
      },
      getHTML: function () {
          var rtn = style + html.replace("[color]", color).replace("[text]", text).replace("[id]", id);
          return rtn;
      },
      draw: function (parentID) {
          document.getElementById(parentID).innerHTML += style + html.replace("[color]", color).replace("[text]", text).replace("[id]", id);
      }
  };
}();

function toggle(toggleId) {
  var x = document.getElementById(toggleId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleNestedView(toggleId) {
  var x = document.getElementById(toggleId);
  if (x.style.display === "none") {
    x.style.display = "block";
    var accordion = x.closest('.panel');
    accordion.style.maxHeight = Math.max(accordion.scrollHeight, accordion.offsetHeight, accordion.clientHeight) + "px";
  } else {
    x.style.display = "none";
  }
}

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal.style.display !== "block") {
    modal.style.display = "block";
    activeModal = modalId;
    window.addEventListener("click", modalOverlayCloseHandler);
  }
}

function closeModal() {
  var modal = document.getElementById(activeModal);
  if (modal.style.display !== "none") {
    modal.style.display = "none";
    activeModal = null;
    window.removeEventListener("click", modalOverlayCloseHandler);
  }
}

// check if modal overlay was clicked
function modalOverlayCloseHandler(event) {
  var modal = document.getElementById(activeModal);
  if(event.target === modal) {
    closeModal();
  }
}

$(document).ready(function(){
  $("#footer-root").load("../acnh/0footer.html", function(){
    kofiwidget.init('Support Me on Ko-fi', '#29abe0', 'W7W21Q1LX');
    kofiwidget.draw('kofi');
  });

  $("#nav-root").load("../acnh/0nav.html");

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = Math.max(panel.scrollHeight, panel.offsetHeight, panel.clientHeight) + "px";
      } 
    });
  }
})
