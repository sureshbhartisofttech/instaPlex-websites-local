import Image from "next/image";
import Navbar from "./Component/Common/Navbar/page2";
import TrustedBrands from "./Component/HomePage/Partner/page";
import FeatureSection from "./Component/HomePage/Featured/page";
import CustomerServiceSection from "./Component/HomePage/TansformingCustomer/page";
import ProductCard from "./Component/HomePage/ProductSection/page";
import Automation from "./Component/HomePage/Automation/page";
import TestimonialSlider from "./Component/HomePage/TestimonialSlider/page";
import NewProductSection from "./Component/HomePage/WhatsNew/page";
import Footer from "./Component/Common/Footer/page";
import IntegrationSection from "./Component/HomePage/Integration/page";
import Herosection from "./Component/HomePage/Hero-Section.jsx/page2";
import ProductivityLanding from "./Component/HomePage/Productive/page";
import WorkspaceDemo from "./Component/HomePage/TabNavigationVedios/page";
import SmartToolsSection from "./Component/HomePage/SmartTool.jsx/page";
import Testimonials from "./Component/HomePage/Testimonials/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <SmartToolsSection />
      <ProductivityLanding />
      <WorkspaceDemo />
      <Testimonials/>
      <IntegrationSection />
      {/* <TrustedBrands /> */}
      {/* <FeatureSection />
      <CustomerServiceSection />
      <ProductCard />

      <Automation />
      <TestimonialSlider />
      <NewProductSection /> */}
      <Footer />

    </>
  );
}

