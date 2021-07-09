/*----about tabs----*/

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
	if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classlist.add("active");
		const target = e.target.getAttribute("data-target");
		aboutSection.querySelector(".tab-content.active").classlist.remove("active");
		aboutSection.querySelector(target).classList.add("active");
		
	}
}); 