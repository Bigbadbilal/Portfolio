'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SpotifyNowPlaying from '@/components/SpotifyNowPlaying';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <SpotifyNowPlaying />
        <Footer />
      </main>
    </>
  );
}
