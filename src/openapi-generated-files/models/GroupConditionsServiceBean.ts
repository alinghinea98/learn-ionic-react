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

import { ConditionServiceBean } from './ConditionServiceBean';
import { HttpFile } from '../http/http';

export class GroupConditionsServiceBean {
    'groupId'?: number;
    'groupName'?: string;
    'conditions'?: Array<ConditionServiceBean>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ConditionServiceBean>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GroupConditionsServiceBean.attributeTypeMap;
    }

    public constructor() {
    }
}

