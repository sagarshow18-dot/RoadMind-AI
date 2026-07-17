import { Link } from "react-router-dom";

function Analytics() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-[256px] bg-gray-100 border-r p-4">

        <div className="mb-8">
          <h1 className="text-xl font-bold">
            RoadMind AI
          </h1>

          <p className="text-sm text-gray-500">
            Enterprise Safety
          </p>
        </div>


        <nav className="space-y-2">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Dashboard
          </Link>


          <Link
            to="/map"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Hazard Map
          </Link>


          <Link
            to="/analytics"
            className="flex items-center gap-3 p-3 rounded-lg bg-blue-100 text-blue-700 font-bold"
          >
            Predictive Analytics
          </Link>


          <Link
            to="/tracking"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Vehicle Tracking
          </Link>


          <Link
            to="/system"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            System Health
          </Link>


          <Link
            to="/settings"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Settings
          </Link>

        </nav>


        <div className="absolute bottom-6 left-4 right-4">

          <button className="w-full bg-red-600 text-white py-2 rounded-lg">
            Emergency Alert
          </button>

        </div>

      </aside>



      {/* MAIN CONTENT */}
      <main className="ml-[256px] flex-1">

        <header className="sticky top-0 bg-white border-b p-6">

          <h2 className="text-2xl font-bold">
            Predictive Analytics
          </h2>

          <p className="text-gray-500">
            Deep-dive performance metrics and hazard forecasts.
          </p>

        </header>


        {/* KPI CARDS SECTION */}

<section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">


  {/* Card 1 */}
  <div className="bg-white border rounded-xl p-6 shadow-sm">

    <p className="text-sm text-gray-500 font-semibold">
      Alert Accuracy
    </p>

    <div className="flex items-end gap-3 mt-3">

      <h3 className="text-4xl font-bold">
        98.4%
      </h3>

      <span className="text-blue-600 text-sm font-bold">
        ↑ 2.1%
      </span>

    </div>

  </div>



  {/* Card 2 */}
  <div className="bg-white border rounded-xl p-6 shadow-sm">

    <p className="text-sm text-gray-500 font-semibold">
      Avg. Response Time
    </p>

    <div className="flex items-end gap-3 mt-3">

      <h3 className="text-4xl font-bold">
        12.2s
      </h3>

      <span className="text-red-600 text-sm font-bold">
        ↓ 0.4s
      </span>

    </div>

  </div>



  {/* Card 3 */}
  <div className="bg-white border rounded-xl p-6 shadow-sm">

    <p className="text-sm text-gray-500 font-semibold">
      Hazard Detection Rate
    </p>

    <div className="flex items-end gap-3 mt-3">

      <h3 className="text-4xl font-bold">
        942
      </h3>

      <span className="text-gray-500 text-sm">
        /month
      </span>

    </div>

  </div>



  {/* Card 4 */}
  <div className="bg-white border rounded-xl p-6 shadow-sm">

    <p className="text-sm text-gray-500 font-semibold">
      System Uptime
    </p>

    <div className="flex items-end gap-3 mt-3">

      <h3 className="text-4xl font-bold">
        99.9%
      </h3>

      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
        STABLE
      </span>

    </div>

  </div>


</section>

{/* HAZARD TRENDS CHART SECTION */}

<section className="px-6 pb-6">

  <div className="bg-white border rounded-xl p-6">

    <div className="flex justify-between items-center mb-6">

      <h3 className="text-xl font-bold">
        Hazard Trends over 30 Days
      </h3>


      <div className="flex gap-4 text-sm text-gray-600">

        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          Serious
        </span>


        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-300"></span>
          Minor
        </span>

      </div>

    </div>



    {/* Chart Area */}

    <div className="h-64 border-l border-b relative bg-gray-50 overflow-hidden">


      <svg 
        className="w-full h-full"
        viewBox="0 0 800 200"
      >

        {/* Serious Line */}

        <path
          d="M0,150 Q100,120 200,160 T400,100 T600,130 T800,40"
          fill="none"
          stroke="#2563eb"
          strokeWidth="4"
        />


        {/* Minor Line */}

        <path
          d="M0,180 Q150,170 300,190 T500,160 T800,170"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="4"
        />


        {/* Points */}

        <circle
          cx="200"
          cy="160"
          r="5"
          fill="#2563eb"
        />


        <circle
          cx="400"
          cy="100"
          r="5"
          fill="#2563eb"
        />


        <circle
          cx="800"
          cy="40"
          r="6"
          fill="#2563eb"
        />


      </svg>


    </div>



    {/* Weeks */}

    <div className="flex justify-between mt-4 text-sm text-gray-500 px-4">

      <span>Week 1</span>
      <span>Week 2</span>
      <span>Week 3</span>
      <span>Week 4</span>

    </div>


  </div>


</section>

      </main>

    </div>
  );
}


export default Analytics;