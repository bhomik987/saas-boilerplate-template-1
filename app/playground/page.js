'use client';

import { useState } from 'react';
import Card from '../components/Card';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import Pricing from '../components/pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Problem from '../components/Problem';
import WithWithout from '../components/WithWithout';
import Modal from '../components/Modal';
import Tabs from '../components/Tabs';
import FeaturesAccordion from '../components/FeaturesAccordion';
import FeaturesListicle from '../components/FeaturesListicle';
import BetterIcon from '../components/BetterIcon';
import TestimonialRating from '../components/TestimonialRating';
import TestimonialAvatar from '../components/TestimonialAvatar';
import Button from '../components/Button';
import ButtonAccount from '../components/ButtonAccount';
import ButtonLead from '../components/ButtonLead';
import ButtonSignIn from '../components/ButtonSignIn';
import ButtonSupport from '../components/ButtonSupport';
import ButtonPopover from '../components/ButtonPopover';
import ButtonGradient from '../components/ButtonGradient';

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: '2rem', background: '#121212', color: '#ffffff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 700, letterSpacing: '-0.03em' }}>Component Playground</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {/* Hero */}
        <Card title="Hero Component" style={{ gridColumn: '1 / -1', background: '#1e1e1e', color: '#ffffff' }}>
          <Hero />
        </Card>

        {/* Pricing */}
        <Card title="Pricing Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <Pricing />
        </Card>

        {/* Features Grid */}
        <Card title="Features Grid Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <FeaturesGrid />
        </Card>

        {/* Features Accordion */}
        <Card title="Features Accordion Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <FeaturesAccordion />
        </Card>

        {/* Features Listicle */}
        <Card title="Features Listicle Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <FeaturesListicle />
        </Card>

        {/* Testimonials */}
        <Card title="Testimonials Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <Testimonials />
        </Card>

        {/* FAQ */}
        <Card title="FAQ Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <FAQ />
        </Card>

        {/* CTA */}
        <Card title="CTA Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <CTA />
        </Card>

        {/* Problem */}
        <Card title="Problem Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <Problem />
        </Card>

        {/* WithWithout */}
        <Card title="With/Without Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <WithWithout />
        </Card>

        {/* Modal */}
        <Card title="Modal Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h3>Modal Content</h3>
            <p>This is a modal example.</p>
            <Button onClick={() => setIsModalOpen(false)}>Close Modal</Button>
          </Modal>
        </Card>

        {/* Tabs */}
        <Card title="Tabs Component" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <Tabs />
        </Card>

        {/* Buttons */}
        <Card title="Button Variants" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Button>Default Button</Button>
            <ButtonAccount>Account Button</ButtonAccount>
            <ButtonLead>Lead Button</ButtonLead>
            <ButtonSignIn>Sign In Button</ButtonSignIn>
            <ButtonSupport>Support Button</ButtonSupport>
            <ButtonPopover popoverText="Hello from Popover!">Popover Button</ButtonPopover>
            <ButtonGradient>Gradient Button</ButtonGradient>
          </div>
        </Card>

        {/* Utility Icons */}
        <Card title="Utility Icons" style={{ background: '#1e1e1e', color: '#ffffff' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <BetterIcon size={32} />
            <BetterIcon size={48} color="#aaaaaa" />
            <TestimonialRating rating={4} />
            <TestimonialAvatar name="John Doe" />
          </div>
        </Card>

      </div>
    </div>
  );
} 