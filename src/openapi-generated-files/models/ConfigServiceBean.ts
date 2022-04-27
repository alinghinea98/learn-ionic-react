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

export class ConfigServiceBean {
    'cfgType'?: string;
    'cfgValue'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cfgType",
            "baseName": "cfgType",
            "type": "string",
            "format": ""
        },
        {
            "name": "cfgValue",
            "baseName": "cfgValue",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConfigServiceBean.attributeTypeMap;
    }

    public constructor() {
    }
}
