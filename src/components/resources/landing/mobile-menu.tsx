import { Button } from "@/components/commons/button";
import { Calendar, Phone } from "lucide-react";

interface INavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: INavLink[];
}

export function MobileMenu({ isOpen, navLinks }: MobileMenuProps) {
  return (
    <div
      className={`transition-all duration-300 ease-in-out lg:hidden ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
      }`}
    >
      <div className="border-t border-slate-200 bg-white shadow-lg">
        <div className="container mx-auto space-y-4 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-lg px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}

          <div className="space-y-3 border-t border-slate-200 pt-4">
            <Button
              variant="outline"
              className="w-full gap-2 border-slate-300 hover:border-blue-600 hover:text-blue-600"
            >
              <Phone className="h-4 w-4" />
              <span>(11) 9999-9999</span>
            </Button>
            <Button className="w-full gap-2 bg-blue-600 shadow-lg hover:bg-blue-700">
              <Calendar className="h-4 w-4" />
              <span>Agendar Consulta</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
