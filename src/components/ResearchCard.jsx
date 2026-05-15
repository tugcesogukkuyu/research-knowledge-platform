import { Link } from "react-router-dom"
import { Leaf, GraduationCap, HeartPulse, Bus, Globe2 } from "lucide-react"
import "./ResearchCard.css"

const categoryIcons = {
  Environment: Leaf,
  Education: GraduationCap,
  "Public Health": HeartPulse,
  Transport: Bus,
  "Digital Society": Globe2,
}

function ResearchCard({ topic }) {
  const Icon = categoryIcons[topic.category] || Globe2
  const categoryClass = topic.category.toLowerCase().replace(/\s/g, "-")

  return (
    <article className="research-card">
      {topic.researchImage ? (
        <img
        className="research-card-image"
        src={topic.researchImage}
        alt={`${topic.title} illustration`}
        loading="lazy"
      />
      ) : (
        <div className={`research-illustration ${categoryClass}`}>
          <div className="illustration-circle">
            <Icon />
          </div>

          <div className="floating-dot dot-one"></div>
          <div className="floating-dot dot-two"></div>
          <div className="floating-dot dot-three"></div>
        </div>
      )}

      <div className="research-card-content">
        <span className="research-category">{topic.category}</span>

        <h3>{topic.title}</h3>

        <p>{topic.description}</p>

        <Link to={`/research/${topic.slug}`} className="research-link">
          Read More →
        </Link>
      </div>
    </article>
  )
}

export default ResearchCard