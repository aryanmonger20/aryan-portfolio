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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#f4f4f5]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 font-tech font-bold text-gradient text-2xl tracking-tighter hover:scale-105 transition-transform">
                        &lt;AG /&gt;
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 font-semibold text-sm text-catchy-text">
                        <a href="#about" className="hover:text-catchy-primary transition-colors duration-300">About</a>
                        <a href="#experience" className="hover:text-catchy-primary transition-colors duration-300">Experience</a>
                        <a href="#skills" className="hover:text-catchy-primary transition-colors duration-300">Skills</a>
                        <a href="#education" className="hover:text-catchy-primary transition-colors duration-300">Education</a>
                        <a href="#projects" className="hover:text-catchy-primary transition-colors duration-300">Projects</a>
                        <a href="https://myportfolioaryan.netlify.app" target="_blank" className="px-5 py-2.5 bg-gradient-custom text-white rounded-full hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300">Resume</a>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-catchy-text text-2xl focus:outline-none">
                            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#f4f4f5]/95 backdrop-blur-md border-b border-catchy-border shadow-md">
                    <div className="px-4 pt-2 pb-6 flex flex-col space-y-4 font-semibold text-catchy-text text-center text-lg">
                        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                        <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
                        <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                        <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a>
                        <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                        <a href="https://myportfolioaryan.netlify.app" target="_blank" className="text-catchy-primary" onClick={() => setMobileMenuOpen(false)}>Resume</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
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
                    <p className="max-w-3xl text-lg md:text-xl mb-10 leading-relaxed text-catchy-text font-light mx-auto md:mx-0">
                        <span className="font-bold text-catchy-heading">Software Developer @ IBM Software Labs</span> building large-scale distributed data and compute platforms. My work sits at the intersection of backend engineering, frontend development, databases, cloud infrastructure, and security. Previously engineered robust solutions at <span className="font-semibold text-catchy-heading">Amazon</span> and <span className="font-semibold text-catchy-heading">Deloitte</span>.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 font-semibold reveal justify-center md:justify-start" style={{transitionDelay: '300ms'}}>
                    <a href="#experience" className="px-8 py-4 bg-gradient-custom text-white rounded-full hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                        <i className="fa-solid fa-rocket mr-2"></i> Explore My Work
                    </a>
                    <button onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText('aryangg@icloud.com'); alert('Email aryangg@icloud.com copied to your clipboard!'); }} className="px-8 py-4 bg-[#f4f4f5] text-catchy-heading rounded-full shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border border-catchy-border">
                        <i className="fa-solid fa-copy mr-2 text-lg text-red-500"></i> Copy Email
                    </button>
                    <a href="https://github.com/aryanmonger20" target="_blank" className="px-8 py-4 bg-[#f4f4f5] text-catchy-heading rounded-full shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border border-catchy-border">
                        <i className="fa-brands fa-github mr-2 text-lg"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/arynv" target="_blank" className="px-8 py-4 bg-[#f4f4f5] text-catchy-heading rounded-full shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border border-catchy-border">
                        <i className="fa-brands fa-linkedin text-blue-600 mr-2 text-lg"></i> Connect
                    </a>
                </div>
            </div>
            
            {/* Decorative element */}
            <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-catchy-primary/50">
                <i className="fa-solid fa-arrow-down text-2xl"></i>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-12 reveal-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading flex items-center">
                        About Me
                    </h2>
                    <div className="h-px md:h-1 bg-gradient-custom flex-grow ml-6 rounded-full opacity-20"></div>
                </div>
                <div className="glass-card p-6 md:p-10 rounded-2xl reveal relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-custom"></div>
                    <p className="mb-4 text-base md:text-lg leading-relaxed text-catchy-text">
                        I build distributed systems that need to scale and stay secure. At <strong className="text-catchy-heading">IBM</strong>, I own parts of the Spark engine lifecycle in Cloud Pak for Data. Recently, I migrated engine API ownership out of a legacy console layer into service-native architecture—meaning tenants can now provision and run jobs without breaking existing workflows.
                    </p>
                    <p className="mb-4 text-base md:text-lg leading-relaxed text-catchy-text">
                        The harder problem was eliminating static credentials at scale. I replaced them with <strong className="text-catchy-heading">OIDC-based temporary credentials</strong>, so S3 access now happens through role assumption instead of long-lived keys. That closed a major credential leakage vector. I also spend time hardening production: fixing log4j exposure paths, closing PenTest findings, and building token-based callbacks.
                    </p>
                    <p className="mb-4 text-base md:text-lg leading-relaxed text-catchy-text">
                        Before IBM, I was at <strong className="text-catchy-heading">Amazon</strong> optimizing MYCD's performance (cut 2 seconds of latency, 150% more page hits) and tightening XSS protections. At <strong className="text-catchy-heading">Deloitte</strong>, I automated custom data profiling pipelines for a Customer Data Platform (CDP), pushed test coverage past 90%, and cut database job runtime by ~40%.
                    </p>
                    <p className="mb-6 text-base md:text-lg leading-relaxed text-catchy-text">
                        Beyond the backend, I am well-versed in <strong className="text-catchy-heading">Frontend Development</strong>, crafting seamless user experiences. I also have a strong foundation in <strong className="text-catchy-heading">Data Structures & Algorithms (DSA)</strong> and <strong className="text-catchy-heading">System Design</strong>, driving my approach to building <strong className="text-catchy-heading">highly scalable and fault-tolerant solutions.</strong>
                    </p>
                    
                    <div className="mt-8 pt-8 border-t border-catchy-border">
                        <h3 className="text-xs md:text-sm font-bold text-catchy-heading uppercase tracking-wider mb-4">Core Strengths</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Distributed Systems", "Backend APIs", "Kubernetes", "Spark", "Cloud IAM/STS/OIDC", "Storage & Metadata", "Platform Migration", "Reliability Engineering", "Secure-by-Design"].map((strength, i) => (
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
                "Led the migration of Spark engine API ownership from Console to the Spark service on CPD (v2 and v3), maintaining backward compatibility.",
                "Drove migration from IBM Analytics Engine (IAE) to Watsonx.data (WXD) without disruption to existing workloads.",
                "Implemented Spark support for Amazon S3 MRAP (*.mrap) endpoints using Watsonx DAS signing without static IAM credentials.",
                "Delivered multiple PenTest security fixes, including resolving Log4j vulnerabilities and blocking unsafe URL schemes.",
                "Handled Customer Support, Escalations, and Field Engagements to ensure platform reliability."
            ]
        },
        {
            company: "Deloitte",
            role: "Analyst",
            period: "Jan 2024 - Dec 2024",
            location: "Gurugram, India",
            points: [
                "Developed and optimized advanced SQL scripts to enhance Customer Data Platform (CDP) functionality.",
                "Executed ETL processes to manage, transform, and load large datasets into the CDP.",
                "Performed detailed data analysis to generate actionable insights for consumer behaviors."
            ]
        },
        {
            company: "Amazon",
            role: "SDE Intern",
            period: "Jan 2023 - Jun 2023",
            location: "Bengaluru, India",
            points: [
                "Optimized MYCD device and content page's security against XSS attacks by almost 2x.",
                "Resolved latency issues by fixing Ingress Link, resulting in a 2-second improvement.",
                "Performed Load testing using JMeter on MYCD and YMS pages to optimize system performance.",
                "Migrated packages from MAWS to NAWS architecture, enhancing operational efficiency."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-16 reveal-right">
                    <div className="h-px md:h-1 bg-gradient-custom flex-grow mr-6 rounded-full opacity-20"></div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading">
                        Experience
                    </h2>
                </div>
                
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 md:before:ml-[8.5rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-catchy-primary/30 before:via-catchy-secondary/30 before:to-transparent">
                    {jobs.map((job, idx) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal">
                            
                            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-catchy-bg bg-gradient-custom shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-glow z-10" style={{animationDelay: `${idx}s`}}>
                            </div>
                            
                            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] glass-card p-5 md:p-6 rounded-2xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                    <h3 className="text-lg md:text-xl font-bold text-catchy-heading">
                                        {job.role} <span className="text-gradient">@ {job.company}</span>
                                    </h3>
                                    <span className="font-tech text-xs font-semibold text-catchy-primary bg-catchy-primary/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                                        {job.period}
                                    </span>
                                </div>
                                <ul className="mt-4 space-y-3">
                                    {job.points.map((point, i) => (
                                        <li key={i} className="flex text-catchy-text text-sm">
                                            <i className="fa-solid fa-check text-catchy-secondary mt-1 mr-3 text-xs shrink-0"></i>
                                            <span className="leading-relaxed">{point}</span>
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
            title: "Backend & Core",
            icon: "fa-server",
            color: "text-indigo-600",
            bg: "bg-indigo-50 border border-indigo-200",
            skills: ["Java", "Go", "Python", "NodeJs", "System Design", "DSA"]
        },
        {
            title: "API & Architecture",
            icon: "fa-network-wired",
            color: "text-violet-600",
            bg: "bg-violet-50 border border-violet-200",
            skills: ["REST API Design", "Microservices Architecture", "API Security (JWT, OAuth)", "Cloud IAM"]
        },
        {
            title: "Data & Cloud",
            icon: "fa-database",
            color: "text-sky-600",
            bg: "bg-sky-50 border border-sky-200",
            skills: ["Spark", "Watsonx.data", "Iceberg", "Amazon S3", "Postgres", "SQL", "PL/SQL", "CDP"]
        },
        {
            title: "DevOps & Frontend",
            icon: "fa-laptop-code",
            color: "text-teal-600",
            bg: "bg-teal-50 border border-teal-200",
            skills: ["Kubernetes", "Helm", "Scripting", "CI/CD", "JavaScript", "React"]
        }
    ];

    return (
        <section id="skills" className="py-24 md:py-32 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16 reveal">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading mb-4">Technical Arsenal</h2>
                    <p className="text-catchy-text text-base md:text-lg max-w-2xl mx-auto">Technologies and tools I use to build scalable, secure, and reliable platforms.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx} className="glass-card p-6 md:p-8 rounded-3xl reveal flex flex-col items-center text-center hover:scale-[1.02] transition-transform" style={{transitionDelay: `${idx * 150}ms`}}>
                            <div className={`w-14 h-14 md:w-16 md:h-16 mb-6 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-sm animate-float`} style={{animationDelay: `${idx * 0.5}s`}}>
                                <i className={`fa-solid ${cat.icon}`}></i>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-catchy-heading mb-4">{cat.title}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {cat.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-white shadow-sm border border-catchy-border rounded-full text-xs md:text-sm font-semibold text-catchy-text hover:border-catchy-primary hover:text-catchy-primary transition-colors cursor-default">
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

const Education = () => {
    return (
        <section id="education" className="py-24 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-12 md:mb-16 reveal-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading flex items-center">
                        Education
                    </h2>
                    <div className="h-px md:h-1 bg-gradient-custom flex-grow ml-6 rounded-full opacity-20"></div>
                </div>
                
                <div className="glass-card p-6 md:p-10 rounded-3xl reveal flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 border-l-4 border-l-catchy-primary text-center md:text-left">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl md:text-4xl shrink-0 shadow-sm border border-indigo-100">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-catchy-heading mb-2">Indian Institute of Information Technology (IIIT) Surat</h3>
                        <h4 className="text-base md:text-lg font-semibold text-catchy-primary mb-3">Bachelor of Technology - Electronics and Communications Engineering</h4>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-5">
                            <div className="flex items-center text-catchy-text font-tech text-xs md:text-sm bg-white px-3 py-1 rounded-md border border-catchy-border">
                                <i className="fa-regular fa-calendar mr-2"></i> Aug 2019 - Jul 2023
                            </div>
                            <div className="flex items-center text-catchy-text font-tech text-xs md:text-sm bg-white px-3 py-1 rounded-md border border-catchy-border">
                                <i className="fa-solid fa-star mr-2 text-yellow-500"></i> CGPA: 8.98/10
                            </div>
                        </div>
                        <p className="text-catchy-text leading-relaxed text-sm md:text-base">
                            Graduated with a strong foundation in engineering principles. Highly active in competitive programming, full-stack development, and participated in multiple hackathons during my academic tenure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projectsList = [
        {
            title: "FixIt",
            desc: "A React Native app designed to connect small-scale workers directly with the world, simplifying gig finding.",
            tech: ["React Native", "JavaScript", "Mobile Dev"],
            link: "https://github.com/aryanmonger20/FixIt"
        },
        {
            title: "Whatsapp Clone",
            desc: "A full MERN stack clone of WhatsApp featuring real-time messaging, user authentication, and responsive UI.",
            tech: ["MongoDB", "Express", "React", "NodeJs"],
            link: "https://github.com/aryanmonger20/LetsChat"
        },
        {
            title: "We Travel",
            desc: "A social website tailored for travel enthusiasts to share locations, blogs, and experiences.",
            tech: ["HTML/CSS", "JavaScript", "Backend"],
            link: "https://fierce-wildwood-24965.herokuapp.com/"
        },
        {
            title: "WeatherApp",
            desc: "A Progressive Web App (PWA) built with React for real-time weather tracking and forecasting.",
            tech: ["React", "PWA", "API Integration"],
            link: "https://github.com/aryanmonger20/WeatherApp"
        }
    ];

    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16 reveal">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-catchy-heading mb-4">Featured Projects</h2>
                    <p className="text-catchy-text text-base md:text-lg max-w-2xl mx-auto">Some of my earlier full-stack and frontend work.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projectsList.map((project, idx) => (
                        <div key={idx} className="glass-card p-6 md:p-8 rounded-3xl reveal flex flex-col h-full hover:scale-[1.02] transition-transform" style={{transitionDelay: `${idx * 150}ms`}}>
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center text-lg md:text-xl shadow-sm border border-sky-100">
                                    <i className="fa-regular fa-folder-open"></i>
                                </div>
                                <a href={project.link} target="_blank" className="text-catchy-text hover:text-catchy-primary transition-colors text-xl md:text-2xl">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-catchy-heading mb-3">{project.title}</h3>
                            <p className="text-catchy-text mb-6 flex-grow text-sm md:text-base">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="font-tech text-xs font-semibold text-catchy-primary bg-catchy-primary/10 px-2 py-1 md:px-3 md:py-1 rounded-full border border-catchy-primary/20">
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

const Contact = () => {
    return (
        <section id="contact" className="py-32 md:py-40 relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center glass-card rounded-3xl p-8 md:p-20 reveal">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-custom rounded-full flex items-center justify-center text-white text-2xl md:text-3xl mb-8 shadow-glow animate-float">
                    <i className="fa-regular fa-paper-plane"></i>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-catchy-heading mb-6 tracking-tight">Let's build something.</h2>
                <p className="text-lg md:text-xl text-catchy-text mb-10 leading-relaxed font-light">
                    Currently architecting secure cloud solutions and large-scale data platforms. 
                    Whether you have an opportunity or just want to chat tech, my inbox is open!
                </p>
                
                <a href="mailto:aryangg@icloud.com" className="inline-block px-8 py-4 md:px-10 md:py-5 bg-gradient-custom text-white font-bold text-base md:text-lg rounded-full hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                    Say Hello
                </a>
                
                <div className="mt-12 pt-12 border-t border-catchy-border flex flex-wrap justify-center gap-4 md:gap-6">
                    <a href="https://www.linkedin.com/in/arynv" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-blue-600 hover:shadow-md transition-all duration-300 text-lg md:text-xl" title="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/aryanmonger20" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-black hover:shadow-md transition-all duration-300 text-lg md:text-xl" title="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://leetcode.com/u/aryangupta007yo/" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-orange-500 hover:shadow-md transition-all duration-300 text-lg md:text-xl" title="LeetCode">
                        <i className="fa-solid fa-code"></i>
                    </a>
                    <a href="mailto:aryangg@icloud.com" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-red-500 hover:shadow-md transition-all duration-300 text-lg md:text-xl" title="Email">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://myportfolioaryan.netlify.app" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-catchy-text hover:text-catchy-primary hover:shadow-md transition-all duration-300 text-lg md:text-xl" title="Portfolio">
                        <i className="fa-solid fa-globe"></i>
                    </a>
                </div>
                <p className="text-catchy-text font-tech text-xs md:text-sm mt-8"><i className="fa-solid fa-phone mr-2"></i>+91 7985176511</p>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-8 text-center font-medium text-sm text-catchy-text bg-[#f4f4f5]/50 backdrop-blur-sm border-t border-catchy-border mt-auto">
            <p>Designed & Built with <i className="fa-solid fa-heart text-catchy-secondary mx-1"></i> by Aryan Gupta</p>
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
                <Education />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
