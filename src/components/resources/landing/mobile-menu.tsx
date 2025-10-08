interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
        <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
          Serviços
        </a>
        <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
          Produtos
        </a>
        <a href="#booking" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
          Agendamento
        </a>
        <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
          Contato
        </a>
        <div className="px-3 py-2">
          <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Agende agora
          </button>
        </div>
      </div>
    </div>
  );
}