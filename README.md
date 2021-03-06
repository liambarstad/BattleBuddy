# BattleBuddy

## Premise
  
  An alarm application that allows users to look up a location in Google Maps and save it to the alarm. When the alarm is active, it checks the traffic and weather conditions with a logarithmically increasing frequency. If the ETA exceeds the time of the initial (or average) trip, the alarm is set back to make up the difference and get the user where they need to go on time. Other features include the ability to set an itinerary, with items pertaining to preparation steps. A user can then snooze through each itinerary item instead of a set time.

## Intallation

If you do not already have npm installed, refer to the documentation here:
https://docs.npmjs.com/getting-started/installing-node

Install the expo command line interface

```
npm install -g exp
```

Check that expo is correctly installed and is updated to the most recent version. The current version should be 49.2.2 or higher.

```
exp -V
```

To run the emulator

```
exp start --ios
```

If you do not already have an account, choose the option to make a new account and fill in the email and password. No confirmation email will be sent and there are no password requirements.

## Current Features

* See all alarms, locations, and itinerary items
* Delete an alarm
* Toggle an alarm's activity
* Itemize (attach itinerary items) to an alarm
* Create location from locations page
* Create location from alarm form or select from a previous location
* Create location or select from a previous location to bind to an alarm from the main page

## ToDo

* Schedule alarm notification when alarm activity is set
* Bind location to alarm
* Create/Update/Delete itinerary items
* Schedule API calls to backend
* Build Python backend
* Bubble styling
* Include snooze
* Include itemized snooze
