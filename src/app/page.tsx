import { Navbar } from "@/components/resources/landing/Navbar";
import { Hero } from "@/components/resources/landing/Hero";
import { Services } from "@/components/resources/landing/Services";
import { ProductsGrid } from "@/components/resources/landing/ProductsGrid";
import { BookingForm } from "@/components/resources/landing/BookingForm";
import { ContactForm } from "@/components/resources/landing/ContactForm";
import { ContactDetails } from "@/components/resources/landing/ContactDetails";
import { Footer } from "@/components/resources/landing/Footer";

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
        <section id="contact" className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Entre em Contato
              </h2>
              <p className="text-xl text-gray-600">Estamos aqui para ajudar seu pet</p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
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
