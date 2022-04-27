import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { KtiApiApiRequestFactory, KtiApiApiResponseProcessor} from "../apis/KtiApiApi";
export class ObservableKtiApiApi {
    private requestFactory: KtiApiApiRequestFactory;
    private responseProcessor: KtiApiApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: KtiApiApiRequestFactory,
        responseProcessor?: KtiApiApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new KtiApiApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new KtiApiApiResponseProcessor();
    }

    /**
     * @param deregisterKtiSessionRequest 
     */
    public deregisterKtiSession(deregisterKtiSessionRequest: DeregisterKtiSessionRequest, _options?: Configuration): Observable<OperationResultResponse> {
        const requestContextPromise = this.requestFactory.deregisterKtiSession(deregisterKtiSessionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deregisterKtiSession(rsp)));
            }));
    }

    /**
     * @param hostname 
     */
    public getClientRunningPort(hostname: string, _options?: Configuration): Observable<GetClientRunningPortResponse> {
        const requestContextPromise = this.requestFactory.getClientRunningPort(hostname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getClientRunningPort(rsp)));
            }));
    }

    /**
     */
    public getConditions(_options?: Configuration): Observable<GetConditionsResponse> {
        const requestContextPromise = this.requestFactory.getConditions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConditions(rsp)));
            }));
    }

    /**
     */
    public getConfig(_options?: Configuration): Observable<GetConfigResponse> {
        const requestContextPromise = this.requestFactory.getConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConfig(rsp)));
            }));
    }

    /**
     */
    public getCooperationLogo(_options?: Configuration): Observable<GetCooperationLogoResponse> {
        const requestContextPromise = this.requestFactory.getCooperationLogo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCooperationLogo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getCoupon(id: string, _options?: Configuration): Observable<GetCouponResponse> {
        const requestContextPromise = this.requestFactory.getCoupon(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCoupon(rsp)));
            }));
    }

    /**
     */
    public getCustomPlaylists(_options?: Configuration): Observable<GetCustomPlaylistsResponse> {
        const requestContextPromise = this.requestFactory.getCustomPlaylists(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomPlaylists(rsp)));
            }));
    }

    /**
     * @param stationId 
     */
    public getMediaForAllEvents(stationId: number, _options?: Configuration): Observable<GetMediaForAllEventsResponse> {
        const requestContextPromise = this.requestFactory.getMediaForAllEvents(stationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMediaForAllEvents(rsp)));
            }));
    }

    /**
     * @param getMediaForEventRequest 
     */
    public getMediaForEvent(getMediaForEventRequest: GetMediaForEventRequest, _options?: Configuration): Observable<GetMediaForEventResponse> {
        const requestContextPromise = this.requestFactory.getMediaForEvent(getMediaForEventRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMediaForEvent(rsp)));
            }));
    }

    /**
     */
    public getPharmacyLogo(_options?: Configuration): Observable<GetPharmacyLogoResponse> {
        const requestContextPromise = this.requestFactory.getPharmacyLogo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPharmacyLogo(rsp)));
            }));
    }

    /**
     * @param stationId 
     */
    public getPlaylist(stationId: number, _options?: Configuration): Observable<GetPlaylistResponse> {
        const requestContextPromise = this.requestFactory.getPlaylist(stationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlaylist(rsp)));
            }));
    }

    /**
     * @param mergeWorkstationRequest 
     */
    public mergeWorkStation(mergeWorkstationRequest: MergeWorkstationRequest, _options?: Configuration): Observable<MergeWorkstationResponse> {
        const requestContextPromise = this.requestFactory.mergeWorkStation(mergeWorkstationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mergeWorkStation(rsp)));
            }));
    }

    /**
     * @param registerEventRequest 
     */
    public registerEvent(registerEventRequest: RegisterEventRequest, _options?: Configuration): Observable<RegisterEventResponse> {
        const requestContextPromise = this.requestFactory.registerEvent(registerEventRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerEvent(rsp)));
            }));
    }

    /**
     * @param registerPlayItemStatisticsRequest 
     */
    public registerPlayItemStatistics(registerPlayItemStatisticsRequest: RegisterPlayItemStatisticsRequest, _options?: Configuration): Observable<OperationResultResponse> {
        const requestContextPromise = this.requestFactory.registerPlayItemStatistics(registerPlayItemStatisticsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerPlayItemStatistics(rsp)));
            }));
    }

    /**
     * @param saveConditionsRequest 
     */
    public saveConditions(saveConditionsRequest: SaveConditionsRequest, _options?: Configuration): Observable<OperationResultResponse> {
        const requestContextPromise = this.requestFactory.saveConditions(saveConditionsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saveConditions(rsp)));
            }));
    }

    /**
     * @param saveConfigRequest 
     */
    public saveConfig(saveConfigRequest: SaveConfigRequest, _options?: Configuration): Observable<SaveConfigResponse> {
        const requestContextPromise = this.requestFactory.saveConfig(saveConfigRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saveConfig(rsp)));
            }));
    }

    /**
     * @param updateCouponEncashmentRequest 
     */
    public updateCouponEncashment(updateCouponEncashmentRequest: UpdateCouponEncashmentRequest, _options?: Configuration): Observable<OperationResultResponse> {
        const requestContextPromise = this.requestFactory.updateCouponEncashment(updateCouponEncashmentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCouponEncashment(rsp)));
            }));
    }

}

import { KtiStatisticsApiApiRequestFactory, KtiStatisticsApiApiResponseProcessor} from "../apis/KtiStatisticsApiApi";
export class ObservableKtiStatisticsApiApi {
    private requestFactory: KtiStatisticsApiApiRequestFactory;
    private responseProcessor: KtiStatisticsApiApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: KtiStatisticsApiApiRequestFactory,
        responseProcessor?: KtiStatisticsApiApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new KtiStatisticsApiApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new KtiStatisticsApiApiResponseProcessor();
    }

    /**
     * @param _from 
     * @param to 
     */
    public getMediaStatistics(_from: Date, to: Date, _options?: Configuration): Observable<MediaStatisticsResponse> {
        const requestContextPromise = this.requestFactory.getMediaStatistics(_from, to, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMediaStatistics(rsp)));
            }));
    }

    /**
     * @param _from 
     * @param to 
     */
    public getUserSatisfactionStatistics(_from: Date, to: Date, _options?: Configuration): Observable<UserSatisfactionStatisticsResponse> {
        const requestContextPromise = this.requestFactory.getUserSatisfactionStatistics(_from, to, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserSatisfactionStatistics(rsp)));
            }));
    }

}
