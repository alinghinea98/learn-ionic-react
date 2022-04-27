/**
 * KTI - CMS REST API
 * KTI - CMS REST API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: cristian.szep@kronsoft.ro
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TriggerActionDetailsBean {
    'actionId'?: number;
    'actionName'?: string;
    'longDescription'?: string;
    'shortDescription'?: string;
    'externalId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "actionId",
            "baseName": "actionId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "actionName",
            "baseName": "actionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "longDescription",
            "baseName": "longDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortDescription",
            "baseName": "shortDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TriggerActionDetailsBean.attributeTypeMap;
    }

    public constructor() {
    }
}
