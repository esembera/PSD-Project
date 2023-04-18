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

module.exports.renovation_requestIdDELETE = function renovation_requestIdDELETE (req, res, next, id) {
  Default.renovation_requestIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.renovation_requestIdGET = function renovation_requestIdGET (req, res, next, id) {
  Default.renovation_requestIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.renovation_requestPOST = function renovation_requestPOST (req, res, next, body) {
  Default.renovation_requestPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
