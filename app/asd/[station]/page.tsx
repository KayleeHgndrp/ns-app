
import getDepartureByStation from "@/app/actions/getDepartureByStation";
import getStationByName from "@/app/actions/getStationByName";
import Container from "@/app/components/Container";
import DepartureTable from "./DepartureTable";
import Heading from "@/app/components/Heading";
import Image from "next/image";
interface IParams {
    station?: string;
}

const StationPage = async ({ params }: { params: IParams }) => {
    const vertrekTijden = await getDepartureByStation(params)

    return (
        <div className="bg-white h-full pb-20">
            <div className="relative h-[50vh]">
                <Image
                    src={"/images/overview.jpg"}
                    layout="fill"
                    objectFit="cover"
                    alt="Image"
                />
                <div className="absolute bottom-20 px-20">
                    <p className="text-6xl font-bold text-white">{params.station}</p>
                </div>
            </div>
            <div className="px-10">
                <div className="pt-16 flex flex-col gap-8">
                    <Heading title="Vertrektijden" />
                    <DepartureTable departures={vertrekTijden.departures} />
                </div>
            </div>
        </div>

    );
}

export default StationPage;