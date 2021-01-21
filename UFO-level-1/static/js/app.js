// from data.js
var tableData = data;

// use D3 to select the table body and create a variable for it
var tbody = d3.select("tbody");
// console.log(data); --just to check data

// start of loop to get the data into the individual table rows
data.forEach(function(ufo_sightings) {
  //console.log(ufo_sightings);  --just to check the data
 
  //create variable to be used to append to each table row
    var row = tbody.append("tr");
  //cycling through each object in the array key and value 
    Object.entries(ufo_sightings).forEach(function([key, value]) {
      //console.log(key, value); -- just to check data
      //append table data to each table row
        var cell = row.append("td");
      //grab the text values
        cell.text(value);
    });
});
