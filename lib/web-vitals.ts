import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals"

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Use the updated API with individual handlers
    onCLS(onPerfEntry)
    onINP(onPerfEntry) // Changed from onFID to onINP
    onFCP(onPerfEntry)
    onLCP(onPerfEntry)
    onTTFB(onPerfEntry)
  }
}

export default reportWebVitals
