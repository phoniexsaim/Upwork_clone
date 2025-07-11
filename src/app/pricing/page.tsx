import React from 'react'
import Navbar from '../Components/Navbar'
import PricingPlan from '../Components/PricingPlan'
import PricingkeyFeature from '../Components/PricingkeyFeature'
import PricingFaqs  from '../Components/PricingFaqs'
import Footer from '../Components/Footer'

const page = () => {
  return (
   <>
   <Navbar/>
   <PricingPlan/>
   <PricingkeyFeature/>
   <PricingFaqs/>
   <Footer/>
   </>
  )
}

export default page