import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import { Button } from "@/components/commons/button";
import { type Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 text-4xl">{service.icon}</div> {/* Placeholder for icon */}
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Saiba mais</Button>
      </CardContent>
    </Card>
  );
}
