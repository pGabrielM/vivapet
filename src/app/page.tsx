import { Navbar } from '../components/nav';
import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { ProductsGrid } from '../components/products';
import { BookingForm } from '../components/booking';
import { ContactForm, ContactDetails } from '../components/contact';
import { Footer } from '../components/footer';

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
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-600">Estamos aqui para ajudar seu pet</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
