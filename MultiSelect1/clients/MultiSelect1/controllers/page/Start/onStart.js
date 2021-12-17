
    //Clear the list, needed for page reloads.
    $('#allLocations li').remove();
    $('#setLocations li').remove();
    
    
    $( function() {
        $( "#setLocations, #allLocations" ).sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    });

    /* Use parameters when loading from a datatable, remove the select on "selected" block
    
    var setLocations = parameters.locations;
	
    */
    
    client.select("selected", {}, function(setLocations){
        loadLocations(setLocations);
    });
    
    function loadLocations(setLocations){
    if (setLocations) {
        setLocations.forEach(function(item, index){
            $('#setLocations').append('<li class="setList" data-id=' + item.id +'>' + item.name + '</li>');
        });    
    }

    client.select("locations", {}, function(results){
        results.forEach(function(item, index){
            var obj = {name:item.name, id:item.id};
            containsObject(obj, setLocations);
        });
    });
	}
        function containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].name === obj.name) {
                return true;
            }
        }
        $('#allLocations').append('<li class="allList" data-id=' + obj.id +'>' + obj.name + '</li>'); 
    }

	



