    var page = this;
    var cc = client.getCollaborationContext();

    if (cc!== null){
        let array = cc.keys;
        let parsedValue = array[0].split("/")[2];

        page.data.deviceID = parsedValue;
    } else {
        page.data.deviceID = "abc123";
    }

    //client.infoDialog(JSON.stringify(cc, null, 2));

    var mdw = client.getWidget("StaticMarkdown1");
    var md = `
<style>
.gptassistant {
background-color: #EFF2F6;
padding: 16px;
border-radius: 20px;
gap: 4px;
}

.gptuser {
background-color: #D8C3EC;
width: 80%;
margin-left: auto;

  padding: 12px 20px 12px 20px;
  border-radius: 20px 8px 20px 20px;
  gap: 4px;


}
</style>`;

    //  Execute Procedure 'com.vantiq.pumpAssistant.IssueManagement.getConversationForDevice'
    var args = {deviceId: page.data.deviceID};
    client.execute(args, "com.vantiq.pumpAssistant.IssueManagement.getConversationForDevice", function(response){
        console.log(response);
        response.forEach(function(item, index) {
            console.log(item);
            let capitalizedWord = item.type.charAt(0).toUpperCase() + item.type.slice(1);
            if (item.ars_properties != null && item.ars_properties.isVisible) {
                md += `\n> <div class="gpt` + item.type + `"> <strong>` + capitalizedWord + `: </strong>` + item.content + `</div>\n>`;
            }
        });

        mdw.markdown = md;
    });

    page.data.scrollToBottom = function(currentScrollPosition) {
        const scrollableContainer = document.getElementById("StaticMarkdown1");
        const firstChild = scrollableContainer.children[0];

        // Calculate the target scroll position
        const targetScrollPosition = firstChild.scrollHeight - firstChild.clientHeight;

        // Calculate the distance to scroll
        const distance = targetScrollPosition - currentScrollPosition;

        // Define the animation parameters
        const duration = 1000; // Adjust this value to control the animation speed
        const increment = distance / duration * 15; // Adjust this value to control the smoothness of animation

        let currentPosition = currentScrollPosition;

        // Define the animation function
        const animateScroll = () => {
            currentPosition += increment;

            // Set the new scroll position
            firstChild.scrollTop = currentPosition;

            // Check if the bottom is reached
            if (currentPosition >= targetScrollPosition) {
                // Scroll to the bottom
                firstChild.scrollTop = targetScrollPosition;
            } else {
                // Continue animating to the bottom
                requestAnimationFrame(animateScroll);
            }
        };

        // Start the animation
        animateScroll();
    };