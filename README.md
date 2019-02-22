# iot-control-js

The purpose of this repository is a Simple Example of sending a Direct Method Message to a Device. 
The [iot-device-js](https://github.com/danielscholl/iot-device-js) repository understands this command.

### Environment Variables

The device only requires one environment variable to be set.

- HUB_CONNECTION_STRING: Connection String of the Hub

### LocalHost Interval Set

```bash
# Setup the Environment Variables
export GROUP="iot-resources"
export HUB=$(az iot hub list --resource-group $GROUP --query [].name -otsv)
export HUB_CONNECTION_STRING="$(az iot hub show-connection-string --hub-name $HUB -otsv)"

DEVICE="device" MESSAGE_INTERVAL="3" ./setInterval.js 
```

### Azure Portal Interval Set

Using the Azure Portal you can send a direct method to the device that performs the same action as this code.

1. Select the Desired Device and open the DirectMethod Blade

1. Method Name: `setInterval`  Payload: `5`
