import React, {useState, useEffect} from "react";
import {fetchDailyData} from "../../api/index"
import {Line, Bar} from "react-chartjs-2"

import styles from "./Chart.module.css"

function Chart() {
    const [dailyData, setDailyData] = useState([])

    useEffect(()=>{
    const fetchAPI = async () =>{
        setDailyData(await fetchDailyData())
    }
    fetchAPI()
    })

    const lineChart = (
        dailyData[0] ? (
        <Line 
            data = {{
                labels: dailyData(({date}) =>date),
                datasets: [{
                    data: dailyData(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true,
                }, {
                    data: dailyData(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: "rgba(255, 0, 0, 0.5",
                    fill: true,
                }],
            }}
        />) : null
    )

    return (
        <div className={styles.container}>
        {lineChart}
        </div>
    )
}

export default Chart