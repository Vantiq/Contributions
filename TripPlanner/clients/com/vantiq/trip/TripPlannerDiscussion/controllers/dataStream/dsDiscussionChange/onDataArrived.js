
    let discWidget = client.getWidget("dwTripDiscussion");
    let discTreeWidget = client.getWidget("trTripDiscussionTree");

    let currentDiscussion = data;

    switch (operation)
    {
        case "insert":
            {
                //
                //  Let the Discussion widget know this Discussion was inserted and should
                //  become active
                //
                let discussionDate = moment(currentDiscussion.ars_createdAt).format('MMMM Do YYYY, h:mm:ss A');
                currentDiscussion.title = "Trip - " + discussionDate;

                let insertedThread = discWidget.onDiscussionInserted(currentDiscussion);
                if (insertedThread)
                {
                    // create the new node for the tree view
                    let newTreeNode = new TreeWidgetObject(currentDiscussion.title ,null);
                    newTreeNode.related = insertedThread;
                    newTreeNode.menuObjects = client.data.nodeMenuItems ;

                    let rootNode = discTreeWidget.root;
                    rootNode.addChild(newTreeNode);
                    discWidget.activeDiscussionId = currentDiscussion.id;
                }

             }
            break;

        case "update":
            //
            //  Let the Discussion widget know this Discussion was updated (perhaps the
            //  relatedResources property has changed).
            //
            discWidget.onDiscussionUpdated(currentDiscussion);
            if (currentDiscussion.status === "completed"){
                // ok is is completd/closed so remove from the tree
                let rootNode = discTreeWidget.root;
                let deleteChild = null;
                rootNode.children.forEach(function(element, index) {
                    if (element.related.discussionId == currentDiscussion.id) {
                        deleteChild = element;
                    }
                });    
                if (deleteChild){ 
                    rootNode.removeChild(deleteChild);
                }
            }
            break;

        case "delete":
            //
            //  Let the Discussion widget know this Discussion has gone away
            //
            discWidget.onDiscussionDeleted(currentDiscussion);
            let rootNode = discTreeWidget.root;
            let deleteChild = null;
            rootNode.children.forEach(function(element, index) {
                if (element.related.discussionId == currentDiscussion.id) {
                    deleteChild = element;
                }
            });    
            if (deleteChild){ 
                rootNode.removeChild(deleteChild);
            }
            break;
    }



