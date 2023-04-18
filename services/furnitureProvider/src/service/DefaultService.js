'use strict';


/**
 * Confirm Quotation
 * Endpoint for confirming a quotation when update is needed
 *
 * body Confirmation_id_body 
 * id Long The ID of the quotation to confirm
 * no response value expected for this operation
 **/
exports.confirmationIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a service request status update
 * Get information about the status of your previously submitted service request
 *
 * id Long ID of the service request
 * returns ServiceRequestStatus
 **/
exports.service_requestIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "details" : "details",
  "status" : "PENDING"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Furniture Provider Services
 * Retrieve a list of available furniture provider services.
 *
 * returns FurnitureProviderServices
 **/
exports.servicesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "Furniture sales", "Furniture sales" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Service Details
 * Retrieve the details of the requested furniture provider service.
 *
 * nameOfService String Name of the furniture provider service
 * returns ServiceDetails
 **/
exports.servicesNameOfServiceGET = function(nameOfService) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cost" : 0.8008282,
  "description" : "description",
  "durationOfWork" : "durationOfWork",
  "serviceName" : "serviceName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Request Service
 * Request a furniture provider service and receive a confirmation ID.
 *
 * body ServiceRequest 
 * nameOfService String Name of the furniture provider service
 * returns inline_response_200
 **/
exports.servicesNameOfServicePOST = function(body,nameOfService) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "requestId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

