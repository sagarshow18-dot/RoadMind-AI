import { Link } from "react-router-dom";

function Workflow() {
  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <header className="bg-white border-b sticky top-0 z-50">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-2xl font-bold text-blue-600">
            RoadMind AI
          </h1>

          <div className="hidden md:flex gap-8">

            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>

            <Link to="/features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>

            <Link
              to="/workflow"
              className="text-blue-600 border-b-2 border-blue-600 pb-1"
            >
              AI Workflow
            </Link>

            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-blue-600"
            >
              Dashboard
            </Link>

            <Link
              to="/map"
              className="text-gray-600 hover:text-blue-600"
            >
              Map
            </Link>

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

      {/* ================= HERO ================= */}

      <section className="max-w-[1440px] mx-auto px-6 py-20 text-center">

        <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
          Technical Architecture
        </p>

        <h1 className="text-5xl font-bold mt-4">
          The Intelligence Behind Every Mile
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
          Our multi-layered neural pipeline processes road data in
          real-time to deliver life-saving insights with
          millisecond latency.
        </p>

      </section>

      {/* ================= WORKFLOW SECTION ================= */}

      <section className="max-w-[1440px] mx-auto px-6">

        <div className="bg-gray-100 rounded-2xl p-10">

          <div className="grid lg:grid-cols-6 gap-10 text-center">

            {/* Step 1 */}

            <div>

              <span className="material-symbols-outlined text-5xl text-blue-600">
                videocam
              </span>

              <h3 className="font-bold mt-4">
                Camera Input
              </h3>

              <p className="text-gray-600 mt-2">
                4K raw optical stream
              </p>

            </div>

            {/* Step 2 */}

            <div>

              <span className="material-symbols-outlined text-5xl text-blue-600">
                person_search
              </span>

              <h3 className="font-bold mt-4">
                Object Detection
              </h3>

              <p className="text-gray-600 mt-2">
                YOLOv9 Edge AI
              </p>

            </div>

            {/* Step 3 */}

            <div>

              <span className="material-symbols-outlined text-5xl text-blue-600">
                warning
              </span>

              <h3 className="font-bold mt-4">
                Hazard Classification
              </h3>

              <p className="text-gray-600 mt-2">
                Context-aware analysis
              </p>

            </div>

            {/* Step 4 */}

            <div>

              <span className="material-symbols-outlined text-5xl text-blue-600">
                query_stats
              </span>

              <h3 className="font-bold mt-4">
                Confidence Scoring
              </h3>

              <p className="text-gray-600 mt-2">
                Bayesian validation
              </p>

            </div>

            {/* Step 5 */}

            <div>

              <span className="material-symbols-outlined text-5xl text-blue-600">
                trending_up
              </span>

              <h3 className="font-bold mt-4">
                Prediction Engine
              </h3>

              <p className="text-gray-600 mt-2">
                Trajectory simulation
              </p>

            </div>

            {/* Step 6 */}

            <div>

              <span className="material-symbols-outlined text-5xl text-red-600">
                notification_important
              </span>

              <h3 className="font-bold mt-4">
                Driver Alert
              </h3>

              <p className="text-gray-600 mt-2">
                Haptic & Visual Warning
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* ================= BENTO GRID ================= */}

      <section className="max-w-[1440px] mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Live Perception Engine */}

          <div className="lg:col-span-8 bg-white border rounded-xl overflow-hidden">

            <div className="flex justify-between items-center p-4 border-b">

              <div className="flex items-center gap-2">

                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>

                <span className="font-semibold">
                  Live Perception Engine Feed
                </span>

              </div>

              <span className="text-sm text-gray-500">
                Latency: 12ms
              </span>

            </div>

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYk042YIcOqkjkZvxi1VY7lZTQdl-zK5-90oehErR4oe00Do2rgfZxKwRZqNh_I4VPTUB9pGbklTLh0UbvJtyL4LvzPbBQRVkh2PQZaFc5We4tonCcXVe7LaXRsx_Tf0AYPwKuX-1lmjco1Jw6lIIUrY7-EpbY4xXMiKhJ7_C3DUzVgBbj2c1izNCxlp81vJxyakktSZK3Y9k4lsr0F86uTgXWxMnnG-0U619by_alUuTl7HqOinQuNXBAdYy38Eff8fu0ogX9y48R"
              className="w-full h-[350px] object-cover"
              alt="AI Camera"
            />

          </div>





          {/* Accuracy Card */}

          <div className="lg:col-span-4 bg-blue-600 text-white rounded-xl p-8 flex flex-col justify-between">

            <div>

              <h2 className="text-4xl font-bold">
                99.9%
              </h2>

              <h3 className="text-xl font-semibold mt-4">
                Detection Accuracy
              </h3>

              <p className="mt-4 text-white/80">

                Our AI eliminates nearly every false positive,
                ensuring only genuine road hazards trigger alerts.

              </p>

            </div>



            <div className="mt-10">

              <div className="flex justify-between">

                <span>Model Optimization</span>

                <span>Active</span>

              </div>

              <div className="w-full bg-white/20 h-2 rounded-full mt-2">

                <div className="bg-white h-2 rounded-full w-4/5"></div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= LOWER GRID ================= */}

