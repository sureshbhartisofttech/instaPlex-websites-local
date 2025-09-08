import React from 'react'
import Navbar from '@/app/Component/Common/Navbar/page2'
import Footer from '@/app/Component/Common/Footer/page'
import Head from 'next/head'

// Simple & Clean About Page Component - InstaPlex Brand Colors
function AboutPage() {
  return (
    <>
      <Head>
        <title>About InstaPlex Solutions | Innovative Software Company</title>
        <meta
          name="description"
          content="Learn about InstaPlex Solutions – a leading software product company delivering CRM, ECommerce, Monitoring, Communication, and Learning platforms for business growth."
        />
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto p-8 bg-white rounded-2xl ">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">About Us</h2>
        
        <p className="text-lg mb-8 text-gray-700 leading-relaxed">
          <strong className="text-blue-600">Who We Are:</strong> InstaPlex Solutions is a trusted software product company delivering scalable digital solutions for modern businesses. Our mission is to simplify complex workflows, improve efficiency, and empower organizations with next-gen technology.
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Our Core Values</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-300 cursor-pointer border-l-4 border-blue-500">
            <strong className="text-blue-700 text-lg">Innovation & Technology</strong>
            <p className="text-gray-600 mt-2">Driving digital transformation</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors duration-300 cursor-pointer border-l-4 border-green-500">
            <strong className="text-green-700 text-lg">Strong Partnerships</strong>
            <p className="text-gray-600 mt-2">Building trust with businesses</p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors duration-300 cursor-pointer border-l-4 border-purple-500">
            <strong className="text-purple-700 text-lg">Scalable Solutions</strong>
            <p className="text-gray-600 mt-2">Future-ready software for all industries</p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6 hover:bg-orange-100 transition-colors duration-300 cursor-pointer border-l-4 border-orange-500">
            <strong className="text-orange-700 text-lg">Business-Centric Approach</strong>
            <p className="text-gray-600 mt-2">Tailored to unique needs</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default AboutPage
