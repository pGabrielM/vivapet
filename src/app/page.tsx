import { Navbar } from "@/components/resources/landing/navbar";
import { Hero } from "@/components/resources/landing/hero";
import { Services } from "@/components/resources/landing/services";
import { ProductsGrid } from "@/components/resources/landing/products-grid";
import { BookingForm } from "@/components/resources/landing/booking-form";
import { ContactForm } from "@/components/resources/landing/contact-form";
import { ContactDetails } from "@/components/resources/landing/contact-details";
import { Footer } from "@/components/resources/landing/footer";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <ProductsGrid />
        <BookingForm />
        <section id="contact" className="bg-gradient-to-b from-slate-50 to-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Entre em Contato
              </div>
              <h2 className="mb-6 font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900 md:text-5xl">
                Fale Conosco
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-slate-600">
                Estamos aqui para ajudar você e seu pet. Entre em contato conosco para tirar
                dúvidas, agendar uma visita ou solicitar informações.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <ContactForm />
              <ContactDetails />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
