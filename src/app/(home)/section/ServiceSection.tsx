import ServiceCard from "@/components/elements/ServiceCard";
import SectionLayout from "@/components/layout/SectionLayout";
import { ServicesData } from "@/data/services.data";
import { Service } from "@/model/service";

async function getData(): Promise<Service[]> {
    let data: Service[] = [];
    for (const item of ServicesData) {
        data = [...data, item,];
        if (data.length === 3) break;
    }
    return data;
}

const ServiceSection = async () => {
    const services = await getData();
    return (
        <SectionLayout className="mt-10">
            <div className="w-full flex flex-wrap justify-center">
                {services.map((value) => (
                    <ServiceCard key={value.id} service={value} />
                ))}
            </div>
        </SectionLayout>
    );
}

export default ServiceSection;