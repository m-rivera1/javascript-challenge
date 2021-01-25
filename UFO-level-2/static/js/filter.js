
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
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");
 
  // Get the value property of the input element
  var dateValue = inputDate.property("value");
  var cityValue = inputCity.property("value");
  var stateValue = inputState.property("value");
  var countryValue = inputCountry.property("value");
  var shapeValue = inputShape.property("value");

  
  // if-Else loop to determine which input value to filter by

  if(dateValue) {
    var filteredData = dataTable.filter(date => date.datetime === dateValue);

    // ****placeholder- clear table and load filtered data into table***
    console.log(dateValue);
    fillTable(filteredData);
  }

  else if(cityValue) {
     var filteredData = dataTable.filter(city => city.city === cityValue);

  //   // ****placeholder- clear table and load filtered data into table***
     console.log(cityValue);
     fillTable(filteredData);
 }

  else if (stateValue) {
    var filteredData = dataTable.filter(state => state.state === stateValue);

    // ****placeholder- clear table and load filtered data into table***
    console.log(stateValue);
    fillTable(filteredData);

  }
  
  else if(countryValue) {
    var filteredData = dataTable.filter(country => country.country === countryValue);

  //   // ****placeholder- clear table and load filtered data into table***
    console.log(countryValue);
    fillTable(filteredData);

   }

  else if(shapeValue) {
    var filteredData = dataTable.filter(shape => shape.shape === shapeValue);

  //   // ****placeholder- clear table and load filtered data into table***
    console.log(shapeValue);
    fillTable(filteredData);

  }

  
function fillTable()  {
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

 


  // // use D3 to select the table body and create a variable for it
  //  var tbody = d3.select("tbody");

  //  // to clear the table body before insterting sorted data or else new data will append to the end of table
  //  tbody.html("");

  //  filteredData.forEach(function(ufo_sightings) {
  //   console.log(ufo_sightings);  //--just to check the data
   
  //   //create variable to be used to append to each table row
  //     var row = tbody.append("tr");
  //   //cycling through each object in the array key and value 
  //     Object.entries(ufo_sightings).forEach(function([key, value]) {
  //         console.log(value); // -- just to check data
  //       //append table data to each table row
  //         var cell = row.append("td");
  //       //grab the text values
  //         cell.text(value);
  //         console.log(value);
  //       });
   //  });
 }