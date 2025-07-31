import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const showSidebar = () => setSidebarVisible(true)
  const hideSidebar = () => setSidebarVisible(false)

  const downloadCV = () => {
    const link = document.createElement("a")
    // link.href = "https://drive.google.com/uc?export=download&id=1UTNjsSezF7yvTAKSDlYNKmz9py-JIW5M"
  link.href = "https://drive.google.com/uc?export=download&id=1zw_MUX6Ih-Rz_v8hQuFQlchWPyEkmqTb"
    link.download = "Aby_Antony_Rex_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="p-0 m-0  ">
      <Sidebar visible={sidebarVisible} onHide={hideSidebar} />
      <Navigation onShowSidebar={showSidebar} onDownloadCV={downloadCV} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm/>
      <Footer />
    </div>
  )
}

export default App