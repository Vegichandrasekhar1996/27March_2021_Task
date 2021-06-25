var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function(){
    var country_data = JSON.parse(this.response);
    var USDollar_Currency = country_data.filter(function(item,index)
    {
        return item.currencies[0].code === "USD"
    }).map(function(item,index)
    {
        return item.name

    })
    console.log(USDollar_Currency)
}