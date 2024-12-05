import { useEffect, useState } from "react"
import styles from './chartContainer.module.css'
import Plot from 'react-plotly.js'
import { ScatterData } from "plotly.js"

const ChartContainer = () => {
  const[data, setData] = useState<String>("test")

  useEffect(() => {
    fetch('http://127.0.0.1:5000/descriptiveStats')
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
  }, [])



  return (
    <div className={styles.container}>
      <p>test</p>
    </div>
  )
}

export default ChartContainer
