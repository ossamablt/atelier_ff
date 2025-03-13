import type React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { ArrowUp, ArrowDown, DollarSign, Users, ShoppingBag, TrendingUp } from "lucide-react"

// Sample data for charts
const salesData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 4000 },
  { name: "Sep", value: 3200 },
  { name: "Oct", value: 2800 },
  { name: "Nov", value: 4300 },
  { name: "Dec", value: 5100 },
]

const categoryData = [
  { name: "Burgers", value: 400 },
  { name: "Frites", value: 300 },
  { name: "Boissons", value: 300 },
  { name: "Desserts", value: 200 },
  { name: "Menus", value: 500 },
]

<<<<<<< HEAD
const COLORS = ["#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12"]
=======
// Modern color palette
const COLORS = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899"]
>>>>>>> df7e64f (Updated latest version)

const dailyData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  sales: Math.floor(Math.random() * 1000) + 500,
}))

export function StatisticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Ventes Totales"
          value="€24,780"
          change="+12.5%"
          isPositive={true}
          icon={<DollarSign className="h-5 w-5" />}
<<<<<<< HEAD
          color="bg-orange-500"
=======
          color="bg-blue-500"
>>>>>>> df7e64f (Updated latest version)
        />
        <SummaryCard
          title="Clients"
          value="1,482"
          change="+8.2%"
          isPositive={true}
          icon={<Users className="h-5 w-5" />}
<<<<<<< HEAD
          color="bg-blue-500"
=======
          color="bg-emerald-500"
>>>>>>> df7e64f (Updated latest version)
        />
        <SummaryCard
          title="Commandes"
          value="856"
          change="+5.4%"
          isPositive={true}
          icon={<ShoppingBag className="h-5 w-5" />}
<<<<<<< HEAD
          color="bg-green-500"
=======
          color="bg-violet-500"
>>>>>>> df7e64f (Updated latest version)
        />
        <SummaryCard
          title="Panier Moyen"
          value="€28.95"
          change="-2.1%"
          isPositive={false}
          icon={<TrendingUp className="h-5 w-5" />}
<<<<<<< HEAD
          color="bg-purple-500"
=======
          color="bg-amber-500"
>>>>>>> df7e64f (Updated latest version)
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Sales Chart */}
<<<<<<< HEAD
        <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
=======
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
>>>>>>> df7e64f (Updated latest version)
          <h3 className="text-lg font-semibold mb-4">Ventes Mensuelles</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`€${value}`, "Ventes"]}
<<<<<<< HEAD
                  contentStyle={{ backgroundColor: "#fff", borderColor: "#f97316" }}
                />
                <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
=======
                  contentStyle={{ backgroundColor: "#fff", borderColor: "#3b82f6" }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
>>>>>>> df7e64f (Updated latest version)
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
<<<<<<< HEAD
        <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
=======
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
>>>>>>> df7e64f (Updated latest version)
          <h3 className="text-lg font-semibold mb-4">Répartition des Ventes par Catégorie</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} commandes`, "Quantité"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Sales Trend */}
<<<<<<< HEAD
        <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 lg:col-span-2">
=======
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 lg:col-span-2">
>>>>>>> df7e64f (Updated latest version)
          <h3 className="text-lg font-semibold mb-4">Tendance des Ventes Quotidiennes</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`€${value}`, "Ventes"]}
<<<<<<< HEAD
                  contentStyle={{ backgroundColor: "#fff", borderColor: "#f97316" }}
=======
                  contentStyle={{ backgroundColor: "#fff", borderColor: "#3b82f6" }}
>>>>>>> df7e64f (Updated latest version)
                />
                <Line
                  type="monotone"
                  dataKey="sales"
<<<<<<< HEAD
                  stroke="#f97316"
=======
                  stroke="#3b82f6"
>>>>>>> df7e64f (Updated latest version)
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SummaryCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: React.ReactNode
  color: string
}

function SummaryCard({ title, value, change, isPositive, icon, color }: SummaryCardProps) {
  return (
<<<<<<< HEAD
    <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
=======
    <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
>>>>>>> df7e64f (Updated latest version)
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
<<<<<<< HEAD
          <div className={`flex items-center mt-1 ${isPositive ? "text-green-600" : "text-red-600"}`}>
=======
          <div className={`flex items-center mt-1 ${isPositive ? "text-emerald-600" : "text-red-600"}`}>
>>>>>>> df7e64f (Updated latest version)
            {isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
        <div className={`p-2 rounded-full ${color} text-white`}>{icon}</div>
      </div>
    </div>
  )
}

