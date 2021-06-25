var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function(){
    var country_data = JSON.parse(this.response);
    country_data.forEach(function(item){
        console.log(`Name: ${item.name},Capital: ${item.capital},Flag_URL: ${item.flag}.`);
    });   
}