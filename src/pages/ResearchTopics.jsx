import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ResearchCard from "../components/ResearchCard"
import { fetchResearchTopics } from "../services/researchApi"
import SEO from "../components/SEO"

import "./ResearchTopics.css"

function ResearchTopics() {
  const [topics, setTopics] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadResearchTopics() {
      try {
        const data = await fetchResearchTopics()
        setTopics(data)
      } catch {
        setError("Research topics could not be loaded.")
      } finally {
        setIsLoading(false)
      }
    }

    loadResearchTopics()
  }, [])

  const categories = ["All", ...new Set(topics.map((topic) => topic.category))]

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch = topic.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" || topic.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
     <SEO
       title="Research Topics | Research Knowledge Platform"
       description="Explore accessible research topics covering environment, education, public health, and transport."
     />
      <Navbar />

      <main className="topics-page">
        <section className="topics-hero">
          <div>
            <h1>Research Topics</h1>

            <p>
              Explore our latest research on topics that shape a better future
              for society and the environment.
            </p>
          </div>

          <div className="topics-visual">
            <div className="magnifier"></div>
            <div className="visual-paper"></div>
            <div className="visual-bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        <section className="topics-controls" aria-label="Research filters">
          <div className="topics-search">
            <label htmlFor="research-search">Search topics</label>

            <input
              id="research-search"
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="topic-category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "All" ? "All Topics" : category}
              </button>
            ))}
          </div>

          <select className="sort-select" aria-label="Sort research topics">
            <option>Sort by: Newest</option>
            <option>Sort by: Oldest</option>
          </select>
        </section>

        <section className="topics-list">
          {isLoading && <p className="empty-state">Loading research topics...</p>}

          {error && <p className="empty-state">{error}</p>}

          {!isLoading && !error && filteredTopics.length > 0 && (
            <div className="topics-grid">
              {filteredTopics.map((topic) => (
                <ResearchCard key={topic.id} topic={topic} />
              ))}
            </div>
          )}

          {!isLoading && !error && filteredTopics.length === 0 && (
            <p className="empty-state">No research topics found.</p>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ResearchTopics