//Render table function
function renderTable(inputTable){
    TableBody = d3.select('#TableBody')
    inputTable.forEach(i => {
        var row = TableBody.append('tr');
        Object.entries(i).forEach(([key, value]) => {
            row.append('td').text(value);
        });
    })
};

//Add default full table 
renderTable(data);

//Table filtering and re-rendering function
function runSearch(){

    //prevent from reloading the webpage
    d3.event.preventDefault();

    //run filter
    var inputDate = d3.select('#datetime').property('value');
    var filterData = data.filter(i => i.datetime === inputDate);

    //empy table
    TableBody.html('');

    //Add new rows:
    if(filterData.length === 0){
        renderTable(data);
    } else {
        renderTable(filterData);
    }
};

//Observers
d3.select('#filter-btn').on('click', runSearch);
d3.select('#form').on('submit', runSearch);