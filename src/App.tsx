import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ArrowRight, CheckCircle2, TrendingUp, 
  Users, Globe, Zap, ShieldCheck, BarChart3, 
  MessageSquare, Scale, Briefcase, Cpu, Calendar,
  Linkedin, Mail, Phone, ExternalLink
} from 'lucide-react';

// Import Assets
import logo from './assets/logo.png';
import faran from './assets/faran.png';
import safdar from './assets/safdar.png';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'experience' | 'team' | 'contact' | 'privacy' | 'terms';

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-dark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-navy-dark py-[14px]'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="AliM Partners Logo" 
            className="h-10 w-auto brightness-0 invert" 
          />
          <div className="hidden w-10 h-10 bg-gradient-to-br from-navy-mid to-navy border border-gold flex items-center justify-center text-gold font-serif font-bold text-xl rounded-sm group-hover:bg-gold group-hover:text-navy transition-colors">
            A
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors ${currentPage === link.id ? 'text-gold' : 'text-white/70 hover:text-gold'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setPage('contact')}
            className="bg-gold hover:bg-gold-light text-navy-dark px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
          >
            Schedule a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark border-t border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => { setPage(link.id); setMobileMenuOpen(false); }}
                  className={`text-left text-sm uppercase tracking-widest font-medium py-2 ${currentPage === link.id ? 'text-gold' : 'text-white/80'}`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => { setPage('contact'); setMobileMenuOpen(false); }}
                className="bg-gold text-navy-dark px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider mt-2"
              >
                Schedule a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <footer className="bg-navy-dark text-white/60 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="AliM Partners Logo" 
                className="h-10 w-auto brightness-0 invert opacity-80" 
              />
              <div className="hidden w-8 h-8 border border-gold flex items-center justify-center text-gold font-serif font-bold text-lg">A</div>
            </button>
            <p className="text-sm leading-relaxed max-w-xs">
              Strategic advisory at the intersection of capital, narrative, and execution.
            </p>
            <div className="flex gap-4">
              <a href="https://ca.linkedin.com/in/mfaranali" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@alimpartners.com" className="hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">Navigate</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setPage('home')} className="hover:text-gold transition-colors">Home</button></li>
                <li><button onClick={() => setPage('about')} className="hover:text-gold transition-colors">About</button></li>
                <li><button onClick={() => setPage('services')} className="hover:text-gold transition-colors">Services</button></li>
                <li><button onClick={() => setPage('experience')} className="hover:text-gold transition-colors">Experience</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setPage('services')} className="hover:text-gold transition-colors">Capital Markets</button></li>
                <li><button onClick={() => setPage('services')} className="hover:text-gold transition-colors">Crowdfunding</button></li>
                <li><button onClick={() => setPage('services')} className="hover:text-gold transition-colors">Investor Relations</button></li>
                <li><button onClick={() => setPage('services')} className="hover:text-gold transition-colors">CEO Advisory</button></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <span>info@alimpartners.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-gold" />
                <span>alimpartners.com</span>
              </div>
              <button 
                onClick={() => setPage('contact')}
                className="inline-flex items-center gap-2 text-gold font-semibold hover:underline mt-2"
              >
                <Calendar size={16} />
                Book a Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 space-y-8">
          <div className="text-[10px] leading-relaxed text-white/30 uppercase tracking-wider">
            <p className="font-bold text-white/50 mb-2">Legal Disclaimer</p>
            <p>
              AliM Partners is a strategic advisory firm. We are not a registered broker-dealer and we do not offer investment or fundraising advice. We make no recommendation that any investor make any particular investment, or that any company offer any securities. No securities transactions are negotiated or executed through AliM Partners, and we receive no compensation in connection with the purchase or sale of securities. AliM Partners is not a crowdfunding platform. We do not guarantee the amount of funding that may or may not be received and verification of accreditation and liquidity is the responsibility of participating companies. We do not act as a broker-dealer, placement agent, investment adviser, or law firm. By using this website you acknowledge that you have read and agree to all of our Terms & Policies.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.1em]">
            <span>© 2026 AliM Partners. All rights reserved.</span>
            <div className="flex gap-6">
              <button 
                onClick={() => setPage('terms')} 
                className="hover:text-gold uppercase tracking-widest"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setPage('privacy')} 
                className="hover:text-gold uppercase tracking-widest"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Sections ---

