import React from 'react'
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import CallToActions from '@/components/call-to-actions';
import Teams from '@/components/teams';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <CallToAction />
      <CallToActions />
      <Teams />
      <FooterSection />
    </>
  );
}
