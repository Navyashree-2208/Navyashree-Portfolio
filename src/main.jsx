import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  ['Programming', ['C','Python','Java','JavaScript']],
  ['Frontend', ['HTML5','CSS3','React.js','Responsive UI']],
  ['Backend', ['Node.js','Express.js','REST API Integration']],
  ['Database', ['MySQL','MongoDB']],
  ['Computer Science', ['DSA','OOP','DBMS','OS','Computer Networks','System Design','SDLC']],
  ['Tools', ['Git','GitHub']]
];

function Nav(){
  const [open,setOpen]=useState(false);
  return <nav id="navbar"><div className="container nav-inner">
    <div className={`nav-links ${open?'open':''}`} id="navLinks">
      {['Home','About','Skills','Experience','Projects','Education','Certifications','Contact'].map(x=><a key={x} href={`#${x.toLowerCase()}`} className="nav-link" onClick={()=>setOpen(false)}>{x}</a>)}
    </div>
    <a href="#contact" className="btn btn-primary nav-cta" style={{padding:'9px 18px',fontSize:'.85rem'}}>Let's Talk</a>
    <button className="hamburger" id="hamburger" aria-label="Menu" onClick={()=>setOpen(!open)}><span></span><span></span><span></span></button>
  </div></nav>
}

function Reveal({children,className=''}){return <div className={`reveal ${className}`}>{children}</div>}

function Hero(){
  return <section id="hero"><div className="container hero-grid">
    <div>
      <Reveal><div className="eyebrow">Bengaluru, Karnataka, India</div></Reveal>
      <Reveal><h1 className="hero-name">NAVYASHREE</h1></Reveal>
      <Reveal><div className="hero-role">Aspiring Software Engineer · Full Stack Developer</div></Reveal>
      <Reveal><p className="hero-intro">Computer Science &amp; Engineering graduate with a strong foundation in Data Structures &amp; Algorithms, OOP, DBMS, Operating Systems and Computer Networks-building full-stack web applications and RESTful APIs with React, Node.js, MySQL and MongoDB.</p></Reveal>
      <Reveal><div className="hero-ctas"><a href="#projects" className="btn btn-primary">View Projects</a><a href="#resume" className="btn btn-outline">Download Resume</a><a href="#contact" className="btn btn-outline">Contact Me</a></div></Reveal>
      <Reveal><div className="socials">
        <a className="social-icon" href="https://linkedin.com/in/navyashree22" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
        <a className="social-icon" href="https://github.com/Navyashree-2208" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
      </div></Reveal>
    </div>
    <Reveal className="portrait-wrap"><div className="portrait-frame"><img id="heroImg" src="/hero.jpg" alt="Portrait of Navyashree, Aspiring Software Engineer" /></div></Reveal>
  </div></section>
}

function About(){
  return <section id="about"><div className="container"><div className="about-grid"><Reveal><div className="eyebrow">About Me</div><h2 className="sec-title">Building software with strong fundamentals</h2><p style={{color:'var(--muted)'}}>I'm a Computer Science &amp; Engineering graduate interested in software development, problem solving and building scalable applications. I enjoy working across the stack - from designing REST APIs to building responsive, user-centric interfaces.</p><p style={{color:'black',marginTop:'14px'}}><strong style={{color:'black'}}>Dr. Ambedkar Institute of Technology - B.E. Computer Science and Engineering (2022–2026), CGPA 8.57/10.</strong></p><div className="chip-row"><span className="chip">React.js</span><span className="chip">Node.js</span><span className="chip">JavaScript</span><span className="chip">MongoDB</span><span className="chip">MySQL</span><span className="chip">Java</span><span className="chip">Python</span></div></Reveal></div></div></section>
}

