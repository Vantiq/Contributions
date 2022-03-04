# Docker Monitor

Simple Vantiq Client Builder application that can monitor docker containers resource utilization for the local host system. The utilization data is provided by the docker API. 

* [Full instructions](https://github.com/pburma/vantiqexamples/tree/master/docker_examples/system_monitor)

*Screenshot*
![image](https://user-images.githubusercontent.com/11183903/156450749-089cd78a-2b88-4f7d-9ead-2db2c0e28246.png)

Once the docker API is active and accessible this project will load usage data from each container. This information can be used to create custom alerts and monitor system health. For example to send a low disk space alert or high CPU utilization notification.

