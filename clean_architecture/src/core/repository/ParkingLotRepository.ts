import ParkingLot from "../entity/ParkingLot";

export default class ParkingLotRepository {
    getParkingLot(code: string) : Promise<ParkingLot>;
}