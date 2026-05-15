import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            <h2>Research</h2>
            <p>Knowledge Platform</p>
          </div>
        </div>

        <p className="footer-description">
          Empowering research institutions and communities through accessible
          and actionable knowledge.
        </p>

        <div className="footer-grid">
          <div className="footer-column">
            <h3>Explore</h3>

            <a href="/research">Research Topics</a>
            <a href="/research-integrity">About</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>

            <a href="/">FAQ</a>
            <a href="/">Guidelines</a>
            <a href="/">For Editors</a>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>

            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
            <a href="/accessibility">
              Accessibility Statement
            </a>
          </div>

          <div className="footer-column newsletter-column">
            <h3>Stay Updated</h3>

            <p>
              Subscribe to our newsletter for the latest research and updates.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Research Knowledge Platform.
          </span>

          <span>
            Built for accessibility. Built for everyone.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer