
import SearchBar from './components/SearchBar';
import Heading from './components/Heading';
import Image from 'next/image';
import getStations from './actions/getStations';
import StationLink from './components/StationLink';

export default async function Home() {
  const stations = await getStations()
  const nederlandseStations = stations.filter(station => station.land === "NL");
  const eersteTwaalfNederlandseStations = nederlandseStations.slice(0, 12);

  return (
    <div className="
      min-h-screen 
    bg-gray-200 
      py-6 
      flex 
      flex-col
      md:items-center 
      items-start
      relative 
      overflow-hidden 
      sm:py-12
      pb-20
    ">

      <div className="
          w-full
          md:h-[46vh]
          h-[30vh]
          overflow-hidden 
          absolute
          top-0
        "
      >
        <Image
          src={'/images/overview.jpg'}
          fill
          className="
          object-cover 
          w-full"
          alt="Image"
        />
      </div>

      <div className='
        mx-auto
        mt-32
        md:mt-56
        w-[90vw]
        max-w-[1000px]
        z-20   
        '>
        <div
          className='
          bg-yellow-400
          px-8
          py-8
          xl:px-14
          xl:py-16
          rounded-t-md  
          '
        >
          <Heading
            title="Zoek je station"
            subtitle='Stationsinformatie'
          />
          <SearchBar


          />

        </div>

        <div className='
          bg-white
            rounded-t-md  
            p-8
            md:p-12
            mt-12
            '
        >
          <p className='
            text-xl 
            md:text-2xl 
            font-bold 
          text-indigo-900
          '>
            Direct naar
          </p>
          <div
            className='
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-4
            mt-12
        '>
            {eersteTwaalfNederlandseStations.map((station: any) => (
              <StationLink
                key={station.code}
                stationsNaam={station.namen['lang']}
              />
            ))}
          </div>
        </div >
      </div>
    </div>
  )
}
