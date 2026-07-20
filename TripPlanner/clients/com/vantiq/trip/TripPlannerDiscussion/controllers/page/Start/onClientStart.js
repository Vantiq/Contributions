    // lock the text-entry field in Discussion widget until TripPlannerDiscussion service is initialized
    client.getWidget("dwTripDiscussion").isReadOnly = true;
    
    // Configure the menu items for the tree nodes

    let meniItems = [];
    let menuItem;

    menuItem = new MenuItem();
    menuItem.label = "Close Trip";
    menuItem.id = "CLOSE";
    menuItem.glyphIcon = "fa-times";
    meniItems.push(menuItem);

    menuItem = new MenuItem();
    menuItem.label = "Delete Trip";
    menuItem.id = "DELETE";
    menuItem.glyphIcon = "fa-trash";
    meniItems.push(menuItem);
    
    // Store the array as a client dataobject so we can use it later in onDataArrive
    client.data.nodeMenuItems = meniItems;


    let discWidget = client.getWidget("dwTripDiscussion");
    let discTreeWidget = client.getWidget("trTripDiscussionTree");

    // create a node in the tree to host the *GENERAL* discussion
    let generalNode = new TreeWidgetObject(discWidget.title ,null);
    generalNode.related = discWidget.activeInteractionThread;
    let rootNode = discTreeWidget.root;
    rootNode.addChild(generalNode);

    //  Execute Procedure 'com.vantiq.trip.TripPlannerDiscussion.discussionsList'
    client.execute({}, "com.vantiq.trip.TripPlannerDiscussion.discussionsList", function(response){

        response.forEach((element, index) => {
            let discussion = discWidget.onDiscussionInserted(element);//, function(discussion){

            let discussionDate = moment(element.ars_createdAt).format('MMMM Do YYYY, h:mm:ss A');

            let newTreeNode = new TreeWidgetObject("Trip - " + discussionDate ,null);
            discussion.title = "Trip - " + discussionDate;
            newTreeNode.related = discussion;
            newTreeNode.menuObjects = client.data.nodeMenuItems ;

            rootNode.addChild(newTreeNode);
        });
           
        client.getWidget("dwTripDiscussion").isReadOnly = false;  // unlock the text-entry field
    });


