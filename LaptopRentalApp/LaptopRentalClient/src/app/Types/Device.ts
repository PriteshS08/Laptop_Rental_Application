export class Device {
    constructor (
        public DeviceId : Number,
        public IMEINumber : String,
        public DeviceName : String,
        public DeviceSpecification : String,
        public PreInstalledSoftware : String,
        public DeviceImage : String,
        public RentalAmount : any,
        public MaxRentalMonth : Number,
        public Interest : any
         ) {}
}