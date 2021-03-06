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

import { StatisticsUserSatisfaction } from './StatisticsUserSatisfaction';
import { HttpFile } from '../http/http';

export class UserSatisfactionStatisticsResponse {
    'userSatisfactionStatistics'?: Array<StatisticsUserSatisfaction>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userSatisfactionStatistics",
            "baseName": "userSatisfactionStatistics",
            "type": "Array<StatisticsUserSatisfaction>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserSatisfactionStatisticsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