function Skills(){
  return <section id="skills" style={{background:'var(--bg2)'}}><div className="container"><Reveal><div className="eyebrow">What I Work With</div></Reveal><Reveal><h2 className="sec-title">Skills</h2></Reveal><Reveal><p className="sec-sub">A snapshot of the languages, frameworks and tools I use.</p></Reveal><div className="skills-grid">{skills.map(([name,tags])=><Reveal key={name} className="card skill-cat"><h3>{name}</h3><div className="skill-tags">{tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></Reveal>)}</div></div></section>
}

function Experience(){
  return <section id="experience"><div className="container"><Reveal><div className="eyebrow">Career So Far</div></Reveal><Reveal><h2 className="sec-title">Experience</h2></Reveal><Reveal><p className="sec-sub">Internship experience in full-stack and Android development.</p></Reveal><div className="timeline">

    <Reveal className="tl-item"><div className="tl-head"><span className="tl-role">Full Stack Developer Intern</span><span className="tl-date">May 2025 – Dec 2025</span></div><div className="tl-company">MentxTV — Remote</div><ul><li>Developed a full-stack web portal using React, TypeScript, Tailwind CSS, Node.js and MongoDB for managing news content.</li><li>Built responsive frontend interfaces and integrated components with backend REST APIs.</li><li>Implemented role-based authentication and authorization using JWT for secure post creation, editing and deletion.</li><li>Built protected routes and category-based search functionality.</li><li>Integrated Cloudinary image uploads using Multer; focused on secure, scalable, user-friendly development.</li></ul></Reveal>

    <Reveal className="tl-item"><div className="tl-head"><span className="tl-role">Android App Development using Gen AI Intern</span><span className="tl-date">Feb 2026 – May 2026</span></div><div className="tl-company">MindMatrix — Remote</div><ul><li>Developed and tested Android application features using Kotlin.</li><li>Used Generative AI tools for coding assistance, debugging, testing and implementation.</li><li>Worked with backend APIs, validated features, and documented implementation.</li><li>Followed Android development best practices toward reliable, scalable mobile applications.</li></ul></Reveal>

  </div></div></section>
}


/* =========================
   PROJECTS
========================= */

function Projects(){
  return (
    <section id="projects" style={{background:'var(--bg2)'}}>
      <div className="container">

        <Reveal>
          <div className="eyebrow">Selected Work</div>
        </Reveal>

        <Reveal>
          <h2 className="sec-title">Projects</h2>
        </Reveal>

        <Reveal>
          <p className="sec-sub">
            Full-stack applications built end-to-end.
          </p>
        </Reveal>

        <div className="projects-grid">

          {/* Streamline News Platform */}
          <Reveal className="card proj-card">

            <div className="proj-top">
              <span className="proj-name">
                Streamline News Platform
              </span>
            </div>

            <p className="proj-desc">
              A full-stack news management platform designed for secure
              content management, with admin and author dashboards.
            </p>

            <div className="proj-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>JWT</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Navyashree-2208"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub
              </a>

            </div>

          </Reveal>


          {/* Online Car Rental Management System */}
          <Reveal className="card proj-card">

            <div className="proj-top">
              <span className="proj-name">
                Online Car Rental Management System
              </span>
            </div>

            <p className="proj-desc">
              A responsive web-based car rental portal for handling
              bookings, customers and vehicle availability.
            </p>

            <div className="proj-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Navyashree-2208"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub
              </a>

            </div>

          </Reveal>


          {/* SkillXchange */}
          <Reveal className="card proj-card">

            <div className="proj-top">
              <span className="proj-name">
                SkillXchange
              </span>
            </div>

            <p className="proj-desc">
              A full-stack skill-sharing platform that connects users based
              on their skills, provides personalized recommendations, and
              enables real-time communication through chat.
            </p>

            <div className="proj-tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>Firebase Authentication</span>
              <span>REST APIs</span>
              <span>Axios</span>
              <span>Socket.IO</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Navyashree-2208/SkillXchange"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub
              </a>

              <a
                href="https://skill-xchange-lilac.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Live
              </a>

            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}


function Education(){
  return <section id="education"><div className="container"><Reveal><div className="eyebrow">Academic Background</div></Reveal><Reveal><h2 className="sec-title">Education</h2></Reveal><div className="edu-grid">

    <Reveal className="card edu-item"><div><div className="edu-name">Dr. Ambedkar Institute of Technology</div><div className="edu-sub">B.E. Computer Science and Engineering · 2022–2026 · Bengaluru, Karnataka</div></div><div className="edu-score">CGPA 8.57/10</div></Reveal>

    <Reveal className="card edu-item"><div><div className="edu-name">Brigade PU College</div><div className="edu-sub">Pre-University, Karnataka State Board · 2020–2022 · Hassan, Karnataka</div></div><div className="edu-score">93.66%</div></Reveal>

    <Reveal className="card edu-item"><div><div className="edu-name">St. Philomena's Girls High School</div><div className="edu-sub">Class 10, Karnataka State Board · 2017–2020 · Hassan, Karnataka</div></div><div className="edu-score">95.84%</div></Reveal>

  </div></div></section>
}


function Certifications(){
  return <section id="certifications" style={{background:'var(--bg2)'}}><div className="container"><Reveal><div className="eyebrow">Continuous Learning</div></Reveal><Reveal><h2 className="sec-title">Certifications</h2></Reveal><div className="certs-grid">

    <Reveal className="card"><div className="cert-badge">📜</div><div style={{fontWeight:700}}>DSA using Java</div><div style={{color:'var(--muted)',fontSize:'.85rem'}}>NPTEL · 2025</div></Reveal>

    <Reveal className="card"><div className="cert-badge">📜</div><div style={{fontWeight:700}}>DBMS</div><div style={{color:'var(--muted)',fontSize:'.85rem'}}>NPTEL · 2025</div></Reveal>

    <Reveal className="card"><div className="cert-badge">🏆</div><div style={{fontWeight:700}}>Hack Colossus 2.0</div><div style={{color:'var(--muted)',fontSize:'.85rem'}}>National-level hackathon, Dr. Ambedkar Institute of Technology</div></Reveal>

  </div></div></section>
}


function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <Reveal>
          <div className="resume-box">

            <h2 className="sec-title" style={{marginBottom: 0}}>
              Want to know more about my journey?
            </h2>

            <p>
              View my resume to explore my education, experience,
              technical skills, projects and certifications.
            </p>

            <a
              href="/Navya.pdf"
              download="Navyashree-Resume.pdf"
              className="btn btn-primary"
            >
              Download Resume
            </a>

          </div>
        </Reveal>
      </div>
    </section>
  );
}


