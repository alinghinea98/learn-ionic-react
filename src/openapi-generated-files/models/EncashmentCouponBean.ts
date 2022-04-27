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

export class EncashmentCouponBean {
    'einloesApoNr'?: number;
    'id'?: string;
    'einloesDatum'?: string;
    'einloesStatus'?: number;
    'bedNr'?: string;
    'bedKurz'?: string;
    'aplNr'?: string;
    'aplKurz'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "einloesApoNr",
            "baseName": "einloesApoNr",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "einloesDatum",
            "baseName": "einloesDatum",
            "type": "string",
            "format": ""
        },
        {
            "name": "einloesStatus",
            "baseName": "einloesStatus",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "bedNr",
            "baseName": "bedNr",
            "type": "string",
            "format": ""
        },
        {
            "name": "bedKurz",
            "baseName": "bedKurz",
            "type": "string",
            "format": ""
        },
        {
            "name": "aplNr",
            "baseName": "aplNr",
            "type": "string",
            "format": ""
        },
        {
            "name": "aplKurz",
            "baseName": "aplKurz",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EncashmentCouponBean.attributeTypeMap;
    }

    public constructor() {
    }
}
