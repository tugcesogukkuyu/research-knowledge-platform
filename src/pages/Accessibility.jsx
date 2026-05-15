import {
  Accessibility as AccessibilityIcon,
  Keyboard,
  Eye,
  MousePointerClick,
  Smartphone,
  MessageSquare,
} from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Accessibility.css"
import SEO from "../components/SEO"

const accessibilityItems = [
  {
    title: "Keyboard Navigation",
    icon: Keyboard,
    text: "Interactive elements are designed to be reachable through keyboard navigation.",
  },
  {
    title: "Readable Contrast",
    icon: Eye,
    text: "Text and interface colors are selected to support strong readability.",
  },
  {
    title: "Clear Interactions",
    icon: MousePointerClick,
    text: "Buttons, links, and actions use meaningful labels and visible focus states.",
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    text: "Layouts adapt across desktop, tablet, and mobile screen sizes.",
  },
  {
    title: "Inclusive Structure",
    icon: AccessibilityIcon,
    text: "Pages use semantic HTML and structured content hierarchy.",
  },
  {
    title: "Feedback Ready",
    icon: MessageSquare,
    text: "Accessibility improvements can be continuously reviewed and updated.",
  },
]

function Accessibility() {
  return (
    <>
    <SEO
      title="Accessibility Statement | Research Knowledge Platform"
      description="Our platform follows accessibility best practices and WCAG standards for inclusive digital experiences."
    />
      <Navbar />

      <main className="accessibility-page">
        <section className="accessibility-hero">
          <div>
            <div className="breadcrumb">Home › Accessibility</div>

            <h1>Accessibility Statement</h1>

            <p>
              We are committed to making research content clear, inclusive, and
              usable for as many people as possible.
            </p>
          </div>

          <div className="accessibility-visual">
            <div className="accessibility-circle">
              <AccessibilityIcon />
            </div>

            <div className="accessibility-card-mini mini-one"></div>
            <div className="accessibility-card-mini mini-two"></div>
          </div>
        </section>

        <section className="accessibility-intro">
          <h2>Our Accessibility Commitment</h2>

          <p>
            Research Knowledge Platform is designed with WCAG 2.1 Level AA
            principles in mind. The interface focuses on readable content,
            keyboard-friendly navigation, responsive layouts, clear labels, and
            meaningful page structure.
          </p>
        </section>

        <section className="accessibility-grid">
          {accessibilityItems.map((item) => {
            const Icon = item.icon

            return (
              <article className="accessibility-card" key={item.title}>
                <div className="accessibility-icon">
                  <Icon />
                </div>

                <h2>{item.title}</h2>

                <p>{item.text}</p>
              </article>
            )
          })}
        </section>

        <section className="accessibility-note">
          <div>
            <h2>WCAG-aware development approach</h2>

            <p>
              This demo project applies accessibility-aware frontend decisions
              including semantic structure, visible focus states, sufficient
              contrast, responsive grids, descriptive links, and labeled form
              controls.
            </p>
          </div>

          <span>WCAG 2.1 AA</span>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Accessibility