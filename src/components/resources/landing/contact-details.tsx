import { Card, CardContent } from "@/components/commons/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/commons/button";

export function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* Main Info Card */}
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl">
        <CardContent className="p-8 md:p-10">
          <h3 className="mb-6 font-[family-name:var(--font-poppins)] text-2xl font-bold">
            Informações de Contato
          </h3>
          <div className="space-y-6">
            {/* Endereço */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-1 font-semibold">Endereço</div>
                <p className="leading-relaxed text-blue-100">
                  Av. Principal, 1234
                  <br />
                  Centro, São Paulo - SP
                  <br />
                  CEP: 01234-567
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-1 font-semibold">Telefone / WhatsApp</div>
                <p className="text-blue-100">(11) 9999-9999</p>
                <p className="text-blue-100">(11) 3333-3333</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-1 font-semibold">E-mail</div>
                <p className="text-blue-100">contato@vivapet.com</p>
                <p className="text-blue-100">emergencia@vivapet.com</p>
              </div>
            </div>

            {/* Horários */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-2 font-semibold">Horário de Atendimento</div>
                <div className="space-y-1 text-blue-100">
                  <p>Segunda - Sexta: 8h às 20h</p>
                  <p>Sábado: 8h às 18h</p>
                  <p>Domingo: 9h às 14h</p>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold">
                  ⚡ Emergências 24/7
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Card */}
      <Card className="border-0 bg-white shadow-xl">
        <CardContent className="p-8">
          <h4 className="mb-4 font-[family-name:var(--font-poppins)] text-lg font-bold text-slate-900">
            Redes Sociais
          </h4>
          <p className="mb-6 text-slate-600">
            Siga-nos nas redes sociais e fique por dentro das novidades!
          </p>
          <div className="flex gap-3">
            <Button size="lg" className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700">
              <Facebook className="h-5 w-5" />
              Facebook
            </Button>
            <Button
              size="lg"
              className="flex-1 gap-2 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </Button>
          </div>
          <div className="mt-3 flex gap-3">
            <Button size="lg" className="flex-1 gap-2 bg-blue-400 hover:bg-blue-500">
              <Twitter className="h-5 w-5" />
              Twitter
            </Button>
            <Button size="lg" className="flex-1 gap-2 bg-emerald-500 hover:bg-emerald-600">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
