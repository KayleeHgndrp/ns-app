'use client'

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <p className="font-light md:text-2xl text-l text-indigo-900  mt-2">
                {subtitle}
            </p>
            <p className="text-3xl md:text-4xl xl:text-5xl font-bold text-indigo-900 mt-2">
                {title}
            </p>
        </div>
    );
}

export default Heading;