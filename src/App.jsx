import { useState, useEffect, useRef } from "react";
import { ExternalLink, Mail, Phone, Code2, Globe, ChevronDown, Menu, X, GitBranch } from "lucide-react";
const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size||16} height={props.size||16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
);
const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size||16} height={props.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const LeetCode = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size||16} height={props.size||16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.129a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);
const Codeforces = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size||16} height={props.size||16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9A1.5 1.5 0 0 1 1.5 7.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5A1.5 1.5 0 0 1 22.5 21h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/>
  </svg>
);
import { Analytics } from "@vercel/analytics/next"
import "./index.css";

const ROLES = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "Problem Solver (1200+ DSA)",
  "AI/ML Integrator",
  "Open Source Contributor",
];

function useTypewriter(words) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 45 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1600);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % words.length);
        return;
      }
      setText((t) => (deleting ? t.slice(0, -1) : word.slice(0, t.length + 1)));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);

  return text;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const SKILLS = [
  {
    icon: <Code2 size={20} />,
    title: "Languages",
    tags: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    icon: "⚛️",
    title: "Frontend",
    tags: ["React.js", "Next.js", "React Native", "Redux", "Tailwind CSS", "Figma"],
  },
  {
    icon: "🖥️",
    title: "Backend",
    tags: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT Auth", "WebSockets"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    tags: ["AWS (S3/EC2)", "Docker", "CI/CD", "GitHub Actions", "Vercel", "Postman"],
  },
  {
    icon: "🤖",
    title: "AI / ML",
    tags: ["OpenAI GPT-4o", "Machine Learning", "NumPy", "Pandas", "Scikit-learn", "Computer Vision"],
  },
];

const PROJECTS = [
  {
    emoji: "🌾",
    name: "AgriMart",
    sub: "Smart Agriculture Marketplace",
    desc: "MERN-stack marketplace enabling farmers to sell directly to consumers, eliminating middlemen and delivering a faster, smarter shopping experience.",
    highlights: [
      "Reduced middlemen dependency by 40% with direct-to-consumer model",
      "35% search efficiency gain via advanced filtering system",
      "Redux global state + JWT auth boosting responsiveness by 25%",
      "100% verified session handling across all users",
    ],
    tags: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "#",
    code: "#",
  },
  {
    emoji: "🥗",
    name: "NutriVision AI",
    sub: "Computer Vision Nutrition Tracker",
    desc: "AI-native mobile app leveraging GPT-4o Vision API to automate food recognition, dramatically speeding up calorie logging with zero manual effort.",
    highlights: [
      "80% faster calorie logging with GPT-4o Vision automation",
      "60% reduction in user friction vs traditional logging",
      "Scalable Node.js backend with 100% uptime",
      "Seamless cross-session dietary data sync",
    ],
    tags: ["React Native", "Expo", "OpenAI GPT-4o", "Node.js", "Express.js"],
    live: "#",
    code: "#",
  },
];

const ACHIEVEMENTS = [
  {
    emoji: "🏆",
    title: "Meta Hacker Cup 2024",
    desc: "Rank 2699 in Qualification Round. Participated in 2023, 2024 & 2025 editions — consistent competitive programmer.",
  },
  {
    emoji: "💡",
    title: "1200+ DSA Problems",
    desc: "Solved across LeetCode, Codeforces, GeeksForGeeks, and CodeChef — strong algorithmic foundation.",
  },
  {
    emoji: "🌍",
    title: "Open Source Contributor",
    desc: "6 merged pull requests on GitHub during Hacktoberfest 2024. Active contributor to the developer community.",
  },
];

