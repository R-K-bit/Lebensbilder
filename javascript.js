var ideas = [
	'idea 1',
	'idea 2',
	'idea 3'
]



function newIdea() {
	// init
	var randomNumber1 = -1;
	var randomNumber2 = -1;
	var randomNumber3 = -1;

	// randomize
	randomNumber1 = Math.floor(Math.random() * (ideas.length));
	while (randomNumber2 == -1 || randomNumber2 == randomNumber1)
	{
		randomNumber2 = Math.floor(Math.random() * (ideas.length));
	}

	while (randomNumber3 == -1 || randomNumber3 == randomNumber1 || randomNumber3 == randomNumber2)
	{
		randomNumber3 = Math.floor(Math.random() * (ideas.length));
	}

	// display results
	document.getElementById('ideaDisplay').innerHTML = ideas[randomNumber1]
	document.getElementById('ideaDisplay2').innerHTML = ideas[randomNumber2]
	document.getElementById('ideaDisplay3').innerHTML = ideas[randomNumber3]
}