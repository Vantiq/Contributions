    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do a "select" on the specified user Type
    //
    http.setVantiqUrlForResource("system.trackingRegions");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Specify the (optional) query parameters
    //
    var parameters = {
        where: {},
        sort: {"name":1}
        //props: ["_id", "name"]
    };

    //
    //  Execute the asynchronous server request. This expects 3 parameters:
    //
    //  parameters: "null" or an object containing the parameters for this request
    //  successCallback: A callback function that will be driven when the request completes
    //                   successfully (i.e. a status code of 2XX)
    //  failureCallback: A callback function that will be driven when the request does not complete
    //                   successfully.
    //
    http.select(parameters,function(response)
        {
            var myTable =client.getWidget("regionsTable");
            myTable.dataArray = response;
        },
        function(errors)
        {
            //
            //  This call will format the error into a popup dialog
            //
            client.showHttpErrors(errors,"Doing a select on '"+typeName+"'");
        });
