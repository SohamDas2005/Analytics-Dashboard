import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function LineChartBox({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Traffic Sources</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line dataKey="direct" stroke="#2563eb" />
          <Line dataKey="referral" stroke="#16a34a" />
          <Line dataKey="social" stroke="#f97316" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
