	var list = $('#setLocations li').toArray();
    var locations = [];
    list.forEach(function(item, index){
    	var obj = {name:item.innerText, id:item.dataset.id};
        locations.push(obj);
    });
    console.log(locations);
    client.infoDialog(JSON.stringify(locations), "Selected List");