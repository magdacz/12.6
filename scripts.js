var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');


function showCountriesList(resp) {
    countriesList.empty(); //wyczyszczenie listy krajów po poprzednim zapytaniu
    resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
        $('<h3>').text('Background information').appendTo(countriesList);
        $('<p>').text(`Capital: ${item.capital}`).appendTo(countriesList);
        $('<p>').text(`Land area: ${item.area}`).appendTo(countriesList);
        $('<p>').text(`Population: ${item.population}`).appendTo(countriesList);
        $('<p>').text(`Language(s): ${item.languages}`).appendTo(countriesList);
        $('<p>').text(`Currency: ${item.currencies}`).appendTo(countriesList);
    })
}


function searchCountries() {
    var countryName = $('#country-name').val(); //val() zwraca lub ustawia wartość właściwości wybranego elementu.
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}


$('#search').click(searchCountries);