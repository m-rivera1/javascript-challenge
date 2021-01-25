
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
  var inputDuration = d3.select("#durationMinutes");
  var inputComments = d3.select("#comments");

  // Get the value property of the input element
  var inputDate = inputElement.property("value");
  var inputCity = inputElement.property("value");
  var inputState = inputElement.property("value");
  var inputCountry = inputElement.property("value");
  var inputShape = inputElement.property("value");
  var inputDuration = inputElement.property("value");
  var inputComments = inputElement.property("value");


  console.log(inputDate, inputCity, inputCountry, inputState, inputShape, inputDuration, inputComments);
  
  // if-Else loop to determine which input value to filter by

  if(inputDate) {
    var filteredData = dataTable.filter(date => date.datetime === inputDate);

    // ****placeholder- clear table and load filtered data into table***
    console.log(inputDate, inputCity, inputCountry, inputState, inputShape, inputDuration, inputComments);

  }

  else if(inputCity) {
    var filteredData = dataTable.filter(city => city.city === inputCity);

    // ****placeholder- clear table and load filtered data into table***
    console.log(inputDate, inputCity, inputCountry, inputState, inputShape, inputDuration, inputComments);

  }

  else if(inputState) {
    var filteredData = dataTable.filter(state => state.state === inputState);

    // ****placeholder- clear table and load filtered data into table***
    console.log(inputDate, inputCity, inputCountry, inputState, inputShape, inputDuration, inputComments);

  }
  
  else if(inputCountry) {
    var filteredData = dataTable.filter(country => country.country === inputCountry);

    // ****placeholder- clear table and load filtered data into table***
    console.log(inputDate, inputCity, inputCountry, inputState, inputShape, inputDuration, inputComments);

  }

  else if(inputShape) {
    var filteredData = dataTable.filter(shape => shape.shape === inputShape);

    // ****placeholder- clear table and load filtered data into table***
    console.log(inputDate, inputCity, inputCountry, inputState, inputShape, inputDuration, inputComments);

  }

  else if(inputDuration) {
    var filteredData = dataTable.filter(duration => duration.duration === inputDuration);

    // ****placeholder- clear table and load filtered data into table***
    console.log(inputDate, inputCity, inputCountry, inputState, inputShape, inputDuration, inputComments);

  }
  
  else if(inputComments) {
    var filteredData = dataTable.filter(comments => comments.comments === inputComments);

    // ****placeholder- clear table and load filtered data into table***
    console.log(inputDate, inputCity, inputCountry, inputState, inputShape, inputDuration, inputComments);

  }
  

  


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