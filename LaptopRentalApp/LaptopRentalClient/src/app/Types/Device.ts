
export class Device {
    constructor (
       // public DeviceId : number,
        public IMEINumber : string,
        public DeviceName : string,
        public DeviceSpecification : string,
        public PreInstalledSoftware : string,
        public DeviceImage : FormData,
       // public Ratings : number,
        public RentalAmount : any,
        public MaxRentalMonth : Number,
        public Interest : any,
        public Status: string,
        public UserId_FK : number
         ) {}
}