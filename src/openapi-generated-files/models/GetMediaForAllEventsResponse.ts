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

export class GetMediaForAllEventsResponse {
    'playlists'?: Array<PlayListServiceBean>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "playlists",
            "baseName": "playlists",
            "type": "Array<PlayListServiceBean>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetMediaForAllEventsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

