import { Droplets, Leaf, Waves, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Sustainable Harvesting',
    description: 'Eco-friendly seaweed cultivation that preserves marine ecosystems while producing renewable biomass.',
    icon: Waves,
  },
  {
    title: 'Carbon Negative',
    description: 'Our process actively removes CO2 from the atmosphere, contributing to climate change mitigation.',
    icon: Leaf,
  },
  {
    title: 'Clean Energy',
    description: 'Advanced processing converts seaweed into high-efficiency biofuel with minimal environmental impact.',
    icon: Zap,
  },
  {
    title: 'Water Conservation',
    description: 'Zero freshwater consumption in our cultivation process, preserving vital water resources.',
    icon: Droplets,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Revolutionizing Clean Energy Production
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our innovative approach combines sustainable practices with cutting-edge technology
            to create the future of renewable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}