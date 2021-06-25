

function runSearch(){

    //prevent from reloading the webpage
    d3.event.preventDefault();

    //run filter
    var inputDate = d3.select('#datetime').property('value');
    var filterData = data.filter(i => i.datetime === inputDate);

    //check filter is working
    console.log(inputDate);
    console.log(filterData);

    //add rows to HTML
    TableBody = d3.select('#TableBody')

    TableBody.html('')

    filterData.forEach(i => {
        var row = TableBody.append('tr');
        Object.entries(i).forEach(([key, value]) => {
            row.append('td').text(value);
        });
    })

};

d3.select('#filter-btn').on('click', runSearch);
d3.select('#form').on('submit', runSearch);