function Contact(){
  return <section id="contact" style={{background:'var(--bg2)'}}><div className="container contact-grid">

    <Reveal>

      <div className="eyebrow">Get In Touch</div>

      <h2 className="sec-title">
        Let's Build Something Together
      </h2>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fa-solid fa-envelope"></i>
        </div>

        <div>
          <div className="contact-label">Email</div>
          <a href="mailto:navyashree2317@gmail.com">
            navyashree2317@gmail.com
          </a>
        </div>
      </div>


      {/* Phone intentionally hidden */}

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fa-brands fa-linkedin-in"></i>
        </div>

        <div>
          <div className="contact-label">LinkedIn</div>
          <a
            href="https://linkedin.com/in/navyashree22"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/navyashree22
          </a>
        </div>
      </div>


      <div className="contact-item">
        <div className="contact-icon">
          <i className="fa-brands fa-github"></i>
        </div>

        <div>
          <div className="contact-label">GitHub</div>
          <a
            href="https://github.com/Navyashree-2208"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Navyashree-2208
          </a>
        </div>
      </div>


      <div className="contact-item">
        <div className="contact-icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>

        <div>
          <div className="contact-label">Location</div>
          Bengaluru, Karnataka, India
        </div>
      </div>

    </Reveal>


    <Reveal>

      <form onSubmit={async (e) => {

        e.preventDefault();

        const form = e.target;

        const data = {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value
        };

        try {

          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

          const result = await response.json();

          if (response.ok) {

            alert('Message sent successfully!');

            form.reset();

          } else {

            alert(result.message || 'Something went wrong.');

          }

        } catch (error) {

          alert('Unable to send message. Please try again.');

        }

      }}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Send Message
        </button>

      </form>

    </Reveal>

  </div></section>
}


