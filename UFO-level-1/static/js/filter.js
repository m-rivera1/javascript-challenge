
// Assign the data from `data.js` to a descriptive variable
var dataTable = data;

// Select the button
var button = d3.selectAll("#filter-btn");

// Select the form
var form = d3.selectAll("#form");


// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(dataTable);

  var filteredData = dataTable.filter(date => date.datetime === inputValue);

  console.log(filteredData); 


  // use D3 to select the table body and create a variable for it
   var tbody = d3.select("tbody");

   // to clear the table body before insterting sorted data or else new data will append to the end of table
   tbody.html("");

   filteredData.forEach(function(ufo_sightings) {
    console.log(ufo_sightings);  //--just to check the data
   
    //create variable to be used to append to each table row
      var row = tbody.append("tr");
    //cycling through each object in the array key and value 
      Object.entries(ufo_sightings).forEach(function([key, value]) {
          console.log(value); // -- just to check data
        //append table data to each table row
          var cell = row.append("td");
        //grab the text values
          cell.text(value);
          console.log(value);
        });
    });
}