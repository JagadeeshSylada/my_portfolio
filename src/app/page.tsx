import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
