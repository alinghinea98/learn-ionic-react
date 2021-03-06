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

import { PlayListServiceBean } from './PlayListServiceBean';
import { HttpFile } from '../http/http';

export class MonitorServiceBean {
    'idString'?: string;
    'screenWidth'?: number;
    'screenHeight'?: number;
    'customerDefault'?: boolean;
    'touchable'?: boolean;
    'showTotal'?: boolean;
    'plService'?: Array<PlayListServiceBean>;
    'active'?: boolean;
    'primary'?: boolean;
    'deviceKey'?: string;
    'adapter'?: string;
    'disabled'?: boolean;
    'ignoreCentralMainlist'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "idString",
            "baseName": "idString",
            "type": "string",
            "format": ""
        },
        {
            "name": "screenWidth",
            "baseName": "screenWidth",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "screenHeight",
            "baseName": "screenHeight",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "customerDefault",
            "baseName": "customerDefault",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "touchable",
            "baseName": "touchable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "showTotal",
            "baseName": "showTotal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "plService",
            "baseName": "plService",
            "type": "Array<PlayListServiceBean>",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deviceKey",
            "baseName": "deviceKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "adapter",
            "baseName": "adapter",
            "type": "string",
            "format": ""
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ignoreCentralMainlist",
            "baseName": "ignoreCentralMainlist",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MonitorServiceBean.attributeTypeMap;
    }

    public constructor() {
    }
}

