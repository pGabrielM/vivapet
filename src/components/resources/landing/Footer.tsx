export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VivaPet</h3>
            <p className="text-gray-400">
              Cuidado completo e amoroso para seu pet. Serviços profissionais com dedicação.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white">Produtos</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-white">Agendamento</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-gray-400">Rua dos Pets, 123<br />Cidade Feliz, SP</p>
            <p className="text-gray-400">(11) 99999-9999</p>
            <p className="text-gray-400">contato@vivapet.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">FB</a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">IG</a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">TW</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 VivaPet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}