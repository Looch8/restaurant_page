import backgroundImage from "./images/universe.png";

const pageload = () => {
	const content = document.querySelector("#content");
	//  Create attributes for homepage
	const header = document.createElement("h1");
	const description = document.createElement("h3");
	const image = document.createElement("img");

	header.textContent = "The Restaurant at the End of The Universe";
	description.textContent =
		"Five star restaurant situated at the end of time and matter.";
	image.src = backgroundImage;

	content.replaceChildren();

	content.appendChild(header);
	content.appendChild(description);
	content.appendChild(image);
};

export default pageload;
