import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BCMSITEMPL } from '../models/BCMSITEMPL';
import { BCMSMAIN } from '../models/BCMSMAIN';
import { ConditionServiceBean } from '../models/ConditionServiceBean';
import { ConfigServiceBean } from '../models/ConfigServiceBean';
import { CouponAusgabeBean } from '../models/CouponAusgabeBean';
import { CouponSchemaBean } from '../models/CouponSchemaBean';
import { CustomPlayListsBean } from '../models/CustomPlayListsBean';
import { CustomerServiceBean } from '../models/CustomerServiceBean';
import { DeregisterKtiSessionRequest } from '../models/DeregisterKtiSessionRequest';
import { ECMSCONDITIONEXTDATA } from '../models/ECMSCONDITIONEXTDATA';
import { ECMSMONITOR } from '../models/ECMSMONITOR';
import { ECMSPHARMACY } from '../models/ECMSPHARMACY';
import { ECMSPL } from '../models/ECMSPL';
import { ECMSSTATION } from '../models/ECMSSTATION';
import { EncashmentCouponBean } from '../models/EncashmentCouponBean';
import { GetClientRunningPortResponse } from '../models/GetClientRunningPortResponse';
import { GetConditionsResponse } from '../models/GetConditionsResponse';
import { GetConfigResponse } from '../models/GetConfigResponse';
import { GetCooperationLogoResponse } from '../models/GetCooperationLogoResponse';
import { GetCouponResponse } from '../models/GetCouponResponse';
import { GetCustomPlaylistsResponse } from '../models/GetCustomPlaylistsResponse';
import { GetMediaForAllEventsResponse } from '../models/GetMediaForAllEventsResponse';
import { GetMediaForEventRequest } from '../models/GetMediaForEventRequest';
import { GetMediaForEventResponse } from '../models/GetMediaForEventResponse';
import { GetPharmacyLogoResponse } from '../models/GetPharmacyLogoResponse';
import { GetPlaylistResponse } from '../models/GetPlaylistResponse';
import { GroupConditionsServiceBean } from '../models/GroupConditionsServiceBean';
import { MediaStatisticsResponse } from '../models/MediaStatisticsResponse';
import { MergeWorkstationRequest } from '../models/MergeWorkstationRequest';
import { MergeWorkstationResponse } from '../models/MergeWorkstationResponse';
import { MonitorServiceBean } from '../models/MonitorServiceBean';
import { OperationResultResponse } from '../models/OperationResultResponse';
import { PlayListServiceBean } from '../models/PlayListServiceBean';
import { RegisterEventRequest } from '../models/RegisterEventRequest';
import { RegisterEventResponse } from '../models/RegisterEventResponse';
import { RegisterPlayItemStatisticsRequest } from '../models/RegisterPlayItemStatisticsRequest';
import { SaveConditionsRequest } from '../models/SaveConditionsRequest';
import { SaveConfigRequest } from '../models/SaveConfigRequest';
import { SaveConfigResponse } from '../models/SaveConfigResponse';
import { StationServiceBean } from '../models/StationServiceBean';
import { StatisticsMediaPlay } from '../models/StatisticsMediaPlay';
import { StatisticsUserSatisfaction } from '../models/StatisticsUserSatisfaction';
import { TriggerActionDetailsBean } from '../models/TriggerActionDetailsBean';
import { UpdateCouponEncashmentRequest } from '../models/UpdateCouponEncashmentRequest';
import { UserSatisfactionStatisticsResponse } from '../models/UserSatisfactionStatisticsResponse';

import { ObservableKtiApiApi } from "./ObservableAPI";
import { KtiApiApiRequestFactory, KtiApiApiResponseProcessor} from "../apis/KtiApiApi";

export interface KtiApiApiDeregisterKtiSessionRequest {
    /**
     * 
     * @type DeregisterKtiSessionRequest
     * @memberof KtiApiApideregisterKtiSession
     */
    deregisterKtiSessionRequest: DeregisterKtiSessionRequest
}

