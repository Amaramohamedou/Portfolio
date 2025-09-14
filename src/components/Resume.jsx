import React from 'react'
import { 
  Code,
  Server,
  Shield,
  FileUser
} from 'lucide-react'

const Resume = () => {
  return (
    <div className="content-box">
      <div className="section-title-wrapper">
        <h2 className="section-title">Resume</h2>
        <div className="title-decor">
          <div className="decor-line-long"></div>
          <div className="decor-line-short"></div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="content-block">
        <h3 className="content-title">
          <Server size={24} />
          Experience
        </h3>
        <div className="timeline">
          <article className="timeline-item">
            <h4 className="timeline-title">Hubscans - Upto1 via Keiken Digital Solutions <span className="role">as</span> Développeur Full Stack & DevOps Engineer</h4>
            <p className="timeline-date">Juillet 2024 - Mai 2025</p>
            <div className="timeline-description">
              <ul>
                <li>Développement d'une API REST multi-tenant en ASP.NET Core avec frontend Angular</li>
                <li>Mise en place d'infrastructure Docker/Kubernetes et automatisation CI/CD</li>
                <li>Implémentation de pipelines Jenkins pour déploiement automatisé</li>
                <li>Configuration et gestion d'environnements cloud sur Azure et AWS</li>
                <li>Monitoring et logging avec ELK Stack et Grafana</li>
              </ul>
              <p className="timeline-location">Remote, Maroc</p>
            </div>
          </article>

          <article className="timeline-item">
            <h4 className="timeline-title">Richemont via Keiken Digital Solutions <span className="role">as</span> Ingénieur DevOps & Cloud</h4>
            <p className="timeline-date">Septembre 2023 - Juin 2024</p>
            <div className="timeline-description">
              <ul>
                <li>Conception et développement d'une architecture microservices REST scalable</li>
                <li>Implémentation d'un système de traitement d'images haute résolution</li>
                <li>Provisioning d'infrastructure avec Terraform sur AWS</li>
                <li>Gestion de clusters EKS et optimisation des performances</li>
                <li>Automatisation des déploiements avec Ansible et Jenkins</li>
              </ul>
              <p className="timeline-location">Remote, Maroc</p>
            </div>
          </article>

          <article className="timeline-item">
            <h4 className="timeline-title">Allianz Assurance via Keiken Digital Solutions <span className="role">as</span> Ingénieur DevOps & Cloud</h4>
            <p className="timeline-date">Juillet 2022 - Août 2023</p>
            <div className="timeline-description">
              <ul>
                <li>Design et implémentation d'une plateforme de gestion de connaissances</li>
                <li>Développement fullstack selon les méthodes agiles</li>
                <li>Mise en place de pipelines CI/CD avec Jenkins</li>
                <li>Configuration d'infrastructure cloud AWS avec Terraform</li>
                <li>Monitoring et observabilité avec Prometheus et Grafana</li>
              </ul>
              <p className="timeline-location">Remote, Maroc</p>
            </div>
          </article>

          <article className="timeline-item">
            <h4 className="timeline-title">Freelance <span className="role">as</span> Consultant DevOps</h4>
            <p className="timeline-date">Janvier 2022 - Juillet 2022</p>
            <div className="timeline-description">
              <ul>
                <li>Conseil en architecture cloud et stratégies DevOps</li>
                <li>Migration d'applications vers le cloud (AWS/GCP)</li>
                <li>Automatisation des processus de déploiement</li>
                <li>Formation d'équipes aux pratiques DevOps</li>
              </ul>
              <p className="timeline-location">Casablanca, Maroc</p>
            </div>
          </article>
        </div>
      </div>

      {/* Education Section */}
      <div className="content-block">
        <h3 className="content-title">
          <FileUser size={24} />
          Education
        </h3>
        <div className="timeline">
          <article className="timeline-item">
            <h4 className="timeline-title">École nationale des sciences appliquées de Tétouan (ENSATé)</h4>
            <p className="timeline-date">sept. 2017 - juin 2022</p>
            <div className="timeline-description">
              <p>Ingénieur d’état en génie informatique, Genié informatique , système d'information et aide a la decision</p>
              <p className="timeline-location">Tétouan, Maroc</p>
            </div>
          </article>
          
        </div>
      </div>

      {/* Certifications Section */}
      <div className="content-block">
        <h3 className="content-title">
          <Shield size={24} />
          Certifications
        </h3>
        <div className="timeline">
          <article className="timeline-item">
            <h4 className="timeline-title">Kubernetes (CKA)</h4>
            <p className="timeline-date">2025</p>
            <div className="timeline-description">
              <p>Cloud Native Computing Foundation - Administration Kubernetes</p>
            </div>
          </article>

          <article className="timeline-item">
            <h4 className="timeline-title">Azure - 900</h4>
            <p className="timeline-date">2025</p>
            <div className="timeline-description">
              <p>Microsoft Azure - Azure Fondamentals</p>
            </div>
          </article>
          
          <article className="timeline-item">
            <h4 className="timeline-title">Adobe Certified Professional - Adobe Experience Manager Developer</h4>
            <p className="timeline-date">2024</p>
            <div className="timeline-description">
              <p>AEM - Developer Professional</p>
            </div>
          </article>

          <article className="timeline-item">
            <h4 className="timeline-title">AWS Certified Solutions Architect – Associate</h4>
            <p className="timeline-date">2023</p>
            <div className="timeline-description">
              <p>Amazon Web Services (AWS) - Ingenieur cloud</p>
            </div>
          </article>

          <article className="timeline-item">
            <h4 className="timeline-title">Kong Gateway Foundations</h4>
            <p className="timeline-date">2023</p>
            <div className="timeline-description">
              <p>Kong Inc</p>
            </div>
          </article>
          </div>
      </div>

      {/* Skills Section */}
      <div className="content-block">
        <h3 className="content-title">
          <Code size={24} />
          Compétences Techniques
        </h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4 className="skill-category-title">Cloud Platforms</h4>
            <div className="skill-tags">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Azure</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="skill-category-title">Containers & Orchestration</h4>
            <div className="skill-tags">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Helm</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="skill-category-title">Infrastructure as Code</h4>
            <div className="skill-tags">
              <span className="skill-tag">Terraform</span>
              <span className="skill-tag">Ansible</span>
              <span className="skill-tag">CloudFormation</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="skill-category-title">CI/CD</h4>
            <div className="skill-tags">
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">GitLab CI</span>
              <span className="skill-tag">GitHub Actions</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="skill-category-title">Monitoring</h4>
            <div className="skill-tags">
              <span className="skill-tag">Prometheus</span>
              <span className="skill-tag">Grafana</span>
              <span className="skill-tag">ELK Stack</span>
              <span className="skill-tag">Datadog</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="skill-category-title">Programming</h4>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Bash</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Java</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume