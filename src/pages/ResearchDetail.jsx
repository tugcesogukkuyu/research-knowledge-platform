import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  CalendarDays,
  Clock3,
  ShieldCheck,
  Download,
} from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { fetchResearchTopicBySlug } from "../services/researchApi"
import SEO from "../components/SEO"

import "./ResearchDetail.css"

function ResearchDetail() {
  const { slug } = useParams()

  const [topic, setTopic] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadTopic() {
      try {
        const data = await fetchResearchTopicBySlug(slug)

        if (!data) {
          setError("Research topic not found.")
          return
        }

        setTopic(data)
      } catch {
        setError("Research topic could not be loaded.")
      } finally {
        setIsLoading(false)
      }
    }

    loadTopic()
  }, [slug])

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="detail-state">Loading research topic...</main>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar />
        <main className="detail-state">{error}</main>
        <Footer />
      </>
    )
  }

  return (
    <>
    <SEO
      title={`${topic.title} | Research Knowledge Platform`}
      description={topic.description}
    />
      <Navbar />

      <main className="research-detail-page">
        <section className="detail-hero">
          <div className="detail-left">
            <div className="detail-breadcrumb">
              Home › Research Topics › {topic.title}
            </div>

            <span className="detail-category">{topic.category}</span>

            <h1>{topic.title}</h1>

            <p>{topic.description}</p>

            <div className="detail-meta">
              <span>
                <CalendarDays size={18} />
                {topic.date}
              </span>

              <span>
                <Clock3 size={18} />
                {topic.readingTime}
              </span>

              {topic.integrityApproved && (
                <span>
                  <ShieldCheck size={18} />
                  Integrity approved
                </span>
              )}
            </div>

            <div className="detail-buttons">
              {topic.summaryPdf ? (
                <a href={topic.summaryPdf} target="_blank" className="download-btn">
                  <Download size={18} />
                  Download Summary
                </a>
              ) : (
                <button>Download Summary</button>
              )}

              <button className="secondary">Save</button>
            </div>
          </div>

          <div className="detail-visual">
            {topic.researchImage ? (
              <img
              src={topic.researchImage}
              alt={`${topic.title} illustration`}
              loading="eager"
            />
            ) : (
              <div className="detail-chart"></div>
            )}
          </div>
        </section>

        <section className="detail-content-layout">
          <article className="detail-main">
            <section>
              <h2>Overview</h2>
              <p>{topic.content}</p>
            </section>

            <section>
              <h2>Key Findings</h2>

              <div className="finding-grid">
                <div className="finding-card">
                  <strong>{topic.featuredStatistic}</strong>
                  <span>Featured research statistic</span>
                </div>

                <div className="finding-card">
                  <strong>22%</strong>
                  <span>Supporting contributors</span>
                </div>

                <div className="finding-card">
                  <strong>14%</strong>
                  <span>Environmental influence</span>
                </div>

                <div className="finding-card">
                  <strong>10%</strong>
                  <span>Additional indicators</span>
                </div>
              </div>
            </section>

            <section>
              <h2>Implications</h2>

              <p>
                Findings suggest that accessible presentation of research can
                improve policy awareness, public understanding, and institutional
                collaboration.
              </p>
            </section>
          </article>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>On This Page</h3>

              <ul>
                <li>Overview</li>
                <li>Key Findings</li>
                <li>Implications</li>
              </ul>
            </div>

            <div className="sidebar-card integrity-card">
              <div className="integrity-icon">
                <ShieldCheck />
              </div>

              <h3>Research Integrity</h3>

              <p>
                This research follows verified data and open science principles.
              </p>

              <Link to="/research-integrity">Learn More →</Link>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ResearchDetail