import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.scss"

document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