export interface KtiApiApiGetClientRunningPortRequest {
    /**
     * 
     * @type string
     * @memberof KtiApiApigetClientRunningPort
     */
    hostname: string
}

export interface KtiApiApiGetConditionsRequest {
}

export interface KtiApiApiGetConfigRequest {
}

export interface KtiApiApiGetCooperationLogoRequest {
}

export interface KtiApiApiGetCouponRequest {
    /**
     * 
     * @type string
     * @memberof KtiApiApigetCoupon
     */
    id: string
}

export interface KtiApiApiGetCustomPlaylistsRequest {
}

export interface KtiApiApiGetMediaForAllEventsRequest {
    /**
     * 
     * @type number
     * @memberof KtiApiApigetMediaForAllEvents
     */
    stationId: number
}

export interface KtiApiApiGetMediaForEventRequest {
    /**
     * 
     * @type GetMediaForEventRequest
     * @memberof KtiApiApigetMediaForEvent
     */
    getMediaForEventRequest: GetMediaForEventRequest
}

export interface KtiApiApiGetPharmacyLogoRequest {
}

export interface KtiApiApiGetPlaylistRequest {
    /**
     * 
     * @type number
     * @memberof KtiApiApigetPlaylist
     */
    stationId: number
}

export interface KtiApiApiMergeWorkStationRequest {
    /**
     * 
     * @type MergeWorkstationRequest
     * @memberof KtiApiApimergeWorkStation
     */
    mergeWorkstationRequest: MergeWorkstationRequest
}

export interface KtiApiApiRegisterEventRequest {
    /**
     * 
     * @type RegisterEventRequest
     * @memberof KtiApiApiregisterEvent
     */
    registerEventRequest: RegisterEventRequest
}

export interface KtiApiApiRegisterPlayItemStatisticsRequest {
    /**
     * 
     * @type RegisterPlayItemStatisticsRequest
     * @memberof KtiApiApiregisterPlayItemStatistics
     */
    registerPlayItemStatisticsRequest: RegisterPlayItemStatisticsRequest
}

export interface KtiApiApiSaveConditionsRequest {
    /**
     * 
     * @type SaveConditionsRequest
     * @memberof KtiApiApisaveConditions
     */
    saveConditionsRequest: SaveConditionsRequest
}

export interface KtiApiApiSaveConfigRequest {
    /**
     * 
     * @type SaveConfigRequest
     * @memberof KtiApiApisaveConfig
     */
    saveConfigRequest: SaveConfigRequest
}

export interface KtiApiApiUpdateCouponEncashmentRequest {
    /**
     * 
     * @type UpdateCouponEncashmentRequest
     * @memberof KtiApiApiupdateCouponEncashment
     */
    updateCouponEncashmentRequest: UpdateCouponEncashmentRequest
}

export class ObjectKtiApiApi {
    private api: ObservableKtiApiApi

