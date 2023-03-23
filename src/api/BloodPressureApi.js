/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 04.12.2022
 *
 * The version of the OpenAPI document: 0.0.3
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BloodPressureDTO from '../model/BloodPressureDTO';

/**
* BloodPressure service.
* @module api/BloodPressureApi
* @version 0.0.3
*/
export default class BloodPressureApi {

    /**
    * Constructs a new BloodPressureApi. 
    * @alias module:api/BloodPressureApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add
     * @param {module:model/BloodPressureDTO} bloodPressureDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BloodPressureDTO} and HTTP response
     */
    bloodPressureControllerCreateWithHttpInfo(bloodPressureDTO) {
      let postBody = bloodPressureDTO;
      // verify the required parameter 'bloodPressureDTO' is set
      if (bloodPressureDTO === undefined || bloodPressureDTO === null) {
        throw new Error("Missing the required parameter 'bloodPressureDTO' when calling bloodPressureControllerCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BloodPressureDTO;
      return this.apiClient.callApi(
        '/blood-pressure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add
     * @param {module:model/BloodPressureDTO} bloodPressureDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BloodPressureDTO}
     */
    bloodPressureControllerCreate(bloodPressureDTO) {
      return this.bloodPressureControllerCreateWithHttpInfo(bloodPressureDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * De
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    bloodPressureControllerDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodPressureControllerDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/blood-pressure/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * De
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    bloodPressureControllerDelete(id) {
      return this.bloodPressureControllerDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BloodPressureDTO} and HTTP response
     */
    bloodPressureControllerFindUserAllItemsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BloodPressureDTO;
      return this.apiClient.callApi(
        '/blood-pressure/findUserAllItems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BloodPressureDTO}
     */
    bloodPressureControllerFindUserAllItems() {
      return this.bloodPressureControllerFindUserAllItemsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    bloodPressureControllerFindUserItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodPressureControllerFindUserItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/blood-pressure/findUserItem/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    bloodPressureControllerFindUserItem(id) {
      return this.bloodPressureControllerFindUserItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * @param {Number} id 
     * @param {module:model/BloodPressureDTO} bloodPressureDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BloodPressureDTO} and HTTP response
     */
    bloodPressureControllerUpdateWithHttpInfo(id, bloodPressureDTO) {
      let postBody = bloodPressureDTO;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodPressureControllerUpdate");
      }
      // verify the required parameter 'bloodPressureDTO' is set
      if (bloodPressureDTO === undefined || bloodPressureDTO === null) {
        throw new Error("Missing the required parameter 'bloodPressureDTO' when calling bloodPressureControllerUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BloodPressureDTO;
      return this.apiClient.callApi(
        '/blood-pressure/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * @param {Number} id 
     * @param {module:model/BloodPressureDTO} bloodPressureDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BloodPressureDTO}
     */
    bloodPressureControllerUpdate(id, bloodPressureDTO) {
      return this.bloodPressureControllerUpdateWithHttpInfo(id, bloodPressureDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
