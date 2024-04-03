import { Service } from "@/model/service";

type ServiceCardProps = {
    service: Service,
    className?: string,
    onClick?: () => void,
}

const ServiceCard = ({ service, className, onClick }: ServiceCardProps) => {
    return (
        <div onClick={onClick} className={`group w-full text-center cursor-pointer py-6 px-5 rounded-xl hover:bg-[#F9F9F9] sm:w-[50%] md:py-8 lg:w-[33.33%] ${className}`}>
            <h1 className="font-dm-serif-display text-title text-xl mb-3 transition-all duration-300 group-hover:text-primary-dark">
                {service.title}
            </h1>
            <p className="text-body text-lg mb-5 sm:mb-6 transition-all duration-300 group-hover:text-primary-light">
                {service.slug}
            </p>
            <div className="flex gap-2 text-title justify-center items-center transition-all duration-300 group-hover:text-primary-dark">
                <p className="text-base font-medium">Read More</p>
                <svg className="w-[14px] h-[12px] transition-all duration-300 stroke-title group-hover:stroke-primary-dark" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.9292 8.43536L15.6524 8.29851M10.5474 1.91132L17.0704 8.4343L10.416 15.0887" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}

export default ServiceCard;