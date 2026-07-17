import { Link } from "react-router-dom";

function Features() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-white border-b sticky top-0 z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="font-bold text-xl">
              RoadMind AI
            </Link>
          </div>

          <div className="hidden md:flex gap-8">
           <Link to="/" className="text-gray-600 hover:text-blue-600">
             Home
           </Link>

            <Link to="/features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>

           <Link to="/workflow" className="text-gray-600 hover:text-blue-600 cursor-pointer">
              AI Workflow
            </Link>

            <a href="#">Dashboard</a>
            <a href="#">Map</a>
          </div>

          <div className="flex gap-3">
            <button>Login</button>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-16">

        {/* Hero */}

        <section className="max-w-3xl mb-16">

          <h1 className="text-6xl font-bold mb-6">

            The Intelligence Behind the Wheel

          </h1>

          <p className="text-xl text-gray-600 leading-8">

            Our comprehensive suite of road safety technologies provides
            government agencies and fleet operators with the tools to predict,
            prevent, and protect.

          </p>

        </section>

        {/* Bento Grid Starts */}

        <section className="grid grid-cols-12 gap-6">

          {/* Real Time Hazard Detection */}

          <div className="col-span-12 lg:col-span-8 bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition">

            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div>

                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">

                  ⚠️

                </div>

                <h2 className="text-3xl font-bold mb-4">

                  Real-Time Hazard Detection

                </h2>

                <p className="text-gray-600 leading-7">

                  Advanced computer vision identifies pedestrians, erratic lane
                  changes, and surface degradation within 10ms of occurrence.
                  Neural networks are trained on millions of scenarios for
                  industry-leading detection accuracy.

                </p>

                <ul className="mt-6 space-y-3">

                  <li>✔ Sub-15ms Latency</li>

                  <li>✔ Multi-Class Object Segmentation</li>

                </ul>

              </div>

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3vdiIJMp9iO6bIaO8YitJ830xdZJ6gO6yTc3KfTEDFA-QM8Cq9V0x94dlL3VVtUs17FMuMTXkrcOo0DHCwEjq06mqhd2j7AVSwgFZUFKqXpaiFAZCQC9AuIGkIews8_3XNMQVE7txS6ThylL7xAXNKEVq4awE75jLoBkoN7774EJ_RNXXbjkVmdF16pSfjuLyvo93y6FBkguXDc7fOpdfpHkBfTNt4n2PL12P77DW4_ZqPYZEUQPmHPMQ5fTzc6H4vchFX3QdYJbJ"
                alt="Hazard Detection"
                className="rounded-xl h-full object-cover"
              />

            </div>

          </div>


           {/* Road Memory */}

          <div className="col-span-12 md:col-span-4 bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition">

            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-6">
              🧠
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Road Memory
            </h2>

            <p className="text-gray-600 leading-7">
              Continuous temporal mapping allows the system to recognize
              recurring patterns of risk and predict accidents before
              they happen using historical near-miss data.
            </p>

            <div className="mt-8 border-t pt-6">

              <p className="text-gray-500 text-sm uppercase">
                Predictive Index
              </p>

              <h3 className="text-4xl font-bold text-blue-600 mt-2">
                92.4%
              </h3>

              <div className="flex items-end gap-1 mt-5">

                <div className="w-3 h-8 bg-blue-200 rounded"></div>

                <div className="w-3 h-12 bg-blue-300 rounded"></div>

                <div className="w-3 h-16 bg-blue-400 rounded"></div>

                <div className="w-3 h-20 bg-blue-600 rounded"></div>

              </div>

            </div>

          </div>

          {/* Offline Edge Processing */}

          <div className="col-span-12 md:col-span-5 bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition">

            <div className="text-3xl mb-5">
              📡
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Offline Edge Processing
            </h2>

            <p className="text-gray-600 leading-7">

              Our inference engine runs entirely on edge hardware,
              guaranteeing operation even without internet connectivity.

            </p>

            <div className="mt-8">

              <div className="flex justify-between mb-2">

                <span>System Latency</span>

                <span className="text-blue-600 font-semibold">
                  Optimal
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">

                <div className="bg-blue-600 h-2 rounded-full w-[88%]"></div>

              </div>

            </div>

          </div>

          {/* Privacy AI */}

          <div className="col-span-12 md:col-span-7 bg-white rounded-xl border p-8 shadow-sm hover:shadow-lg transition">

            <div className="grid md:grid-cols-2 gap-8 items-center">

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB88C8qd8Yzlnf5kBHxJtw4wWvInsMhQTTYMMVBpOFICdikcgtXhefi_5swpTuxp-ZdZAUaBTYmr4rCx4GXxUEwz6MnE7nRj74Vsa3Pl0pvJfYEMA0m6eHmmLHu2f2xlGZQ5TNl4XZeLVfK9b-pf3kZwMYMvgj_BOu_QgCHJqnqdT6WsAHO1XlE8-uLoQzxmzkBUqdYuVJOWNK8ig1ryOueN9xyJzI47FB2xnIXbwrLhv5WknZx9yfCh8gFRUIB-2qfVm0zJSyC4VSb"
                alt="Privacy"
                className="rounded-xl object-cover h-full"
              />

              <div>

                <div className="text-3xl mb-5">
                  🛡️
                </div>

                <h2 className="text-2xl font-bold mb-4">

                  Privacy-Preserving AI

                </h2>

                <p className="text-gray-600 leading-7">

                  Differential privacy and federated learning ensure
                  sensitive data never leaves the device while still
                  providing highly accurate insights.

                </p>

              </div>

            </div>

          </div>

          {/* OTA */}

          <div className="col-span-12 md:col-span-4 bg-white rounded-xl border p-6 shadow-sm hover:shadow-lg transition">

            <h3 className="text-xl font-bold mb-3">
              OTA Dynamic Updates
            </h3>

            <p className="text-gray-600">
              AI models stay updated automatically with the latest
              safety improvements.
            </p>

          </div>

          {/* Fleet */}

          <div className="col-span-12 md:col-span-4 bg-white rounded-xl border p-6 shadow-sm hover:shadow-lg transition">

            <h3 className="text-xl font-bold mb-3">
              Unified Fleet Insights
            </h3>

            <p className="text-gray-600">
              Manage thousands of connected vehicles through one
              enterprise dashboard.
            </p>

          </div>

          {/* Emergency */}

          <div className="col-span-12 md:col-span-4 bg-white rounded-xl border p-6 shadow-sm hover:shadow-lg transition">

            <h3 className="text-xl font-bold mb-3">
              E-Call Integration
            </h3>

            <p className="text-gray-600">
              Automatic emergency alerts with live GPS coordinates
              after collision detection.
            </p>

          </div>

        </section>     

              {/* Enterprise Scale */}

      <section className="py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">

              ENTERPRISE SCALE

            </span>

            <h2 className="text-5xl font-bold mb-6">

              Interoperable Safety Ecosystem

            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-10">

              RoadMind AI isn't just another monitoring platform.
              It integrates with Smart City infrastructure,
              V2X communication, IoT devices, and fleet
              management systems to create one intelligent
              safety ecosystem.

            </p>

            <div className="space-y-8">

              {/* API */}

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">

                  🔗

                </div>

                <div>

                  <h3 className="text-xl font-semibold">

                    Robust API Access

                  </h3>

                  <p className="text-gray-600 mt-2">

                    Connect RoadMind AI directly with your
                    existing software using secure REST APIs.

                  </p>

                </div>

              </div>

              {/* Hardware */}

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">

                  💻

                </div>

                <div>

                  <h3 className="text-xl font-semibold">

                    Hardware Agnostic

                  </h3>

                  <p className="text-gray-600 mt-2">

                    Compatible with dashcams,
                    Jetson devices,
                    Raspberry Pi,
                    CCTV cameras,
                    and ADAS systems.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWGEGVgE0ANQqMu7NmBVVEiK41GmHASrMaN6v6ZLPm-V1zdY9fKtQ5YgNyZCalT9r2pgIJw0wfcmtFK5K8vq6MdVvPdVH8nv-qWKnOTDDgifSJ4nfVyXonXLtIJBYuOiuYBQxXKuoOvbbRczxr-nzB6j3bokLh1MTgzfwmvU271PYxrMKAzvZG1Xh1sTw2kvrv73TaYjcnfBDUy-4YCJnwI8GMcclw5MJCgMq9eoelmkt9zC6NpbBQvoW23E2wi_M_zoQWvit5PKnG"
              alt="Enterprise"
              className="rounded-2xl shadow-xl w-full"
            />

          </div>

        </div>

      </section>


            {/* Footer */}

      </main>

      <footer className="bg-gray-100 border-t">

        <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-2xl font-bold text-blue-600">

              RoadMind AI

            </h2>

            <p className="text-gray-600 mt-2">

              © 2024 RoadMind AI. All rights reserved.

            </p>

          </div>

          <div className="flex flex-wrap gap-8">

            <a
              href="#"
              className="hover:text-blue-600 transition"
            >
              Sitemap
            </a>

            <a
              href="#"
              className="hover:text-blue-600 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-blue-600 transition"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="hover:text-blue-600 transition"
            >
              Security
            </a>

          </div>

          <div className="flex gap-4">

            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-50">

              🌐

            </button>

            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-50">

              🔗

            </button>

          </div>

        </div>

      </footer>

    </>
  );
}

export default Features;