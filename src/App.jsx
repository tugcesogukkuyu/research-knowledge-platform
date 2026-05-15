import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ResearchTopics from "./pages/ResearchTopics"
import ResearchDetail from "./pages/ResearchDetail"
import ResearchIntegrity from "./pages/ResearchIntegrity"
import Accessibility from "./pages/Accessibility"
import CookieConsent from "./components/CookieConsent"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<ResearchTopics />} />
        <Route path="/research/:slug" element={<ResearchDetail />} />
        <Route path="/research-integrity" element={<ResearchIntegrity />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>

      <CookieConsent />
    </BrowserRouter>
  )
}

export default App