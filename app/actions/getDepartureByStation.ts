import getStations from "./getStations";

const headers = {
    'Ocp-Apim-Subscription-Key': '85db775068d84396a26328325d0b9d3a',
  };

const MAX_JOURNEYS = 20;
const URL = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2'

interface IParams {
    station?: string
}

export default async function getDepartureByStation(
    params: IParams
) {
    try {
        const { station } = params;

        if (!station) {
            return null
        }

        const stations = await getStations()

        const foundStation = await stations.filter((stationData: any) => {
            const stationName = stationData.namen.lang.replace(/[^a-zA-Z0-9]/g, '-');
            if(stationName === station){
                return stationData;
            }    
        })
        console.log(process.env.SUBSCRIPTION_KEY)

        const response = await fetch(`${URL}/departures?uicCode=${foundStation[0].UICCode}&maxJourneys=${MAX_JOURNEYS}`, 
        {"method": "GET", headers }
        )

        const departures = await response.json();

        return departures.payload




    } catch (error: any) {
        throw new Error(error);
    }

}