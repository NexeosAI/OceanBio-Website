import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Process } from '@/components/sections/Process';
import { Impact } from '@/components/sections/Impact';
import { Contact } from '@/components/sections/Contact';
import { BlogList } from '@/components/blog/BlogList';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Process />
        <Impact />
        <BlogList />
        <Contact />
      </main>
      <Toaster />
    </>
  );
}

export default App;