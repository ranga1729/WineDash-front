import Header from '../Components/Header/Header';
import ChartContainer from '../Components/ChartContainer/ChartContainer';
import styles from './dashboard.module.css'

const DashBoard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ChartContainer />
    </div>
  )
}

export default DashBoard;