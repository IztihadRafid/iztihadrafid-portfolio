import type { ServiceItem } from "./Service";

interface ServiceCardProps extends ServiceItem {
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black-4 bg-[linear-gradient(160deg,#191919_0%,#121212_100%)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-red-1/60 hover:shadow-[0_20px_45px_-20px_rgba(255,87,87,0.55)] sm:p-7">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-1/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-red-1/25" />
      <span className="pointer-events-none absolute right-5 top-3 font-mono text-5xl font-bold leading-none text-white/5 transition-colors duration-500 group-hover:text-red-1/15">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-red-1/25 bg-red-1/10 text-red-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:-rotate-6 group-hover:border-red-1/60 group-hover:bg-red-1/15">
        {icon}
      </div>
      <h3 className="relative text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-red-1">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-6 text-gray-2">
        {description}
      </p>
      {/* Accent line */}
      <span className="mt-auto block pt-6">
        <span className="block h-0.5 w-8 rounded-full bg-red-1/40 transition-all duration-500 group-hover:w-full group-hover:bg-red-1" />
      </span>
    </article>
  );
};

export default ServiceCard;
