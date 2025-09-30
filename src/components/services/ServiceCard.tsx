import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Service } from '../../lib/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-4xl mb-4">{service.icon}</div> {/* Placeholder for icon */}
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Saiba mais</Button>
      </CardContent>
    </Card>
  );
}