var ideas = [
	'Mann schabt Fell', 'Mann trägt Säugling', 'Frau rennt', 'Frau auf der Jagd', 'Frau betätigt sich künstlerisch', 'Frau baut Behausung', 'Frau führt Ritual durch', 'Frau stellt Werkzeug her',
	'Frau trägt Jagdbeute', 'Frau schlachtet', 'Frau bemalt Höhlenwände', 'Frau ist Teil eines Begräbnisses', 'Frau stellt Statuette her', 'Frau stellt Objekt / Werkzeug aus Knochen oder Elfenbein her',
	'Mann näht Felle', 'Frau fischt', 'Frau mit passender Muskelmenge für Aktivitäten', 'Grosswildjagd als gemischte Gruppe', 'Frau spielt mit Kind', 'Frau redet mit Kind', 'schwangere Frau',
	'Mann beschäftigt sich mit Kind', 'Alte Menschen töpfern', 'Frau giesst Bronze', 'Kleines Mädchen fängt Tiere und zieht ihnen Fell ab', 'Frau stemmt Felsbrocken', 'Frau bearbeitet Speer',
	'Mann sammelt Nahrung','Mann sammelt Feuerholz', 'Frau zerlegt Jagdbeute', 'Mann bewundert Frau', 'Mann schaut Frau entgegen', 'Mann kocht', 'Frau schnitzt Geweih', 'Frau mit Jagdwaffe',
	'Frau bearbeitet Holz mit Axt', 'Frau baut Feuerstein ab', 'Frau hütet und kümmert sich um Vieh', 'Frau benutzt Ochsenpflug', 'Frauen dreschen Korn',
	'Mann spinnt', 'Mann webt', 'Mann flechtet', 'Mann holt Wasser', 'Mann trägt Tongefäss', 'Mann töpfert', 'Mann mahlt Mehl', 'Mann säht aus', 'Frau als Kriegerin', 'Frau beim Roden',
	'Frau bearbeitet Holz', 'Frau in Führungsposition', 'Frau reitet', 'Frau fährt Wagen', 'Frau betreibt Handel', 'Mann näht Textilien', 'Mann umarmt Kind', 'Frau umarmt Kind',
	'Frau im Bergbau', 'Kind beim Wurzelgraben', 'Frau kehrt von Jagd zurück', 'Frau belädt Ochsenkarren', 'Kind webt', 'Kind trägt Jagdbeute', 'Kinder spielen zusammen', 'Kinder holen Wasser',
	'Kinder passen auf jüngere Kinder auf', 'Kinder sammeln Feuerholz', 'Kinder erlernen die Produktion von Steinwerkzeugen', 'Kind näht Fell', 'Kind kümmert sich um alte Person'

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