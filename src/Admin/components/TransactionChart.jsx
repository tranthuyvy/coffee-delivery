import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"
import { data } from "../../apis/mock-data"

const TransactionChart = () => {
  return (
    <div className="h-[24rem] bg-white p-4 rounded-md border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-200 font-semibold">Transactions</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#880E0E" />
            <Bar dataKey="Expense" fill="#3A241B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TransactionChart
