import ParkingLot from  from "../../entity/ParkingLot";
import ParkingLotRepository from "../../repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepositoryMemory {

    getParkingLot(code: string): Promise<ParkingLot> {
        return Promise.resolve(new ParkingLot('shopping', 5, 8 ,22));
    }
}