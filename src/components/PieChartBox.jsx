import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#f97316"];

export default function PieChartBox({ data }) {
  return (
    <div
      className="p-4 rounded shadow
                 bg-white dark:bg-gray-800
                 text-black dark:text-white"
    >
      <h2 className="font-semibold mb-4">Traffic Sources</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={90}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
