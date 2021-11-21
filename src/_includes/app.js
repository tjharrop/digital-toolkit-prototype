function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let dismissed = getCookie("dismissed");
  console.log(dismissed);
  if (!dismissed) {
    console.log('dsad');
    let alertMessage = document.createElement("div");
    alertMessage.innerHTML = `
      <div class="nsw-global-alert nsw-global-alert--critical js-global-alert" role="alert" id="proto-warn">
        <div class="nsw-global-alert__wrapper">
          <div class="nsw-global-alert__content">
            <div class="nsw-global-alert__title">This is a prototype</div>
            <p>You're currently using a prototype of the NSW Design &amp; Technology resources website which is for demonstration and testing only.</p>
          </div>
          <button class="nsw-icon-button js-close-alert" type="button" aria-expanded="true" id="close-global">
            <span class="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</span>
            <span class="sr-only">Close message</span>
          </button>
        </div>
      </div>
    `;
    document.querySelector('body').prepend(alertMessage);

    document.getElementById('close-global').addEventListener('click', function(e){
      setCookie("dismissed", true, 1);
      document.getElementById('proto-warn').style.display = 'none';
    });
  }
}

window.addEventListener("load", () => {
  checkCookie();
});