export default function App() {
  const role = useTypewriter(ROLES);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAV */}
      <Analytics />
      <nav>
        <div className="nav-inner">
          <div className="nav-logo">
            rp<span>.</span>dev
          </div>
          <div className="nav-links">
            {[["about", "01"], ["skills", "02"], ["work", "03"], ["projects", "04"], ["contact", "05"]].map(([id, n]) => (
              <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                <span className="num">{n}.</span>{id}
              </a>
            ))}
          </div>
          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <><span /><span /><span /></>}
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {[["about", "01"], ["skills", "02"], ["work", "03"], ["projects", "04"], ["contact", "05"]].map(([id, n]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
              <span className="num">{n}.</span>{id}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="grid-overlay" />
        <div className="container">
          <div className="hero-eyebrow">
            <div className="status-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-name">
            Rehan<br />
            <span className="last">Pathan</span>
          </h1>
          <div className="typewriter-line">
            {role}<span className="cursor" />
          </div>
          <p className="hero-desc">
            Building scalable web applications with the MERN stack. Passionate about clean code, AI integration, and solving hard problems — one algorithm at a time.
          </p>
          <div className="hero-actions">
            <a href="mailto:pathanrehan650@gmail.com" className="btn-primary">
              <Mail size={16} /> Get in Touch
            </a>
            <a href="https://github.com/rehanpathan650" target="_blank" rel="noreferrer" className="btn-outline">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rehan-pathan-ab059a227/" target="_blank" rel="noreferrer" className="btn-outline">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">6+</span>
              <span className="stat-label">Months Experience</span>
            </div>
            <div className="stat">
              <span className="stat-num">1200+</span>
              <span className="stat-label">DSA Problems</span>
            </div>
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-num">#2699</span>
              <span className="stat-label">Meta Hacker Cup</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">// about me</div>
            <h2 className="section-title">Who I Am</h2>
            <div className="divider" />
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I'm a Full-Stack Developer from Pune, India, with a B.Tech in Computer Science from N.K. Orchid College of Engineering. I specialize in building end-to-end web applications using the MERN stack — from clean, responsive UIs to scalable backend APIs.
              </p>
              <p>
                During my time at Vithi IT, I built 5+ production-grade apps, implemented secure authentication systems, and worked in a real Agile/Scrum environment. I'm deeply interested in AI/ML integration — my NutriVision project uses GPT-4o Vision for real-time food recognition.
              </p>
              <p>
                Outside of work, I sharpen my problem-solving skills daily — 1200+ DSA problems solved and counting. I believe clean code, strong fundamentals, and curiosity are the foundations of great engineering.
              </p>
            </div>
            <div className="about-code reveal">
              <div className="code-bar">
                <div className="dot r" /><div className="dot y" /><div className="dot g" />
                <span className="code-filename">rehan.ts</span>
              </div>
              <div className="code-body">
                {[
                  { kw: "const", rest: " developer = {" },
                  { indent: 2, str: "name", pu: ":", str2: ' "Rehan Pathan",' },
                  { indent: 2, str: "location", pu: ":", str2: ' "Pune, India",' },
                  { indent: 2, str: "stack", pu: ":", arr: true },
                  { indent: 2, str: "dsaProblems", pu: ":", num: "1200," },
                  { indent: 2, str: "openToWork", pu: ":", kw2: " true," },
                  { indent: 2, fn: "greet", pu: ": () => {" },
                  { indent: 4, kw: "return", str2: ' "Let\'s build' },
                  { indent: 10, str2: '  something great!";' },
                  { indent: 2, pu: "}," },
                  { pu: "};" },
                ].map((line, i) => (
                  <div className="code-line" key={i}>
                    <span className="ln">{i + 1}</span>
                    <span>
                      {"\u00a0".repeat(line.indent || 0)}
                      {line.kw && <span className="kw">{line.kw}</span>}
                      {line.fn && <><span className="fn">{line.fn}</span></>}
                      {line.str && <span className="str">{line.str}</span>}
                      {line.pu && <span className="pu">{line.pu}</span>}
                      {line.str2 && <span className="str">{line.str2}</span>}
                      {line.num && <span className="num-c">{line.num}</span>}
                      {line.kw2 && <span className="kw">{line.kw2}</span>}
                      {line.arr && <><span className="pu">: [</span><span className="str">"MERN"</span><span className="pu">, </span><span className="str">"TS"</span><span className="pu">, </span><span className="str">"AI"</span><span className="pu">],</span></>}
                      {line.rest && <span className="pu">{line.rest}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ background: "var(--bg2)" }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">// technical skills</div>
            <h2 className="section-title">What I Work With</h2>
            <div className="divider" />
          </div>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div className="skill-card reveal" key={i}>
                <div className="skill-card-icon">
                  {typeof s.icon === "string" ? <span style={{ fontSize: "1.2rem" }}>{s.icon}</span> : s.icon}
                </div>
                <h3>{s.title}</h3>
                <div className="tags">
                  {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="work">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">// experience</div>
            <h2 className="section-title">Where I've Worked</h2>
            <div className="divider" />
          </div>
          <div className="exp-card reveal">
            <div className="exp-header">
              <div>
                <div className="exp-role">Trainee Programmer</div>
                <div className="exp-company">Vithi IT · Hyderabad</div>
              </div>
              <div className="exp-meta">
                <div className="exp-period">Sep 2025 – Feb 2026</div>
                <span className="exp-type">Full-Time · 6 Months</span>
              </div>
            </div>
            <ul className="exp-list">
              <li>Built 5+ full-stack web apps using React.js, Node.js, Express.js, and MongoDB — improved API performance by 30% through optimized middleware and query design.</li>
              <li>Implemented JWT-based authentication with Role-Based Access Control (RBAC), securing 100% of user sessions across all projects.</li>
              <li>Worked in an Agile/Scrum environment — sprint planning, daily stand-ups, and code reviews — consistently delivering features on schedule.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: "var(--bg2)" }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">// projects</div>
            <h2 className="section-title">Things I've Built</h2>
            <div className="divider" />
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div className="project-card reveal" key={i}>
                <div className="project-icon">{p.emoji}</div>
                <div className="project-name">{p.name}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--accent3)", fontFamily: "var(--font-mono)", marginBottom: "10px" }}>{p.sub}</div>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-highlights">
                  {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
                <div className="project-tags">
                  {p.tags.map((t) => <span className="project-tag" key={t}>{t}</span>)}
                </div>
                {/* <div className="project-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn live">
                    <Globe size={13} /> Live
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="proj-btn code">
                    <Github size={13} /> Code
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTS */}
      <section id="education">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">// education & certifications</div>
            <h2 className="section-title">Background</h2>
            <div className="divider" />
          </div>
          <div className="edu-cert-grid">
            <div className="edu-card reveal">
              <div className="edu-icon">🎓</div>
              <div className="edu-degree">B.Tech in Computer Science & Engineering</div>
              <div className="edu-school">N.K. Orchid College of Engineering · Solapur</div>
              <div className="edu-meta">
                <span className="badge">Nov 2021 – Jun 2025</span>
                <span className="badge gpa">CGPA: 7.31 / 10</span>
              </div>
            </div>
            <div className="cert-card reveal">
              <div className="edu-icon">📜</div>
              <div className="edu-degree" style={{ marginBottom: "20px" }}>Certifications</div>
              <ul className="cert-list">
                <li>
                  <span className="icon">🌐</span>
                  <span>The Complete Web Development Bootcamp — Udemy (Dr. Angela Yu)</span>
                </li>
                <li>
                  <span className="icon">⚛️</span>
                  <span>Mastering React — Proper Dot Institute</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section style={{ background: "var(--bg2)", paddingTop: "0", paddingBottom: "90px" }}>
        <div className="container">
          <div className="section-header reveal" style={{ paddingTop: "90px" }}>
            <div className="section-tag">// achievements</div>
            <h2 className="section-title">Highlights</h2>
            <div className="divider" />
          </div>
          <div className="ach-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div className="ach-card reveal" key={i}>
                <span className="ach-emoji">{a.emoji}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-wrap reveal">
            <div className="section-tag" style={{ justifyContent: "center", display: "flex", marginBottom: "12px" }}>// contact</div>
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-sub">
              Open to full-time roles, freelance projects, and interesting collaborations. My inbox is always open — let's talk!
            </p>
            <div className="contact-links">
              <a href="mailto:pathanrehan650@gmail.com" className="contact-link">
                <Mail size={16} /> pathanrehan650@gmail.com
              </a>
              <a href="tel:+918857807173" className="contact-link">
                <Phone size={16} /> +91 88578 07173
              </a>
              <a href="https://www.linkedin.com/in/rehan-pathan-ab059a227/" target="_blank" rel="noreferrer" className="contact-link">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/rehanpathan650" target="_blank" rel="noreferrer" className="contact-link">
                <Github size={16} /> GitHub
              </a>

              <a href="https://leetcode.com/rehan491" target="_blank" rel="noreferrer" className="contact-link">
                <LeetCode size={16} /> LeetCode
              </a>
              <a href="https://codeforces.com/profile/Rehan491" target="_blank" rel="noreferrer" className="contact-link">
                <Codeforces size={16} /> Codeforces
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>Designed & built by <span>Rehan Pathan</span> · 2025 · Made with <span>♥</span> & React</p>
        </div>
      </footer>
    </>
  );
}
