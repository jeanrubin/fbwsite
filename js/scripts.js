(function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);


$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


(function (global) {
	var fb = {};

	var homeHtml = "accueil-content.html";
	var dashboardHtml = "dashboard-content.html";
	var enregistrerHtml = "enregistrer-content.html";


	//Convinience function forinserting innerHtml for 'select'
	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	//show loading icon inside element identified by 'selector'
	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='../img/page-loader.gif'></div>";
		insertHtml(selector, html);
	};

	


	//On page load(before images or CSS)
	document.addEventListener("DOMContentLoaded",
		function(event){
			// On first load, show me view
			showLoading("#main-content");

			$ajaxUtils.sendGetRequest(
				homeHtml,
				function (responseText) {
					document.querySelector("#main-content")
						.innerHTML = responseText;
					console.log("ajaxUtils value: " + responseText);
				},
				false);
		}
	);	


	fb.showContentPage = function (argument) {
		// body...
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			argument,
			function (responseText) {
				document.querySelector("#main-content")
					.innerHTML = responseText;
				console.log("ajaxUtils value: " + responseText);
			},
			false);
	}


	global.$fb = fb;
})(window);
