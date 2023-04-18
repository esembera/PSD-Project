'use strict';


/**
 * Confirm Quotation
 * Endpoint for confirming a quotation when update is needed.
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
 * Delete a renovation request
 * Delete a renovation request, but only if it's still pending
 *
 * id Long ID of the renovation request
 * no response value expected for this operation
 **/
exports.renovation_requestIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a renovation request status update
 * Get information about the status of your previously-submitted renovation request
 *
 * id Long ID of the renovation request
 * returns RenovationRequestStatus
 **/
exports.renovation_requestIdGET = function(id) {
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
 * Submit a renovation request
 * Allows customers to submit a renovation request
 *
 * body RenovationRequest 
 * returns RenovationRequestResponse
 **/
exports.renovation_requestPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "request_id" : 0,
  "status" : "PENDING"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

