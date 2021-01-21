// from data.js
var tableData = data;

// YOUR CODE HERE! 
var tbody = d3.select("tbody");
console.log(data);

// Build table
data.forEach(function(ufo_sightings) {
    console.log(ufo_sightings);
    var row = tbody.append("tr");
    Object.entries(ufo_sightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
