#!/usr/bin/env node
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const formatted = bformat({ outputMode: 'short', color: true });
const log = bunyan.createLogger({
  name: 'SimpleControl',
  level: process.env.LOG_LEVEL || 'info',
  stream: formatted,
  serializers: bunyan.stdSerializers
});

const Client = require('azure-iothub').Client;
const Parameters = require('./lib/models');
const config = {
  connectionString: process.env.HUB_CONNECTION_STRING,
  deviceId: process.env.DEVICE
};

let client = Client.fromConnectionString(config.connectionString);
let parameters = new Parameters.Interval({ interval: process.env.MESSAGE_INTERVAL || 5 });

log.debug('Message:' + parameters.methodName + ' for ' + config.deviceId + ' @' + (new Date()).toUTCString());
log.info(parameters.toJson());

client.invokeDeviceMethod(config.deviceId, parameters, function (err, result) {
  if (err) {
    log.error('Failed to invoke method \'' + parameters.methodName + '\': ' + err.message);
  } else {
    log.debug('Response:' + parameters.methodName + ' from ' + config.deviceId + ' @' + (new Date()).toUTCString());
    log.info(JSON.stringify(result, null, 2));
  }
});