function Footer(){
  return <footer>
    <div className="container">

      <div
        className="logo grad-text"
        style={{fontSize:'1.3rem'}}
      >
        NAVYASHREE
      </div>

      <div
        style={{
          color:'var(--muted)',
          marginTop:'6px'
        }}
      >
        Aspiring Software Engineer | Full Stack Developer
      </div>

      <div className="f-links">

        <a
          href="https://github.com/Navyashree-2208"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://linkedin.com/in/navyashree22"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a
          href="mailto:navyashree2317@gmail.com"
          aria-label="Email"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>

      </div>

    </div>
  </footer>
}


function App(){

  useEffect(()=>{

    const navbar=document.getElementById('navbar');

    const links=[
      ...document.querySelectorAll('.nav-link')
    ];

    const sections=[
      ...document.querySelectorAll('section[id]')
    ];

    const onScroll=()=>{

      navbar.classList.toggle(
        'scrolled',
        window.scrollY>10
      );

      let cur='';

      sections.forEach(s=>{

        if(window.scrollY>=s.offsetTop-90){
          cur=s.id;
        }

      });

      links.forEach(l=>
        l.classList.toggle(
          'active',
          l.getAttribute('href')==='#'+cur
        )
      );

    };

    window.addEventListener(
      'scroll',
      onScroll
    );

    onScroll();


    const io=new IntersectionObserver(
      es=>es.forEach(e=>{

        if(e.isIntersecting){

          e.target.classList.add('in');

          io.unobserve(e.target);

        }

      }),
      {threshold:.12}
    );


    document
      .querySelectorAll('.reveal')
      .forEach(el=>io.observe(el));


    const hero=document.getElementById('hero');

    const mouse=e=>{

      const r=hero.getBoundingClientRect();

      hero.style.setProperty(
        '--mx',
        ((e.clientX-r.left)/r.width*100)+'%'
      );

      hero.style.setProperty(
        '--my',
        ((e.clientY-r.top)/r.height*100)+'%'
      );

    };

    hero.addEventListener(
      'mousemove',
      mouse
    );


    const portraitFrame=
      document.querySelector('.portrait-frame');

    const wrap=
      document.querySelector('.portrait-wrap');

    const reduced=
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;


    const tilt=e=>{

      const r=
        portraitFrame.getBoundingClientRect();

      const px=
        (e.clientX-r.left)/r.width-.5;

      const py=
        (e.clientY-r.top)/r.height-.5;

      portraitFrame.style.transform=
        `rotateY(${px*14}deg) rotateX(${-py*14}deg) translateY(-4px)`;

    };


    const leave=()=>{

      portraitFrame.style.transform=
        'rotateY(0) rotateX(0) translateY(0)';

    };


    if(portraitFrame&&!reduced){

      wrap.addEventListener(
        'mousemove',
        tilt
      );

      wrap.addEventListener(
        'mouseleave',
        leave
      );

    }


    return()=>{

      window.removeEventListener(
        'scroll',
        onScroll
      );

      hero.removeEventListener(
        'mousemove',
        mouse
      );

      io.disconnect();


      if(portraitFrame&&!reduced){

        wrap.removeEventListener(
          'mousemove',
          tilt
        );

        wrap.removeEventListener(
          'mouseleave',
          leave
        );

      }

    };

  },[]);


  return <>
    <Nav/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Education/>
    <Certifications/>
    <Resume/>
    <Contact/>
    <Footer/>
  </>;

}


createRoot(
  document.getElementById('root')
).render(
  <App/>
);