var planets = ['earth', 'saturn', 'jupiter', 'uranus', 'pluto', 'mercury', 'mars', 'venus', 'neptune'];

var userInput = document.getElementsByTagName("input")[0];
var emptyH2 = document.getElementsByTagName("h2")[0];

function getPlanet() {
	for(var i = 0; i < planets.length; i++) {
		if(planets[i] == userInput.value.toLowerCase()) {
			emptyH2.innerText = planets[i];
			return;
		}
	}
	alert("That's not a planet");
}