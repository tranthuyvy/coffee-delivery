import TransactionChart from "../components/TransactionChart"
import DashboardStatisGrid from "../components/DashboardStatisGrid"

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatisGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
      </div>
    </div>
  )
}

export default Dashboard
