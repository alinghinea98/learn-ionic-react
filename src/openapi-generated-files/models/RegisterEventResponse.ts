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

export class RegisterEventResponse {
    'eventId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RegisterEventResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

