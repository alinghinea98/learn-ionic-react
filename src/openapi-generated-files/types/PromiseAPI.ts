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
import { ObservableKtiApiApi } from './ObservableAPI';

import { KtiApiApiRequestFactory, KtiApiApiResponseProcessor} from "../apis/KtiApiApi";
export class PromiseKtiApiApi {
    private api: ObservableKtiApiApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KtiApiApiRequestFactory,
        responseProcessor?: KtiApiApiResponseProcessor
    ) {
        this.api = new ObservableKtiApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param deregisterKtiSessionRequest 
     */
    public deregisterKtiSession(deregisterKtiSessionRequest: DeregisterKtiSessionRequest, _options?: Configuration): Promise<OperationResultResponse> {
        const result = this.api.deregisterKtiSession(deregisterKtiSessionRequest, _options);
        return result.toPromise();
    }

    /**
     * @param hostname 
     */
    public getClientRunningPort(hostname: string, _options?: Configuration): Promise<GetClientRunningPortResponse> {
        const result = this.api.getClientRunningPort(hostname, _options);
        return result.toPromise();
    }

    /**
     */
    public getConditions(_options?: Configuration): Promise<GetConditionsResponse> {
        const result = this.api.getConditions(_options);
        return result.toPromise();
    }

    /**
     */
    public getConfig(_options?: Configuration): Promise<GetConfigResponse> {
        const result = this.api.getConfig(_options);
        return result.toPromise();
    }

    /**
     */
    public getCooperationLogo(_options?: Configuration): Promise<GetCooperationLogoResponse> {
        const result = this.api.getCooperationLogo(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getCoupon(id: string, _options?: Configuration): Promise<GetCouponResponse> {
        const result = this.api.getCoupon(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getCustomPlaylists(_options?: Configuration): Promise<GetCustomPlaylistsResponse> {
        const result = this.api.getCustomPlaylists(_options);
        return result.toPromise();
    }

    /**
     * @param stationId 
     */
    public getMediaForAllEvents(stationId: number, _options?: Configuration): Promise<GetMediaForAllEventsResponse> {
        const result = this.api.getMediaForAllEvents(stationId, _options);
        return result.toPromise();
    }

    /**
     * @param getMediaForEventRequest 
     */
    public getMediaForEvent(getMediaForEventRequest: GetMediaForEventRequest, _options?: Configuration): Promise<GetMediaForEventResponse> {
        const result = this.api.getMediaForEvent(getMediaForEventRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public getPharmacyLogo(_options?: Configuration): Promise<GetPharmacyLogoResponse> {
        const result = this.api.getPharmacyLogo(_options);
        return result.toPromise();
    }

    /**
     * @param stationId 
     */
    public getPlaylist(stationId: number, _options?: Configuration): Promise<GetPlaylistResponse> {
        const result = this.api.getPlaylist(stationId, _options);
        return result.toPromise();
    }

    /**
     * @param mergeWorkstationRequest 
     */
    public mergeWorkStation(mergeWorkstationRequest: MergeWorkstationRequest, _options?: Configuration): Promise<MergeWorkstationResponse> {
        const result = this.api.mergeWorkStation(mergeWorkstationRequest, _options);
        return result.toPromise();
    }

    /**
     * @param registerEventRequest 
     */
    public registerEvent(registerEventRequest: RegisterEventRequest, _options?: Configuration): Promise<RegisterEventResponse> {
        const result = this.api.registerEvent(registerEventRequest, _options);
        return result.toPromise();
    }

    /**
     * @param registerPlayItemStatisticsRequest 
     */
    public registerPlayItemStatistics(registerPlayItemStatisticsRequest: RegisterPlayItemStatisticsRequest, _options?: Configuration): Promise<OperationResultResponse> {
        const result = this.api.registerPlayItemStatistics(registerPlayItemStatisticsRequest, _options);
        return result.toPromise();
    }

    /**
     * @param saveConditionsRequest 
     */
    public saveConditions(saveConditionsRequest: SaveConditionsRequest, _options?: Configuration): Promise<OperationResultResponse> {
        const result = this.api.saveConditions(saveConditionsRequest, _options);
        return result.toPromise();
    }

    /**
     * @param saveConfigRequest 
     */
    public saveConfig(saveConfigRequest: SaveConfigRequest, _options?: Configuration): Promise<SaveConfigResponse> {
        const result = this.api.saveConfig(saveConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * @param updateCouponEncashmentRequest 
     */
    public updateCouponEncashment(updateCouponEncashmentRequest: UpdateCouponEncashmentRequest, _options?: Configuration): Promise<OperationResultResponse> {
        const result = this.api.updateCouponEncashment(updateCouponEncashmentRequest, _options);
        return result.toPromise();
    }


}



import { ObservableKtiStatisticsApiApi } from './ObservableAPI';

import { KtiStatisticsApiApiRequestFactory, KtiStatisticsApiApiResponseProcessor} from "../apis/KtiStatisticsApiApi";
export class PromiseKtiStatisticsApiApi {
    private api: ObservableKtiStatisticsApiApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KtiStatisticsApiApiRequestFactory,
        responseProcessor?: KtiStatisticsApiApiResponseProcessor
    ) {
        this.api = new ObservableKtiStatisticsApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param _from 
     * @param to 
     */
    public getMediaStatistics(_from: Date, to: Date, _options?: Configuration): Promise<MediaStatisticsResponse> {
        const result = this.api.getMediaStatistics(_from, to, _options);
        return result.toPromise();
    }

    /**
     * @param _from 
     * @param to 
     */
    public getUserSatisfactionStatistics(_from: Date, to: Date, _options?: Configuration): Promise<UserSatisfactionStatisticsResponse> {
        const result = this.api.getUserSatisfactionStatistics(_from, to, _options);
        return result.toPromise();
    }


}



