'use client';

import { useState } from 'react';
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
import KeyAdvantages from '../components/KeyAdvantages';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <div style={{ padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

        {/* Core Sections */}
        <Problem />
        <KeyAdvantages />
        <FeaturesGrid />
        <FeaturesAccordion />
        <FeaturesListicle />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />

        {/* Interactive Components Showcase */}
        <section style={{ background: '#fff', color: '#000', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Interactive Components</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Modal */}
            <div style={{ border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px' }}>
              <h3>Modal Component</h3>
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
                <Button onClick={() => setIsModalOpen(false)}>Close</Button>
              </Modal>
            </div>

            {/* Tabs */}
            <div style={{ border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px' }}>
              <h3>Tabs Component</h3>
              <Tabs />
            </div>

          </div>
        </section>

        {/* Button Variants Showcase */}
        <section style={{ background: '#fff', color: '#000', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Button Variants</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Button>Default Button</Button>
            <ButtonAccount />
            <ButtonLead />
            <ButtonSignIn />
            <ButtonSupport />
            <ButtonPopover popoverText="Hello from Popover!" />
            <ButtonGradient />
          </div>
        </section>

        {/* Utility Components Showcase */}
        <section style={{ background: '#fff', color: '#000', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Utility Components</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <BetterIcon size={48} />
            <TestimonialRating rating={4} />
            <TestimonialAvatar name="Jane Doe" />
            <WithWithout />
          </div>
        </section>

      </div>
    </div>
  );
} 