const Home = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Badges Bar - Ticker Style */}
      <div className="bg-navy border-b border-gold/20 py-2.5 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {[
                "A–Z Crowdfunding Support",
                "Investor Relations & Capital Markets Strategy",
                "Public Relations & Government Relations",
                "Strategic Advisory & Execution",
                "Retail Investor Growth & Acquisition"
              ].map((text, j) => (
                <div key={j} className="flex items-center gap-3 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-navy-dark overflow-hidden py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold mb-6"
          >
            AliM Partners — Strategic Advisory
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-balance"
          >
            When capital, narrative, and <span className="text-gold italic">execution</span> collide — we step in
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We help public and growth-stage companies align investors, strategy, and operations to move faster and operate with confidence in critical moments.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => setPage('contact')}
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-xl shadow-gold/10"
            >
              Schedule a Consultation
            </button>
            <button 
              onClick={() => setPage('services')}
              className="w-full sm:w-auto border border-white/30 hover:border-gold text-white hover:text-gold px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all"
            >
              View Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-offwhite border-t-4 border-gold py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8">
            {[
              { val: '$80M+', label: 'Capital Raises Supported' },
              { val: '15,000+', label: 'Retail Investors Acquired' },
              { val: '$15M+', label: 'Raised via Crowdfunding' },
              { val: '3', label: 'Crowdfunding Campaigns' },
              { val: '119', label: 'Press Releases Created' },
              { val: '$4M+', label: 'Grants & Non-Dilutive' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <span className="block text-3xl md:text-4xl font-serif font-bold text-navy mb-1 group-hover:text-gold transition-colors">{stat.val}</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-navy py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 text-[20rem] font-serif leading-none select-none">"</div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-gold text-6xl font-serif block mb-6 leading-none">"</span>
          <p className="text-white/90 text-xl md:text-2xl font-serif italic leading-relaxed mb-8">
            The market is full of advisors who charge, but don't execute. <span className="text-gold not-italic font-bold">That burden shouldn't fall on the CEO.</span> We step in to deliver across capital raises, investor relations, retail investor growth, and specialty initiatives — so leadership can stay focused where it matters.
          </p>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">
            — M. Faran Ali, Founder & Managing Partner, AliM Partners
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-bold mb-4">Why Us</p>
            <h2 className="text-navy text-4xl md:text-5xl font-serif mb-6">Why Choose AliM Partners</h2>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              We understand what it's like to raise capital — whether it's your first time or your tenth. Busy CEOs don't need expensive advisors without outcomes. They need partners who <span className="font-bold text-navy">execute</span>.
            </p>
            <div className="w-16 h-1 bg-gold mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "End-to-End Capital Execution",
                desc: "Raised $80M+ from thousands of investors across public and private market initiatives. We don't just advise — we quarterback full capital campaigns, coordinating legal, broker-dealers, marketing teams, and investor funnels."
              },
              {
                title: "Investor Relations & Market Positioning",
                desc: "We build investor narratives that resonate. From NOBO list development and retail investor targeting to press releases, decks, and direct outreach — we grow your shareholder base."
              },
              {
                title: "Regulatory Coordination",
                desc: "Deep experience alongside legal teams on SEC filings, Reg A, S-1, S-3, and ongoing disclosure requirements. Strong relationships across legal, marketing, and fintech platforms."
              },
              {
                title: "Corporate Strategy",
                desc: "The best investor relations is execution. We drive critical initiatives, develop partnerships, and turn new opportunities into tangible outcomes — the kind that power your next press release."
              }
            ].map((item, i) => (
              <div key={i} className="bg-offwhite p-8 border-l-4 border-gold rounded-r-sm">
                <h3 className="text-navy font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-navy to-navy-dark border border-gold/30 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-gold font-serif text-2xl mb-2">First Month Free — No Long-Term Contracts</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We earn your trust by delivering results from day one. No retainer traps. No vague deliverables. We are confident in our ability to deliver.
              </p>
            </div>
            <button 
              onClick={() => setPage('contact')}
              className="whitespace-nowrap bg-gold hover:bg-gold-light text-navy-dark px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-lg"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-bold mb-4">What We Do</p>
            <h2 className="text-navy text-4xl md:text-5xl font-serif mb-6">Our Core Services</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '01', title: 'Capital Markets Strategy', desc: 'Investor base growth, retail awareness, NOBO list development, and capital structure advisory.', color: 'blue' },
              { id: '02', title: 'Crowdfunding Quarterbacking', desc: 'A–Z execution: deal setup, legal, compliance, investor messaging, and closing support.', color: 'green' },
              { id: '03', title: 'Investor Relations & PR', desc: 'Earnings calls, investor decks, and media placement at Forbes, Fox & Friends, and Benzinga.', color: 'purple' },
              { id: '04', title: 'Regulatory Coordination', desc: 'SEC filing coordination, AGM support, disclosure management, and equity plan administration.', color: 'amber' },
              { id: '05', title: 'CEO Advisory', desc: 'Senior strategic support for initiatives that don\'t fit one department — but still need to get done.', color: 'teal' },
              { id: '06', title: 'AI & Growth Systems', desc: 'SOPs, AI-assisted workflows, CRM architecture, and investor response systems.', color: 'sky' },
            ].map((svc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setPage('services');
                  setTimeout(() => {
                    const el = document.getElementById(`service-${svc.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-gold/20 hover:border-gold transition-all cursor-pointer group"
              >
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">{svc.id} — {svc.title.split(' ')[0]}</span>
                <h3 className="text-navy font-serif text-xl mb-4 group-hover:text-gold transition-colors">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{svc.desc}</p>
                <div className="flex items-center gap-2 text-gold font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/10 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-serif mb-6">Need a strategic operator inside the gap?</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8" />
          <p className="text-white/70 text-lg mb-12 leading-relaxed">
            Between leadership, capital markets, and execution — that's where we operate. Let's talk about what you need to move faster.
          </p>
          <button 
            onClick={() => setPage('contact')}
            className="bg-gold hover:bg-gold-light text-navy-dark px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-gold/20"
          >
            Book an Intro Call
          </button>
        </div>
      </section>
    </div>
  );
};

const About = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-navy-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold mb-6">About Us</p>
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-8 max-w-3xl leading-tight">Built for companies in motion.</h1>
          <div className="w-20 h-1 bg-gold mb-10" />
          <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
            AliM Partners is a strategic advisory firm for public companies, pre-IPO businesses, and growth-stage operators navigating capital, investor communications, regulatory execution, and corporate growth.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-bold mb-4">Our Approach</p>
                <h2 className="text-navy text-4xl font-serif mb-6">We are not a generic consulting firm.</h2>
                <div className="w-16 h-1 bg-gold mb-8" />
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>We work where companies face complexity: capital raises, investor communications, disclosure pressure, executive special projects, and strategic growth decisions that don't fit neatly into a single department.</p>
                <p>Our style is senior but hands-on. Strategic but execution-focused. Trusted with sensitive work. Comfortable interfacing directly with CEOs, legal counsel, IR vendors, media contacts, and institutional and retail investors alike.</p>
                <p>AliM Partners was built on a single observation: <span className="font-bold text-navy italic">the most valuable signal a company can send to the market is the ability to execute.</span> We help management teams do exactly that — consistently, credibly, and under pressure.</p>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400 pt-4 border-t border-slate-100">
                  We do not act as a broker-dealer, placement agent, investment adviser, or law firm. We act as a strategic advisory partner.
                </p>
              </div>
            </div>

            <div className="bg-offwhite p-10 rounded-sm border-l-4 border-gold">
              <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Core Values</p>
              <div className="space-y-10">
                {[
                  { icon: <Zap className="text-gold" />, title: "Execution Over Everything", desc: "The best investor relations is execution. We deliver — not just advise." },
                  { icon: <Users className="text-gold" />, title: "CEO-Aligned Thinking", desc: "We operate as a strategic extension of leadership, not a vendor relationship." },
                  { icon: <ShieldCheck className="text-gold" />, title: "Credibility in Every Room", desc: "From legal counsel to retail investor calls — we show up prepared." },
                  { icon: <Scale className="text-gold" />, title: "Aligned Incentives", desc: "First month free. No long-term lock-ins. We earn your business by delivering." },
                  { icon: <Globe className="text-gold" />, title: "Unmatched Network", desc: "Legal, IR firms, bankers, media — our relationships accelerate your outcomes." }
                ].map((val, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-navy rounded-sm flex items-center justify-center flex-shrink-0">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="text-navy font-serif text-lg mb-1">{val.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-4xl font-serif mb-8">Ready to move faster?</h2>
          <p className="text-white/60 mb-10 text-lg">Let's discuss where AliM Partners can step in and drive execution for your company.</p>
          <button 
            onClick={() => setPage('contact')}
            className="bg-gold hover:bg-gold-light text-navy-dark px-12 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all"
          >
            Book an Intro Call
          </button>
        </div>
      </section>
    </div>
  );
};

const Services = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: '01',
      tabLabel: 'CAPITAL',
      title: 'Capital Markets Strategy & Investor Growth',
      desc: 'True investor relations services for nano-cap, micro-cap, and growth-stage companies. We understand retail investors matter — we know how to target, acquire, and retain them.',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-800',
      textColor: 'text-blue-800',
      items: [
        { t: 'Investor Base Growth Strategy', d: 'Strategy to grow and diversify your retail and institutional investor base through targeted campaigns.' },
        { t: 'Liquidity & Visibility Planning', d: 'NOBO list development, market awareness initiatives, and retail investor targeting programs.' },
        { t: 'Capital Structure Advisory', d: 'CEO counsel on banks, IR firms, legal coordination, and transaction partner selection.' },
        { t: 'Conference Representation', d: 'Expert investor-facing representation at key industry conferences, meetings, and roadshows.' },
        { t: 'Investor Funnel Architecture', d: 'Building and optimizing the systems that convert awareness into shareholders.' },
        { t: 'Financing-Readiness Advisory', d: 'Preparing management for capital activity — before the deal is live.' }
      ]
    },
    {
      id: '02',
      tabLabel: 'CROWDFUNDING',
      title: 'Reg A / Reg D / Crowdfunding Deal Quarterbacking',
      desc: 'From first planning meetings to post-close investor communications — <span class="font-bold">A to Z Service</span>. Deal setup, legal coordination, compliance, broker-dealer liaison, and investor narrative.',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-800',
      textColor: 'text-emerald-800',
      items: [
        { t: 'Deal Setup & Legal Coordination', d: 'Vendor selection, timeline management, and legal workflow coordination from day one.' },
        { t: 'Broker-Dealer & Banker Liaison', d: 'Acting as the bridge between management, legal, brokers, and financial intermediaries.' },
        { t: 'Investor Messaging & Marketing', d: 'FAQ development, landing pages, decks, email campaigns, and lead funnel management.' },
        { t: 'Investor Closing Support', d: 'Hands-on investor engagement, direct closing support, and lead conversion coordination.' },
        { t: 'Compliance Coordination', d: 'Working alongside legal to ensure all regulatory requirements are tracked and met.' },
        { t: 'Post-Deal Investor Relations', d: 'Post-close communication systems and ongoing investor relationship management.' }
      ]
    },
    {
      id: '03',
      tabLabel: 'IR & PR',
      title: 'Investor Relations & Strategic Communications',
      desc: 'We build investor narratives that resonate — and ensure they reach the right audience. From earnings call preparation to national television placement.',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-800',
      textColor: 'text-purple-800',
      items: [
        { t: 'Earnings Calls & AGM Preparation', d: 'Full preparation, Q&A development, shareholder communication, and live support.' },
        { t: 'Press Releases & Media Placement', d: 'Writing the narrative and leveraging media connections for placement that matters.' },
        { t: 'Investor Decks & Presentations', d: 'Shareholder messaging, conference materials, and investor presentations that convert.' },
        { t: 'Investor Support Infrastructure', d: 'Investor phone line and email strategy that takes the burden off the CEO.' },
        { t: 'Media Narrative Development', d: 'Writing the story and distributing it across thousands of news editors and outlets.' },
        { t: 'SEO-Aware Announcements', d: 'Announcements built to be found, shared, and positioned for lasting visibility.' }
      ]
    },
    {
      id: '04',
      tabLabel: 'COMPLIANCE',
      title: 'Public Company Readiness & Regulatory Coordination',
      desc: 'We help management teams stay organized as legal, financial, and operational inputs converge into public-company obligations.',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-800',
      textColor: 'text-amber-800',
      items: [
        { t: 'SEC Filing Coordination', d: 'S-1, S-3, 1-A, 8-K, Form 4 — process support and data coordination alongside legal counsel.' },
        { t: 'AGM & Governance Support', d: 'Annual general meeting coordination, board workflow support, and disclosure organization.' },
        { t: 'Equity Plan Administration', d: 'Employee equity plan coordination and stock-related form management support.' },
        { t: 'Disclosure Process Management', d: 'Internal data collection, legal coordination, and filing-readiness workflows.' },
        { t: 'Regulatory Correspondence', d: 'Management-side liaison ensuring all SEC correspondence is handled properly.' },
        { t: 'Cross-Functional Alignment', d: 'Keeping legal, finance, IR, and leadership aligned on obligations at every stage.' }
      ]
    },
    {
      id: '05',
      tabLabel: 'CEO',
      title: 'CEO Advisory & Special Projects',
      desc: 'We act as a strategic extension of management for initiatives that don\'t fit neatly into one department — but still need to get done right.',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-800',
      textColor: 'text-teal-800',
      items: [
        { t: 'CEO Office Support', d: 'Special situations, cross-functional project leadership, and CEO-level decision support.' },
        { t: 'Partnership & B2B Development', d: 'Creating Fortune 500 partnerships and key strategic relationships across verticals.' },
        { t: 'Hiring & Org Strategy', d: 'Recruiting strategy, org structure, outsourcing coordination, and compensation advisory.' },
        { t: 'AI Implementation', d: 'Identifying and implementing AI opportunities across corporate operations and strategy.' },
        { t: 'M&A & Strategic Evaluation', d: 'Business-perspective evaluation of M&A, partnerships, and strategic opportunities.' },
        { t: 'Conference Representation', d: 'Representing the company at industry events, investor meetings, and strategic gatherings.' }
      ]
    },
    {
      id: '06',
      tabLabel: 'SYSTEMS',
      title: 'Growth Systems, AI & Executive Infrastructure',
      desc: 'The modern executive team needs operating systems that scale. We build the internal infrastructure that keeps lean teams organized.',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-800',
      textColor: 'text-slate-800',
      items: [
        { t: 'SOP Development', d: 'Standard operating procedures for investor relations, communications, and executive workflows.' },
        { t: 'AI-Assisted Internal Workflows', d: 'Implementation of AI tools across investor response, executive reporting, and operations.' },
        { t: 'CRM & Process Architecture', d: 'CRM setup, investor funnel systems, and conference follow-up infrastructure.' },
        { t: 'Executive Reporting Systems', d: 'Dashboards and reporting workflows that give leadership real clarity in real time.' },
        { t: 'Investor Response Systems', d: 'Structured investor inquiry and response workflows — removing the burden from the CEO.' },
        { t: 'Knowledge Management', d: 'Organizational continuity systems ensuring nothing critical gets lost between team members.' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      services.forEach((svc, i) => {
        const el = document.getElementById(`service-${svc.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(i);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-navy-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold mb-6">Services</p>
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-8 max-w-4xl leading-tight">End-to-end advisory for growth-stage and public companies.</h1>
          <div className="w-20 h-1 bg-gold mb-10" />
          <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
            Six core service pillars built around the real-world needs of CEOs and management teams operating under pressure in capital markets and growth environments.
          </p>
        </div>
      </section>

      {/* Side Scroll / Tab Navigation - Sticky and Linked to Active Section */}
      <div className="bg-white border-b border-slate-200 sticky top-[68px] z-40 overflow-x-auto no-scrollbar shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex whitespace-nowrap">
          {services.map((svc, i) => (
            <button
              key={i}
              onClick={() => {
                const el = document.getElementById(`service-${svc.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all border-b-2 ${activeTab === i ? 'border-gold text-navy' : 'border-transparent text-slate-400 hover:text-navy'}`}
            >
              {svc.id} — {svc.tabLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-0">
        {services.map((svc, i) => (
          <section 
            id={`service-${svc.id}`}
            key={i}
            className={`${svc.bgColor} py-32 border-t-4 ${svc.borderColor} scroll-mt-[135px] transition-colors`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <p className={`${svc.textColor} text-[11px] uppercase tracking-[0.2em] font-bold mb-4`}>{svc.id} — {svc.tabLabel}</p>
                <h2 className="text-navy text-4xl font-serif mb-6">{svc.title}</h2>
                <div className={`w-16 h-1 ${svc.borderColor.replace('border-', 'bg-')} mb-8`} />
                <p className="text-slate-600 text-lg max-w-3xl leading-relaxed" 
                   dangerouslySetInnerHTML={{ __html: svc.desc }} 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {svc.items.map((item, j) => (
                  <div key={j} className="bg-white p-6 rounded-sm shadow-sm border-t-2 border-slate-100 hover:border-gold transition-colors">
                    <h4 className="text-navy font-serif text-base mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-navy-dark py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-4xl font-serif mb-8">Not sure where to start?</h2>
          <p className="text-white/60 mb-10 text-lg">Book a no-commitment intro call. We'll assess your situation and tell you honestly where we can add the most value.</p>
          <button 
            onClick={() => setPage('contact')}
            className="bg-gold hover:bg-gold-light text-navy-dark px-12 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

const Experience = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-navy-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold mb-6">Track Record</p>
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-8 max-w-3xl leading-tight">Our Experience</h1>
          <div className="w-20 h-1 bg-gold mb-10" />
          <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
            AliM Partners delivers measurable impact across capital raises, investor growth, strategic communications, and public company execution.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-navy text-4xl font-serif mb-6">Track Record by the Numbers</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { n: '15,000+', l: 'Retail investors acquired' },
              { n: '$80M+', l: 'Capital raises supported' },
              { n: '10+', l: 'RDOs, PIPEs & warrant inducements' },
              { n: '3', l: 'Crowdfunding campaigns completed' },
              { n: '$15M', l: 'Raised through crowdfunding' },
              { n: '119', l: 'Press releases created' },
              { n: '$4M+', l: 'Grants & non-dilutive funding' },
              { n: 'Fortune 500', l: 'Business partnerships created' },
            ].map((trk, i) => (
              <div key={i} className="bg-navy p-8 rounded-sm text-center border-b-2 border-gold/50">
                <span className="block text-3xl font-serif font-bold text-gold mb-2">{trk.n}</span>
                <span className="block text-[10px] uppercase tracking-widest text-white/50 font-bold">{trk.l}</span>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-8">Featured Visibility Across Leading Outlets</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Forbes', 'Fox & Friends', 'Charles Schwab Network', 'Benzinga', 'CoinDesk', 'MSN', 'Yahoo Finance', 'Investing.com'].map((m, i) => (
                <div key={i} className="bg-offwhite border border-slate-200 px-6 py-2 rounded-sm text-xs font-bold text-navy uppercase tracking-wider">
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Capital Markets Execution", d: "Hands-on experience supporting RDOs, PIPEs, warrant inducements, and full retail capital campaigns — coordinating management, legal, banking, and IR partners." },
              { t: "Crowdfunding Campaigns", d: "Completed three full crowdfunding campaigns raising $15M+ across hundreds of investors and thousands of leads — with deep knowledge of every key vendor and platform." },
              { t: "Public Company Communications", d: "Direct involvement in earnings calls, investor Q&A preparation, shareholder messaging, and strategic media placement — from Benzinga to national TV." },
              { t: "Strategic Partnerships", d: "Created major business partnerships including Fortune 500 companies across key sales, marketing, and operational verticals." },
              { t: "Sectors & Industries", d: "Deep experience across cleantech, advanced manufacturing, mobility / automotive, and energy transition — understanding unique investor dynamics." },
              { t: "Non-Dilutive Funding", d: "Supported $4M+ in grants and non-dilutive funding applications — helping companies access capital that preserves equity." }
            ].map((exp, i) => (
              <div key={i} className="bg-offwhite p-8 rounded-sm border-l-4 border-gold">
                <h3 className="text-navy font-serif text-lg mb-4">{exp.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{exp.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-4xl font-serif mb-8">Let's add your company to the track record.</h2>
          <p className="text-white/60 mb-10 text-lg">Book an intro call and let's talk about what execution looks like for your business.</p>
          <button 
            onClick={() => setPage('contact')}
            className="bg-gold hover:bg-gold-light text-navy-dark px-12 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all"
          >
            Book an Intro Call
          </button>
        </div>
      </section>
    </div>
  );
};

const Team = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-navy-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold mb-6">The Team</p>
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-8 max-w-3xl leading-tight">The people behind AliM Partners.</h1>
          <div className="w-20 h-1 bg-gold mb-10" />
          <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
            Senior operators with real-world public company experience — not theoretical advisors. We show up, we execute, and we stay until the job is done.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                name: 'M. Faran Ali', 
                role: 'Founder and Principal', 
                image: faran,
                bio: 'Strategic advisor operating at the intersection of capital markets and execution, with experience across investor relations, capital formation, and CEO-level initiatives. He has supported $80M+ in financing activity, led multiple Reg A and crowdfunding campaigns, and built a retail investor base exceeding 15,000 participants, advising public & private companies across cleantech, mobility, CPG, and advanced manufacturing.',
                edu: 'Economics and International Business - King\'s College London | Management and International Business - University of Toronto'
              },
              { 
                name: 'Syed Safdar', 
                role: 'Strategic Advisor', 
                image: safdar,
                bio: 'London-based management consultant with 8+ years of experience at EY and PwC, specializing in financial services. He has advised multilateral organizations, bulge-bracket banks, insurers, and asset managers across the UK, Middle East, and South Asia, with expertise spanning enterprise risk, internal audit, digital transformation, and investment advisory.',
                edu: 'CFA, ACA | Masters in Accounting & Finance - London School of Economics and Political Science'
              },
              { 
                name: 'Abdullah Shakir Vasi', 
                role: 'Senior Analyst', 
                bio: 'Strategic consultant and operations specialist focused on AI-driven workflow automation, financial feasibility, and growth strategy. He has supported enterprise optimization through advanced data pipelines and AI integration, and contributed to acquisition analysis including synergy modeling in the cleantech sector, delivering scalable operational frameworks across fast-paced industries.',
                edu: 'Bocconi University - International Economics and Management | Rotman Commerce - University of Toronto'
              }
            ].map((tm, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 rounded-full bg-slate-100 mx-auto mb-8 border-4 border-gold flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform relative">
                  {tm.image ? (
                    <img 
                      src={tm.image} 
                      alt={tm.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <span className={`${tm.image ? 'hidden' : ''} text-navy font-serif text-3xl font-bold`}>
                    {tm.name.split(' ').filter(n => n.length > 1).map(n => n[0]).join('') || tm.name[0]}
                  </span>
                </div>
                <h3 className="text-navy text-2xl font-serif mb-2">{tm.name}</h3>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-6">{tm.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{tm.bio}</p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-navy font-bold text-[10px] uppercase tracking-widest mb-2">Education</p>
                  <div className="space-y-1">
                    {tm.edu.split('|').map((line, idx) => (
                      <p key={idx} className="text-slate-400 text-[10px] leading-relaxed italic">{line.trim()}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-navy-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold mb-6">Contact</p>
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-8 max-w-3xl leading-tight">Let's talk.</h1>
          <div className="w-20 h-1 bg-gold mb-10" />
          <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
            Whether you're preparing for a capital raise, managing investor communications, or navigating a complex corporate initiative — we'd like to hear about your situation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h3 className="text-navy text-3xl font-serif mb-6">Get in Touch</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Book a no-commitment intro call via Calendly. We'll listen to your situation, ask the right questions, and tell you honestly where we can help — and where we can't.
                </p>
                <a 
                  href="https://calendly.com/faran-alimpartners" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-navy-dark px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-lg"
                >
                  Schedule a Consultation
                </a>
              </div>

              <div className="space-y-6">
                <h4 className="text-navy font-serif text-xl border-b border-slate-100 pb-4">Inquiry Types We Handle</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Capital Markets & Investor Growth",
                    "Reg A / Crowdfunding Support",
                    "Investor Relations & PR",
                    "Public Regulatory Coordination",
                    "CEO Advisory & Special Projects",
                    "AI Systems & Infrastructure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-offwhite p-8 border-l-4 border-gold rounded-r-sm">
                <p className="text-navy font-bold text-sm mb-2">First month free. No long-term contracts.</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We structure every engagement to reflect confidence in our ability to deliver value from day one.
                </p>
              </div>
            </div>

            <div className="bg-offwhite rounded-sm border border-slate-200 overflow-hidden shadow-inner h-[600px]">
              <iframe 
                src="https://calendly.com/faran-alimpartners" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Calendly"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-navy-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold mb-6">Legal</p>
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-8 max-w-3xl leading-tight">Privacy Policy</h1>
          <div className="w-20 h-1 bg-gold mb-10" />
          <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
            At AliM Partners, we value your trust and are committed to protecting your personal information.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate">
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <div>
              <p className="mb-8">This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or engage with our services.</p>
              
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">1. Information We Collect</h2>
              <div className="space-y-4">
                <p><strong>Personal Information:</strong> This includes details you provide voluntarily, such as your name, email address, phone number, and company name when you fill out a contact form or schedule a call.</p>
                <p><strong>Usage Data:</strong> We automatically collect certain information when you visit, such as your IP address, browser type, and which pages you viewed.</p>
                <p><strong>Cookies:</strong> We use cookies to enhance site navigation and analyze website traffic. You can manage your cookie preferences through your browser settings.</p>
              </div>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to inquiries and provide professional advisory services.</li>
                <li>To schedule and manage consultations via third-party tools like Calendly.</li>
                <li>To send updates or marketing communications (only if you’ve opted in).</li>
                <li>To improve our website functionality and user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">AliM Partners does not sell your personal data. We may share information with trusted third parties only in the following cases:</p>
              <div className="space-y-4">
                <p><strong>Service Providers:</strong> We use third-party tools to help us operate our business. This includes <strong>Calendly</strong> for appointment scheduling. By using our scheduling feature, you acknowledge that your data will be processed by Calendly in accordance with their own privacy protocols.</p>
                <p><strong>Legal Requirements:</strong> If required by law to protect our rights or comply with a judicial proceeding.</p>
              </div>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. As a strategic advisory firm handling sensitive corporate data, we maintain strict internal confidentiality protocols. However, please note that no method of transmission over the internet is 100% secure.</p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">5. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to access the personal data we hold about you.</li>
                <li>The right to request correction of inaccurate data.</li>
                <li>The right to request deletion of your data.</li>
                <li>The right to opt-out of marketing communications at any time.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">6. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy or how your data is handled, please reach out to us:</p>
              <div className="font-medium text-navy">
                <p>Email: info@alimpartners.com</p>
                <p>Address: 792 Eyer Drive, Pickering, Ontario, L1W 3C2, Canada</p>
              </div>
            </div>
            
            <p className="text-xs pt-12 border-t border-slate-100 italic">Last Updated: April 17, 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const TermsOfService = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-navy-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold mb-6">Legal</p>
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-8 max-w-3xl leading-tight">Terms of Service</h1>
          <div className="w-20 h-1 bg-gold mb-10" />
          <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
            The terms and conditions governing your use of the AliM Partners website.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate">
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">1. Advisory Scope</h2>
              <p>AliM Partners is a strategic advisory firm providing execution-level support. We are not a registered broker-dealer, investment bank, or law firm. We do not provide legal or regulated financial advice. All outcomes from our advisory services are for strategic planning purposes only.</p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">2. No Broker-Dealer Services</h2>
              <p>AliM Partners does not negotiate or execute securities transactions. We do not receive commissions or success-based fees tied to the purchase or sale of securities. We act as strategic coordinators, not as financial intermediaries.</p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">3. Limitation of Liability</h2>
              <p>Under no circumstances shall AliM Partners be liable for any direct, indirect, or consequential damages arising from the use of this website or the information contained herein. Companies are responsible for their own regulatory compliance and legal due diligence.</p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-serif mb-4 uppercase tracking-widest">4. Use of Content</h2>
              <p>The content on this website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Reproduction of website content without express written consent is prohibited.</p>
            </div>

            <p className="text-xs pt-12 border-t border-slate-100 italic">Last Updated: April 17, 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="flex-grow pt-[68px]">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'about' && <About setPage={setPage} />}
        {page === 'services' && <Services setPage={setPage} />}
        {page === 'experience' && <Experience setPage={setPage} />}
        {page === 'team' && <Team />}
        {page === 'contact' && <Contact />}
        {page === 'privacy' && <PrivacyPolicy />}
        {page === 'terms' && <TermsOfService />}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
