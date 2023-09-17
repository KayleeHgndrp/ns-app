'use client'

import { useRouter } from "next/navigation";

interface StationsContainerProps {
    stationsNaam: string;

}
const StationLink: React.FC<StationsContainerProps> = ({
    stationsNaam
}) => {
    const router = useRouter();

    function sanitizeString(inputString: string) {
        const sanitizedString = inputString.replace(/[^a-zA-Z0-9]/g, '-');
        return sanitizedString;
    }

    return (<div
        className="cursor-pointer text-blue-700		"
        onClick={() => router.push(`/asd/${sanitizeString(stationsNaam)}`)}
    >
        {stationsNaam}
    </div>);
}

export default StationLink