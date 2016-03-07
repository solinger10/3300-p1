//Credit to http://bl.ocks.org/nbremer/6506614

//chart2
d3.csv("data1.csv", function(err, data) {
var w = 750,
	h = 250;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Freshman','Sophomore','Junior','Senior'];

 	var arr = [];
 	for (var i = 0; i < 4; i++) {
 		var array = [];
 		arr.push(array);
 	}
 	for (var i = 0; i < data.length; i++) {
 		var cur = data[i];
 		var coffee = cur.cup;
 		var gpa = cur.GPA;
 		var year = cur.year;
 		
 		arr[year - 1].push({axis:gpa, value: coffee});
 	}


//Data

//Options for the Radar chart, other than default
/* var mycfg = {
  w: w,
  h: h,
  maxValue: 4.3,
  levels: 4,
  ExtraWidthX: 100
} */

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart1.draw("#chart2", arr, mycfk);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#chart2 svg');

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040");
	
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(-10,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 10;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 10 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;



	  var mycfk = {
  w: w,
  h: h,
  maxValue: 9,
  levels: 9,
  //ExtraWidthX: 300
}

 }) 

