//?=========> MAIN WRAPPER AND ELEMENTS
const main = {
	wrapper: document.querySelector(".wrapper"),
	listItems: document.querySelector(".wrapper .list"),
	thumbnail: document.querySelector(".wrapper .thumbnail"),
};

//?=========> BUTTONS AND TIME
const mainBtn = {
	nextBtn: document.getElementById("next"),
	prevBtn: document.getElementById("prev"),
};
const time = {
	timeRunning: 3000,
	timeAutoNext: 5000,
};

//?=========> RUNTIME
let runTimeOut;

//?=========> EVENT LISTENERS FOR NEXT BUTTON
mainBtn.nextBtn.onclick = () => {
	showSlider("next");
};

//?=========> EVENT LISTENERS FOR PREVIOUS BUTTON
mainBtn.prevBtn.onclick = () => {
	showSlider("prev");
};

//?=========> RUN AUTO SLIDER
let runAutoRun = setTimeout(() => {
	mainBtn.nextBtn.click();
}, time.timeAutoNext);

//?=========> SHOW SLIDER WITH SELECTED TYPE
const showSlider = (type) => {
	let itemSlider = document.querySelectorAll(".wrapper .list .items");
	let itemThumbnail = document.querySelectorAll(
		".wrapper .thumbnail .items"
	);
	//?=========> HIDE CURRENT ACTIVE THUMBNAIL
	if (type === "next") {
		main.listItems.appendChild(itemSlider[0]);
		main.thumbnail.appendChild(itemThumbnail[0]);
		main.wrapper.classList.add("next");
	} else {
		//?=========> SHOW THE NEXT ACTIVE THUMBNAIL
		let positionLastItem = itemSlider.length - 1;
		main.listItems.prepend(itemSlider[positionLastItem]);
		main.thumbnail.prepend(itemThumbnail[positionLastItem]);
		main.wrapper.classList.add("prev");
	}

	//?=========> SHOW THE NEXT ACTIVE THUMBNAIL
	clearTimeout(runTimeOut);
	runTimeOut = setTimeout(() => {
		main.wrapper.classList.remove("next");
		main.wrapper.classList.remove("prev");
	}, time.timeRunning);

	//?=========> START AUTO SLIDER
	clearTimeout(runAutoRun);
	runAutoRun = setTimeout(() => {
		mainBtn.nextBtn.click();
	}, time.timeAutoNext);
};
