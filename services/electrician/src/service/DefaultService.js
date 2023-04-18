"use strict";

/**
 * Confirm Quotation
 * Endpoint for confirming a quotation when update is needed
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
 * Get a service request status update
 * Get information about the status of your previously submitted service request
 *
 * id Long ID of the service request
 * returns ServiceRequestStatus
 **/
exports.service_requestIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      details: "details",
      status: "PENDING",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Get Electrician Services
 * Retrieve a list of available plumbing services.
 *
 * returns PlumbingServices
 **/
exports.servicesGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      "Electrical installations",
      "Electrical repairs",
      "Electrical maintenance",
      "Circuit troubleshooting and repair",
      "Lighting installation and repair",
      "Outlet and switch installation and repair",
      "Electrical panel upgrades",
      "Rewiring and electrical upgrades",
      "Generator installation and repair",
      "Electrical safety inspections",
      "Energy-efficient lighting installation",
      "Home automation system installation",
      "Security system installation and repair",
      "Data and network cabling installation",
      "Electric vehicle charging station installation",
      "Electrical consultation and advice",
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
 * Retrieve the details of the requested electrician service.
 *
 * nameOfService String Name of the electrician service
 * returns ServiceDetails
 **/
exports.servicesNameOfServiceGET = function (nameOfService) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      cost: 0.8008282,
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
 * Request an electrician service and receive a confirmation ID.
 *
 * body RenovationRequest
 * nameOfService String Name of the electrician service
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