<section className="max-w-[1440px] mx-auto px-6 pb-20">

  <div className="grid lg:grid-cols-12 gap-6">

    {/* Hazard Matrix */}

    <div className="lg:col-span-4 bg-white border rounded-xl p-8">

      <div className="flex items-center gap-2 mb-6">

        <span className="material-symbols-outlined text-blue-600">
          grid_view
        </span>

        <h3 className="text-xl font-bold">
          Hazard Matrix
        </h3>

      </div>

      <div className="space-y-4">

        <div className="flex justify-between border rounded-lg p-3">
          <span>Potholes</span>
          <span className="text-blue-600 font-semibold">
            DETECTED
          </span>
        </div>

        <div className="flex justify-between border rounded-lg p-3">
          <span>Pedestrian</span>
          <span className="text-green-600 font-semibold">
            TRACKING
          </span>
        </div>

        <div className="flex justify-between border rounded-lg p-3">
          <span>Black Ice</span>
          <span className="text-orange-600 font-semibold">
            PREDICTIVE
          </span>
        </div>

      </div>

    </div>





    {/* Prediction Loop */}

    <div className="lg:col-span-8 bg-gray-100 rounded-xl p-8">

      <h2 className="text-3xl font-bold">
        The Prediction Loop
      </h2>

      <p className="text-gray-600 mt-4">

        Our prediction engine calculates thousands of
        possible trajectories every second and warns the
        driver before danger occurs.

      </p>



      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="flex gap-3">

          <span className="material-symbols-outlined text-blue-600">
            check_circle
          </span>

          <div>

            <h4 className="font-bold">
              Kalman Filter
            </h4>

            <p className="text-gray-600 text-sm">
              Smooth trajectory estimation.
            </p>

          </div>

        </div>



        <div className="flex gap-3">

          <span className="material-symbols-outlined text-blue-600">
            check_circle
          </span>

          <div>

            <h4 className="font-bold">
              Neural Networks
            </h4>

            <p className="text-gray-600 text-sm">
              Learns road behavior continuously.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-gray-100 border-t mt-10">

        <div className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="text-xl font-bold text-blue-600">
              RoadMind AI
            </h3>

            <p className="text-gray-600 mt-2">
              Empowering the future of safe mobility through intelligent AI.
            </p>

          </div>

          <div className="flex gap-6 flex-wrap">

            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>

            <Link to="/features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>

            <Link to="/workflow" className="text-blue-600">
              AI Workflow
            </Link>

            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>

          </div>

          <p className="text-gray-500 text-sm">
            © 2024 RoadMind AI. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Workflow;