    public constructor(configuration: Configuration, requestFactory?: KtiApiApiRequestFactory, responseProcessor?: KtiApiApiResponseProcessor) {
        this.api = new ObservableKtiApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deregisterKtiSession(param: KtiApiApiDeregisterKtiSessionRequest, options?: Configuration): Promise<OperationResultResponse> {
        return this.api.deregisterKtiSession(param.deregisterKtiSessionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getClientRunningPort(param: KtiApiApiGetClientRunningPortRequest, options?: Configuration): Promise<GetClientRunningPortResponse> {
        return this.api.getClientRunningPort(param.hostname,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getConditions(param: KtiApiApiGetConditionsRequest = {}, options?: Configuration): Promise<GetConditionsResponse> {
        return this.api.getConditions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getConfig(param: KtiApiApiGetConfigRequest = {}, options?: Configuration): Promise<GetConfigResponse> {
        return this.api.getConfig( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getCooperationLogo(param: KtiApiApiGetCooperationLogoRequest = {}, options?: Configuration): Promise<GetCooperationLogoResponse> {
        return this.api.getCooperationLogo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getCoupon(param: KtiApiApiGetCouponRequest, options?: Configuration): Promise<GetCouponResponse> {
        return this.api.getCoupon(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getCustomPlaylists(param: KtiApiApiGetCustomPlaylistsRequest = {}, options?: Configuration): Promise<GetCustomPlaylistsResponse> {
        return this.api.getCustomPlaylists( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getMediaForAllEvents(param: KtiApiApiGetMediaForAllEventsRequest, options?: Configuration): Promise<GetMediaForAllEventsResponse> {
        return this.api.getMediaForAllEvents(param.stationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getMediaForEvent(param: KtiApiApiGetMediaForEventRequest, options?: Configuration): Promise<GetMediaForEventResponse> {
        return this.api.getMediaForEvent(param.getMediaForEventRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPharmacyLogo(param: KtiApiApiGetPharmacyLogoRequest = {}, options?: Configuration): Promise<GetPharmacyLogoResponse> {
        return this.api.getPharmacyLogo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPlaylist(param: KtiApiApiGetPlaylistRequest, options?: Configuration): Promise<GetPlaylistResponse> {
        return this.api.getPlaylist(param.stationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public mergeWorkStation(param: KtiApiApiMergeWorkStationRequest, options?: Configuration): Promise<MergeWorkstationResponse> {
        return this.api.mergeWorkStation(param.mergeWorkstationRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public registerEvent(param: KtiApiApiRegisterEventRequest, options?: Configuration): Promise<RegisterEventResponse> {
        return this.api.registerEvent(param.registerEventRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public registerPlayItemStatistics(param: KtiApiApiRegisterPlayItemStatisticsRequest, options?: Configuration): Promise<OperationResultResponse> {
        return this.api.registerPlayItemStatistics(param.registerPlayItemStatisticsRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public saveConditions(param: KtiApiApiSaveConditionsRequest, options?: Configuration): Promise<OperationResultResponse> {
        return this.api.saveConditions(param.saveConditionsRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public saveConfig(param: KtiApiApiSaveConfigRequest, options?: Configuration): Promise<SaveConfigResponse> {
        return this.api.saveConfig(param.saveConfigRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateCouponEncashment(param: KtiApiApiUpdateCouponEncashmentRequest, options?: Configuration): Promise<OperationResultResponse> {
        return this.api.updateCouponEncashment(param.updateCouponEncashmentRequest,  options).toPromise();
    }

}

import { ObservableKtiStatisticsApiApi } from "./ObservableAPI";
import { KtiStatisticsApiApiRequestFactory, KtiStatisticsApiApiResponseProcessor} from "../apis/KtiStatisticsApiApi";

export interface KtiStatisticsApiApiGetMediaStatisticsRequest {
    /**
     * 
     * @type Date
     * @memberof KtiStatisticsApiApigetMediaStatistics
     */
    _from: Date
    /**
     * 
     * @type Date
     * @memberof KtiStatisticsApiApigetMediaStatistics
     */
    to: Date
}

export interface KtiStatisticsApiApiGetUserSatisfactionStatisticsRequest {
    /**
     * 
     * @type Date
     * @memberof KtiStatisticsApiApigetUserSatisfactionStatistics
     */
    _from: Date
    /**
     * 
     * @type Date
     * @memberof KtiStatisticsApiApigetUserSatisfactionStatistics
     */
    to: Date
}

export class ObjectKtiStatisticsApiApi {
    private api: ObservableKtiStatisticsApiApi

    public constructor(configuration: Configuration, requestFactory?: KtiStatisticsApiApiRequestFactory, responseProcessor?: KtiStatisticsApiApiResponseProcessor) {
        this.api = new ObservableKtiStatisticsApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getMediaStatistics(param: KtiStatisticsApiApiGetMediaStatisticsRequest, options?: Configuration): Promise<MediaStatisticsResponse> {
        return this.api.getMediaStatistics(param._from, param.to,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUserSatisfactionStatistics(param: KtiStatisticsApiApiGetUserSatisfactionStatisticsRequest, options?: Configuration): Promise<UserSatisfactionStatisticsResponse> {
        return this.api.getUserSatisfactionStatistics(param._from, param.to,  options).toPromise();
    }

}
