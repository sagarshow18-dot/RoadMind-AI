import React from "react";
import { Link } from "react-router-dom";


function About() {

  return (

    <div className="bg-gray-50 text-gray-900 min-h-screen">


      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">


          <Link 
            to="/"
            className="text-xl font-bold text-blue-600"
          >
            RoadMind AI
          </Link>



          <div className="hidden md:flex gap-6 text-gray-600">

            <Link to="/">
              Home
            </Link>

            <Link to="/features">
              Features
            </Link>

            <Link to="/ai-workflow">
              AI Workflow
            </Link>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/analytics">
              Analytics
            </Link>

          </div>



          <div className="flex gap-3">

            <Link
              to="/login"
              className="px-4 py-2"
            >
              Login
            </Link>


            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Get Started
            </button>


          </div>


        </div>

      </nav>





      <main className="max-w-7xl mx-auto px-6 py-16">


        {/* HERO SECTION */}


        <header className="max-w-3xl mb-16">


          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Pioneering Road Safety
          </span>



          <h1 className="text-5xl font-bold mt-4 leading-tight">

            Intelligent Infrastructure for a Safer Tomorrow.

          </h1>



          <p className="text-lg text-gray-600 mt-6">

            RoadMind AI bridges the gap between infrastructure and artificial intelligence 
            to eliminate traffic fatalities and optimize global transit efficiency.

          </p>


        </header>





        {/* GLOBAL SAFETY CRISIS */}


        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">


          <div className="md:col-span-8 bg-white border rounded-xl p-8">


            <h2 className="text-3xl font-bold mb-4">

              The Global Safety Crisis

            </h2>



            <p className="text-gray-600 mb-8">

              Over 1.3 million lives are lost annually on global roads. 
              Traditional management systems are reactive, slow, and often blind 
              to emerging hazards. We are changing the narrative from response 
              to prevention.

            </p>




            <div className="flex gap-10">


              <div>

                <h3 className="text-5xl font-bold text-red-600">
                  1.3M
                </h3>

                <p className="text-sm text-gray-500 uppercase">
                  Annual Fatalities
                </p>

              </div>




              <div>

                <h3 className="text-5xl font-bold text-blue-600">
                  94%
                </h3>


                <p className="text-sm text-gray-500 uppercase">
                  Human Error Related
                </p>


              </div>


            </div>


          </div>





          <div className="md:col-span-4 bg-blue-600 text-white rounded-xl p-8 flex flex-col justify-end">


            <span className="material-symbols-outlined text-5xl mb-4">
              warning
            </span>


            <h3 className="text-2xl font-bold mb-3">
              Reactive Isn't Enough
            </h3>


            <p>
              Current systems collect data after accidents occur. 
              Our AI predicts hazards before they happen.
            </p>


          </div>


        </section>

        {/* MISSION & VISION */}

<section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">


  {/* Mission */}

  <div className="bg-white border rounded-xl p-8 shadow-sm">


    <div className="flex items-center gap-4 mb-5">


      <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">

        <span className="material-symbols-outlined">
          rocket_launch
        </span>

      </div>


      <h2 className="text-2xl font-bold">
        Our Mission
      </h2>


    </div>



    <p className="text-gray-600 leading-relaxed">

      To empower governments and logistics leaders with real-time, 
      predictive intelligence that transforms the world's most dangerous 
      roads into precision-managed safe zones. We leverage machine 
      learning to provide actionable insights for a more resilient 
      urban future.

    </p>


  </div>





  {/* Vision */}

  <div className="bg-white border rounded-xl p-8 shadow-sm">


    <div className="flex items-center gap-4 mb-5">


      <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center">

        <span className="material-symbols-outlined">
          visibility
        </span>

      </div>


      <h2 className="text-2xl font-bold">
        Our Vision
      </h2>


    </div>



    <p className="text-gray-600 leading-relaxed">

      A world where road fatalities are a relic of the past. 
      We envision a global network of intelligent roads that 
      communicate, predict, and adapt—ensuring every journey 
      is secure and efficient.

    </p>


  </div>


</section>






{/* JOURNEY TIMELINE */}


<section className="max-w-4xl mx-auto mb-16">


<div className="text-center mb-12">


<h2 className="text-3xl font-bold">
Our Journey
</h2>


<p className="text-gray-600 mt-3">
Defining milestones in the evolution of safety intelligence.
</p>


</div>





<div className="space-y-10">



{/* 2021 */}

<div className="bg-white border rounded-xl p-6">


<h3 className="text-blue-600 font-bold text-xl">
2021
</h3>


<h4 className="text-xl font-bold mt-2">
The Genesis
</h4>


<p className="text-gray-600 mt-2">

RoadMind AI was founded by computer vision engineers 
and civil experts to solve the lack of safety data 
in urban planning.

</p>


</div>






{/* 2022 */}

<div className="bg-white border rounded-xl p-6">


<h3 className="text-blue-600 font-bold text-xl">
2022
</h3>


<h4 className="text-xl font-bold mt-2">
v1.0 Alpha Launch
</h4>


<p className="text-gray-600 mt-2">

First pilot program deployed across intersections, 
reducing near-misses through predictive analytics.

</p>


</div>







{/* 2023 */}

<div className="bg-white border rounded-xl p-6">


<h3 className="text-orange-600 font-bold text-xl">
2023
</h3>


<h4 className="text-xl font-bold mt-2">
Global Expansion
</h4>


<p className="text-gray-600 mt-2">

RoadMind AI expanded smart city partnerships and 
improved AI-based road intelligence.

</p>


</div>







{/* Present */}

<div className="bg-white border rounded-xl p-6">


<h3 className="text-blue-600 font-bold text-xl">
Present
</h3>


<h4 className="text-xl font-bold mt-2">
Predictive Core™ 2.0
</h4>


<p className="text-gray-600 mt-2">

Advanced neural engine capable of sub-second 
hazard prediction across city networks.

</p>


</div>



</div>


</section>

{/* CTA SECTION */}

<section className="bg-gray-200 rounded-xl p-12 text-center mb-16">


  <h2 className="text-4xl font-bold mb-6">

    Join the Safety Revolution

  </h2>



  <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">

    Are you a government official, urban planner, or fleet manager?
    Let's build a safer infrastructure together.

  </p>




  <div className="flex flex-wrap justify-center gap-4">


    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg">

      Request Enterprise Demo

    </button>




    <button className="bg-white border px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">

      Download Safety Whitepaper

    </button>



  </div>


</section>





</main>





{/* FOOTER */}


<footer className="bg-gray-100 border-t">


<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">


<div>


<h3 className="font-bold text-xl">
RoadMind AI
</h3>


<p className="text-gray-500 text-sm mt-2">

© 2024 RoadMind AI. All rights reserved.

</p>


</div>





<div className="flex gap-6 text-sm text-gray-500">


<a href="#">
Sitemap
</a>


<a href="#">
Privacy Policy
</a>


<a href="#">
Terms of Service
</a>


<a href="#">
Security
</a>


</div>



</div>


</footer>


</div>

  );

}


export default About;