import heroImage from "../assets/hero-dashboard.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* NAVBAR START */}
      <header className="bg-white border-b sticky top-0 z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto">

          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
               RoadMind AI
             </Link>
          </div>


          <div className="hidden md:flex gap-8">

            <Link
              to="/"
              className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer"
           >
            Home
            </Link>

            <Link
              to="/features"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
             Features
            </Link>

            <Link to="/workflow" 
            className="text-gray-600 hover:text-blue-600 cursor-pointer">
              AI Workflow
            </Link>
            
            

            

           <Link
              to="/dashboard"
              className="text-gray-600 hover:text-blue-600"
            >
              Dashboard
            </Link>

            <a className="text-gray-600">
              Map
            </a>

            <Link
             to="/analytics"
             className="text-gray-600 hover:text-blue-600"
            >
             Analytics
           </Link>

          </div>


          <div className="flex gap-4">

            <button className="text-gray-700">
              Login
            </button>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Get Started
            </button>

          </div>


        </nav>
      </header>
      {/* NAVBAR END */}





      {/* HERO SECTION START */}

      <section className="py-20 px-6 max-w-[1440px] mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 items-center">


          <div>

            <div className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Enterprise-Grade Safety Infrastructure
            </div>


            <h1 className="text-5xl font-bold mt-6">

              Privacy-Preserving

              <span className="text-blue-600">
                {" "}Edge AI
              </span>

              {" "}for Road Safety

            </h1>


            <p className="text-gray-600 text-lg mt-6">

              Deploy secure, real-time computer vision at the edge.
              Monitor high-risk zones without compromising individual privacy through
              proprietary on-device de-identification.

            </p>


            <div className="flex gap-4 mt-8">


              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">

                Deploy Now

              </button>


              <button className="border px-8 py-3 rounded-lg">

                View Documentation

              </button>


            </div>


          </div>





          <div className="h-[500px] rounded-xl overflow-hidden">

            <img
               src={heroImage}
               className="w-full h-full object-cover"
            />

          </div>


        </div>


      </section>

      {/* HERO SECTION END */}

      {/* STATS SECTION START */}

<section className="bg-gray-100 py-16 px-6">

  <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">


    <div className="text-center">
      <h2 className="text-5xl font-bold text-blue-600">
        99.2%
      </h2>

      <p className="mt-2 text-gray-600 font-semibold uppercase">
        Detection Accuracy
      </p>
    </div>



    <div className="text-center">
      <h2 className="text-5xl font-bold text-blue-600">
        50ms
      </h2>

      <p className="mt-2 text-gray-600 font-semibold uppercase">
        Processing Latency
      </p>
    </div>



    <div className="text-center">
      <h2 className="text-5xl font-bold text-blue-600">
        100%
      </h2>

      <p className="mt-2 text-gray-600 font-semibold uppercase">
        Privacy Compliant
      </p>
    </div>



    <div className="text-center">
      <h2 className="text-5xl font-bold text-blue-600">
        2.4k+
      </h2>

      <p className="mt-2 text-gray-600 font-semibold uppercase">
        Edge Deployments
      </p>
    </div>


  </div>

</section>

{/* STATS SECTION END */}

{/* FEATURES SECTION START */}

