import React from 'react';

interface Departure {
    direction: string;
    trainCategory: string;
    plannedDateTime: string;
    actualTrack: string;
    routeStations: {
        uicCode: string;
        mediumName: string;
    }[];
}

interface DepartureTableProps {
    departures: Departure[];
}

const DepartureTable: React.FC<DepartureTableProps> = ({ departures }) => {

    const formatTime = (dateTime: string): string => {
        const date = new Date(dateTime);
        return date.toLocaleTimeString('nl-NL', { timeStyle: 'short' });
    };

    return (
        <table className="min-w-full">
            <thead className="bg-sky-50">
                <tr>
                    <th scope="col" >
                        <p className="px-6 py-3 text-left text-sm md:text-base font-bold text-indigo-900 tracking-wider">
                            Vertrek
                        </p>
                    </th>
                    <th scope="col" >
                        <p className="px-6 py-3 text-left text-sm md:text-base font-bold text-indigo-900 tracking-wider">
                            Richting
                        </p>
                    </th>
                    <th scope="col" >
                        <p className="px-6 py-3 text-left text-sm md:text-base font-bold text-indigo-900 tracking-wider">
                            Spoor
                        </p>
                    </th>
                    <th scope="col" className='hidden md:block'>
                        <p className="px-6 py-3 text-left text-s font-bold text-indigo-900 tracking-wider">
                            Trein
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody >
                {departures.map((departure, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-sky-50'}>
                        <td className="py-4 whitespace-nowrap">
                            <p className="px-6 py-3 text-left text-sm md:text-base font-bold text-indigo-900 tracking-wider">
                                {formatTime(departure.plannedDateTime)}
                            </p>
                        </td>
                        <td className=" py-4 whitespace-nowrap">
                            <p className="px-6 py-3 text-left text-sm md:text-base font-bold text-indigo-900 tracking-wider">
                                {departure.direction}
                            </p>
                            <div className='flex px-6 gap-0'>
                                <p className='mr-1 text-sm md:text-base text-indigo-900'>Via</p>
                                {departure.routeStations.map((station, index) => (
                                    <p className='mr-1 text-sm md:text-base text-indigo-900' key={index}>
                                        {station.mediumName} {" "}
                                </p>
                                ))}
                            </div>
                        </td>
                        <td className="py-4 whitespace-nowrap">
                            <p className="px-6 py-3 text-left text-sm md:text-base font-bold text-indigo-900 tracking-wider">
                                {departure.actualTrack}
                            </p>
                        </td>
                        <td className="py-4 whitespace-nowrap hidden md:block">
                            <p className="px-6 py-3 text-left text-sm md:text-base font-bold text-indigo-900 tracking-wider">
                                {departure.trainCategory}
                            </p>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
};

export default DepartureTable;
