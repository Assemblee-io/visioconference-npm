# Visioconference.me

[API Documentation](https://api.visioconference.me/api/v1/enterprise_doc/)

Simplify your communication thanks to the Visioconference.me service, access your internal meetings and all your customer appointments in one click. Easily organize all your business meetings online: no delays, a fast and secure connection, and above all, no software to install to communicate. No more material, logistical or geographical obstacles, you are directly in contact with your contacts.

This module will help you interact with our API in the easiest way possible

## Install

### Node

```bash
npm i visioconference.me
```

## Usage

### Room creation

```js
const Visioconference = require("visioconference.me");
const visioconference = new Visioconference(/* API_KEY */);

/* Create an individual visioconference room
      room_name (string) (mandatory): "ROOM_NAME"
      meeting_at (number) (optionnal): 1626711133
      duration (number) (optionnal): 60
*/
visioconference
  .createRoom("ROOM_NAME", 1626711133, 60)
  .then(room => {
    console.log(room); // Display Room information
  })
  .catch(error => {
    console.error(error); // Handle error
  });
```

### Example response

```json
{
    "code": 201,
    "data": {
        "iframe": "<iframe allow='camera; microphone; fullscreen; display-capture' 		 src='https://visioconference.me/meet/XXXXXXXX' style='height: 100%; width: 100%; border: 0px;'/>",
        "uniqid": "XXXXXXXX",
        "url": "https://visioconference.me/meet/XXXXXXXX",
        "moderator_token": "ZQ9NYD3D"
    },
    "message": ""
}
```
