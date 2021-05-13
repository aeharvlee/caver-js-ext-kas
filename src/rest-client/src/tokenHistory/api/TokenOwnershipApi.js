/*
 * Token History API
 * # Introduction  Token History API allows you to query the transaction history of KLAY, FTs (KIP-7 and Labelled ERC-20), NFTs (KIP-17 and Labelled ERC-721), and MTs (KIP-37 and Labelled ERC-1155). You can track KLAY's transaction history or retrieve NFT-related data of a certain EOA.   For more details on using Token History API, please refer to the [Tutorial](https://docs.klaytnapi.com/tutorial).   For any inquiries on this document or KAS in general, please visit [Developer Forum](https://forum.klaytn.com/).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            '../../ApiClient',
            '../model/ErrorResponse',
            '../model/PageableContractSummary',
            '../model/PageableNftOwnershipChanges',
            '../model/PageableTokenSummary',
        ], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('../../ApiClient'),
            require('../model/ErrorResponse'),
            require('../model/PageableContractSummary'),
            require('../model/PageableNftOwnershipChanges'),
            require('../model/PageableTokenSummary')
        )
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.TokenOwnershipApi = factory(
            root.TokenHistoryApi.ApiClient,
            root.TokenHistoryApi.ErrorResponse,
            root.TokenHistoryApi.PageableContractSummary,
            root.TokenHistoryApi.PageableNftOwnershipChanges,
            root.TokenHistoryApi.PageableTokenSummary
        )
    }
})(this, function(ApiClient, ErrorResponse, PageableContractSummary, PageableNftOwnershipChanges, PageableTokenSummary) {
    /**
     * TokenOwnership service.
     * @class TokenOwnershipApi
     * @version 1.0
     */

    /**
     * Constructs a new TokenOwnershipApi.
     * @alias TokenOwnershipApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    const TokenOwnershipApi = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance

        /**
         * Callback function to receive the result of the getListOfContractByOwnerAddress operation.
         * @callback TokenOwnershipApi~getListOfContractByOwnerAddressCallback
         * @param {String} error Error message, if any.
         * @param {PageableContractSummary} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * getListOfContractByOwnerAddress
         * Selecting an EOA will fetch data of all contracts of tokens by EOA.<p></p>  * `ft`: `ft` balances existing in the contract will be included in the response<br> * `nft`: Tokens existing in the contract will be included in the response<br> * `mt`: Token balances existing in the contract will be included in the response<p></p><br>  ## Size<p></p>  * The query parameter `size` is optional. (Min = 1, Max = 1000, Default = 100)<br> * Returns an error when given a negative number<br> * Uses default (`size=100`) when given a 0<br> * Uses the maximum value (`size=1000`) when given a value higher than 1000<br>
         * @param {String} xChainId Klaytn Network Chain ID (1001 or 8217)
         * @param {String} address EOA to query
         * @param {Object} opts Optional parameters
         * @param {String} opts.kind (csv) Types to include [\"ft\", \"nft\", \"mt\"], query all types when not specified
         * @param {Number} opts.size Number of response items (min=1, max=1000, default=100)
         * @param {String} opts.cursor Offset for specifying a certain position
         * @param {TokenOwnershipApi~getListOfContractByOwnerAddressCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link PageableContractSummary}
         */
        this.getListOfContractByOwnerAddress = function(xChainId, address, opts, callback) {
            opts = opts || {}
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getListOfContractByOwnerAddress")
            }

            // verify the required parameter 'address' is set
            if (address === undefined || address === null) {
                throw new Error("Missing the required parameter 'address' when calling getListOfContractByOwnerAddress")
            }

            const pathParams = {
                address: address,
            }
            const queryParams = {
                kind: opts.kind,
                size: opts.size,
                cursor: opts.cursor,
            }
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = PageableContractSummary

            return this.apiClient.callApi(
                '/v2/account/{address}/contract',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the getListOfNftOwnershipChanges operation.
         * @callback TokenOwnershipApi~getListOfNftOwnershipChangesCallback
         * @param {String} error Error message, if any.
         * @param {PageableNftOwnershipChanges} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * getListOfNftOwnershipChanges
         * Get ownership change history of certain NFTs.<p></p>  ## Size<p></p>  * The query parameter `size` is optional. (Min = 1, Max = 1000, Default = 100)<br> * Returns an error when given a negative number<br> * Uses default (`size=100`) when given a 0<br> * Uses the maximum value (`size=1000`) when given a value higher than 1000<br>
         * @param {String} xChainId Klaytn Network Chain ID (1001 or 8217)
         * @param {String} nftAddress NFT Contract address to query
         * @param {String} tokenId NFT ID to query (in hexadecimal)
         * @param {Object} opts Optional parameters
         * @param {Number} opts.size Number of response items (min=1, max=1000, default=100)
         * @param {String} opts.cursor Offset for specifying a certain position
         * @param {TokenOwnershipApi~getListOfNftOwnershipChangesCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link PageableNftOwnershipChanges}
         */
        this.getListOfNftOwnershipChanges = function(xChainId, nftAddress, tokenId, opts, callback) {
            opts = opts || {}
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getListOfNftOwnershipChanges")
            }

            // verify the required parameter 'nftAddress' is set
            if (nftAddress === undefined || nftAddress === null) {
                throw new Error("Missing the required parameter 'nftAddress' when calling getListOfNftOwnershipChanges")
            }

            // verify the required parameter 'tokenId' is set
            if (tokenId === undefined || tokenId === null) {
                throw new Error("Missing the required parameter 'tokenId' when calling getListOfNftOwnershipChanges")
            }

            const pathParams = {
                'nft-address': nftAddress,
                'token-id': tokenId,
            }
            const queryParams = {
                size: opts.size,
                cursor: opts.cursor,
            }
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = PageableNftOwnershipChanges

            return this.apiClient.callApi(
                '/v2/contract/nft/{nft-address}/token/{token-id}/history',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the getListOfTokenByOwnerAddress operation.
         * @callback TokenOwnershipApi~getListOfTokenByOwnerAddressCallback
         * @param {String} error Error message, if any.
         * @param {PageableTokenSummary} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * getListOfTokenByOwnerAddress
         * Selecting an EOA will get all token data by EOA.<p></p>  * `ft`: `ft` balances existing in the contract will be included in the response<br> * `nft`: Tokens existing in the contract will be included in the response<br> * `mt`: Token balances existing in the contract will be included in the response<p></p><br>  ## Size<p></p>  * The query parameter `size` is optional. (Min = 1, Max = 1000, Default = 100)<br> * Returns an error when given a negative number<br> * Uses default (`size=100`) when given a 0<br> * Uses the maximum value (`size=1000`) when given a value higher than 1000<br>
         * @param {String} xChainId Klaytn Network Chain ID (1001 or 8217)
         * @param {String} address EOA to query
         * @param {Object} opts Optional parameters
         * @param {String} opts.kind (csv) Types to include [\"ft\", \"nft\", \"mt\"], query all types when not specified
         * @param {Number} opts.size Number of response items (min=1, max=1000, default=100)
         * @param {String} opts.caFilters Contract address list to filter (separated by \",\")
         * @param {String} opts.cursor Offset for specifying a certain position
         * @param {TokenOwnershipApi~getListOfTokenByOwnerAddressCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link PageableTokenSummary}
         */
        this.getListOfTokenByOwnerAddress = function(xChainId, address, opts, callback) {
            opts = opts || {}
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getListOfTokenByOwnerAddress")
            }

            // verify the required parameter 'address' is set
            if (address === undefined || address === null) {
                throw new Error("Missing the required parameter 'address' when calling getListOfTokenByOwnerAddress")
            }

            const pathParams = {
                address: address,
            }
            const queryParams = {
                kind: opts.kind,
                size: opts.size,
                'ca-filters': opts.caFilters,
                cursor: opts.cursor,
            }
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = PageableTokenSummary

            return this.apiClient.callApi(
                '/v2/account/{address}/token',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }
    }

    return TokenOwnershipApi
})
