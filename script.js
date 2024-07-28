let nextDom = document.getElementById("next"); //? Get the next button DOM
let prevDom = document.getElementById("prev"); //? Get the previous button DOM
let wrapperDom = document.querySelector(".wrapper"); //? Get the wrapper DOM
let listItemsDom = document.querySelector(".wrapper .list"); //? Get the list items DOM
let thumbnailDom = document.querySelector(".wrapper .thumbnail"); //? Get the thumbnail DOM

//? ========>>> MOVES TO THE NEXT ITEM
nextDom.onclick = () => {
	showSlider("next");
};
//? ========>>> MOVES TO THE PREV ITEM
prevDom.onclick = () => {
	showSlider("prev");
};

let timeRunning = 2000; //? Time in milliseconds between slides
let timeAutoNext = 5000; //? Time in milliseconds between auto-next slide
let runTimeOut; //? Timeout for running the slide

//? ========>>> STARTS THE AUTO-RUN
let runAutoRun = setTimeout(() => {
	nextDom.click();
}, timeAutoNext);

//? ========>>> SHOW THE SLIDER WITH THE SELECTED TYPE
function showSlider(type) {
	let itemSlider = document.querySelectorAll(".wrapper .list .items");
	let itemThumbnail = document.querySelectorAll(
		".wrapper .thumbnail .items"
	);

	//? ========>>> HIDE CURRENT ACTIVE THUMBNAIL
	if (type === "next") {
		listItemsDom.appendChild(itemSlider[0]);
		thumbnailDom.appendChild(itemThumbnail[0]);
		wrapperDom.classList.add("next");
	} else {
		let positionLastItem = itemSlider.length - 1;
		listItemsDom.prepend(itemSlider[positionLastItem]);
		thumbnailDom.prepend(itemThumbnail[positionLastItem]);
		wrapperDom.classList.add("prev");
	}

	//? ========>>> SHOW THE NEXT ACTIVE THUMBNAIL
	clearTimeout(runTimeOut);
	runTimeOut = setTimeout(() => {
		wrapperDom.classList.remove("next");
		wrapperDom.classList.remove("prev");
	}, timeRunning);

	//? ========>>> STARTS THE AUTO-RUN
	clearTimeout(runAutoRun);
	runAutoRun = setTimeout(() => {
		nextDom.click();
	}, timeAutoNext);
}
