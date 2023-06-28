"use strict";

/**
 * Confirm Quotation
 * Endpoint for confirming a quotation when update is needed.
 *
 * body Confirmation_id_body
 * id Long The ID of the quotation to confirm
 * no response value expected for this operation
 **/
exports.confirmationIdPOST = function (body, id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get a renovation request status update
 * Get information about the status of your previously submitted renovation request
 *
 * id Long ID of the renovation request
 * returns RenovationRequestStatus
 **/
exports.renovation_requestIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      details: "details",
      status: "DONE",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Get Plumbing Services
 * Retrieve a list of available plumbing services.
 *
 * returns PlumbingServices
 **/
exports.servicesGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      "Plumbing installation",
      "Plumbing repair",
      "Drain cleaning",
      "Pipe repair and replacement",
      "Water heater services",
      "Plumbing inspections",
      "Emergency plumbing services",
      "Gas line services",
      "Backflow prevention",
      "Plumbing consultations",
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Get Service Details
 * Retrieve the details of the requested plumbing service.
 *
 * nameOfService String Name of the plumbing service
 * returns ServiceDetails
 **/
exports.servicesNameOfServiceGET = function (nameOfService) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      cost: 200,
      description: "description",
      durationOfWork: "durationOfWork",
      serviceName: "serviceName",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Request Service
 * Request a plumbing service and receive a confirmation ID.
 *
 * body RenovationRequest
 * nameOfService String Name of the plumbing service
 * returns inline_response_200
 **/
exports.servicesNameOfServicePOST = function (body, nameOfService) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      requestId: 0,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
