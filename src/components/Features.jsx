import React from 'react';
import { Shield, Fingerprint, AlertTriangle, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color, delay }) => (
  <div className={`glass-panel animate-fade-in ${delay}`} style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 40px rgba(${color}, 0.2)`; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--glass-shadow)'; }}>
    <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: `rgba(${color}, 0.1)`, border: `1px solid rgba(${color}, 0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={32} color={`rgb(${color})`} />
    </div>
    <h3 style={{ fontSize: '24px', margin: 0 }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', margin: 0, flex: 1 }}>{description}</p>
    <a href="#" style={{ color: `rgb(${color})`, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
      Learn more <ArrowRight size={16} />
    </a>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>Comprehensive <span className="text-gradient">Verification</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Everything you need to ensure trust and safety in your digital and physical transactions.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <FeatureCard 
            icon={Fingerprint}
            title="Identity Verification"
            description="Verify individuals instantly using national IDs and biometric matching against trusted databases."
            color="0, 240, 255"
            delay="delay-100"
          />
          <FeatureCard 
            icon={Shield}
            title="Business Trust Score"
            description="Check the reputation of businesses before transacting. Based on registration data, history, and community feedback."
            color="0, 255, 157"
            delay="delay-200"
          />
          <FeatureCard 
            icon={AlertTriangle}
            title="Fraud Reporting"
            description="Report suspicious activities anonymously. Help protect the community by contributing to our shared threat database."
            color="255, 42, 95"
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
