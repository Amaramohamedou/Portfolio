import React, { useState } from 'react'
import { ExternalLink, Github, Award } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const portfolioItems = [
    // Certifications
    {
      id: 1,
      title: 'AWS Certified Solutions Architect – Associate',
      category: 'Certifications',
      image: '/portfolio/image18.png',
      description: 'Amazon Web Services - Architecture cloud et solutions scalables',
      links: [
        { type: 'Certificate', url: '#' },
        { type: 'Verify', url: '#' }
      ]
    },
    {
      id: 2,
      title: 'Kubernetes (CKA)',
      category: 'Certifications',
      image: '/portfolio/image19.png',
      description: 'Cloud Native Computing Foundation - Administration Kubernetes',
      links: [
        { type: 'Certificate', url: '#' }
      ]
    },
    {
      id: 3,
      title: 'Azure Fundamentals (AZ-900)',
      category: 'Certifications',
      image: '/portfolio/image21.png',
      description: 'Microsoft Azure - Fondamentaux du cloud computing',
      links: [
        { type: 'Certificate', url: '#' },
        { type: 'Verify', url: '#' }
      ]
    },
    {
      id: 4,
      title: 'Adobe Certified Professional - AEM Developer',
      category: 'Certifications',
      image: '/portfolio/adobe-cert.png',
      description: 'Adobe Experience Manager - Développement professionnel',
      links: [
        { type: 'Certificate', url: '#' }
      ]
    },
    {
      id: 5,
      title: 'Kong Gateway Foundations',
      category: 'Certifications',
      image: '/portfolio/image20.png',
      description: 'Kong Inc - Gestion d\'API Gateway',
      links: [
        { type: 'Certificate', url: '#' }
      ]
    },
    
    // Projects
    {
      id: 6,
      title: 'API Multi-tenant ASP.NET Core',
      category: 'Project',
      image: '/portfolio/api-project.png',
      description: 'API REST multi-tenant avec Angular frontend',
      techStack: 'ASP.NET Core - Angular - Docker - Kubernetes',
      links: [
        { type: 'Github', url: '#' }
      ]
    },
    {
      id: 7,
      title: 'Infrastructure Terraform AWS',
      category: 'Project',
      image: '/portfolio/terraform-project.png',
      description: 'Provisioning d\'infrastructure cloud avec IaC',
      techStack: 'Terraform - AWS - EKS - Ansible',
      links: [
        { type: 'Github', url: '#' },
        { type: 'Article', url: '#' }
      ]
    },
    {
      id: 8,
      title: 'Pipeline CI/CD Jenkins',
      category: 'Project',
      image: '/portfolio/pipeline-project.png',
      description: 'Automatisation des déploiements et tests',
      techStack: 'Jenkins - Docker - Kubernetes - GitOps',
      links: [
        { type: 'Github', url: '#' }
      ]
    },
    {
      id: 9,
      title: 'Monitoring Stack Kubernetes',
      category: 'Project',
      image: '/portfolio/monitoring-project.png',
      description: 'Observabilité complète avec Prometheus et Grafana',
      techStack: 'Prometheus - Grafana - ELK Stack - Kubernetes',
      links: [
        { type: 'Github', url: '#' },
        { type: 'Article', url: '#' }
      ]
    },
    {
      id: 10,
      title: 'Plateforme Microservices',
      category: 'Project',
      image: '/portfolio/microservices-project.png',
      description: 'Architecture microservices scalable pour e-commerce',
      techStack: 'Docker - Kubernetes - Kong - Redis',
      links: [
        { type: 'Github', url: '#' },
        { type: 'Website', url: '#' }
      ]
    },
  ]

  const filters = ['All', 'Certifications', 'Project', 'Badge']

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="content-box">
      <div className="portfolio-header">
        <div className="section-title-wrapper">
          <h2 className="section-title">Portfolio</h2>
          <div className="title-decor">
            <div className="decor-line-long"></div>
            <div className="decor-line-short"></div>
          </div>
        </div>
      </div>

      {/* Portfolio Filters */}
      <nav className="portfolio-filters">
        <ul>
          {filters.map((filter) => (
            <li key={filter}>
              <a
                href="#"
                className={activeFilter === filter ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveFilter(filter)
                }}
              >
                {filter}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <article key={item.id} className="portfolio-card">
            <div className="card-image-container">
              <img src={item.image} alt={item.title} />
              <div className="card-category-tag">{item.category}</div>
              
              {/* Overlay for projects with tech stack */}
              {item.techStack && (
                <div className="card-overlay">
                  <h4 className="overlay-title">Tech Stack</h4>
                  <p>{item.techStack}</p>
                </div>
              )}
              
              {/* Overlay for certifications */}
              {item.category === 'Certifications' && (
                <div className="card-overlay">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
            
            <div className="card-content">
              <h3>{item.title}</h3>
              {item.links && (
                <div className="card-links">
                  {item.links.map((link, index) => (
                    <a key={index} href={link.url} className="card-link" target="_blank" rel="noopener noreferrer">
                      {link.type === 'Github' && <Github size={12} />}
                      {link.type === 'Certificate' && <Award size={12} />}
                      {link.type === 'Website' && <ExternalLink size={12} />}
                      {link.type}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="empty-state">
          <p>Aucun élément trouvé pour cette catégorie.</p>
        </div>
      )}
    </div>
  )
}

export default Portfolio