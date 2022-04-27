# .KtiApiApi

All URIs are relative to *http://192.168.88.59:8080/kundenTouchDisplay/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deregisterKtiSession**](KtiApiApi.md#deregisterKtiSession) | **POST** /kti/deregister-kti-session | 
[**getClientRunningPort**](KtiApiApi.md#getClientRunningPort) | **GET** /kti/client-running-port | 
[**getConditions**](KtiApiApi.md#getConditions) | **GET** /kti/conditions | 
[**getConfig**](KtiApiApi.md#getConfig) | **GET** /kti/config | 
[**getCooperationLogo**](KtiApiApi.md#getCooperationLogo) | **GET** /kti/cooperation-logo | 
[**getCoupon**](KtiApiApi.md#getCoupon) | **GET** /kti/coupon/{id} | 
[**getCustomPlaylists**](KtiApiApi.md#getCustomPlaylists) | **GET** /kti/custom-playlists | 
[**getMediaForAllEvents**](KtiApiApi.md#getMediaForAllEvents) | **GET** /kti/media-for-all-events | 
[**getMediaForEvent**](KtiApiApi.md#getMediaForEvent) | **POST** /kti/media-for-event | 
[**getPharmacyLogo**](KtiApiApi.md#getPharmacyLogo) | **GET** /kti/pharmacy-logo | 
[**getPlaylist**](KtiApiApi.md#getPlaylist) | **GET** /kti/playlist | 
[**mergeWorkStation**](KtiApiApi.md#mergeWorkStation) | **POST** /kti/merge-workstation | 
[**registerEvent**](KtiApiApi.md#registerEvent) | **POST** /kti/register-event | 
[**registerPlayItemStatistics**](KtiApiApi.md#registerPlayItemStatistics) | **POST** /kti/register-play-item-statistics | 
[**saveConditions**](KtiApiApi.md#saveConditions) | **POST** /kti/save-conditions | 
[**saveConfig**](KtiApiApi.md#saveConfig) | **POST** /kti/save-config | 
[**updateCouponEncashment**](KtiApiApi.md#updateCouponEncashment) | **POST** /kti/update-coupon-encashment | 


# **deregisterKtiSession**
> OperationResultResponse deregisterKtiSession(deregisterKtiSessionRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiDeregisterKtiSessionRequest = {
  // DeregisterKtiSessionRequest
  deregisterKtiSessionRequest: {
    stationId: 1,
    uniqueTransactionKey: "uniqueTransactionKey_example",
  },
};

apiInstance.deregisterKtiSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deregisterKtiSessionRequest** | **DeregisterKtiSessionRequest**|  |


### Return type

**OperationResultResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getClientRunningPort**
> GetClientRunningPortResponse getClientRunningPort()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiGetClientRunningPortRequest = {
  // string
  hostname: "hostname_example",
};

apiInstance.getClientRunningPort(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostname** | [**string**] |  | defaults to undefined


### Return type

**GetClientRunningPortResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConditions**
> GetConditionsResponse getConditions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:any = {};

apiInstance.getConditions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetConditionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConfig**
> GetConfigResponse getConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:any = {};

apiInstance.getConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetConfigResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCooperationLogo**
> GetCooperationLogoResponse getCooperationLogo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:any = {};

apiInstance.getCooperationLogo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetCooperationLogoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCoupon**
> GetCouponResponse getCoupon()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiGetCouponRequest = {
  // string
  id: "id_example",
};

apiInstance.getCoupon(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**GetCouponResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomPlaylists**
> GetCustomPlaylistsResponse getCustomPlaylists()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:any = {};

apiInstance.getCustomPlaylists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetCustomPlaylistsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMediaForAllEvents**
> GetMediaForAllEventsResponse getMediaForAllEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiGetMediaForAllEventsRequest = {
  // number
  stationId: 1,
};

apiInstance.getMediaForAllEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**number**] |  | defaults to undefined


### Return type

**GetMediaForAllEventsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMediaForEvent**
> GetMediaForEventResponse getMediaForEvent(getMediaForEventRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiGetMediaForEventRequest = {
  // GetMediaForEventRequest
  getMediaForEventRequest: {
    stationId: 1,
    event: "event_example",
    uniqueKey: "uniqueKey_example",
  },
};

apiInstance.getMediaForEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getMediaForEventRequest** | **GetMediaForEventRequest**|  |


### Return type

**GetMediaForEventResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPharmacyLogo**
> GetPharmacyLogoResponse getPharmacyLogo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:any = {};

apiInstance.getPharmacyLogo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetPharmacyLogoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlaylist**
> GetPlaylistResponse getPlaylist()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiGetPlaylistRequest = {
  // number
  stationId: 1,
};

apiInstance.getPlaylist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**number**] |  | defaults to undefined


### Return type

**GetPlaylistResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mergeWorkStation**
> MergeWorkstationResponse mergeWorkStation(mergeWorkstationRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiMergeWorkStationRequest = {
  // MergeWorkstationRequest
  mergeWorkstationRequest: {
    station: {
      id: 1,
      stationName: "stationName_example",
      computerName: "computerName_example",
      customerServiceBean: {
        customerId: "customerId_example",
        customerName: "customerName_example",
      },
      monitors: [
        {
          idString: "idString_example",
          screenWidth: 1,
          screenHeight: 1,
          customerDefault: true,
          touchable: true,
          showTotal: true,
          plService: [
            {
              id: 1,
              plName: "plName_example",
              loop: true,
              defaultPl: true,
              lastModifiedTime: "lastModifiedTime_example",
              items: [
                {
                  id: 1,
                  idPl: 1,
                  itemFile: "itemFile_example",
                  itemType: "itemType_example",
                  itemThumb: "itemThumb_example",
                  index: 1,
                  externalId: "externalId_example",
                  itemTypeCateg: "itemTypeCateg_example",
                  thumbnailUrl: "thumbnailUrl_example",
                  imageUrl: "imageUrl_example",
                  fileSize: 1,
                  parentPlaylist: {
                    id: 1,
                    plName: "plName_example",
                    defaultPl: true,
                    lastModifiedTime: new Date('1970-01-01T00:00:00.00Z'),
                    items: [],
                    readonly: true,
                    providerId: 1,
                    providerName: "providerName_example",
                    externalId: "externalId_example",
                    filterMonitorId: 1,
                    conditionName: "conditionName_example",
                    conditionId: 1,
                    type: "type_example",
                    tableRowId: "tableRowId_example",
                    schedule: {
                      mainId: 1,
                      idPl: 1,
                      monitorId: 1,
                      dateFrom: new Date('1970-01-01T00:00:00.00Z'),
                      dateTo: new Date('1970-01-01T00:00:00.00Z'),
                      timeFrom: new Date('1970-01-01T00:00:00.00Z'),
                      timeTo: new Date('1970-01-01T00:00:00.00Z'),
                      readonly: true,
                      type: 1,
                      providerId: 1,
                      playlist: ,
                      monitor: {
                        monitorId: 1,
                        monitorExternalId: "monitorExternalId_example",
                        stationId: 1,
                        screenWidth: 1,
                        screenHeight: 1,
                        customerDefault: true,
                        touchable: true,
                        showTotal: true,
                        description: "description_example",
                        disabled: true,
                        disabledFromKti: true,
                        mainMonitor: true,
                        deviceKey: "deviceKey_example",
                        adaptor: "adaptor_example",
                        ignoreCentralMainlist: true,
                        station: {
                          id: 1,
                          stationName: "stationName_example",
                          computerName: "computerName_example",
                          socketHostname: "socketHostname_example",
                          socketPort: 1,
                          monitors: [
                            ,
                          ],
                          pharmacy: {
                            pharmacyId: 1,
                            pharmacyExternalId: "pharmacyExternalId_example",
                            pharmacyName: "pharmacyName_example",
                          },
                        },
                        playlists: [
                          ,
                        ],
                      },
                      allPlaylists: {
                        "key": "key_example",
                      },
                      allMonitors: {
                        "key": "key_example",
                      },
                    },
                    scheduleForMonitor: true,
                    externalActionDetails: {
                      conditionId: 1,
                      extId: "extId_example",
                      additionalExtData: "additionalExtData_example",
                      crosselerPznList: "crosselerPznList_example",
                      crosselerName: "crosselerName_example",
                      crosselerValidFrom: new Date('1970-01-01T00:00:00.00Z'),
                      crosselerValidTo: new Date('1970-01-01T00:00:00.00Z'),
                      crosselerReleased: true,
                      crosselerCreationDate: new Date('1970-01-01T00:00:00.00Z'),
                      providerId: 1,
                      providerName: "providerName_example",
                      groupId: 1,
                      groupName: "groupName_example",
                      defaultInGroup: true,
                      shortDescription: "shortDescription_example",
                      longDescription: "longDescription_example",
                      userMediaFilePath: "userMediaFilePath_example",
                      originalShortDescription: "originalShortDescription_example",
                      originalLongDescription: "originalLongDescription_example",
                      originalUserMediaFilePath: "originalUserMediaFilePath_example",
                      originalConditionXML: "originalConditionXML_example",
                      crossSellerPhXML: "crossSellerPhXML_example",
                    },
                    triggerActionName: "triggerActionName_example",
                    typeP: 1,
                  },
                },
              ],
              triggerActionDetailsBean: {
                actionId: 1,
                actionName: "actionName_example",
                longDescription: "longDescription_example",
                shortDescription: "shortDescription_example",
                externalId: "externalId_example",
              },
            },
          ],
          active: true,
          primary: true,
          deviceKey: "deviceKey_example",
          adapter: "adapter_example",
          disabled: true,
          ignoreCentralMainlist: true,
        },
      ],
      hostName: "hostName_example",
      port: 1,
    },
  },
};

apiInstance.mergeWorkStation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mergeWorkstationRequest** | **MergeWorkstationRequest**|  |


### Return type

**MergeWorkstationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **registerEvent**
> RegisterEventResponse registerEvent(registerEventRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiRegisterEventRequest = {
  // RegisterEventRequest
  registerEventRequest: {
    event: "event_example",
  },
};

apiInstance.registerEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerEventRequest** | **RegisterEventRequest**|  |


### Return type

**RegisterEventResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **registerPlayItemStatistics**
> OperationResultResponse registerPlayItemStatistics(registerPlayItemStatisticsRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiRegisterPlayItemStatisticsRequest = {
  // RegisterPlayItemStatisticsRequest
  registerPlayItemStatisticsRequest: {
    playlistItemId: 1,
    monitorExternalId: "monitorExternalId_example",
    stationId: 1,
    time: 1,
    uniqueKey: "uniqueKey_example",
  },
};

apiInstance.registerPlayItemStatistics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerPlayItemStatisticsRequest** | **RegisterPlayItemStatisticsRequest**|  |


### Return type

**OperationResultResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **saveConditions**
> OperationResultResponse saveConditions(saveConditionsRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiSaveConditionsRequest = {
  // SaveConditionsRequest
  saveConditionsRequest: {
    conditions: [
      {
        groupId: 1,
        groupName: "groupName_example",
        conditions: [
          {
            id: 1,
            name: "name_example",
            inactive: true,
            type: 1,
            readonly: true,
            validFrom: new Date('1970-01-01T00:00:00.00Z'),
            validTo: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
      },
    ],
  },
};

apiInstance.saveConditions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saveConditionsRequest** | **SaveConditionsRequest**|  |


### Return type

**OperationResultResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **saveConfig**
> SaveConfigResponse saveConfig(saveConfigRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiSaveConfigRequest = {
  // SaveConfigRequest
  saveConfigRequest: {
    configs: [
      {
        cfgType: "cfgType_example",
        cfgValue: "cfgValue_example",
      },
    ],
  },
};

apiInstance.saveConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saveConfigRequest** | **SaveConfigRequest**|  |


### Return type

**SaveConfigResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCouponEncashment**
> OperationResultResponse updateCouponEncashment(updateCouponEncashmentRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiApiApi(configuration);

let body:.KtiApiApiUpdateCouponEncashmentRequest = {
  // UpdateCouponEncashmentRequest
  updateCouponEncashmentRequest: {
    encashmentCoupon: {
      einloesApoNr: 1,
      id: "id_example",
      einloesDatum: "einloesDatum_example",
      einloesStatus: 1,
      bedNr: "bedNr_example",
      bedKurz: "bedKurz_example",
      aplNr: "aplNr_example",
      aplKurz: "aplKurz_example",
    },
  },
};

apiInstance.updateCouponEncashment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCouponEncashmentRequest** | **UpdateCouponEncashmentRequest**|  |


### Return type

**OperationResultResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


