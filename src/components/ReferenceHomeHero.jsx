import React from 'react';
import {useReducedMotion} from 'framer-motion';
import {Link,useNavigate} from 'react-router-dom';
import {ArrowRight,ArrowUpRight,BookOpen,Building2,CheckCircle2,GraduationCap,Headphones,MapPin,Search,ShieldCheck,Sparkles} from 'lucide-react';
import colleges from '../data/colleges.json';
import {COLLEGE_PHOTOS} from '../data/collegePhotos.js';
import {BANGALORE_COLLEGES} from '../data/bangaloreColleges.js';
import HeroSlides from './HeroSlides.jsx';

const tamilColleges=[...colleges.filter(c=>c.slug==='avinashilingam-institute-for-home-science-and-higher-education-for-women'),...colleges.filter(c=>c.slug!=='avinashilingam-institute-for-home-science-and-higher-education-for-women').slice(0,9)];
// Institutional marks obtained from each institution's official website.
const tamilLogos={
 'avinashilingam-institute-for-home-science-and-higher-education-for-women':'avinashilingam.jpg',
 'paavai-educational-institutions':'paavai.svg',
 'mahendra-educational-institutions':'mahendra.png',
 'excel-group-institutions':'excel.png',
 'the-kavery-educational-institutions':'kavery.png',
 'karpagam-group-of-institutions':'karpagam.png',
 'hindustan-group-of-institutions':'hindustan.svg',
 'erode-sengunthar-engineering-college':'erode-sengunthar.png',
 'shree-venkateshwara-group-of-institutions':'venkateshwara.png',
 'sengunthar-group-of-institution-tiruchengode':'sengunthar.png'
};
const enquiryLink=name=>`/enquiry?college=${encodeURIComponent(name)}`;
function CollegeLogo({src,name}){const [failed,setFailed]=React.useState(false);return <span className="featured-logo">{src&&!failed?<img src={src} alt={`${name} logo`} loading="lazy" onError={()=>setFailed(true)}/>:<GraduationCap aria-label="University icon" size={25}/>}</span>}
function CollegeCards({items,bangalore=false}){return <div className={`sun-ref-featured-grid${bangalore?' bangalore-featured-grid':''}`}>{items.map(c=>{const detail=`/${bangalore?'bangalore-colleges':'colleges'}/${c.slug}`;const courses=(c.courses||[]).slice(0,3).map(course=>typeof course==='string'?course:course.name);const logo=bangalore?c.logo:tamilLogos[c.slug]&&`/assets/college-logos/${tamilLogos[c.slug]}`;return <article key={c.slug} className="sun-ref-college-card"><Link to={detail} className="sun-ref-college-photo"><img className="featured-campus-image" src={bangalore?c.campusImage:COLLEGE_PHOTOS[c.slug]} loading="lazy" alt={bangalore?c.campusImageAlt:`${c.name} campus`}/><CollegeLogo src={logo} name={c.name}/><span className="featured-location">{bangalore?c.location:`${c.city}, Tamil Nadu`}</span></Link><div className="sun-ref-college-content"><p className="featured-type">{bangalore?c.institutionType:c.type}</p><h3>{c.name}</h3><p className="featured-courses"><strong>Courses</strong> {courses.join(' · ')||'See college details'}</p><div className="featured-card-actions"><Link to={detail}>View Details <ArrowUpRight size={17}/></Link><Link to={enquiryLink(c.name)}>Enquire Now <ArrowRight size={17}/></Link></div></div></article>})}</div>}

export default function ReferenceHomeHero(){
 const reduceMotion=useReducedMotion();
 const videoRef=React.useRef(null);
 React.useEffect(()=>{const video=videoRef.current;if(!video)return;if(reduceMotion)video.pause();else video.play().catch(()=>{});},[reduceMotion]);
 const [query,setQuery]=React.useState('');
 const navigate=useNavigate();
 const search=e=>{e.preventDefault();navigate(`/colleges${query.trim()?`?q=${encodeURIComponent(query.trim())}`:''}`)};
 return <>
 <section className="sun-ref-hero" aria-labelledby="sun-ref-title">
  <div className="sun-video-hero">
  <video ref={videoRef} className="sun-video-background" autoPlay={!reduceMotion} muted loop playsInline preload="metadata" poster="/videos/sunstar-poster.jpg" aria-hidden="true"><source src="/videos/viedo-sunstar.mp4" type="video/mp4"/></video>
  <div className="sun-video-shade" aria-hidden="true"/>
  <div className="container sun-ref-hero-grid">
   <HeroSlides/>
  </div>
  </div>
  <div className="container">
   <form onSubmit={search} role="search" className="sun-ref-search-glass"><Search size={22}/><label htmlFor="sun-ref-search" className="sr-only">Search colleges</label><input id="sun-ref-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search colleges, cities or courses…"/><button type="submit">Find a College <ArrowRight size={18}/></button></form>
   <div className="sun-ref-facts" aria-label="SUN STAR services and listed institutions">
    <div><span className="sun-ref-fact-icon"><Building2/></span><span><strong>100+</strong><small>Tamil Nadu colleges</small></span></div>
    <div><span className="sun-ref-fact-icon"><MapPin/></span><span><strong>10+</strong><small>Bangalore colleges</small></span></div>
    <div><span className="sun-ref-fact-icon"><BookOpen/></span><span><strong>UG &amp; PG</strong><small>Programs to explore</small></span></div>
    <div><span className="sun-ref-fact-icon"><Headphones/></span><span><strong>Personal guidance</strong><small>Talk to SUN STAR</small></span></div>
   </div>
  </div>
 </section>
 <section className="sun-ref-featured section" aria-labelledby="sun-ref-featured-title"><div className="container">
  <div className="tamil-section-header"><div className="tamil-section-header-content"><span className="sun-ref-eyebrow"><i/> DISCOVER YOUR NEXT STEP</span><h2 id="sun-ref-featured-title">Top Deemed Universities and Colleges in <span>Tamil Nadu</span></h2><p>Explore institutions in our Tamil Nadu college directory.</p><Link className="sun-ref-textlink" to="/colleges">View all colleges <ArrowUpRight size={17}/></Link></div></div>
  <CollegeCards items={tamilColleges}/>
  <div className="sun-ref-section-top featured-region-heading"><div><span className="sun-ref-eyebrow"><i/> EXPLORE BANGALORE</span><h2>Top Deemed Universities and Colleges in <span>Bangalore</span></h2><p>Explore universities and colleges in our Bangalore directory.</p></div><Link className="sun-ref-textlink" to="/bangalore-colleges">View all colleges <ArrowUpRight size={17}/></Link></div>
  <CollegeCards items={BANGALORE_COLLEGES} bangalore/>
  <div className="sun-ref-college-banner"><div className="sun-ref-college-banner-image"><img src={COLLEGE_PHOTOS['paavai-educational-institutions']} alt="Campus from SUN STAR college directory" loading="lazy"/></div><div><span className="sun-ref-eyebrow">TAMIL NADU & BANGALORE</span><h2>Explore colleges and find your next opportunity.</h2><p>Browse verified records, compare available courses and send your questions directly to our counsellors.</p><div className="sun-ref-banner-actions"><Link to="/colleges" className="sun-ref-button sun-ref-button-yellow">Tamil Nadu Colleges <ArrowRight size={18}/></Link><Link to="/bangalore-colleges" className="sun-ref-button sun-ref-button-light">Bangalore Colleges <ArrowUpRight size={18}/></Link></div></div></div>
 </div></section>
 </>;
}
