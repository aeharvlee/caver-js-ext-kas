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
        define(['../../ApiClient', '../model/NftContractSummaryExtras'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./NftContractSummaryExtras'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.NftContractSummary = factory(root.TokenHistoryApi.ApiClient, root.TokenHistoryApi.NftContractSummaryExtras)
    }
})(this, function(ApiClient, NftContractSummaryExtras) {
    /**
     * The NftContractSummary model module.
     * @class NftContractSummary
     * @version 1.0
     */

    /**
     * Constructs a new <code>NftContractSummary</code>.
     * @alias NftContractSummary
     * @class
     * @param kind {String} Contract type
     * @param contractAddress {String} Contract address (20-byte)
     * @param updatedAt {Number} Last change of token ownership (timestamp)
     * @param totalBalance {String} Total balance of tokens (in hexadecimal)
     * @param extras {NftContractSummaryExtras}
     */
    const NftContractSummary = function(kind, contractAddress, updatedAt, totalBalance, extras) {
        this.kind = kind
        this.contractAddress = contractAddress
        this.updatedAt = updatedAt
        this.totalBalance = totalBalance
        this.extras = extras
    }

    /**
     * Constructs a <code>NftContractSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {NftContractSummary} obj Optional instance to populate.
     * @return {NftContractSummary} The populated <code>NftContractSummary</code> instance.
     * @memberof NftContractSummary
     */
    NftContractSummary.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new NftContractSummary()
            if (data.hasOwnProperty('kind')) obj.kind = ApiClient.convertToType(data.kind, 'String')
            if (data.hasOwnProperty('contractAddress')) obj.contractAddress = ApiClient.convertToType(data.contractAddress, 'String')
            if (data.hasOwnProperty('updatedAt')) obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Number')
            if (data.hasOwnProperty('totalBalance')) obj.totalBalance = ApiClient.convertToType(data.totalBalance, 'String')
            if (data.hasOwnProperty('extras')) obj.extras = NftContractSummaryExtras.constructFromObject(data.extras)
        }
        return obj
    }

    /**
     * Contract type
     * @type {String}
     * @memberof NftContractSummary
     */
    NftContractSummary.prototype.kind = undefined

    /**
     * Contract address (20-byte)
     * @type {String}
     * @memberof NftContractSummary
     */
    NftContractSummary.prototype.contractAddress = undefined

    /**
     * Last change of token ownership (timestamp)
     * @type {Number}
     * @memberof NftContractSummary
     */
    NftContractSummary.prototype.updatedAt = undefined

    /**
     * Total balance of tokens (in hexadecimal)
     * @type {String}
     * @memberof NftContractSummary
     */
    NftContractSummary.prototype.totalBalance = undefined

    /**
     * @type {NftContractSummaryExtras}
     * @memberof NftContractSummary
     */
    NftContractSummary.prototype.extras = undefined

    return NftContractSummary
})
