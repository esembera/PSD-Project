'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.confirmationIdPOST = function confirmationIdPOST (req, res, next, body, id) {
  Default.confirmationIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.service_requestIdGET = function service_requestIdGET (req, res, next, id) {
  Default.service_requestIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesGET = function servicesGET (req, res, next) {
  Default.servicesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesNameOfServiceGET = function servicesNameOfServiceGET (req, res, next, nameOfService) {
  Default.servicesNameOfServiceGET(nameOfService)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesNameOfServicePOST = function servicesNameOfServicePOST (req, res, next, body, nameOfService) {
  Default.servicesNameOfServicePOST(body, nameOfService)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
