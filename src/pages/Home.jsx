import { useEffect, useState } from "react"

import SEO from "../components/SEO"

import {
  Users,
  ShieldCheck,
  Smartphone,
  Lock,
  Accessibility,
} from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ResearchCard from "../components/ResearchCard"

import { fetchResearchTopics } from "../services/researchApi"

import "./Home.css"

function Home() {
  const [topics, setTopics] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadTopics() {
      try {
        const data = await fetchResearchTopics()
        setTopics(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTopics()
  }, [])

  return (
    <>
     <SEO
      title="Research Knowledge Platform"
      description="A CMS-driven research platform focused on accessibility, integrity, and dynamic knowledge sharing."
     />
      <Navbar />

      <main className="home-page">
        <section className="home-hero">
          <div className="hero-left">
            <h1>
              Transforming Complex <span>Research</span> Into{" "}
              <span>Accessible</span> Knowledge
            </h1>

            <p>
              A CMS-driven platform designed for research institutions, public
              organizations, and non-technical content editors.
            </p>

            <div className="hero-buttons">
              <a href="/research" className="primary-btn">
                Explore Research →
              </a>

              <a href="/research-integrity" className="secondary-btn">
                Learn More →
              </a>
            </div>

            <div className="hero-tags">
              <span>Accessible</span>
              <span>Inclusive</span>
              <span>Reliable</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-blob"></div>

            <div className="person-shape">
              <div className="person-head"></div>
              <div className="person-body"></div>
              <div className="person-arm"></div>
              <div className="person-leg left"></div>
              <div className="person-leg right"></div>
            </div>

            <div className="dashboard-window">
              <div className="window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="window-content">
                <div className="image-box">
                  <div className="mountain"></div>
                  <div className="sun"></div>
                </div>

                <div className="line-box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="bar-box">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="pie-box"></div>
              </div>
            </div>

            <div className="plant">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="section-heading">
            <h2>Featured Research Topics</h2>

            <p>
              Explore our latest research on topics that shape a better future
              for society and the environment.
            </p>
          </div>

          {isLoading ? (
            <p className="loading-state">Loading research topics...</p>
          ) : (
            <div className="featured-grid">
              {topics.map((topic) => (
                <ResearchCard key={topic.id} topic={topic} />
              ))}
            </div>
          )}

          <div className="view-all-wrapper">
            <a href="/research" className="view-all-btn">
              View All Topics
            </a>
          </div>
        </section>

        <section className="platform-section">
          <div className="section-heading">
            <h2>Why This Platform?</h2>
          </div>

          <div className="platform-grid">
            <article className="platform-card">
              <div className="platform-icon blue">
                <Users />
              </div>

              <h3>For Everyone</h3>

              <p>
                Designed for researchers, institutions, and non-technical
                editors to share knowledge easily.
              </p>
            </article>

            <article className="platform-card">
              <div className="platform-icon navy">
                <ShieldCheck />
              </div>

              <h3>Trusted Information</h3>

              <p>
                Based on credible research and verified data to support informed
                decisions.
              </p>
            </article>

            <article className="platform-card">
              <div className="platform-icon sky">
                <Smartphone />
              </div>

              <h3>Accessible Anywhere</h3>

              <p>
                Fully responsive design for a seamless experience on all devices.
              </p>
            </article>

            <article className="platform-card">
              <div className="platform-icon green">
                <Lock />
              </div>

              <h3>Privacy First</h3>

              <p>
                No personal data is collected. We follow GDPR principles and
                respect your privacy.
              </p>
            </article>
          </div>
        </section>

        <section className="accessibility-banner">
          <div className="accessibility-banner-icon">
            <Accessibility />
          </div>

          <div>
            <h2>Accessibility is at the core of what we do.</h2>

            <p>
              We follow WCAG 2.1 Level AA standards to ensure our content is
              usable by as many people as possible.
            </p>
          </div>

          <a href="/accessibility">Accessibility Statement →</a>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home