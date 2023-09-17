const headers = {
    'Ocp-Apim-Subscription-Key': '85db775068d84396a26328325d0b9d3a',
  };

const URL = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2'

export default async function getStations() {
    try {
        const response = await fetch(`${URL}/stations`, 
        {"method": "GET", headers });
        const stations = await response.json();

        return stations.payload

    } catch (error: any) {
      throw new Error(error);
    }
  }