import './App.css'
import NavbarComponent from './sections/navbar'
import HeroComponent from './sections/hero'
import FunctionalityComponent from './sections/functionality'
import Transformation from './sections/transformation'
import Modules from './sections/modules'
import HowItWorks from './sections/howItWorks'
import FinalCTA from './sections/CTA'
import Footer from './sections/footer'
// import PricingComponent from './sections/pricing'


function App() {

  return (
    <div className=''>
      <NavbarComponent />
      <HeroComponent />
      <FunctionalityComponent />
      <Transformation />
      <Modules />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      {/* <PricingComponent /> */}
    </div>
  )
}

export default App
