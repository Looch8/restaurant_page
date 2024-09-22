import pageload from "./pageload";
import about from "./about";
import menu from "./menu";
import "./styles.css";

function tabSwitching() {
	const aboutBtn = document.querySelector("#about");
	const homeBtn = document.querySelector("#home");
	const menuBtn = document.querySelector("#menu");

	// Initial page load of home screen
	pageload();

	// Tab switching - replace children elements for each tab
	aboutBtn.addEventListener("click", about);
	homeBtn.addEventListener("click", pageload);
	menuBtn.addEventListener("click", menu);
}

tabSwitching();
