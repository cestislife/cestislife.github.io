let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

if (systemInitiatedDark.matches) {
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else {
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	document.getElementById("theme-toggle").innerHTML = "Light Mode";
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

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
