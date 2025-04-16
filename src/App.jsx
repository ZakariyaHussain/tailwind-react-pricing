
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultCharts from './Components/ResultCharts/ResultCharts'
import axios from 'axios'
import MarkChart from './Components/MarkChart/MarkChart'


const pricingPromise = fetch('PricingData.json').then(res => res.json())
const marksPromise = axios.get('MarksData.json')

function App() {

  
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      {/* <DaisyNav></DaisyNav> */}
      <main className='px-8'>
        <Suspense fallback = {<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOption pricingPromise = {pricingPromise}></PricingOption>
        </Suspense>

        <Suspense fallback = {<span className="loading loading-spinner loading-lg"></span>}>
          <MarkChart marksPromise = {marksPromise}></MarkChart>
        </Suspense>

        <ResultCharts></ResultCharts>
      </main>
    </>
  )
}

export default App
