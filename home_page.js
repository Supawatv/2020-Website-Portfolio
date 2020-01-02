// Javascript for Home Page

// Run once body is loaded
function init() {
	fade_grid_in();
	includeHTML();
}

// Hover states for splash
$(document).ready(function() {
	// HCI explanation
	$("#HCI").mouseenter(function() {
		$("#HCI").text("Human-computer interaction")
	});
	$("#HCI").mouseleave(function() {
		$("#HCI").text("HCI")
	});
});

// Fade grid in once loaded
function fade_grid_in() {
	console.log("it ran")
	$(document).ready(function() {
		document.getElementById("gallery").style.display = "none"
		// Fade in gallery
		$('#gallery').fadeIn("slow");
	});
}