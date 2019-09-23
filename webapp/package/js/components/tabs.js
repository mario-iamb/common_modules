(function(){

	'use strict';

	const Tabs = {
		init: function(){

			window.addEventListener("load", function() {
                // store tabs variable
                var myTabs = document.querySelectorAll(".space-layouts__nav-item");

                function myTabClicks(tabClickEvent) {
                    for (var i = 0; i < myTabs.length; i++) {
                        myTabs[i].classList.remove("active");
                    }
                    
                    // Activate clicked LI
                    var clickedTab = tabClickEvent.currentTarget;
                    clickedTab.classList.add("active");
                    tabClickEvent.preventDefault();

                    
                    // Deactivate all tab-panes
                    var myContentPanes = document.querySelectorAll(".tab-pane");
                    for (var i = 0; i < myContentPanes.length; i++) {
                        myContentPanes[i].classList.remove("active");
                    }

                    // Get clicked LI a's href
                    var anchorReference = clickedTab.firstChild;
                    var activePaneId = anchorReference.getAttribute("href");

                    // Activate relevant tab-pane
                    var activePane = document.querySelector(activePaneId);
                    activePane.classList.add("active");
                }


                for (var i = 0; i < myTabs.length; i++) {
                    myTabs[i].addEventListener("click", myTabClicks)
                }
            });
		}
	}

	module.exports = Tabs.init();

})();