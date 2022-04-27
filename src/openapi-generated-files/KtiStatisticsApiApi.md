# .KtiStatisticsApiApi

All URIs are relative to *http://192.168.88.59:8080/kundenTouchDisplay/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMediaStatistics**](KtiStatisticsApiApi.md#getMediaStatistics) | **GET** /kti/statistics/media | 
[**getUserSatisfactionStatistics**](KtiStatisticsApiApi.md#getUserSatisfactionStatistics) | **GET** /kti/statistics/user-satisfaction | 


# **getMediaStatistics**
> MediaStatisticsResponse getMediaStatistics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiStatisticsApiApi(configuration);

let body:.KtiStatisticsApiApiGetMediaStatisticsRequest = {
  // Date
  _from: new Date('1970-01-01T00:00:00.00Z'),
  // Date
  to: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getMediaStatistics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_from** | [**Date**] |  | defaults to undefined
 **to** | [**Date**] |  | defaults to undefined


### Return type

**MediaStatisticsResponse**

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

# **getUserSatisfactionStatistics**
> UserSatisfactionStatisticsResponse getUserSatisfactionStatistics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KtiStatisticsApiApi(configuration);

let body:.KtiStatisticsApiApiGetUserSatisfactionStatisticsRequest = {
  // Date
  _from: new Date('1970-01-01T00:00:00.00Z'),
  // Date
  to: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUserSatisfactionStatistics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_from** | [**Date**] |  | defaults to undefined
 **to** | [**Date**] |  | defaults to undefined


### Return type

**UserSatisfactionStatisticsResponse**

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


