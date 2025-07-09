import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Palette, Users, Zap, Download, Star, Clock, MapPin, Coffee, Gamepad2, Car, Book, Music, Activity, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [liveCoding, setLiveCoding] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [isOnline] = useState(true);
  const [currentlyPlaying] = useState('Coding Vibes Mix');
  
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const words = useMemo(() => [
    'SHOPIFY DEVELOPER',
    'PROGRAMMING MENTOR',
    'E-COMMERCE EXPERT',
    'PYTHON AUTOMATOR',
    'FULL-STACK CREATOR'
  ], []);

  const codeSnippets = useMemo(() => [
    'const success = hardWork + dedication;',
    'if (coffee > 0) { code(); }',
    'function buildAmazingStores() { return magic; }',
    'const students = await teachProgramming();',
    'python.automate(everything);'
  ], []);

  const funFacts = [
    { icon: <Coffee className="w-5 h-5" />, text: `${coffeeCount + 127} cups of coffee consumed`, dynamic: true },
    { icon: <Clock className="w-5 h-5" />, text: `Currently ${currentTime.toLocaleTimeString('uk-UA')}`, dynamic: true },
    { icon: <Activity className="w-5 h-5" />, text: `${isOnline ? 'Online' : 'Offline'} and coding`, dynamic: true },
    { icon: <Music className="w-5 h-5" />, text: `Listening to: 90s classics mix`, dynamic: false },
    { icon: <Gamepad2 className="w-5 h-5" />, text: 'Dota & cyberpunk games fan', dynamic: false },
    { icon: <Car className="w-5 h-5" />, text: 'Car engineering enthusiast', dynamic: false },
    { icon: <Book className="w-5 h-5" />, text: 'Python books reader', dynamic: false },
    { icon: <MapPin className="w-5 h-5" />, text: 'Based in Lutsk, Ukraine', dynamic: false }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Shopify Development",
      description: "Custom themes, store setup, and optimization",
      features: ["Custom Theme Development", "Store Migration", "Performance Optimization", "Payment Integration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Programming Education",
      description: "Teaching HTML/CSS, JavaScript, Python, C++",
      features: ["1-on-1 Tutoring", "Course Development", "Interview Prep", "Project Mentoring"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Python Automation",
      description: "Web scraping, data analysis, automation tools",
      features: ["Web Scraping", "Data Analysis", "API Integration", "Workflow Automation"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Custom themes, plugins, and WooCommerce",
      features: ["Custom Development", "WooCommerce Setup", "Performance Optimization", "Security"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const projects = [
    {
      title: "Eventuri Performance",
      description: "Automotive parts store with 500+ products",
      tech: ["Shopify", "Liquid", "JavaScript"],
      url: "https://eventuri.shop",
      metrics: { conversion: "+35%", speed: "95/100", revenue: "$50K+" },
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Fi Exhaust Store",
      description: "Exhaust systems specialist with 300+ products",
      tech: ["Shopify", "Liquid", "CSS"],
      url: "https://fiexhaust.shop",
      metrics: { conversion: "+40%", speed: "93/100", revenue: "$35K+" },
      color: "from-green-500 to-blue-600"
    }
  ];

  const achievements = [
    { number: "25+", label: "E-commerce Stores", icon: <Star className="w-6 h-6" /> },
    { number: "60+", label: "Students Taught", icon: <Users className="w-6 h-6" /> },
    { number: "1000+", label: "Products Cataloged", icon: <Code className="w-6 h-6" /> },
    { number: "99%", label: "Uptime Rate", icon: <Zap className="w-6 h-6" /> }
  ];

  const skills = [
    { name: 'Shopify/Liquid', level: 95, color: 'bg-green-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'Python', level: 85, color: 'bg-blue-500' },
    { name: 'React', level: 80, color: 'bg-cyan-500' },
    { name: 'WordPress/PHP', level: 85, color: 'bg-purple-500' },
    { name: 'CSS/Tailwind', level: 90, color: 'bg-pink-500' }
  ];

  // Intersection Observer для анімацій
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Typing animation
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setTypedText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  // Live coding effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      setLiveCoding(randomSnippet);
    }, 3000);
    return () => clearInterval(interval);
  }, [codeSnippets]);

  // Dynamic time and coffee counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if (Math.random() < 0.1) { // 10% chance every second
        setCoffeeCount(prev => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect
  const parallaxOffset = scrollY * 0.5;

  // Particle component
  const Particle = ({ index }) => {
    const [position, setPosition] = useState({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    });

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition(prev => ({
          x: (prev.x + prev.vx + window.innerWidth) % window.innerWidth,
          y: (prev.y + prev.vy + window.innerHeight) % window.innerHeight,
          vx: prev.vx,
          vy: prev.vy
        }));
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div
        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(${(mousePosition.x - position.x) * 0.01}px, ${(mousePosition.y - position.y) * 0.01}px)`
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${Math.sin(Date.now() * 0.005) * 0.2 + 1})`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-40 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold">OT</span>
              </div>
              <span className="text-xl font-bold group-hover:text-blue-400 transition-colors">OLEKSANDR</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              LET'S TALK
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div 
                className="text-sm text-blue-400 font-medium animate-pulse"
                data-animate
                id="hero-greeting"
              >
                <span className="inline-block animate-bounce">👋</span> OLEKSANDR TSOMPEL
              </div>
              
              <h1 
                className={`text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ${
                  visibleElements.has('hero-greeting') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transform: `translateY(${parallaxOffset}px)` }}
              >
                HEY! I'M OLEKSANDR
              </h1>
              
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent min-h-[1.2em]">
                I'M A {typedText}<span className="animate-pulse">|</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg transform hover:scale-105 transition-transform duration-300">
                Shopify Developer & Product Manager specializing in full-cycle e-commerce development. 
                Over 1.5 years creating dozens of projects with Liquid, JavaScript, and modern web technologies. 
                Also experienced in programming education and Python automation.
                <span className="block mt-2 text-green-400 font-semibold animate-pulse">
                  🟢 Available for new projects and collaborations!
                </span>
              </p>

              {/* Live Coding Display */}
              <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-green-400 mb-2">{/* Currently coding... */}</div>
                <div className="text-blue-300 animate-pulse">{liveCoding}</div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a 
                  href="mailto:sashatsompel@gmail.com?subject=Project%20Inquiry&body=Hi%20Oleksandr,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%0A%0AProject%20details:%0A-%20Type:%20%0A-%20Budget:%20%0A-%20Timeline:%20%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0ABest%20regards"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group inline-block"
                >
                  <span className="group-hover:animate-pulse">GET IN TOUCH</span>
                </a>
                <a
                  href="https://sascyt9.github.io/Resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>RESUME</span>
                </a>
              </div>

              <div className="flex space-x-3 pt-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/SASCYT9", color: "hover:bg-gray-700", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/oleksandr-tsompel", color: "hover:bg-blue-600", label: "LinkedIn" },
                  { icon: <MessageCircle className="w-5 h-5" />, href: "https://t.me/sascyt", color: "hover:bg-blue-500", label: "Telegram" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:sashatsompel@gmail.com", color: "hover:bg-red-600", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:rotate-12 group relative`}
                    title={social.label}
                  >
                    {social.icon}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="relative" data-animate id="hero-image">
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin"></div>
                <div className="absolute inset-4 rounded-full border-2 border-purple-500/20 animate-ping"></div>
                <div className="absolute inset-8 rounded-full border border-cyan-500/10 animate-pulse"></div>
                
                {/* Photo container */}
                <div className={`relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 transition-all duration-1000 ${
                  visibleElements.has('hero-image') ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                }`}>
                  <img 
                    src={`${window.location.origin}/portfolio/profile-photo.jpg`}
                    alt="Oleksandr Tsompel" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/320x320/1f2937/60a5fa?text=OT";
                    }}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 text-lg">Get to know me better</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Info */}
            <div className="space-y-6" data-animate id="about-info">
              <div className={`transition-all duration-1000 ${
                visibleElements.has('about-info') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Who Am I?</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate <span className="text-blue-400 font-semibold">Shopify Developer & Product Manager</span> 
                  from Lutsk, Ukraine. With over <span className="text-green-400 font-semibold">1.5 years</span> of 
                  experience in e-commerce development, I've created dozens of projects working with Shopify themes, 
                  custom functionality, and store optimization.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I specialize in <span className="text-blue-400 font-semibold">full-cycle Shopify store development</span> - 
                  from creating unique themes to product catalog setup and conversion optimization. 
                  I also teach programming and develop Python automation tools.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2">💼 Experience</h4>
                    <p className="text-gray-300 text-sm">Freelance Developer</p>
                    <p className="text-gray-400 text-xs">January 2024 - Present</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold text-purple-400 mb-2">🌍 Location</h4>
                    <p className="text-gray-300 text-sm">Lutsk, Ukraine</p>
                    <p className="text-gray-400 text-xs">GMT+2 (EET)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="space-y-6" data-animate id="about-skills">
              <div className={`transition-all duration-1000 ${
                visibleElements.has('about-skills') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">What I Love</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-gray-700/50 transition-colors">
                    <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm font-medium">Clean Code</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-gray-700/50 transition-colors">
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-sm font-medium">Teaching</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-gray-700/50 transition-colors">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-sm font-medium">Automation</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-gray-700/50 transition-colors">
                    <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm font-medium">Innovation</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-green-400 mb-4">Beyond Coding</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Car className="w-5 h-5 text-blue-400" />
                    <span>Car engineering enthusiast - fascinated by automotive technology</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Gamepad2 className="w-5 h-5 text-purple-400" />
                    <span>Dota player & cyberpunk games fan - love strategic gameplay</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Book className="w-5 h-5 text-green-400" />
                    <span>Python books reader - always expanding programming knowledge</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Music className="w-5 h-5 text-orange-400" />
                    <span>90s music lover - classic hits fuel my coding sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16" data-animate id="about-values">
            <div className={`transition-all duration-1000 ${
              visibleElements.has('about-values') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-center mb-8 text-orange-400">My Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-lg text-center border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-orange-400 mb-2">Results-Oriented</h4>
                  <p className="text-gray-300 text-sm">
                    I don't just build websites - I create solutions that drive real business results and user satisfaction.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-lg text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold text-blue-400 mb-2">Collaborative</h4>
                  <p className="text-gray-300 text-sm">
                    I believe in open communication, regular updates, and working together to achieve the best outcomes.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-lg text-center border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="font-semibold text-green-400 mb-2">Always Learning</h4>
                  <p className="text-gray-300 text-sm">
                    Technology evolves fast, and so do I. I'm constantly learning new tools and techniques to stay ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center" data-animate id="about-quote">
            <div className={`transition-all duration-1000 ${
              visibleElements.has('about-quote') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <blockquote className="text-2xl font-medium text-gray-300 italic mb-4 max-w-3xl mx-auto">
                "Code is like humor. When you have to explain it, it's bad."
              </blockquote>
              <p className="text-gray-400">- Cory House</p>
              <p className="text-blue-400 mt-2">My philosophy: Clean, self-explanatory code that works beautifully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-12 bg-gray-800/50 border-y border-gray-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                data-animate
                id={`fact-${index}`}
              >
                <div className="text-blue-400 animate-pulse">{fact.icon}</div>
                <span className="text-gray-300 text-sm">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-t border-blue-500/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Collaborate
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's build something amazing together! I'm always excited about new challenges.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Available for new projects</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* What I Can Build */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-400">E-commerce Solutions</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Complete Shopify stores from scratch
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom themes with unique designs
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Performance optimization (95+ PageSpeed)
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Multi-language and currency support
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Advanced filtering and search
                </li>
              </ul>
            </div>

            {/* Automation & Tools */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">Automation & Tools</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Python automation scripts
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Web scraping and data collection
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  API integrations and webhooks
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Inventory management systems
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Analytics dashboards
                </li>
              </ul>
            </div>

            {/* Education & Mentoring */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-400">Education & Mentoring</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  1-on-1 programming lessons
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Team training and workshops
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Interview preparation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Code review and mentoring
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom curriculum development
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Project Ideas */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">🚀 Can Build Interactive Projects Like This!</h3>
              <p className="text-gray-300">
                This portfolio itself is a showcase of what's possible with React and modern web technologies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="font-semibold text-blue-400">Animated UI</h4>
                <p className="text-sm text-gray-400">Smooth animations and transitions</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-purple-400">Real-time Data</h4>
                <p className="text-sm text-gray-400">Live updates and dynamic content</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                <div className="text-3xl mb-2">🎮</div>
                <h4 className="font-semibold text-green-400">Interactive Elements</h4>
                <p className="text-sm text-gray-400">Engaging user experiences</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-orange-400">Responsive Design</h4>
                <p className="text-sm text-gray-400">Perfect on all devices</p>
              </div>
            </div>
          </div>

          {/* Collaboration CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-white font-medium">Let's create something amazing together!</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:sashatsompel@gmail.com?subject=New%20Project%20Inquiry&body=Hi%20Oleksandr,%0A%0AI%20would%20like%20to%20start%20a%20new%20project%20with%20you.%0A%0AProject%20details:%0A-%20Type%20of%20project:%20%0A-%20Budget%20range:%20%0A-%20Expected%20timeline:%20%0A-%20Additional%20requirements:%20%0A%0APlease%20contact%20me%20to%20discuss%20further.%0A%0ABest%20regards"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group inline-block"
              >
                <span className="group-hover:animate-pulse">Start a Project</span>
              </a>
              <a
                href="https://t.me/sascyt"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick Chat</span>
              </a>
              <a
                href="https://sascyt9.github.io/Resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                data-animate
                id={`achievement-${index}`}
              >
                <div className="text-blue-400 mb-2 flex justify-center group-hover:animate-bounce">
                  {achievement.icon}
                </div>
                <div className={`text-4xl font-bold text-blue-400 mb-2 transition-all duration-1000 ${
                  visibleElements.has(`achievement-${index}`) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}>
                  {achievement.number}
                </div>
                <div className="text-gray-300 group-hover:text-blue-400 transition-colors">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-300 text-lg">Technologies I work with daily</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                data-animate
                id={`skill-${index}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                      visibleElements.has(`skill-${index}`) ? 'animate-pulse' : ''
                    }`}
                    style={{
                      width: visibleElements.has(`skill-${index}`) ? `${skill.level}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Process */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Me?</h2>
            <p className="text-gray-300 text-lg">Here's what makes our collaboration successful</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Process Step 1 */}
            <div className="text-center" data-animate id="process-1">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Discovery & Planning</h3>
              <p className="text-gray-300">
                We start with understanding your goals, target audience, and technical requirements. 
                I create a detailed project roadmap with clear milestones.
              </p>
            </div>

            {/* Process Step 2 */}
            <div className="text-center" data-animate id="process-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Development & Testing</h3>
              <p className="text-gray-300">
                I build your solution using best practices, with regular updates and demos. 
                Every feature is thoroughly tested across devices and browsers.
              </p>
            </div>

            {/* Process Step 3 */}
            <div className="text-center" data-animate id="process-3">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Launch & Support</h3>
              <p className="text-gray-300">
                After launch, I provide ongoing support, training, and optimization. 
                Your success is my success!
              </p>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8">What Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Sarah M.</h4>
                    <p className="text-sm text-gray-400">CEO, Eventuri</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Oleksandr transformed our Shopify store completely. Sales increased by 40% in just 2 months! 
                  His attention to detail and technical expertise are outstanding."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400">John D.</h4>
                    <p className="text-sm text-gray-400">Programming Student</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Best programming instructor I've ever had! Clear explanations, practical projects, 
                  and he genuinely cares about student success. Got my first job thanks to his guidance!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-300 text-lg">Specialized services for your digital success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                data-animate
                id={`service-${index}`}
              >
                <div className={`bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                  visibleElements.has(`service-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <div className="relative text-blue-400 group-hover:animate-bounce transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg">E-commerce stores that drive results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                data-animate
                id={`project-${index}`}
              >
                <div className={`bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 ${
                  visibleElements.has(`project-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="bg-black/50 px-3 py-1 rounded-full text-sm">
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm hover:bg-blue-500/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.url} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                      View Project 
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-y border-blue-500/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need a complete e-commerce solution, want to learn programming, 
              or need automation tools - I'm here to help make it happen!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-400 mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-300">Most projects completed within 2-4 weeks</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-purple-400 mb-2">Personal Approach</h3>
                <p className="text-sm text-gray-300">Direct communication and regular updates</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                <Zap className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-green-400 mb-2">Proven Results</h3>
                <p className="text-sm text-gray-300">25+ successful projects, 99% uptime</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for new projects</span>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <a
                href="mailto:sashatsompel@gmail.com?subject=Let's%20Build%20Something%20Amazing!&body=Hi%20Oleksandr,%0A%0AI%20saw%20your%20portfolio%20and%20I'm%20impressed!%20Let's%20build%20something%20amazing%20together.%0A%0AProject%20idea:%20%0ABudget:%20%0ATimeline:%20%0A%0ALooking%20forward%20to%20working%20with%20you!%0A%0ABest%20regards"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group inline-block"
              >
                <span className="group-hover:animate-pulse">Let's Build Something Amazing!</span>
              </a>
              
              <p className="text-sm text-gray-400 mt-4">
                💬 Free consultation • 📧 Quick response • 🚀 Quality guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-300 text-lg">Ready to build something amazing?</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group">
                <Mail className="w-8 h-8 text-blue-400 mb-4 group-hover:animate-bounce" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">sashatsompel@gmail.com</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group">
                <MessageCircle className="w-8 h-8 text-blue-400 mb-4 group-hover:animate-bounce" />
                <h3 className="text-xl font-semibold mb-2">Telegram</h3>
                <p className="text-gray-300">@sascyt</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group">
                <Phone className="w-8 h-8 text-blue-400 mb-4 group-hover:animate-bounce" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Lutsk, Ukraine</p>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="mailto:sashatsompel@gmail.com?subject=Project%20Start%20Request&body=Hi%20Oleksandr,%0A%0AI%20want%20to%20start%20a%20project%20with%20you!%0A%0AProject%20type:%20%0ABudget:%20%0ATimeline:%20%0A%0ALet's%20discuss%20details.%0A%0ARegards"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group inline-block"
              >
                <span className="group-hover:animate-pulse">Start a Project</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0 flex items-center space-x-2">
              <span>© 2024 Oleksandr Tsompel. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">Online</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/SASCYT9", label: "GitHub" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/oleksandr-tsompel", label: "LinkedIn" },
                { icon: <MessageCircle className="w-5 h-5" />, href: "https://t.me/sascyt", label: "Telegram" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:sashatsompel@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a
        href="mailto:sashatsompel@gmail.com"
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 group"
      >
        <Mail className="w-6 h-6 text-white group-hover:animate-bounce" />
      </a>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        />
      </div>

      {/* CSS для анімацій */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeInScale {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, 2px); }
          20% { transform: translate(2px, -2px); }
          30% { transform: translate(-2px, -2px); }
          40% { transform: translate(2px, 2px); }
          50% { transform: translate(-2px, 2px); }
          60% { transform: translate(2px, -2px); }
          70% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
          90% { transform: translate(-2px, 2px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }
        
        .animate-slideInUp {
          animation: slideInUp 1s ease-out;
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 1s ease-out;
        }
        
        .animate-glitch {
          animation: glitch 0.5s ease-in-out;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .neon-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .hover-3d {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        
        .hover-3d:hover {
          transform: rotateX(10deg) rotateY(10deg) translateZ(20px);
        }
        
        .typing-cursor {
          display: inline-block;
          width: 2px;
          background-color: #3b82f6;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .matrix-rain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .matrix-char {
          position: absolute;
          color: #00ff00;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          animation: matrixFall 3s linear infinite;
        }
        
        @keyframes matrixFall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .pulse-ring {
          animation: pulseRing 2s ease-out infinite;
        }
        
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;