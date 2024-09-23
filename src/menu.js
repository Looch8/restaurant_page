export default function menu() {
	const menuObj = {
		itemOne: {
			name: "Big Bang Bruschetta",
			ingredients: [
				"1 baguette, sliced into 1/2-inch thick slices",
				"3 large Cosmic Tomatoes (heirloom or beefsteak), diced",
				"1 Galactic Purple Onion, finely chopped",
				"2 Lightyears of Fresh Basil, chopped",
			],
			instructions: [
				"Preheat the oven to 400°F (200°C).",
				"Place the baguette slices on a baking sheet and brush both sides with a bit of olive oil. Toast in the oven for about 5 minutes until golden brown.",
				"Rub each toasted slice with the garlic halves to infuse flavor.",
			],
		},
		itemTwo: {
			name: "Quantum Quasar Quiche",
			ingredients: [
				"1 premade Pie Crust from the Timewarp Bakery",
				"4 Nebula Eggs, beaten",
				"1 cup Cosmic Cream (heavy cream)",
			],
			instructions: [
				"Preheat the oven to 375°F (190°C).",
				"Place the pie crust in a 9-inch pie dish and trim any excess dough.",
				"In a bowl, whisk together the Nebula Eggs and Cosmic Cream until well blended.",
			],
		},
	};

	const div = document.createElement("div");
	const listOne = document.createElement("ul");
	const listTwo = document.createElement("ul");
	const headerOne = document.createElement("h3");
	const headerTwo = document.createElement("h3");

	const bruschetta = [
		menuObj.itemOne.name,
		menuObj.itemOne.ingredients,
		menuObj.itemOne.instructions,
	];

	const quiche = [
		menuObj.itemTwo.name,
		menuObj.itemTwo.ingredients,
		menuObj.itemTwo.instructions,
	];

	headerOne.textContent = bruschetta[0];
	listOne.textContent = bruschetta[1];
	headerTwo.textContent = quiche[0];
	listTwo.textContent = quiche[1];
	div.appendChild(headerOne);
	div.appendChild(listOne);
	div.appendChild(headerTwo);
	div.appendChild(listTwo);

	// Remove current children element from parent div
	content.replaceChildren();

	content.appendChild(div);
}
