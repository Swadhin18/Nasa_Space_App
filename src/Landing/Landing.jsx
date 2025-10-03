
import Home from '../Header/Home'
import ChallengeOverview from './ChallengeOverview'
import Dataset from './Dataset'
import DataVisualization from './DataVisualization'
import Impact from './Impact'
// import Methodology from './Methodology'
import Objectives from './Objectives'
import Problem from './Problem'
import Team from './Team'
import Tracking from './Tracking'



export default function Landing() {
  return (
    <div>
      <Home></Home>
      <ChallengeOverview></ChallengeOverview>
      <DataVisualization></DataVisualization>
       <Problem></Problem>
       <Tracking></Tracking>
      <Objectives></Objectives>
      <Dataset></Dataset>
      {/* <Methodology></Methodology> */}
      <Impact></Impact>
      <Team></Team>
    </div>
  )
}
