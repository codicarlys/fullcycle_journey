import EnterParkingLog from "../src/core/usecase/EnterParkingLot";

test("Should enter parking lot", function () {
    const enterParkingLot = new EnterParkingLog();
    const parkingLot = enterParkingLot.execute();
    expect(parkingLot.code).toBe("shopping");
});