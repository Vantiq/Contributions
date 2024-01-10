    const scrollableContainer = document.getElementById("StaticMarkdown1");
    const firstChild = scrollableContainer.children[0];
    client.data.scrollPos = firstChild.scrollTop;
    console.log(client.data.scrollPos);
    
    // add the question and the thinking to the existing text
    var minput = client.getWidget("MultilineInput6").boundValue.slice();
    var mdw = client.getWidget("StaticMarkdown1");
    var md = mdw.markdown;
    md += `\n> <span class="gptuser">user:</span><br>` + minput + `\n\n>`;
    md += `<img src="../../docs/public/component/images/typing-texting.gif" alt="Typing Text" width="70">`;
    mdw.markdown = md;
    
    page.data.scrollToBottom(client.data.scrollPos);
    client.data.scrollPos = firstChild.scrollTop;
    
    // Send event to process user response
    var args = {
        "deviceId": page.data.deviceID, 
        "prompt": minput
    };
	client.getWidget("MultilineInput6").boundValue = "";
    client.publishToServiceEvent(args, "com.vantiq.pumpAssistant.IssueManagement", "UserResponse", function(response) {
        console.log(response);
    });