<section className="py-20 px-6 max-w-[1440px] mx-auto">


  {/* Heading */}
  <div className="mb-10">

    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
      Platform Capabilities
    </p>


    <h2 className="text-3xl font-bold text-gray-900 mt-2">
      Precision-Engineered Safety Features
    </h2>

  </div>




  {/* Bento Grid */}

  <div className="grid grid-cols-12 gap-6">


    {/* Large Card */}

    <div className="col-span-12 lg:col-span-8 bg-white border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">


      <div className="flex-1">


        <span className="material-symbols-outlined text-blue-600 text-5xl">
          visibility_off
        </span>


        <h3 className="text-2xl font-semibold mt-4">
          Zero-Knowledge Privacy
        </h3>


        <p className="text-gray-600 mt-4 leading-relaxed">

          Our proprietary obfuscation layer runs directly on edge hardware.
          Facial and license plate data is removed before any data leaves
          the local network, ensuring privacy compliance by design.

        </p>


      </div>



      <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">


        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFCs9wGpTJaCSSzWXZ7W5E5q03nCzCWX975V-A5fclpecp6wye_RjCD2vDFd2sGm4SX3W6EFKdgBWLhtlRK0YMNO0FlRMZphEwtJEmPXMhcSEiz40EWd0GdVhS1G0DauDQEajrvEfuIs07bzA4HmBA8qWPB7J2K9wliLOh6OOJFINM09o3GUnB4N6GiBJoDN1UZa1XdEOhKLm_uFX6NGLNAL0-5aBo7-pce3GsTXY3falNHuSMUghqoiNXTO5IBo2y2jeLgUiiNXDH"
          alt="Privacy AI"
        />


      </div>


    </div>





    {/* Predictive Hazards */}

    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border rounded-xl p-8">


      <span className="material-symbols-outlined text-blue-600 text-4xl">
        warning
      </span>


      <h3 className="text-xl font-semibold mt-4">
        Predictive Hazards
      </h3>


      <p className="text-gray-600 mt-3">

        Identify near-miss trends and structural risks before accidents occur.

      </p>


    </div>





    {/* Low Bandwidth */}

    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border rounded-xl p-8">


      <span className="material-symbols-outlined text-blue-600 text-4xl">
        cell_tower
      </span>


      <h3 className="text-xl font-semibold mt-4">
        Low-Bandwidth Sync
      </h3>


      <p className="text-gray-600 mt-3">

        Optimized cellular communication. Only metadata and critical alerts
        are transmitted.

      </p>


    </div>





    {/* Multi Modal Integration */}

    <div className="col-span-12 lg:col-span-8 bg-gray-100 border rounded-xl p-8">


      <h3 className="text-2xl font-semibold">
        Multi-Modal Integration
      </h3>


      <p className="text-gray-600 mt-3">

        Fusion of visual, acoustic, and thermal sensors for complete
        situational awareness.

      </p>




      <div className="grid grid-cols-3 gap-4 mt-8">


        <div className="bg-white p-4 rounded-lg border text-center">

          <span className="material-symbols-outlined text-blue-600">
            rainy
          </span>

          <p className="font-bold mt-2">
            Weather Proof
          </p>

        </div>




        <div className="bg-white p-4 rounded-lg border text-center">

          <span className="material-symbols-outlined text-blue-600">
            nights_stay
          </span>

          <p className="font-bold mt-2">
            Night Vision
          </p>

        </div>




        <div className="bg-white p-4 rounded-lg border text-center">

          <span className="material-symbols-outlined text-blue-600">
            analytics
          </span>

          <p className="font-bold mt-2">
            Smart Reports
          </p>

        </div>


      </div>


    </div>



  </div>


</section>

{/* FEATURES SECTION END */}

{/* CTA SECTION START */}

<section className="py-24 px-6">

  <div className="max-w-[1000px] mx-auto bg-blue-600 text-white rounded-2xl p-12 text-center">


    <h2 className="text-4xl font-bold">
      Ready to secure your roadways?
    </h2>


    <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">

      Join 200+ municipal agencies and private operators scaling
      intelligent road safety with RoadMind AI.

    </p>



    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">


      <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg">

        Schedule a Demo

      </button>



      <button className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg">

        Talk to Sales

      </button>


    </div>


  </div>


</section>

{/* CTA SECTION END */}






{/* FOOTER SECTION START */}

<footer className="bg-gray-100 border-t px-6 py-10">


  <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">


    {/* Brand */}

    <div>

      <h3 className="text-xl font-bold">
        RoadMind AI
      </h3>


      <p className="text-gray-600 mt-2">
        © 2024 RoadMind AI. All rights reserved.
      </p>


    </div>





    {/* Links */}

    <div className="flex flex-wrap justify-center gap-6">


      <a className="text-gray-600 hover:text-blue-600">
        Sitemap
      </a>


      <a className="text-gray-600 hover:text-blue-600">
        Privacy Policy
      </a>


      <a className="text-gray-600 hover:text-blue-600">
        Terms of Service
      </a>


      <a className="text-gray-600 hover:text-blue-600">
        Security
      </a>


    </div>





    {/* Icons */}

    <div className="flex gap-4">


      <button className="w-10 h-10 rounded-full hover:bg-gray-200">

        <span className="material-symbols-outlined">
          share
        </span>

      </button>



      <button className="w-10 h-10 rounded-full hover:bg-gray-200">

        <span className="material-symbols-outlined">
          mail
        </span>

      </button>


    </div>



  </div>


</footer>

{/* FOOTER SECTION END */}


    </div>
  );
}


export default Home;