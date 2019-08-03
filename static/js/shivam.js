function init() {
	var selector = d3.select("#selDataset");
	selector.html("");
	 d3.json("/jsonData").then(function(data){
			data.forEach((row) => {
			//console.log(row)
			selector
				.append("option")
				.text(row['Name'])
				.property("value", row['Name']);
		});

		var samplePlayerName = selector.node().value;
		console.log(samplePlayerName)
		buildPlot(samplePlayerName)
	});
}

function buildPlot(samplePlayerName){
var x_data = ['Points','Rebounds','Assists','Steals','Blocks', 'Player Impact Score'];
const y_data =[];
d3.json("/jsonData").then(function(data){
			data.forEach((row) => {
				if(samplePlayerName == row['Name']){ 
					console.log(row['NBAAST'])
					y_data.push(row['NBAPTS'])
					y_data.push(row['NBATRB'])
					y_data.push(row['NBAAST'])
					y_data.push(row['NBASTL'])
					y_data.push(row['NBABLK'])
					y_data.push(row['Value'])
					console.log(y_data)
				}
		});
			console.log(y_data)
var trace1 = {
	x: x_data,
	y: y_data,
	type: "bar"
}

var data = [trace1]; 

var layout = {
	title: "NBA Rookie Statline Prediction - "+samplePlayerName, 
	xaxis: {title: "Predicted Statline"},
	yaxis: {title: "Statistic"}, 
}; 

// Plotly.plot("bar-chart", data, layout); 
Plotly.newPlot('player_chart', data, layout, {responsive: true});

		});
}


var dropdown = d3.select("#selDataset")
                    .on("change", optionChanged());
function optionChanged() {
		var selector = d3.select("#selDataset");
		var samplePlayerName = selector.node().value;
		console.log(samplePlayerName);
		buildPlot(samplePlayerName);

 }


init();


