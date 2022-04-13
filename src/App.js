import React from "react"
import {Cards, Chart, CountryPicker} from "./components/index"
import styles from "./App.module.css"

import {fetchData} from "./api/index"

class App extends React.Component {

state = {
  data: {},
  country: "",
}

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)

    this.setState({data: fetchedData, country: country})
  }

  render() {
    const {data} = this.state

    return (
      <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      
      </div>
    )
  }
}

export default App;









//<-------------------------------------------------------------------------------------------------------------->//
// function App() {

//   async function getData(){
//      const data = await fetchData("us")
//      console.log(data)
//    }
//    getData()
//   return(
//       <div className={styles.container}>
//       <Cards />
//       <CountryPicker />
//       <Chart />
//       </div>
//   )
// }