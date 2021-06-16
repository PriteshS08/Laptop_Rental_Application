export class Device {
    constructor (
        public IMEINumber : String,
        public DeviceName : String,
        public DeviceSpecification : String,
        public PreInstalledSoftware : String,
        public DeviceImage : FormData,
        public RentalAmount : any,
        public MaxRentalMonth : Number,
        public Interest : any,
        public Status: string
         ) {}
}