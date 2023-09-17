import getStations from "./getStations";

interface IParams {
    station?: string
}

export default async function getStationByName(
    params: IParams
) {
    try {
        const { station } = params;

        if (!station) {
            return null
        }

        const stations = await getStations()

        const foundStation = stations.filter((stationData: any) => {
            
            // Genereer de gesaneerde naam van het huidige station
            const stationName = stationData.namen.lang.replace(/[^a-zA-Z0-9]/g, '-');
            if(stationName === station){
                return stationData;
            }
        })

        return foundStation;

    } catch (error: any) {
        throw new Error(error);
    }

}