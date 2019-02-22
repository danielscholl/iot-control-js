# iot-control-js

The purpose of this repository is a Simple Example of sending a Direct Method Message to a Device. 

__PreRequisites__

Requires the use of [direnv](https://direnv.net/).  
Requires the use of [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest).  

### Related Repositories

- [iot-resources](https://github.com/danielscholl/iot-resources)  - Deploying IoT Resources and x509 Management
- [iot-device-edge](https://github.com/danielscholl/iot-device-edge) - Simple Edge Testing
- [iot-device-js](https://github.com/danielscholl/iot-device-js) - Simple Device Testing
- [iot-control-js](https://github.com/danielscholl/iot-control-js) - Simple Control Testing

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
