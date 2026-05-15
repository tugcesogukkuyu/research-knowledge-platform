import { Link } from "react-router-dom"
import {
  Database,
  BookOpen,
  BarChart3,
  Accessibility,
  Lock,
  ShieldCheck,
} from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./ResearchIntegrity.css"
import SEO from "../components/SEO"

const principles = [
  {
    number: "1.",
    title: "Verified Data Sources",
    icon: Database,
    text: "All research is based on verified and credible data from academic institutions, public organizations, and trusted international sources.",
  },
  {
    number: "2.",
    title: "Open Science Principles",
    icon: BookOpen,
    text: "We support transparency, reproducibility, and openness in research whenever possible through clear sources and methodologies.",
  },
  {
    number: "3.",
    title: "No Manipulated Data",
    icon: BarChart3,
    text: "Findings are presented objectively and honestly. Visualizations are designed to represent information clearly and accurately.",
  },
  {
    number: "4.",
    title: "Accessibility Commitment",
    icon: Accessibility,
    text: "Knowledge should be accessible to everyone, including both technical and non-technical audiences.",
  },
  {
    number: "5.",
    title: "Privacy & Data Protection",
    icon: Lock,
    text: "No personal data is collected or processed through this platform. The project follows GDPR-aware principles.",
  },
]

function ResearchIntegrity() {
  return (
    <>
    <SEO
      title="Research Integrity | Research Knowledge Platform"
      description="Learn about our commitment to verified data, transparency, and open science principles."
    />
      <Navbar />

      <main className="integrity-page">
        <section className="integrity-hero">
          <div>
            <div className="breadcrumb">Home › About › Research Integrity</div>

            <h1>Research Integrity</h1>

            <p>
              Our commitment to trustworthy research, ethical practices, and open
              science principles.
            </p>
          </div>

          <div className="integrity-hero-visual">
            <div className="shield">
              <ShieldCheck />
            </div>

            <div className="paper paper-one"></div>
            <div className="paper paper-two"></div>
          </div>
        </section>

        <section className="integrity-intro">
          <p>
            At Research Knowledge Platform, integrity is at the core of everything
            we do. We are committed to ensuring that the research shared on this
            platform is accurate, transparent, and responsible.
          </p>
        </section>

        <section className="principles-list">
          {principles.map((item) => {
            const Icon = item.icon

            return (
              <article className="principle-row" key={item.title}>
                <div className="principle-icon">
                  <Icon />
                </div>

                <div>
                  <h2>
                    {item.number} {item.title}
                  </h2>

                  <p>{item.text}</p>
                </div>
              </article>
            )
          })}
        </section>

        <section className="integrity-trust-banner">
          <div className="trust-icon">
            <ShieldCheck />
          </div>

          <div>
            <h2>Integrity builds trust.</h2>

            <p>
              We are dedicated to advancing reliable knowledge that supports
              better decisions for a better future.
            </p>
          </div>

          <Link to="/research">Explore Our Research Topics →</Link>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ResearchIntegrity