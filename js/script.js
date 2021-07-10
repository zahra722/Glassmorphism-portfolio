
window.addEventListener("load", () =>{
	document.querySelector(".main").classList.remove("hidden");
	document.querySelector(".home-section").classList.add("active");


	document.querySelector(".page-loader").classlist.add("fade-out");
	setTimeout(() =>{
	document.querySelector(".page-loader").style.display = "none";


	},600);
});

