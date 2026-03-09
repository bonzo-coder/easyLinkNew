import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from "react-ga4"
import AnalyticsTracker from "./AnalyticsTracker.jsx";


ReactGA.initialize("G-XXXXXXXXXX");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AnalyticsTracker /> */}
    <App />
  </StrictMode>,
)
