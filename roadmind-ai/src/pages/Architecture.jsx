import { Link } from "react-router-dom";

function Architecture() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col">

      {/* ================= NAVBAR ================= */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-3 max-w-[1440px] mx-auto h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">
              hub
            </span>

            <span className="text-2xl font-bold text-blue-600">
              RoadMind AI
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Home
            </Link>

            <Link
              to="/features"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Features
            </Link>

            <Link
              to="/workflow"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              AI Workflow
            </Link>

            <Link
              to="/architecture"
              className="text-primary border-b-2 border-primary pb-1"
            >
              Architecture
            </Link>

            <Link
              to="/dashboard"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Dashboard
            </Link>

          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="text-on-surface-variant hover:text-primary px-3 py-2"
            >
              Login
            </Link>

            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90">
              Get Started
            </button>

          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <main className="flex-grow">

        <section className="px-6 py-16 bg-surface-container-low border-b border-outline-variant">

          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-5xl font-bold mb-4">
              Edge-to-Cloud Intelligence
            </h1>

            <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
              The RoadMind AI architecture is built for ultra-low latency hazard
              detection and massive-scale data synchronization. Explore how our
              modules interact from the vehicle to the global safety hub.
            </p>

          </div>

        </section>

        {/* ================= ARCHITECTURE DIAGRAM ================= */}

<section className="w-full h-[800px] relative overflow-hidden bg-white">

  {/* Background Grid */}
  <div
    className="absolute inset-0 opacity-40"
    style={{
      backgroundImage:
        "radial-gradient(#DADCE0 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}
  ></div>

  {/* Connection Lines */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 300 400 L 500 400"
      stroke="#DADCE0"
      strokeWidth="2"
      fill="none"
      strokeDasharray="8"
    />

    <path
      d="M 756 400 L 850 400"
      stroke="#DADCE0"
      strokeWidth="2"
      fill="none"
      strokeDasharray="8"
    />

    <path
      d="M 1000 400 L 1150 400"
      stroke="#DADCE0"
      strokeWidth="2"
      fill="none"
      strokeDasharray="8"
    />

    <circle cx="500" cy="400" r="4" fill="#005bbf" />
    <circle cx="850" cy="400" r="4" fill="#005bbf" />
    <circle cx="1150" cy="400" r="4" fill="#005bbf" />
  </svg>

  <div className="max-w-[1440px] mx-auto h-full relative px-6">

    {/* Vehicle Camera */}

    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72">

      <div className="bg-white border rounded-xl shadow-sm p-6">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">

            <span className="material-symbols-outlined">
              videocam
            </span>

          </div>

          <h3 className="text-xl font-semibold">
            Vehicle Camera
          </h3>

        </div>

        <p className="text-gray-600 mb-4">
          High-fidelity 4K vision sensor providing raw visual
          streams for real-time analysis.
        </p>

        <div className="flex gap-2">

          <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
            4K HDR
          </span>

          <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
            60 FPS
          </span>

        </div>

      </div>

    </div>

    {/* Edge AI */}

    <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-80">

      <div className="bg-blue-600 text-white rounded-xl shadow-xl p-6">

        <div className="flex items-center gap-3 mb-4">

          <span className="material-symbols-outlined text-4xl">
            memory
          </span>

          <div>

            <h3 className="text-xl font-bold">
              Edge AI Engine
            </h3>

            <p className="text-xs uppercase tracking-widest">
              Local Inference
            </p>

          </div>

        </div>

        <p className="mb-6">
          Neural Processing Unit running road hazard detection
          models with sub-10ms latency.
        </p>

        <div className="w-full bg-white/20 rounded-full h-2">

          <div className="bg-white h-2 rounded-full w-2/3"></div>

        </div>

        <div className="flex justify-between mt-2 text-sm">

          <span>SYSTEM LOAD</span>

          <span>64%</span>

        </div>

      </div>

    </div>

    {/* MQTT */}

    <div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-64 text-center">

      <div className="w-20 h-20 mx-auto rounded-full border bg-gray-100 flex items-center justify-center mb-4">

        <span className="material-symbols-outlined text-5xl text-blue-600">
          sensors
        </span>

      </div>

      <h3 className="font-bold uppercase mb-2">
        MQTT Communication
      </h3>

      <p className="text-gray-600">
        Low-bandwidth telemetry publishing and command subscription.
      </p>

    </div>

    {/* Cloud Dashboard */}

    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80">

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">

        <div className="p-4 border-b flex justify-between">

          <div className="flex items-center gap-2">

            <span className="material-symbols-outlined text-blue-600">
              cloud
            </span>

            <span className="font-semibold">
              Cloud Dashboard
            </span>

          </div>

        </div>

        <div className="p-6">

          <div className="flex justify-between mb-3">

            <span>Uptime</span>

            <span className="text-blue-600">
              99.99%
            </span>

          </div>

          <div className="flex justify-between">

            <span>Fleet Sync</span>

            <span className="text-blue-600">
              Active
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

 {/* ================= TECHNICAL SPECS ================= */}

<section className="px-6 py-16 bg-surface">

  <div className="max-w-[1440px] mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="p-8 border border-outline-variant rounded-xl bg-white shadow-sm">

        <span className="material-symbols-outlined text-blue-600 mb-4 block">
          speed
        </span>

        <h3 className="text-2xl font-semibold mb-3">
          Sub-10ms Latency
        </h3>

        <p className="text-gray-600">
          Edge processing eliminates the round-trip time to the cloud,
          ensuring hazards are detected instantly.
        </p>

      </div>

      {/* Card 2 */}

      <div className="p-8 border border-outline-variant rounded-xl bg-white shadow-sm">

        <span className="material-symbols-outlined text-blue-600 mb-4 block">
          shield
        </span>

        <h3 className="text-2xl font-semibold mb-3">
          End-to-End Encryption
        </h3>

        <p className="text-gray-600">
          TLS 1.3 secures communication between vehicle,
          edge AI and cloud dashboard.
        </p>

      </div>

      {/* Card 3 */}

      <div className="p-8 border border-outline-variant rounded-xl bg-white shadow-sm">

        <span className="material-symbols-outlined text-blue-600 mb-4 block">
          auto_graph
        </span>

        <h3 className="text-2xl font-semibold mb-3">
          Scalable Hub
        </h3>

        <p className="text-gray-600">
          Built with a microservice architecture capable
          of supporting thousands of connected vehicles.
        </p>

      </div>

    </div>

  </div>

</section>

      </main>
      {/* ================= FOOTER ================= */}

<footer className="bg-surface-container-highest border-t border-outline-variant">

  <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

    <div>

      <h2 className="text-xl font-bold text-blue-600">
        RoadMind AI
      </h2>

      <p className="text-gray-600 mt-2">
        © 2024 RoadMind AI. All rights reserved.
      </p>

    </div>

    <div className="flex gap-6">

      <a href="#">Sitemap</a>

      <a href="#">Privacy Policy</a>

      <a href="#">Terms</a>

      <a href="#">Security</a>

    </div>

  </div>

</footer>

    </div>
  );
}

export default Architecture;