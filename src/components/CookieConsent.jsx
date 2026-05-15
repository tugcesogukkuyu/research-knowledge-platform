import { useState } from "react"
import "./CookieConsent.css"

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(() => {
    return !localStorage.getItem("rkp_cookie_consent")
  })

  function acceptCookies() {
    localStorage.setItem("rkp_cookie_consent", "accepted")
    setIsVisible(false)
  }

  function rejectCookies() {
    localStorage.setItem("rkp_cookie_consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <div>
        <h2>Privacy & Cookie Preferences</h2>

        <p>
          This demo platform does not use advertising cookies. Essential storage
          is used only to remember your cookie preference and improve the user
          experience.
        </p>
      </div>

      <div className="cookie-actions">
        <button className="reject-btn" onClick={rejectCookies}>
          Reject
        </button>

        <button className="accept-btn" onClick={acceptCookies}>
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent