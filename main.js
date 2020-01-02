// Main JS common for all Page

// Hamburger Animation
// Global for overlay state
overlay = false;

// Toggle overlay when hamburger is clicked
$(document).ready(function() {
	// Hide overlay
	document.getElementById("overlay").style.display = "none"
	console.log("ready!");

	// Hamburger Click
	$('#hamburger').on('click', function() {
		$('#overlay').fadeToggle();
	});
});

// When burger is clicked toggle overlay and scroll
function animate_burger(x) {
	x.classList.toggle("change");
	// Toggle global variable
	if (overlay == false) {
		overlay = true;
		disable_scroll();
		return
	} else if (overlay == true) {
		overlay = false;
		enable_scroll();
		return
	};
}

// Disable Scrolling
function disable_scroll() {
	$(document).ready(function() {
		$('html, body').css({
			overflow: 'hidden',
			height: '100%'
		});
	});
}

// Enable Scrolling
function enable_scroll() {
	$(document).ready(function() {
		$('html, body').css({
			overflow: 'auto',
			height: 'auto'
		});
	});
}

// Include HTML
function includeHTML() {
	console.log("including HTML")
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = "Page not found.";
					}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}