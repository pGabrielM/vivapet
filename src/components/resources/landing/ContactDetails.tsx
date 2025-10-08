export function ContactDetails() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Endereço</h3>
        <p className="text-gray-600">
          Rua dos Pets, 123
          <br />
          Cidade Feliz, SP
          <br />
          CEP: 01234-567
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Telefone</h3>
        <p className="text-gray-600">(11) 99999-9999</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Email</h3>
        <p className="text-gray-600">contato@vivapet.com</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Redes Sociais</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-primary hover:text-primary/80" aria-label="Facebook">
            FB
          </a>
          <a href="#" className="text-primary hover:text-primary/80" aria-label="Instagram">
            IG
          </a>
          <a href="#" className="text-primary hover:text-primary/80" aria-label="Twitter">
            TW
          </a>
        </div>
      </div>
    </div>
  );
}
