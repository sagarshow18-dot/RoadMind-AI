import { Link } from "react-router-dom";

function Analytics() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 z-40 h-full w-[256px] bg-gray-100 border-r p-4">

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
      <main className="relative z-0 ml-[256px] flex-1">

        <header className="sticky top-0 z-30 bg-white border-b p-6">

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
{/* ALERT ACCURACY DISTRIBUTION */}

<section className="px-6 pb-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


{/* Pie Chart Card */}

<div className="bg-white border rounded-xl p-6">

<h3 className="text-xl font-bold mb-6">
Alert Accuracy Distribution
</h3>


<div className="flex flex-col items-center">


<div className="w-48 h-48 rounded-full border-[16px] border-blue-200 flex items-center justify-center">

<div className="text-center">

<h2 className="text-3xl font-bold">
98.4%
</h2>

<p className="text-gray-500 text-sm">
Conf. Score
</p>

</div>

</div>



<div className="mt-6 w-full">


<div className="flex justify-between">
<span>
True Positive
</span>

<span className="text-blue-600 font-bold">
82%
</span>

</div>


<div className="h-2 bg-gray-200 rounded mt-2">

<div className="h-full bg-blue-600 rounded w-[82%]"></div>

</div>



<div className="flex justify-between mt-4">

<span>
True Negative
</span>

<span className="text-blue-500 font-bold">
16.4%
</span>

</div>


<div className="h-2 bg-gray-200 rounded mt-2">

<div className="h-full bg-blue-300 rounded w-[16%]"></div>

</div>


</div>


</div>


</div>





{/* Regional Safety Scores */}

<div className="bg-white border rounded-xl p-6 lg:col-span-2">


<h3 className="text-xl font-bold mb-8">
Regional Safety Scores
</h3>


<div className="flex justify-around items-end h-64">


{
[
["North District","85%"],
["East Coast","62%"],
["Central Hub","94%"],
["South Corridor","45%"],
["West Perimeter","78%"]
].map((item,index)=>(


<div 
key={index}
className="flex flex-col items-center gap-3"
>


<div
className="w-12 bg-blue-600 rounded-t-lg"
style={{
height:item[1]
}}
>
</div>


<span className="text-xs text-center">
{item[0]}
</span>


</div>


))

}


</div>


</div>



</div>

</section>





{/* RECENT ANOMALY TABLE */}

<section className="px-6 pb-6">


<div className="bg-white border rounded-xl overflow-hidden">


<div className="p-6 border-b flex justify-between">

<h3 className="text-xl font-bold">
Recent Anomaly Logs
</h3>


<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
Live Updates Active
</span>


</div>




<div className="overflow-x-auto">


<table className="w-full text-left">


<thead className="bg-gray-100">


<tr>

<th className="p-4">
Time & Date
</th>

<th className="p-4">
Location
</th>

<th className="p-4">
Hazard Type
</th>

<th className="p-4">
Confidence
</th>

<th className="p-4">
Status
</th>

</tr>


</thead>



<tbody>


<tr className="border-t">

<td className="p-4">
Oct 24, 09:42 AM
</td>


<td className="p-4">
Intersection 44B
</td>


<td className="p-4">
Pothole Expansion
</td>


<td className="p-4">
94%
</td>


<td className="p-4">

<span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
CRITICAL
</span>

</td>


</tr>





<tr className="border-t">


<td className="p-4">
Oct 24, 08:15 AM
</td>


<td className="p-4">
Highway 101
</td>


<td className="p-4">
Obstructed Sign
</td>


<td className="p-4">
88%
</td>


<td className="p-4">

<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
MONITORING
</span>

</td>


</tr>





<tr className="border-t">


<td className="p-4">
Oct 23, 11:58 PM
</td>


<td className="p-4">
Main St & 5th Ave
</td>


<td className="p-4">
Illegal U-Turn Pattern
</td>


<td className="p-4">
76%
</td>


<td className="p-4">

<span className="bg-gray-200 px-3 py-1 rounded-full text-xs font-bold">
LOGGED
</span>

</td>


</tr>



</tbody>


</table>


</div>


</div>


</section>
{/* ALERT ACCURACY DISTRIBUTION */}

