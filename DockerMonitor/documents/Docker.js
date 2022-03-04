// Generated on "2022-01-25T19:21:19.714Z"
var Docker = {};

Docker.getDiskUsage = function (containerId, successCallback, failureCallback) {
    var procedureName = "Docker.getDiskUsage";
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do an "execute" of a Procedure
    //
    http.setVantiqUrlForSystemResource("procedures");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Set the Procedure arguments by name. (You may also specify 'args' as an array where the
    //  parameters are given in the same order as in the Procedure definition (e.g. 'args = [10,20];').
    //  'args' must not be null.
    //
    var args = {containerId:containerId};

    //
    //  Execute the asynchronous server request. This expects 4 parameters:
    //
    //  procedureArguments: The procedure arguments.
    //  procedureName:      The fully-qualified name of the Procedure.
    //  successCallback:    A callback function that will be driven when the request completes
    //                      successfully (i.e. a status code of 2XX)
    //  failureCallback:    A callback function that will be driven when the request does not complete
    //                      successfully.
    //
    http.execute(args, procedureName ,function(response)
        {
            //
            //  At this point "response" is results of the Procedure call
            //
            if (successCallback) {
                successCallback(response);
            }
        },
        function(errors)
        {
            if (failureCallback) {
                failureCallback(errors)
            } else {
                var errorMsg = "Procedure "+procedureName+" returned error: ";
                if (errors.data && (errors.data.length>0)) {
                    throw errorMsg+errors.data[0].message;
                } else {
                    throw errorMsg+JSON.stringify(errors);
                }
            }
        });
};

Docker.listContainers = function (successCallback, failureCallback) {
    var procedureName = "Docker.listContainers";
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do an "execute" of a Procedure
    //
    http.setVantiqUrlForSystemResource("procedures");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Set the Procedure arguments by name. (You may also specify 'args' as an array where the
    //  parameters are given in the same order as in the Procedure definition (e.g. 'args = [10,20];').
    //  'args' must not be null.
    //
    var args = {};

    //
    //  Execute the asynchronous server request. This expects 4 parameters:
    //
    //  procedureArguments: The procedure arguments.
    //  procedureName:      The fully-qualified name of the Procedure.
    //  successCallback:    A callback function that will be driven when the request completes
    //                      successfully (i.e. a status code of 2XX)
    //  failureCallback:    A callback function that will be driven when the request does not complete
    //                      successfully.
    //
    http.execute(args, procedureName ,function(response)
        {
            //
            //  At this point "response" is results of the Procedure call
            //
            if (successCallback) {
                successCallback(response);
            }
        },
        function(errors)
        {
            if (failureCallback) {
                failureCallback(errors)
            } else {
                var errorMsg = "Procedure "+procedureName+" returned error: ";
                if (errors.data && (errors.data.length>0)) {
                    throw errorMsg+errors.data[0].message;
                } else {
                    throw errorMsg+JSON.stringify(errors);
                }
            }
        });
};

Docker.getStats = function (containerId, successCallback, failureCallback) {
    var procedureName = "Docker.getStats";
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do an "execute" of a Procedure
    //
    http.setVantiqUrlForSystemResource("procedures");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Set the Procedure arguments by name. (You may also specify 'args' as an array where the
    //  parameters are given in the same order as in the Procedure definition (e.g. 'args = [10,20];').
    //  'args' must not be null.
    //
    var args = {containerId:containerId};

    //
    //  Execute the asynchronous server request. This expects 4 parameters:
    //
    //  procedureArguments: The procedure arguments.
    //  procedureName:      The fully-qualified name of the Procedure.
    //  successCallback:    A callback function that will be driven when the request completes
    //                      successfully (i.e. a status code of 2XX)
    //  failureCallback:    A callback function that will be driven when the request does not complete
    //                      successfully.
    //
    http.execute(args, procedureName ,function(response)
        {
            //
            //  At this point "response" is results of the Procedure call
            //
            if (successCallback) {
                successCallback(response);
            }
        },
        function(errors)
        {
            if (failureCallback) {
                failureCallback(errors)
            } else {
                var errorMsg = "Procedure "+procedureName+" returned error: ";
                if (errors.data && (errors.data.length>0)) {
                    throw errorMsg+errors.data[0].message;
                } else {
                    throw errorMsg+JSON.stringify(errors);
                }
            }
        });
};

