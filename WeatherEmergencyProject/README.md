This is the Project used as the starting place for the [Assembly Tutorial](/docs/system/tutorials/assemblytutorial/index.html).
The weather Source produces temperature and wind speed data which triggers the DetectWeatherEmergencyApp.
The App uses the isDangerousWeather App Component to determine whether to issue a warning message or evacuation alert to residents. 
Each alert type will trigger the start of a CollaborationType which will notify the ResidentNotificationSystem Client.

You can use this Project as a starting point for an Assembly. 
