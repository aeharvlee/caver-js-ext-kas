/*
 * KIP-17 API
 *   # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1100050 | incorrect request 1100101 | data don't exist 1100251 | its value is out of range; size 1104401 | failed to get an account |   ## 404: Not Found   | Code | Messages |   | --- | --- |   | 1104404 | Token not found |   ## 409: Conflict   | Code | Messages |   | --- | --- |   | 1104400 | Duplicate alias - test |
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.Kip17Api) {
            root.Kip17Api = {}
        }
        root.Kip17Api.GetKip17TokenResponse = factory(root.Kip17Api.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The GetKip17TokenResponse model module.
     * @class GetKip17TokenResponse
     * @version 1.0
     */

    /**
     * Constructs a new <code>GetKip17TokenResponse</code>.
     * @alias GetKip17TokenResponse
     * @class
     * @param createdAt {Number} UNIX timestamp of the time when this token was minted
     * @param owner {String} Current token owner EOA address
     * @param previousOwner {String} Previous owner who transferred this token to the current owner
     * @param tokenId {String} ID assigned to this token
     * @param tokenUri {String} URI identifying the doc containing metadata of this token
     * @param transactionHash {String} The last transaction hash mutated this token state
     * @param updatedAt {Number} UNIX timestamp of the time when this token was last mutated
     */
    const GetKip17TokenResponse = function(createdAt, owner, previousOwner, tokenId, tokenUri, transactionHash, updatedAt) {
        this.createdAt = createdAt
        this.owner = owner
        this.previousOwner = previousOwner
        this.tokenId = tokenId
        this.tokenUri = tokenUri
        this.transactionHash = transactionHash
        this.updatedAt = updatedAt
    }

    /**
     * Constructs a <code>GetKip17TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetKip17TokenResponse} obj Optional instance to populate.
     * @return {GetKip17TokenResponse} The populated <code>GetKip17TokenResponse</code> instance.
     * @memberof GetKip17TokenResponse
     */
    GetKip17TokenResponse.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new GetKip17TokenResponse()
            if (data.hasOwnProperty('createdAt')) obj.createdAt = ApiClient.convertToType(data.createdAt, 'Number')
            if (data.hasOwnProperty('owner')) obj.owner = ApiClient.convertToType(data.owner, 'String')
            if (data.hasOwnProperty('previousOwner')) obj.previousOwner = ApiClient.convertToType(data.previousOwner, 'String')
            if (data.hasOwnProperty('tokenId')) obj.tokenId = ApiClient.convertToType(data.tokenId, 'String')
            if (data.hasOwnProperty('tokenUri')) obj.tokenUri = ApiClient.convertToType(data.tokenUri, 'String')
            if (data.hasOwnProperty('transactionHash')) obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
            if (data.hasOwnProperty('updatedAt')) obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Number')
        }
        return obj
    }

    /**
     * UNIX timestamp of the time when this token was minted
     * @type {Number}
     * @memberof GetKip17TokenResponse
     */
    GetKip17TokenResponse.prototype.createdAt = undefined

    /**
     * Current token owner EOA address
     * @type {String}
     * @memberof GetKip17TokenResponse
     */
    GetKip17TokenResponse.prototype.owner = undefined

    /**
     * Previous owner who transferred this token to the current owner
     * @type {String}
     * @memberof GetKip17TokenResponse
     */
    GetKip17TokenResponse.prototype.previousOwner = undefined

    /**
     * ID assigned to this token
     * @type {String}
     * @memberof GetKip17TokenResponse
     */
    GetKip17TokenResponse.prototype.tokenId = undefined

    /**
     * URI identifying the doc containing metadata of this token
     * @type {String}
     * @memberof GetKip17TokenResponse
     */
    GetKip17TokenResponse.prototype.tokenUri = undefined

    /**
     * The last transaction hash mutated this token state
     * @type {String}
     * @memberof GetKip17TokenResponse
     */
    GetKip17TokenResponse.prototype.transactionHash = undefined

    /**
     * UNIX timestamp of the time when this token was last mutated
     * @type {Number}
     * @memberof GetKip17TokenResponse
     */
    GetKip17TokenResponse.prototype.updatedAt = undefined

    return GetKip17TokenResponse
})