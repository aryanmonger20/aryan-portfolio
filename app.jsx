const { useState, useEffect, useRef } = React;

// Custom hook for scroll reveal
function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#f7fbff]/80 backdrop-blur-md shadow-sm border-b border-catchy-border' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 font-tech font-bold text-gradient text-2xl tracking-tighter hover:scale-105 transition-transform">
                        &lt;AG /&gt;
                    </div>
                    <div className="hidden md:flex items-center space-x-6 font-semibold text-sm text-catchy-text">
                        <a href="#about" className="hover:text-catchy-primary transition-colors duration-300">About</a>
                        <a href="#experience" className="hover:text-catchy-primary transition-colors duration-300">Experience</a>
                        <a href="#skills" className="hover:text-catchy-primary transition-colors duration-300">Skills</a>
                        <a href="#projects" className="hover:text-catchy-primary transition-colors duration-300">Projects</a>
                        <a href="#education" className="hover:text-catchy-primary transition-colors duration-300">Education</a>
                        <a href="https://myportfolioaryan.netlify.app" target="_blank" className="px-5 py-2.5 bg-gradient-custom text-white rounded-full hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300">Resume</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-catchy-text text-2xl focus:outline-none">
                            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#f7fbff]/95 backdrop-blur-md border-b border-catchy-border shadow-md">
                    <div className="px-4 pt-2 pb-6 flex flex-col space-y-4 font-semibold text-catchy-text text-center text-lg">
                        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                        <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
                        <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                        <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                        <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a>
                        <a href="https://myportfolioaryan.netlify.app" target="_blank" className="text-catchy-primary" onClick={() => setMobileMenuOpen(false)}>Resume</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left">
                <div className="reveal">
                    <p className="font-tech text-catchy-primary font-bold mb-4 tracking-wide uppercase text-sm">Welcome to my universe</p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-catchy-heading mb-4 tracking-tight">
                        Aryan Gupta.
                    </h1>
                </div>
                <div className="reveal" style={{transitionDelay: '100ms'}}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-catchy-primary to-catchy-secondary mb-6 tracking-tight pb-2">
                        I design and build scalable, resilient distributed systems.
                    </h2>
                </div>
                <div className="reveal" style={{transitionDelay: '200ms'}}>
                    <p className="max-w-3xl text-lg md:text-xl mb-10 leading-relaxed text-catchy-text font-medium mx-auto md:mx-0">
                        <span className="font-bold text-catchy-heading">Software Developer @ IBM Software Labs</span> building large-scale distributed data and compute platforms. My work sits at the intersection of backend engineering, frontend development, databases, cloud infrastructure, and security. Previously engineered robust solutions at <span className="font-semibold text-catchy-heading">Amazon</span> and <span className="font-semibold text-catchy-heading">Deloitte</span>.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 font-semibold reveal justify-center md:justify-start" style={{transitionDelay: '300ms'}}>
                    <a href="#experience" className="px-8 py-4 bg-gradient-custom text-white rounded-full hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                        <i className="fa-solid fa-rocket mr-2"></i> Explore My Work
                    </a>
                    <button onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText('aryangg@icloud.com'); alert('Email aryangg@icloud.com copied to your clipboard!'); }} className="px-8 py-4 bg-[#f4f4f5] text-catchy-heading rounded-full shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border border-catchy-border">
                        <i className="fa-solid fa-copy mr-2 text-lg text-red-500"></i> My Email
                    </button>
                    <a href="https://github.com/aryanmonger20" target="_blank" className="px-8 py-4 bg-[#f4f4f5] text-catchy-heading rounded-full shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border border-catchy-border">
                        <i className="fa-brands fa-github mr-2 text-lg"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/arynv" target="_blank" className="px-8 py-4 bg-[#f4f4f5] text-catchy-heading rounded-full shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border border-catchy-border">
                        <i className="fa-brands fa-linkedin text-blue-600 mr-2 text-lg"></i> Connect
                    </a>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-10 reveal-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading flex items-center">
                        About Me
                    </h2>
                    <div className="h-px md:h-1 bg-gradient-custom flex-grow ml-6 rounded-full opacity-20"></div>
                </div>
                <div className="glass-card p-6 md:p-8 rounded-2xl reveal relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-custom"></div>
                    <p className="mb-4 text-base md:text-lg leading-relaxed text-catchy-text font-medium">
                        I am a backend-focused engineer specializing in highly available data platforms and zero-trust security architectures. At <strong className="text-catchy-heading">IBM</strong>, I own the Spark engine lifecycle for Cloud Pak for Data, recently migrating engine API ownership to a service-native architecture to enable zero-downtime provisioning.
                    </p>
                    <p className="mb-6 text-base md:text-lg leading-relaxed text-catchy-text font-medium">
                        Prior to IBM, I architected data profiling pipelines and slashed ETL job runtimes by ~40% at <strong className="text-catchy-heading">Deloitte</strong>, and optimized critical systems at <strong className="text-catchy-heading">Amazon</strong>. I rely on a strong foundation in <strong className="text-catchy-heading">System Design</strong> and <strong className="text-catchy-heading">Data Structures & Algorithms</strong> to build highly scalable, fault-tolerant solutions.
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-catchy-border">
                        <div className="flex flex-wrap gap-2">
                            {["Distributed Systems", "Backend APIs", "Kubernetes", "Spark", "Cloud IAM/STS", "Reliability Engineering"].map((strength, i) => (
                                <span key={i} className="px-3 py-1 bg-catchy-primary/10 text-catchy-primary text-xs md:text-sm font-semibold rounded-md border border-catchy-primary/20">
                                    {strength}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    const jobs = [
        {
            company: "IBM Software Labs",
            role: "Software Developer",
            period: "Dec 2024 - Present",
            location: "Bengaluru, India",
            points: [
                "Migrated Spark engine API ownership from Console to the Spark service on Cloud Pak for Data, ensuring zero downtime and strict backward compatibility.",
                "Drove platform migration from IBM Analytics Engine (IAE) to Watsonx.data (WXD).",
                "Replaced static IAM credentials with OIDC-based temporary roles for Amazon S3 MRAP using Watsonx DAS signing, closing major credential leakage vectors.",
                "Hardened production systems: resolved critical Log4j vulnerabilities, blocked unsafe URL schemes, and mitigated PenTest findings."
            ]
        },
        {
            company: "Deloitte",
            role: "Analyst",
            period: "Jan 2024 - Dec 2024",
            location: "Gurugram, India",
            points: [
                "Automated custom data profiling pipelines for a high-scale Customer Data Platform (CDP).",
                "Optimized SQL and ETL database jobs, successfully cutting execution runtime by ~40%.",
                "Pushed backend system test coverage past 90%, significantly improving overall pipeline reliability."
            ]
        },
        {
            company: "Amazon",
            role: "SDE Intern",
            period: "Jan 2023 - Jun 2023",
            location: "Bengaluru, India",
            points: [
                "Optimized MYCD device/content pages: cut 2 seconds of latency, handling 150% more page hits.",
                "Tightened XSS protections and executed heavy load testing (JMeter) for MYCD and YMS platforms.",
                "Migrated critical packages from MAWS to NAWS architecture, improving operational efficiency."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-12 reveal-right">
                    <div className="h-px md:h-1 bg-gradient-custom flex-grow mr-6 rounded-full opacity-20"></div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading">
                        Experience
                    </h2>
                </div>
                
                <div className="space-y-10 relative before:absolute before:inset-0 before:ml-4 md:before:ml-[8.5rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-catchy-primary/30 before:via-catchy-secondary/30 before:to-transparent">
                    {jobs.map((job, idx) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal">
                            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-[#f7fbff] bg-gradient-custom shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-glow z-10" style={{animationDelay: `${idx}s`}}>
                            </div>
                            
                            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] glass-card p-5 md:p-6 rounded-2xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                    <h3 className="text-lg md:text-xl font-bold text-catchy-heading">
                                        {job.role} <span className="text-gradient">@ {job.company}</span>
                                    </h3>
                                    <span className="font-tech text-xs font-semibold text-catchy-primary bg-catchy-primary/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto border border-catchy-primary/20">
                                        {job.period}
                                    </span>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {job.points.map((point, i) => (
                                        <li key={i} className="flex text-catchy-text text-sm font-medium">
                                            <i className="fa-solid fa-angle-right text-catchy-secondary mt-1 mr-3 text-xs shrink-0"></i>
                                            <span className="leading-snug">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend Core",
            icon: "fa-server",
            color: "text-indigo-600",
            bg: "bg-indigo-50 border border-indigo-200",
            skills: ["Java", "Go", "Python", "NodeJs", "System Design", "DSA"]
        },
        {
            title: "Architecture",
            icon: "fa-network-wired",
            color: "text-violet-600",
            bg: "bg-violet-50 border border-violet-200",
            skills: ["Microservices", "REST APIs", "OAuth / JWT", "Cloud IAM"]
        },
        {
            title: "Data & Storage",
            icon: "fa-database",
            color: "text-sky-600",
            bg: "bg-sky-50 border border-sky-200",
            skills: ["Spark", "Watsonx.data", "Iceberg", "Amazon S3", "Postgres", "SQL", "CDP"]
        },
        {
            title: "Infrastructure",
            icon: "fa-cloud",
            color: "text-teal-600",
            bg: "bg-teal-50 border border-teal-200",
            skills: ["Kubernetes", "Helm", "CI/CD", "Scripting", "React"]
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 reveal">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading mb-3">Technical Arsenal</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-2xl reveal flex flex-col items-center text-center hover:scale-[1.02] transition-transform" style={{transitionDelay: `${idx * 100}ms`}}>
                            <div className={`w-12 h-12 mb-4 ${cat.bg} ${cat.color} rounded-xl flex items-center justify-center text-xl shadow-sm`}>
                                <i className={`fa-solid ${cat.icon}`}></i>
                            </div>
                            <h3 className="text-lg font-bold text-catchy-heading mb-4 tracking-tight">{cat.title}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {cat.skills.map((skill, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-white shadow-sm border border-catchy-border rounded-md text-xs font-semibold text-catchy-text hover:border-catchy-primary transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projectsList = [
        {
            title: "FixIt",
            desc: "A React Native application connecting gig workers directly with consumers to simplify short-term contracting.",
            tech: ["React Native", "JavaScript", "Mobile Dev"],
            link: "https://github.com/aryanmonger20/FixIt"
        },
        {
            title: "We Travel",
            desc: "A social platform tailored for travel enthusiasts to share locations, blogs, and experiences.",
            tech: ["React", "Maps", "Backend"],
            link: "https://fierce-wildwood-24965.herokuapp.com/"
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-10 reveal-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading flex items-center">
                        Projects
                    </h2>
                    <div className="h-px md:h-1 bg-gradient-custom flex-grow ml-6 rounded-full opacity-20"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsList.map((project, idx) => (
                        <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl reveal flex flex-col h-full hover:scale-[1.02] transition-transform" style={{transitionDelay: `${idx * 150}ms`}}>
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center text-lg shadow-sm border border-sky-100">
                                    <i className="fa-solid fa-code-branch"></i>
                                </div>
                                <a href={project.link} target="_blank" className="text-catchy-text hover:text-catchy-primary transition-colors text-xl">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <h3 className="text-xl font-bold text-catchy-heading mb-2 tracking-tight">{project.title}</h3>
                            <p className="text-catchy-text mb-6 flex-grow text-sm font-medium">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="font-tech text-xs font-semibold text-catchy-primary bg-catchy-primary/5 px-2 py-1 rounded-md border border-catchy-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-10 reveal-right">
                    <div className="h-px md:h-1 bg-gradient-custom flex-grow mr-6 rounded-full opacity-20"></div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading">
                        Education
                    </h2>
                </div>
                
                <div className="glass-card p-6 md:p-8 rounded-2xl reveal flex flex-col md:flex-row items-center md:items-start gap-6 border-l-4 border-l-catchy-primary text-center md:text-left">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-2xl shrink-0 border border-indigo-100">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-catchy-heading mb-1">IIIT Surat</h3>
                        <h4 className="text-sm md:text-base font-semibold text-catchy-primary mb-3">B.Tech - Electronics and Communications</h4>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                            <span className="font-tech text-xs font-semibold text-catchy-text bg-white px-3 py-1 rounded-md border border-catchy-border">
                                <i className="fa-regular fa-calendar mr-1"></i> 2019 - 2023
                            </span>
                            <span className="font-tech text-xs font-semibold text-catchy-text bg-white px-3 py-1 rounded-md border border-catchy-border">
                                <i className="fa-solid fa-star mr-1 text-yellow-500"></i> CGPA: 8.98/10
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center glass-card rounded-3xl p-8 reveal">
                <h2 className="text-3xl font-extrabold text-catchy-heading mb-6 tracking-tight">Get In Touch</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://www.linkedin.com/in/arynv" target="_blank" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-blue-600 hover:shadow-md transition-all duration-300 text-xl border border-catchy-border" title="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/aryanmonger20" target="_blank" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-black hover:shadow-md transition-all duration-300 text-xl border border-catchy-border" title="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://leetcode.com/u/aryangupta007yo/" target="_blank" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-orange-500 hover:shadow-md transition-all duration-300 text-xl border border-catchy-border" title="LeetCode">
                        <i className="fa-solid fa-code"></i>
                    </a>
                    <button onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText('aryangg@icloud.com'); alert('Email aryangg@icloud.com copied!'); }} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-red-500 hover:shadow-md transition-all duration-300 text-xl border border-catchy-border" title="Copy Email">
                        <i className="fa-solid fa-copy"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-6 text-center font-medium text-xs text-catchy-text bg-[#f7fbff]/50 backdrop-blur-sm border-t border-catchy-border mt-auto">
            <p>Aryan Gupta &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

const App = () => {
    useReveal();
    
    return (
        <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
