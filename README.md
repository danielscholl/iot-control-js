# Simple Device Control Sample (Interval)

### Environment Variables

The device only requires one environment variable to be set.

- HUB_CONNECTION_STRING: Connection String of the Hub

### LocalHost Interval Set

```bash
# Setup the Environment Variables
export GROUP="iot-x509-testing"
export HUB=$(az iot hub list --resource-group $GROUP --query [].name -otsv)
export HUB_CONNECTION_STRING="$(az iot hub show-connection-string --hub-name $HUB -otsv)"

export DEVICE="device"
```
