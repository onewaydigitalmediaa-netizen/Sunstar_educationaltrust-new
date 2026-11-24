import React,{lazy,Suspense,useEffect} from 'react';
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion';
import {Routes,Route,useLocation,Navigate} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import CounsellorWidget from './components/CounsellorWidget.jsx';
import EnquiryPopup from './components/EnquiryPopup.jsx';
import Home from './pages/Home.jsx';
import Colleges from './pages/Colleges.jsx';
import CollegeDetail from './pages/CollegeDetail.jsx';
import Courses from './pages/Courses.jsx';
import Admissions from './pages/Admissions.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Career from './pages/Career.jsx';
import NotFound from './pages/NotFound.jsx';
const BangaloreColleges=lazy(()=>import('./pages/BangaloreColleges.jsx'));
const BangaloreCollegeDetail=lazy(()=>import('./pages/BangaloreCollegeDetail.jsx'));
function ScrollToTop(){const {pathname,hash}=useLocation();useEffect(()=>{const id=hash?decodeURIComponent(hash.slice(1)):pathname==='/contact'?'contact':pathname==='/enquiry'?'enquiry':null;if(id)document.getElementById(id)?.scrollIntoView({behavior:'instant',block:'start'});else window.scrollTo({top:0,behavior:'instant'})},[pathname,hash]);return null}
function AnimatedRoutes(){
 const location=useLocation();const reduceMotion=useReducedMotion();
 return <AnimatePresence mode="wait" initial={false}><motion.div key={location.pathname} className="route-transition" initial={reduceMotion?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={reduceMotion?undefined:{opacity:0,y:-5}} transition={{duration:reduceMotion?0:.24,ease:'easeOut'}}><Routes location={location}><Route path="/" element={<Home/>}/><Route path="/colleges" element={<Colleges/>}/><Route path="/colleges/bangalore-top-universities" element={<Navigate to="/bangalore-colleges" replace/>}/><Route path="/bangalore-colleges" element={<Suspense fallback={<div className="container section"><p>Loading Bangalore colleges…</p></div>}><BangaloreColleges/></Suspense>}/><Route path="/bangalore-colleges/:slug" element={<Suspense fallback={<div className="container section"><p>Loading institution profile…</p></div>}><BangaloreCollegeDetail/></Suspense>}/><Route path="/sun-star-med-abroad" element={<Navigate to="/services#mbbs-abroad" replace/>}/><Route path="/colleges/:slug" element={<CollegeDetail/>}/><Route path="/courses" element={<Courses/>}/><Route path="/admissions" element={<Admissions/>}/><Route path="/services" element={<Services/>}/><Route path="/career" element={<Career/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<About/>}/><Route path="/enquiry" element={<About/>}/><Route path="*" element={<NotFound/>}/></Routes></motion.div></AnimatePresence>
}
export default function App(){return <><ScrollToTop/><Header/><main id="main-content"><AnimatedRoutes/></main><Footer/><FloatingActions/><CounsellorWidget/><EnquiryPopup/></>}
