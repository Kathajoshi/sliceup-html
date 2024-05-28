function faqTabs() {
  let tabsContainer = document.querySelector("#tabs");
  let tabTogglers = tabsContainer.querySelectorAll("#tabs .menu a");
  // console.log(tabTogglers);
  tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
      if(e.target.href.toString().indexOf("#") != -1){
        e.preventDefault();
        let tabName = this.getAttribute("href");
        let tabContents = document.querySelector("#tab-contents");
        for (let i = 0; i < tabContents.children.length; i++) {
          tabTogglers[i].classList.remove('active');
          // console.log(tabTogglers[i]);
          // console.log("#" + tabContents.children[i].id);
          tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.add("hidden");
  
        }
        e.target.classList.add("active");
      }
    });
  });


  //this is the button
	var acc = document.getElementsByClassName("course-accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		//when one of the buttons are clicked run this function
	  acc[i].onclick = function() {
		//variables
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("course-panel");
		var courseAccordion = document.getElementsByClassName("course-accordion");
		var courseAccordionActive = document.getElementsByClassName("course-accordion active");

		/*if pannel is already open - minimize*/
		if (panel.style.maxHeight){
			//minifies current pannel if already open
			panel.style.maxHeight = null;
			//removes the 'active' class as toggle didnt work on browsers minus chrome
			this.classList.remove("active");
		} else { //pannel isnt open...
			//goes through the buttons and removes the 'active' css (+ and -)
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}
			//Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
			for (var iii = 0; iii < coursePanel.length; iii++) {
			  this.classList.remove("active");
			  coursePanel[iii].style.maxHeight = null;
			}
		  //opens the specified pannel
		  panel.style.maxHeight = panel.scrollHeight + "px";
		  //adds the 'active' addition to the css.
		  this.classList.add("active");
		} 
	  }//closing to the acc onclick function
	}//closing to the for loop.









}
function swiperInit() {
  var ourservicesSlider = document.querySelectorAll(".slider-ourservices");
  ourservicesSlider.forEach((slider) => {
    slider.style.setProperty("--swiper-theme-color", "currentColor");
    //console.log(slider);
    const swiper = new Swiper(slider.querySelector(".swiper"), {
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 16,
      navigation: true,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2.2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });
}
// Run the function on page load
document.addEventListener("DOMContentLoaded", () => {
  swiperInit();
  faqTabs();
});
