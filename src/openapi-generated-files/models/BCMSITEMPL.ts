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

import { ECMSPL } from './ECMSPL';
import { HttpFile } from '../http/http';

export class BCMSITEMPL {
    'id'?: number;
    'idPl'?: number;
    'itemFile'?: string;
    'itemType'?: string;
    'itemThumb'?: string;
    'index'?: number;
    'externalId'?: string;
    'itemTypeCateg'?: string;
    'thumbnailUrl'?: string;
    'imageUrl'?: string;
    'fileSize'?: number;
    'parentPlaylist'?: ECMSPL;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "idPl",
            "baseName": "idPl",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "itemFile",
            "baseName": "itemFile",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemType",
            "baseName": "itemType",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemThumb",
            "baseName": "itemThumb",
            "type": "string",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemTypeCateg",
            "baseName": "itemTypeCateg",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailUrl",
            "baseName": "thumbnailUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageUrl",
            "baseName": "imageUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSize",
            "baseName": "fileSize",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "parentPlaylist",
            "baseName": "parentPlaylist",
            "type": "ECMSPL",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BCMSITEMPL.attributeTypeMap;
    }

    public constructor() {
    }
}

