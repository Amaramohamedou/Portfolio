import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { 
  Code,
  Server,
  Cloud,
  Shield,
  User,
  FileUser,
  FolderOpen,
  MessageCircle,
  Phone,
  Linkedin,
  Github,
  Twitter,
  Download,
  MapPin,
  FileText,
  Mail
} from 'lucide-react'
import Resume from './components/Resume.jsx'
import Portfolio from './components/Portfolio.jsx'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId)
  }

  const services = [
    {
      title: "DevOps",
      icon: <Server size={40} />,
      description: "J'aime améliorer la vitesse et la qualité de livraison, automatiser et atteindre le CI/CD"
    },
    {
      title: "Cloud Engineer",
      icon: <Cloud size={40} />,
      description: "J'aime concevoir, sécuriser et maintenir une infrastructure et application basée sur le cloud d'une organisation"
    },
    {
      title: "SRE",
      icon: <Shield size={40} />,
      description: "Je suis curieux des processus et outils qui garantissent l'évolutivité, la fiabilité et la disponibilité des systèmes logiciels"
    },
    {
      title: "Software Development",
      icon: <Code size={40} />,
      description: "J'aime apprendre le développement logiciel soit pour usage personnel ou pour des objectifs spécifiques"
    }
  ]

  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div className="content-box">
            <div className="about-me-section">
              <div className="section-title-wrapper">
                <h2 className="section-title">About Me</h2>
                <div className="title-decor">
                  <div className="decor-line-long"></div>
                  <div className="decor-line-short"></div>
                </div>
              </div>
              <p className="about-me-text">
                Avec +3 ans d'expérience dans le domaine DevOps et le développement full stack, 
                je me spécialise dans la création d'architectures cloud robustes et scalables. Ma passion pour l'automatisation et l'amélioration continue m'a permis de concevoir et maintenir des APIs multi-tenant utilisées par plusieurs applications.
                J'ai une expertise approfondie dans les technologies cloud (AWS, Azure), l'orchestration de conteneurs (Docker, Kubernetes), et le développement d'applications modernes avec ASP.NET Core et Angular.
              </p>
            </div>

            <div id="doing" className="doing-section">
              <h3 className="section-title">What I'm Doing</h3>
              <div className="doing-grid">
                {services.map((service, index) => (
                  <div key={index} className="doing-card">
                    <div className="card-icon-wrapper">
                      {service.icon}
                    </div>
                    <h4 className="card-title">{service.title}</h4>
                    <p className="card-caption">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 'resume':
        return <Resume />
      
      case 'portfolio':
        return <Portfolio />
      
      case 'blog':
        return (
          <div className="content-box">
            <div className="section-title-wrapper">
              <h2 className="section-title">Blog</h2>
              <div className="title-decor">
                <div className="decor-line-long"></div>
                <div className="decor-line-short"></div>
              </div>
            </div>
            
            <div className="coming-soon-container">
              <div className="coming-soon-content">
                <h3 className="coming-soon-title">Coming Soon...</h3>
                <p className="coming-soon-text">
                  Je prépare actuellement des articles sur les technologies DevOps, 
                  le cloud computing et les meilleures pratiques en ingénierie.
                </p>
                <div className="coming-soon-topics">
                  <h4>Sujets à venir :</h4>
                  <ul>
                    <li>• Infrastructure as Code avec Terraform</li>
                    <li>• Monitoring et observabilité avec Prometheus</li>
                    <li>• Stratégies de déploiement Kubernetes</li>
                    <li>• Sécurisation des pipelines CI/CD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'contact':
        return (
          <div className="content-box">
            <div className="section-title-wrapper">
              <h2 className="section-title">Contact</h2>
              <div className="title-decor">
                <div className="decor-line-long"></div>
                <div className="decor-line-short"></div>
              </div>
            </div>
            
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <Mail size={24} className="contact-icon" />
                <div>
                  <h4 className="contact-item-title">Email</h4>
                  <p className="contact-item-value">medouamara@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <MapPin size={24} className="contact-icon" />
                <div>
                  <h4 className="contact-item-title">Localisation</h4>
                  <p className="contact-item-value">Casablanca, Maroc</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <FileUser size={24} className="contact-icon" />
                <div>
                  <h4 className="contact-item-title">CV</h4>
                  <a href="https://drive.google.com/drive/folders/1NnlKsLjhFCQlVa4-PPfWVJUhLXhI-we-?usp=share_link" target='blank' className="contact-item-value download-link">Télécharger</a>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="portfolio-container">
      {/* Background Decoration */}
      <div className="background-decor">
        <div className="bg-svg-1"></div>
        <div className="bg-svg-2"></div>
      </div>

      {/* Header Section */}
      <section id="home">
        <header className="site-header container">
          <div className="header-left">
            <div className="profile-photo-wrapper">
              <img src="/src/assets/profile_picture.png" alt="Mohamedou AMARA" className="profile-photo" />
            </div>
            <div className="base-info">
              <h1 className="user-name"><strong>Mohamedou</strong> AMARA</h1>
              <p className="user-title">DevOps | SRE | Cloud Engineer</p>
              <ul className="social-links">
                <li><a href="https://www.linkedin.com/in/amara-mohamedou-09770b20b" target='blanck' aria-label="LinkedIn"><Linkedin size={16} /></a></li>
                <li><a href="https://github.com/Amaramohamedou" target='blanck' aria-label="GitHub"><Github size={16} /></a></li>
                <li><a href="#" aria-label="Twitter"><Twitter size={16} /></a></li>
                <li><a href="MailTo:medouamara@gmail.com" aria-label="Email"><Mail size={16} /></a></li>
              </ul>
            </div>
          </div>
          <div className="header-divider"></div>
          <div className="header-right">
            <ul className="contact-list">
              <li>
                <span className="contact-label">Email</span>
                <a 
                href="mailto:medouamara@gmail.com" 
                rel="noopener noreferrer"
                className="contact-value flex items-center gap-1 text-blue-600 hover:underline"
                >
                  medouamara@gmail.com
                  <Mail className="w-4 h-4" />
                </a>
              </li>
              <li>
                <span className="contact-label">Location</span>
                <p 
                rel="noopener noreferrer"
                className="contact-value flex items-center gap-1 text-blue-600 hover:underline"
                >
                  Casablanca, Maroc
                  <MapPin className="w-4 h-4" />
                </p>
              </li>
            </ul>
            <ul className="contact-list">

            <li>
              <span className="contact-label">CV</span>
              <a
                href="https://drive.google.com/drive/folders/1NnlKsLjhFCQlVa4-PPfWVJUhLXhI-we-?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </li>
              <li>
                <span className="contact-label">Status</span>
                <span className="status-icon">●</span>
              </li>
            </ul>
          </div>
        </header>
      </section>

      {/* Main Section */}
      <section id="about" className="main-section">
        <div className="main-layout container">
          <aside className="sidebar">
            <nav className="sidebar-nav">
              <ul>
                {[
                  { id: 'about', label: 'About', icon: <User size={24} /> },
                  { id: 'resume', label: 'Resume', icon: <FileUser size={24} /> },
                  { id: 'portfolio', label: 'Portfolio', icon: <FolderOpen size={24} /> },
                  { id: 'blog', label: 'Blog', icon: <FileText size={24} /> },
                  { id: 'contact', label: 'Contact', icon: <MessageCircle size={24} /> }
                ].map((item) => (
                  <li key={item.id} className={`nav-item ${activeSection === item.id ? 'active' : ''}`}>
                    <a 
                      href={`#${item.id}`} 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        navigateToSection(item.id); 
                      }}
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          
          <main className="main-content">
            {renderContent()}
          </main>
        </div>
      </section>

      {/* Footer */}
      <section id="contact-footer">
        <footer className="site-footer container">
          {/* <div className="status-indicator">
            <span className="status-icon">●</span>
            <p>All systems are operational</p>
          </div> */}
        </footer>
      </section>

    </div>
  )
}

export default App