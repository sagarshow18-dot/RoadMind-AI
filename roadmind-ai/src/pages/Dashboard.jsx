
import { Link } from "react-router-dom";
import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#faf9fd] text-[#1a1b1e] flex">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[256px] flex flex-col py-6 px-4 bg-[#f4f3f7] border-r border-[#c1c6d6]">

        <div className="mb-8">
          <Link to="/" className="font-bold text-xl">
            RoadMind AI
          </Link>
          <p className="text-sm text-gray-500">
            Enterprise Safety
          </p>
        </div>


        <nav className="flex flex-col gap-2">

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold"
          >
            📊 Overview
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200"
          >
            🗺️ Hazard Map
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200"
          >
            📈 Predictive Analytics
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200"
          >
            🚚 Vehicle Tracking
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200"
          >
            ⚙️ System Health
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200"
          >
            ⚙️ Settings
          </a>

        </nav>


        <div className="mt-auto border-t pt-4">

          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            ❓ Help Center
          </button>

          <button className="w-full text-left px-3 py-2 rounded-lg text-red-600 hover:bg-red-100">
            🚪 Log Out
          </button>

          <button className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg font-bold">
            🚨 Emergency Alert
          </button>

        </div>

      </aside>


      {/* Main Content */}
      <main className="ml-[256px] w-full">

        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b bg-white">

          <input
            type="text"
            placeholder="Search vehicle ID, location, or alert..."
            className="w-full max-w-md rounded-full border px-4 py-2"
          />


          <div className="flex items-center gap-4 ml-5">

            <button>
              🔔
            </button>


            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                A
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Sarah Jenkins
                </p>

                <p className="text-xs text-gray-500">
                  Admin
                </p>
              </div>

            </div>

          </div>

        </header>

                {/* Dashboard Content */}

        <div className="p-8 overflow-y-auto">

          <div className="flex justify-between items-center mb-8">

            <div>
              <h2 className="text-3xl font-bold">
                Live Detection
              </h2>

              <p className="text-gray-500">
                Real-time AI monitoring for Highway 101-North Sector.
              </p>
            </div>


            <div className="flex gap-3">

              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>

                Live Sync Active
              </div>


              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold">
                🔄 Sync Feed
              </button>

            </div>

          </div>



          {/* KPI Cards */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">


            <div className="bg-white border rounded-xl p-5">

              <p className="text-gray-500 text-sm">
                Active Vehicles
              </p>

              <h3 className="text-3xl font-bold mt-2">
                1,284
              </h3>

              <p className="text-blue-600 text-sm">
                ↑ 12%
              </p>

            </div>



            <div className="bg-white border rounded-xl p-5">

              <p className="text-gray-500 text-sm">
                Hazards Detected
              </p>

              <h3 className="text-3xl font-bold mt-2">
                42
              </h3>

              <p className="text-red-600 text-sm">
                ↑ 8%
              </p>

            </div>



            <div className="bg-white border rounded-xl p-5">

              <p className="text-gray-500 text-sm">
                Average Speed
              </p>

              <h3 className="text-3xl font-bold mt-2">
                68 mph
              </h3>

              <p className="text-gray-500 text-sm">
                Normal
              </p>

            </div>



            <div className="bg-white border rounded-xl p-5">

              <p className="text-gray-500 text-sm">
                System Latency
              </p>

              <h3 className="text-3xl font-bold mt-2">
                14 ms
              </h3>

              <span className="text-green-600 text-sm">
                Optimum
              </span>

            </div>


          </div>



          {/* Main Dashboard Grid */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


            {/* Camera Feed */}

            <div className="lg:col-span-2 bg-black rounded-xl overflow-hidden h-[500px] relative">

              <div className="absolute top-0 left-0 right-0 bg-white p-4 flex justify-between">

                <h3 className="font-semibold">
                  📹 Live Camera Feed - HW101 N-22
                </h3>


                <div>
                  ⚙️ ⛶
                </div>

              </div>


              <div className="h-full flex items-center justify-center text-white">

                <div className="text-center">

                  <p className="text-5xl">
                    🚗
                  </p>

                  <p className="mt-3">
                    AI Camera Feed
                  </p>

                  <p className="text-sm text-gray-400">
                    Vehicle Detection Running...
                  </p>

                </div>

              </div>



              {/* Detection Boxes */}

              <div className="absolute top-40 left-40 border-2 border-blue-500 w-32 h-24">

                <span className="bg-blue-600 text-white text-xs px-2">
                  SUV 94%
                </span>

              </div>


              <div className="absolute bottom-40 right-32 border-2 border-red-500 w-20 h-20">

                <span className="bg-red-600 text-white text-xs px-2">
                  Hazard
                </span>

              </div>


            </div>

                        {/* Recent Activity */}

            <div className="bg-white border rounded-xl overflow-hidden h-[500px]">

              <div className="p-5 border-b flex justify-between items-center">

                <h3 className="text-lg font-semibold">
                  Recent Activity
                </h3>

                <button className="text-blue-600 text-sm">
                  View All
                </button>

              </div>


              <div className="p-4 space-y-4">


                {/* Alert Item */}

                <div className="flex gap-3 p-3 bg-red-50 rounded-lg">

                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center">
                    ⚠️
                  </div>


                  <div>

                    <h4 className="font-semibold text-red-700">
                      Critical Hazard
                    </h4>

                    <p className="text-sm text-gray-600">
                      Debris detected in lane 2 at HW101-Sector B.
                    </p>

                    <span className="text-xs text-gray-400">
                      2m ago
                    </span>

                  </div>


                </div>



                {/* Vehicle Activity */}

                <div className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg">

                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    🚚
                  </div>


                  <div>

                    <h4 className="font-semibold">
                      Oversize Load
                    </h4>

                    <p className="text-sm text-gray-600">
                      Class 8 vehicle detected moving 55mph.
                    </p>

                    <span className="text-xs text-gray-400">
                      15m ago
                    </span>

                  </div>


                </div>




                {/* System Health */}

                <div className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg">

                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    ✅
                  </div>


                  <div>

                    <h4 className="font-semibold">
                      System Health Check
                    </h4>

                    <p className="text-sm text-gray-600">
                      All 24 cameras reporting correctly.
                    </p>

                    <span className="text-xs text-gray-400">
                      45m ago
                    </span>

                  </div>

                </div>




                {/* Flow Update */}

                <div className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg">

                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    ℹ️
                  </div>


                  <div>

                    <h4 className="font-semibold">
                      Flow Update
                    </h4>

                    <p className="text-sm text-gray-600">
                      Traffic density increased by 14%.
                    </p>

                    <span className="text-xs text-gray-400">
                      1h ago
                    </span>

                  </div>

                </div>


              </div>

            </div>


          </div>



          {/* Analytics Card */}

          <div className="mt-6 bg-white border rounded-xl p-6">


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


              <div>

                <p className="text-gray-500 text-sm">
                  Peak Detection Rate
                </p>

                <h3 className="text-2xl font-bold">
                  99.82%
                </h3>

              </div>



              <div>

                <p className="text-gray-500 text-sm">
                  Active Sensors
                </p>

                <h3 className="text-2xl font-bold">
                  142/142
                </h3>

              </div>




              <div>

                <p className="text-gray-500 text-sm">
                  Uptime
                </p>

                <h3 className="text-2xl font-bold">
                  99.99%
                </h3>

              </div>




              <div className="flex items-center">

                <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-semibold">

                  Detailed Reports

                </button>

              </div>


            </div>


          </div>


        </div>


      </main>


    </div>

  );

}


export default Dashboard;