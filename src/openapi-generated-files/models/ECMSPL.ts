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

import { BCMSITEMPL } from './BCMSITEMPL';
import { BCMSMAIN } from './BCMSMAIN';
import { ECMSCONDITIONEXTDATA } from './ECMSCONDITIONEXTDATA';
import { HttpFile } from '../http/http';

export class ECMSPL {
    'id'?: number;
    'plName'?: string;
    'defaultPl'?: boolean;
    'lastModifiedTime'?: Date;
    'items'?: Array<BCMSITEMPL>;
    'readonly'?: boolean;
    'providerId'?: number;
    'providerName'?: string;
    'externalId'?: string;
    'filterMonitorId'?: number;
    'conditionName'?: string;
    'conditionId'?: number;
    'type'?: string;
    'tableRowId'?: string;
    'schedule'?: BCMSMAIN;
    'scheduleForMonitor'?: boolean;
    'externalActionDetails'?: ECMSCONDITIONEXTDATA;
    'triggerActionName'?: string;
    'typeP'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "plName",
            "baseName": "plName",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultPl",
            "baseName": "defaultPl",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BCMSITEMPL>",
            "format": ""
        },
        {
            "name": "readonly",
            "baseName": "readonly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "providerId",
            "baseName": "providerId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "filterMonitorId",
            "baseName": "filterMonitorId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "conditionName",
            "baseName": "conditionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "conditionId",
            "baseName": "conditionId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "tableRowId",
            "baseName": "tableRowId",
            "type": "string",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "BCMSMAIN",
            "format": ""
        },
        {
            "name": "scheduleForMonitor",
            "baseName": "scheduleForMonitor",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "externalActionDetails",
            "baseName": "externalActionDetails",
            "type": "ECMSCONDITIONEXTDATA",
            "format": ""
        },
        {
            "name": "triggerActionName",
            "baseName": "triggerActionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "typeP",
            "baseName": "typeP",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ECMSPL.attributeTypeMap;
    }

    public constructor() {
    }
}

