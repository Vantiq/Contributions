
    // Switch the discussion widget to the selected discussion
    let discWidget = client.getWidget("dwTripDiscussion");
    discWidget.activeInteractionThread = extra.node.related;
