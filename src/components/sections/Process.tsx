import { Check } from 'lucide-react';

const steps = [
  'Sustainable seaweed farming in deep ocean waters',
  'Advanced harvesting using automated systems',
  'Eco-friendly processing and refinement',
  'Conversion to clean, renewable biofuel',
  'Distribution to energy networks',
];

export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Revolutionary Process
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              From ocean to energy: our innovative process transforms seaweed into
              sustainable biofuel through cutting-edge technology and eco-friendly practices.
            </p>
            
            <ul className="space-y-4">
              {steps.map((step) => (
                <li key={step} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="ml-3 text-lg text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80"
              alt="Seaweed farming process"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}