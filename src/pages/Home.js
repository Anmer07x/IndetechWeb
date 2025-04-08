import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Section from "../components/Section";
import Divider from "../components/Div";
import Services from "../components/services";
import Footer from "../components/Footer";
import Portafolio from "../components/Portafolio";
import Whatssap from "../components/Whatsapp";
import Newss from "../components/News";
import Contact from "../components/contact";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar />
      {/* Header */}
      <br></br>
      <Banner />
      {/* Main Content */}
      <main className="p-6 md:p-10">
        <Section />
        <Divider />
        <br></br>
        <Services />
        <br></br>
        <br></br>
        <Newss />
        <br></br>
        <br></br>
        <Portafolio />
        <br></br>
        <Divider />
        <br></br>
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
      <Whatssap />
    </div>
  );
}

export default Home;
