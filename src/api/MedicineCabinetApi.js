/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 04.12.2022
 *
 * The version of the OpenAPI document: v1
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CabinetDTO from '../model/CabinetDTO';

/**
* MedicineCabinet service.
* @module api/MedicineCabinetApi
* @version v1
*/
export default class MedicineCabinetApi {

    /**
    * Constructs a new MedicineCabinetApi. 
    * @alias module:api/MedicineCabinetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add
     * @param {module:model/CabinetDTO} cabinetDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CabinetDTO} and HTTP response
     */
    cabinetControllerCreateWithHttpInfo(cabinetDTO) {
      let postBody = cabinetDTO;
      // verify the required parameter 'cabinetDTO' is set
      if (cabinetDTO === undefined || cabinetDTO === null) {
        throw new Error("Missing the required parameter 'cabinetDTO' when calling cabinetControllerCreate");
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
      let returnType = CabinetDTO;
      return this.apiClient.callApi(
        '/cabinet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add
     * @param {module:model/CabinetDTO} cabinetDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CabinetDTO}
     */
    cabinetControllerCreate(cabinetDTO) {
      return this.cabinetControllerCreateWithHttpInfo(cabinetDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cabinetControllerDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cabinetControllerDelete");
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
        '/cabinet/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cabinetControllerDelete(id) {
      return this.cabinetControllerDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cabinetControllerFindUserAllItemsWithHttpInfo() {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/cabinet/findUserAllItems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cabinetControllerFindUserAllItems() {
      return this.cabinetControllerFindUserAllItemsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cabinetControllerFindUserItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cabinetControllerFindUserItem");
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
        '/cabinet/findUserItem/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cabinetControllerFindUserItem(id) {
      return this.cabinetControllerFindUserItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * @param {Number} id 
     * @param {module:model/CabinetDTO} cabinetDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CabinetDTO} and HTTP response
     */
    cabinetControllerUpdateWithHttpInfo(id, cabinetDTO) {
      let postBody = cabinetDTO;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cabinetControllerUpdate");
      }
      // verify the required parameter 'cabinetDTO' is set
      if (cabinetDTO === undefined || cabinetDTO === null) {
        throw new Error("Missing the required parameter 'cabinetDTO' when calling cabinetControllerUpdate");
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
      let returnType = CabinetDTO;
      return this.apiClient.callApi(
        '/cabinet/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * @param {Number} id 
     * @param {module:model/CabinetDTO} cabinetDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CabinetDTO}
     */
    cabinetControllerUpdate(id, cabinetDTO) {
      return this.cabinetControllerUpdateWithHttpInfo(id, cabinetDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
