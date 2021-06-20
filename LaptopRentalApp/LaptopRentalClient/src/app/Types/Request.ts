export class DeviceRequest {
    constructor (
        //public RequestId : number,
        public RequestDate : Date,
        public FromDate : Date,
        public ToDate : Date,
        public RequestStatus : string,
        public DeviceId_FK : number,
         ) {}
}