<section className="px-6 pb-6">

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


    {/* Accuracy Card */}

    <div className="bg-white border rounded-xl p-6">

      <h3 className="text-xl font-bold mb-6">
        Alert Accuracy Distribution
      </h3>


      <div className="flex flex-col items-center">


        <div className="w-48 h-48 rounded-full border-[16px] border-blue-200 flex items-center justify-center">

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              98.4%
            </h2>

            <p className="text-gray-500 text-sm">
              Conf. Score
            </p>

          </div>

        </div>


        <div className="mt-6 w-full">


          <div className="flex justify-between">

            <span>
              True Positive
            </span>

            <span className="text-blue-600 font-bold">
              82%
            </span>

          </div>


          <div className="h-2 bg-gray-200 rounded mt-2">

            <div className="h-full bg-blue-600 rounded w-[82%]"></div>

          </div>



          <div className="flex justify-between mt-4">

            <span>
              True Negative
            </span>

            <span className="text-blue-500 font-bold">
              16.4%
            </span>

          </div>


          <div className="h-2 bg-gray-200 rounded mt-2">

            <div className="h-full bg-blue-300 rounded w-[16%]"></div>

          </div>


        </div>


      </div>


    </div>



    {/* Regional Safety Scores */}

    <div className="bg-white border rounded-xl p-6 lg:col-span-2">


      <h3 className="text-xl font-bold mb-8">
        Regional Safety Scores
      </h3>


      <div className="flex justify-around items-end h-64">


        <div className="flex flex-col items-center gap-3">
          <div className="w-12 bg-blue-600 rounded-t-lg h-[85%]"></div>
          <span className="text-xs">
            North District
          </span>
        </div>


        <div className="flex flex-col items-center gap-3">
          <div className="w-12 bg-blue-600 rounded-t-lg h-[62%]"></div>
          <span className="text-xs">
            East Coast
          </span>
        </div>


        <div className="flex flex-col items-center gap-3">
          <div className="w-12 bg-blue-600 rounded-t-lg h-[94%]"></div>
          <span className="text-xs">
            Central Hub
          </span>
        </div>


        <div className="flex flex-col items-center gap-3">
          <div className="w-12 bg-blue-600 rounded-t-lg h-[45%]"></div>
          <span className="text-xs">
            South Corridor
          </span>
        </div>


        <div className="flex flex-col items-center gap-3">
          <div className="w-12 bg-blue-600 rounded-t-lg h-[78%]"></div>
          <span className="text-xs">
            West Perimeter
          </span>
        </div>


      </div>


    </div>


  </div>


</section>

{/* RECENT ANOMALY LOGS */}

<section className="px-6 pb-6">

  <div className="bg-white border rounded-xl overflow-hidden shadow-sm">


    {/* Table Header */}

    <div className="p-6 border-b flex justify-between items-center">

      <h3 className="text-xl font-bold">
        Recent Anomaly Logs
      </h3>


      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
        Live Updates Active
      </span>


    </div>



    {/* Table */}

    <div className="overflow-x-auto">

      <table className="w-full text-left">


        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-sm">
              Time & Date
            </th>

            <th className="px-6 py-4 text-sm">
              Location
            </th>

            <th className="px-6 py-4 text-sm">
              Hazard Type
            </th>

            <th className="px-6 py-4 text-sm">
              Confidence
            </th>

            <th className="px-6 py-4 text-sm">
              Status
            </th>

            <th className="px-6 py-4 text-sm">
              Action
            </th>

          </tr>

        </thead>



        <tbody>


          <tr className="border-t hover:bg-gray-50">


            <td className="px-6 py-4">
              Oct 24, 09:42 AM
            </td>


            <td className="px-6 py-4">
              Intersection 44B
            </td>


            <td className="px-6 py-4">
              Pothole Expansion
            </td>


            <td className="px-6 py-4">
              94%
            </td>


            <td className="px-6 py-4">

              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                CRITICAL
              </span>

            </td>


            <td className="px-6 py-4">

              <button className="text-blue-600 font-semibold hover:underline">
                Dispatch Info
              </button>

            </td>


          </tr>





          <tr className="border-t hover:bg-gray-50">


            <td className="px-6 py-4">
              Oct 24, 08:15 AM
            </td>


            <td className="px-6 py-4">
              Highway 101, Exit 4
            </td>


            <td className="px-6 py-4">
              Obstructed Sign
            </td>


            <td className="px-6 py-4">
              88%
            </td>


            <td className="px-6 py-4">

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                MONITORING
              </span>

            </td>


            <td className="px-6 py-4">

              <button className="text-blue-600 font-semibold hover:underline">
                Dismiss
              </button>

            </td>


          </tr>





          <tr className="border-t hover:bg-gray-50">


            <td className="px-6 py-4">
              Oct 23, 11:58 PM
            </td>


            <td className="px-6 py-4">
              Main St & 5th Ave
            </td>


            <td className="px-6 py-4">
              Illegal U-Turn Pattern
            </td>


            <td className="px-6 py-4">
              76%
            </td>


            <td className="px-6 py-4">

              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                LOGGED
              </span>

            </td>


            <td className="px-6 py-4">

              <button className="text-blue-600 font-semibold hover:underline">
                View Analytics
              </button>

            </td>


          </tr>


        </tbody>


      </table>


    </div>


  </div>


</section>


{/* FOOTER */}

<footer className="border-t bg-gray-100 p-8">


<div className="flex justify-between">


<div>

<h3 className="font-bold">
RoadMind AI
</h3>

<p className="text-sm text-gray-500">
© 2024 RoadMind AI. All rights reserved.
</p>

</div>


<div className="flex gap-6 text-sm text-gray-500">

<span>
Privacy Policy
</span>

<span>
Terms
</span>

<span>
Security
</span>

</div>


</div>


</footer>

      </main>

    </div>
  );
}


export default Analytics;