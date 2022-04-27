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

import { MonitorServiceBean } from './MonitorServiceBean';
import { HttpFile } from '../http/http';

export class GetMediaForEventResponse {
    'monitors'?: Array<MonitorServiceBean>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "monitors",
            "baseName": "monitors",
            "type": "Array<MonitorServiceBean>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetMediaForEventResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

