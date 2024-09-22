export default function about() {
	const div = document.createElement("div");
	const header = document.createElement("h1");
	const description = document.createElement("p");
	const content = document.querySelector("#content");

	header.textContent = " A Journey to the Ultimate Dining Experience";
	description.textContent =
		"Welcome to The Restaurant at the End of the Universe, where culinary exploration meets cosmic wonder. Nestled at the very edge of existence, we offer a dining experience that transcends time and space, transporting you to a realm where flavors are as infinite as the stars.Our chefs craft dishes that are both timeless and innovative, using ingredients sourced from the farthest reaches of the universe. Whether you're savoring a cosmic-inspired cocktail or indulging in an interstellar dessert, each bite is a celebration of the universe's boundless beauty.Join us on this gastronomic adventure and discover what it truly means to dine among the stars. At The Restaurant at the End of the Universe, the journey is as extraordinary as the destination.";

	div.appendChild(header);
	div.appendChild(description);

	// Remove current children element from parent div
	content.replaceChildren();

	content.appendChild(div);
}
