
// function buildMetaData(plots) {

// d3.json("Project3---NBA-Projections/data/NewRookiePredictions.json").then(function(data){

// 	var PANEL = d3.select("#selDataset");

// 	PANEL.html("");

// 	Object.entries(data).forEach(([key, value]) => {
// 		PANEL.append("h6").text(`${key}: ${value}`);

// 	});
// 	console.log(data);
// });

// var trace1 = {
// 	x: "Name",
// 	y: "value",
// 	type: "bar"
// }

// var data = [trace1]; 

// var layout = {
// 	title: "Player Prediction", 
// 	xaxis: {title: "Name"},
// 	yaxis: {title: "value"}, 
// }; 

// // Plotly.plot("bar-chart", data, layout); 
// Plotly.newPlot('bar-chart', data, layout, {responsive: true});
// }





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
		//buildCharts(samplePlayerName);
		//buildMetaData(samplePlayerName);
	});
}

function buildPlot(samplePlayerName){
var x_data = ['NBAAST','NBABLK', 'NBAPTS','NBASTL','NBATRB','Value'];
const y_data =[];
d3.json("/jsonData").then(function(data){
			data.forEach((row) => {
				if(samplePlayerName == row['Name']){
					// y_data = [row['NBAAST'],row['NBABLK'],row['NBAPTS'],row['NBASTL'],row['NBATRB'],row['Value']]  
					console.log(row['NBAAST'])
					y_data.push(row['NBAAST'])
					y_data.push(row['NBABLK'])
					y_data.push(row['NBAPTS'])
					y_data.push(row['NBASTL'])
					y_data.push(row['NBATRB'])
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
	title: "Player Prediction", 
	xaxis: {title: samplePlayerName},
	yaxis: {title: "Options"}, 
}; 

// Plotly.plot("bar-chart", data, layout); 
Plotly.newPlot('player_chart', data, layout, {responsive: true});

		});
}


var dropdown = d3.select("#selDataset")
                    // .insert("select", "svg")
                    .on("change", optionChanged());
function optionChanged() {
		var selector = d3.select("#selDataset");
		var samplePlayerName = selector.node().value;
		console.log(samplePlayerName);
		buildPlot(samplePlayerName);

 }
// function optionChanged(Players) {
// 	buildCharts(Players);
// 	buildMetadata(Players);
// }

init();