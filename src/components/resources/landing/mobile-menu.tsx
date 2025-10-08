interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
      <div className="space-y-1 bg-white px-2 pt-2 pb-3 shadow-lg sm:px-3">
        <a
          href="#services"
          className="hover:text-primary block px-3 py-2 text-base font-medium text-gray-700"
        >
          Serviços
        </a>
        <a
          href="#products"
          className="hover:text-primary block px-3 py-2 text-base font-medium text-gray-700"
        >
          Produtos
        </a>
        <a
          href="#booking"
          className="hover:text-primary block px-3 py-2 text-base font-medium text-gray-700"
        >
          Agendamento
        </a>
        <a
          href="#contact"
          className="hover:text-primary block px-3 py-2 text-base font-medium text-gray-700"
        >
          Contato
        </a>
        <div className="px-3 py-2">
          <button className="bg-primary hover:bg-primary/90 w-full rounded-md px-4 py-2 text-white transition-colors">
            Agende agora
          </button>
        </div>
      </div>
    </div>
  );
}
