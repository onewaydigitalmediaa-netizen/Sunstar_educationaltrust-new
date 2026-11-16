import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {ArrowRight,ArrowUpRight,BookOpen,Building2,CheckCircle2,GraduationCap,Headphones,MapPin,Search,ShieldCheck,Sparkles} from 'lucide-react';
import colleges from '../data/colleges.json';
import {COLLEGE_PHOTOS} from '../data/collegePhotos.js';

const highlights=[
 {Icon:GraduationCap,title:'College Admission',desc:'Find the right college with experienced guidance.',link:'/colleges'},
 {Icon:BookOpen,title:'Course Guidance',desc:'Explore programs that match your goals.',link:'/courses'},
 {Icon:Headphones,title:'Career Counselling',desc:'Understand your options and next steps.',link:'/career'},
 {Icon:Building2,title:'Study Abroad',desc:'Get guidance for international education.',link:'/services#mbbs-abroad'}
];
const featured=colleges.slice(0,3);

export default function ReferenceHomeHero(){
 const [query,setQuery]=React.useState('');
 const navigate=useNavigate();
 const search=e=>{e.preventDefault();navigate(`/colleges${query.trim()?`?q=${encodeURIComponent(query.trim())}`:''}`)};
 return <>
 <section className="sun-ref-hero" aria-labelledby="sun-ref-title">
  <div className="sun-ref-ambient sun-ref-ambient-one" aria-hidden="true"/>
  <div className="sun-ref-ambient sun-ref-ambient-two" aria-hidden="true"/>
  <div className="container sun-ref-hero-grid">
   <div className="sun-ref-copy">
    <span className="sun-ref-pill"><GraduationCap size={18}/> Your trusted education partner</span>
    <h1 id="sun-ref-title">Shape Your Future<br/>with the <span>Right College.</span></h1>
    <p>Personalised guidance for UG, PG and professional courses across Tamil Nadu, Bangalore and beyond.</p>
    <div className="sun-ref-trust-tags"><span><GraduationCap size={17}/> College guidance</span><span><CheckCircle2 size={17}/> Course selection</span><span><ShieldCheck size={17}/> Admission support</span></div>
    <div className="sun-ref-actions"><Link to="/enquiry" className="sun-ref-button sun-ref-button-yellow">Get Free Counselling <ArrowRight size={19}/></Link><Link to="/colleges" className="sun-ref-button sun-ref-button-outline">Explore Colleges <ArrowUpRight size={18}/></Link></div>
   </div>
   <div className="sun-ref-visual">
    <div className="sun-ref-photo-outline"><img src="/assets/student-portrait.jpg" alt="Student with books in a learning environment" fetchPriority="high"/></div>
    <div className="sun-ref-float sun-ref-float-top"><GraduationCap size={29}/><span><strong>71 colleges</strong><small>College and course guidance</small></span></div>
    <div className="sun-ref-float sun-ref-float-bottom"><BookOpen size={29}/><span><strong>UG &amp; PG</strong><small>Explore study programs</small></span></div>
   </div>
  </div>
  <div className="container">
   <form onSubmit={search} role="search" className="sun-ref-search-glass"><Search size={22}/><label htmlFor="sun-ref-search" className="sr-only">Search colleges</label><input id="sun-ref-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search colleges, cities or courses…"/><button type="submit">Find a College <ArrowRight size={18}/></button></form>
   <div className="sun-ref-facts" aria-label="SUN STAR services and listed institutions">
    <div><span className="sun-ref-fact-icon"><Building2/></span><span><strong>71</strong><small>Tamil Nadu institutions</small></span></div>
    <div><span className="sun-ref-fact-icon"><MapPin/></span><span><strong>8</strong><small>Bangalore institutions</small></span></div>
    <div><span className="sun-ref-fact-icon"><BookOpen/></span><span><strong>UG &amp; PG</strong><small>Programs to explore</small></span></div>
    <div><span className="sun-ref-fact-icon"><Headphones/></span><span><strong>Personal guidance</strong><small>Talk to SUN STAR</small></span></div>
   </div>
  </div>
 </section>
 <section className="sun-ref-services section" aria-labelledby="sun-ref-services-title">
  <div className="container">
   <div className="sun-ref-center-heading"><span className="sun-ref-eyebrow"><i/> WHAT WE OFFER</span><h2 id="sun-ref-services-title">Our <span>Services</span></h2><p>Helpful guidance at every step of your education journey.</p></div>
   <div className="sun-ref-services-grid">{highlights.map(({Icon,title,desc,link})=><Link key={title} to={link} className="sun-ref-service-card"><span className="sun-ref-service-icon"><Icon size={32}/></span><h3>{title}</h3><p>{desc}</p><span className="sun-ref-service-go"><ArrowUpRight size={20}/></span></Link>)}</div>
  </div>
 </section>
 <section className="sun-ref-featured section" aria-labelledby="sun-ref-featured-title"><div className="container">
  <div className="sun-ref-section-top"><div><span className="sun-ref-eyebrow"><i/> DISCOVER YOUR NEXT STEP</span><h2 id="sun-ref-featured-title">Explore top <span>colleges.</span></h2><p>Start with the institutions listed in your SUN STAR fee booklet.</p></div><Link className="sun-ref-textlink" to="/colleges">View all colleges <ArrowUpRight size={17}/></Link></div>
  <div className="sun-ref-featured-grid">{featured.map(c=><article key={c.slug} className="sun-ref-college-card"><Link to={`/colleges/${c.slug}`} className="sun-ref-college-photo"><img src={COLLEGE_PHOTOS[c.slug]} loading="lazy" alt={`${c.name} campus`} /><span>{c.city}, Tamil Nadu</span></Link><div className="sun-ref-college-content"><p>{c.streams.slice(0,2).join(' · ')}</p><h3>{c.name}</h3><Link to={`/colleges/${c.slug}`}>View college details <ArrowUpRight size={17}/></Link></div></article>)}</div>
  <div className="sun-ref-college-banner"><div className="sun-ref-college-banner-image"><img src={COLLEGE_PHOTOS['paavai-educational-institutions']} alt="Campus from SUN STAR college directory" loading="lazy"/></div><div><span className="sun-ref-eyebrow">TAMIL NADU & BANGALORE</span><h2>Explore colleges and find your next opportunity.</h2><p>Browse verified records, compare available courses and send your questions directly to our counsellors.</p><div className="sun-ref-banner-actions"><Link to="/colleges" className="sun-ref-button sun-ref-button-yellow">Tamil Nadu Colleges <ArrowRight size={18}/></Link><Link to="/bangalore-colleges" className="sun-ref-button sun-ref-button-light">Bangalore Colleges <ArrowUpRight size={18}/></Link></div></div></div>
 </div></section>
 </>;
}
