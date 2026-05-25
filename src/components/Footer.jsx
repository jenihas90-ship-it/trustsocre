import React from 'react';
import { ShieldCheck, MessageCircle, Briefcase, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '64px 0 32px 0', marginTop: '64px', background: 'rgba(7, 11, 20, 0.4)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <ShieldCheck size={28} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: 700 }}>
                TrustScore <span className="text-gradient">Ethiopia</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
              Building a secure and transparent digital economy for all Ethiopians.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}><MessageCircle size={20} /></a>
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}><Briefcase size={20} /></a>
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}><Globe size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: '18px', marginBottom: '24px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Business Verification</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Identity Check</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>API Access</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Report Fraud</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', marginBottom: '24px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Terms of Service</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Data Protection</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Cookie Policy</a></li>
            </ul>
          </div>
          
        </div>
        
        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '32px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
          &copy; {new Date().getFullYear()} TrustScore Ethiopia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
