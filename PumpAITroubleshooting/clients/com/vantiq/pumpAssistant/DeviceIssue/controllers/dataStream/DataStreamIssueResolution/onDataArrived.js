    var page = client.getCurrentPage();

    const scrollableContainer = document.getElementById("StaticMarkdown1");
    const firstChild = scrollableContainer.children[0];
    client.data.scrollPos = firstChild.scrollTop;

    // client.infoDialog("Received event from server");

    var mdw = client.getWidget("StaticMarkdown1");
    var md = `<style>
.gptassistant {
background-color: lightblue;
padding: 2px;
}
.gptuser {
background-color: lightgreen;
padding: 2px;
}
</style>\n>\n>`;

    // Execute Procedure 'com.vantiq.pumpAssistant.IssueManagement.getConversationForDevice'
    var args = { deviceId: "abc123"};
    client.execute(args, "com.vantiq.pumpAssistant.IssueManagement.getConversationForDevice", function(response){
        console.log(response);
        response.forEach(function(item, index) {
            var speaker = item.type == "human" ? "Valued Technician" : "Ai";
            if (item.ars_properties != null && item.ars_properties.isVisible) {
                md += `\n> <span class="gpt` + item.type + `">` + speaker + `:</span><br>` + item.content + `\n>`;
            }
        });

        mdw.markdown = md;
        page.data.scrollToBottom(client.data.scrollPos);
    });