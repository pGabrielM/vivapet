import Image from 'next/image';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cuidado Completo para seu Pet
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Serviços profissionais de banho, tosa, hospedagem e muito mais. Seu pet merece o melhor!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Agende agora</Button>
              <Button variant="outline" size="lg">
                Ver produtos
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/500x400?text=Happy+Dog"
              alt="Happy dog at VivaPet"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}