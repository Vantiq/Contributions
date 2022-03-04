    Docker.listContainers(function(results){
    	client.sendClientEvent("ce_listContainers", results);
	});