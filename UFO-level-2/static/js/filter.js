
// Assign the data from `data.js` to a descriptive variable
var dataTable = data;

// Select the button
var button = d3.selectAll("#aside");

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
  var cityValue = inputCity.property("value").toLowerCase();
  var stateValue = inputState.property("value").toLowerCase();
  var countryValue = inputCountry.property("value").toLowerCase();
  var shapeValue = inputShape.property("value").toLowerCase();

  
  // if-Else loop to determine which input value to filter by

  if(dateValue) {
    var filteredData = dataTable.filter(date => date.datetime === dateValue);
    fillTable(filteredData);
  }

  else if(cityValue) {
     var filteredData = dataTable.filter(city => city.city === cityValue);
     fillTable(filteredData);
 }

  else if (stateValue) {
    var filteredData = dataTable.filter(state => state.state === stateValue);
    fillTable(filteredData);

  }
  
  else if(countryValue) {
    var filteredData = dataTable.filter(country => country.country === countryValue);
    fillTable(filteredData);

   }

  else if(shapeValue) {
    var filteredData = dataTable.filter(shape => shape.shape === shapeValue);
    fillTable(filteredData);

  }

// callable function to add the filtered search results to the html table
  
function fillTable()  {

  var tbody = d3.select("tbody");
 
  tbody.html("");
     
  filteredData.forEach(function(ufo_sightings) {
    var row = tbody.append("tr");
    Object.entries(ufo_sightings).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    });
    });    
  }
}