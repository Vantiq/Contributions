### Assembly
This is the Assembly Tutorial. The weather Source produces temperature and wind speed data which triggers the DetectWeatherEmergencyApp. The App uses the isDangerousWeather App Component to determine whether to issue a warning message or evacuation alert to residents. Each alert type will trigger the start of a CollaborationType which will notify the ResidentNotificationSystem Client.

The Assembly exposes the App Component used by the DetectWeatherEmergency App, the activation status for the weather Source, and the theme on the ResidentNotificationSystem Client as Configurable Properties.
