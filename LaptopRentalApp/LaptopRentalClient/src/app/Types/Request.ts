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
export class GetAllRequest{
    constructor (
         public RequestId : number,
        public RequestDate : Date,
        public FromDate : Date,
        public ToDate : Date,
        public RequestStatus : string,
        public DeviceId_FK : number,
        
        public IMEINumber : string,
        public DeviceName : string,
        public DeviceSpecification : string,
        public PreInstalledSoftware : string,
        public DeviceImage : FormData,
        public RentalAmount : any,
        public MaxRentalMonth : Number,
        public Interest : any,
        public Status: string

         ) {}
}