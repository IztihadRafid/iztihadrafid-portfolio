
interface EduCardProps {
  heading: string;
  institute: string;
  date: string;
  subHeading: string;
  responsibilities?: string[];
}

const EduCard2 = ({
  heading,
  institute,
  date,
  subHeading,
  responsibilities,
}: EduCardProps) => {
  return (
    <div className="w-full rounded-2xl border border-black-4  bg-[#151515]  p-6 md:p-8 shadow-lg transition-all duration-300 hover:border-red-1/2 hover:shadow-red-1/20">
      <h3 className="text-2xl md:text-3xl font-bold text-red-1">
        {heading}
      </h3>
      <p className="mt-2 text-lg md:text-xl font-medium text-white">
        {subHeading}
      </p>
      <div className="mt-2 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm md:text-base text-gray-2">
        <span>{institute}</span>
        <span className="hidden md:block">•</span>
        <span>{date}</span>
      </div>
      {responsibilities && responsibilities.length > 0 && (
        <ul className="mt-6 list-disc space-y-3 pl-5 text-white text-lg">
          {responsibilities.map((data, index) => (
            <li
              key={index}
              className="leading-7 marker:text-red-1"
            >
              {data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EduCard2;