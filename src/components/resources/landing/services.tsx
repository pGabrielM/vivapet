import { services } from "@/utils/services";
import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Nossos Serviços
          </div>
          <h2 className="mb-6 font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900 md:text-5xl">
            Cuidado Completo para seu Pet
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Oferecemos uma gama completa de serviços veterinários com profissionais especializados e
            equipamentos de última geração para garantir a saúde e bem-estar do seu pet.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
