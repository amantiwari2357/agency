"use client";

import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    name: 'Total Customers',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'from-[#4d7cf5] to-[#3660e0]'
  },
  {
    name: 'Active Leads',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'from-[#4d7cf5] to-[#3660e0]'
  },
  {
    name: 'Revenue',
    value: '$89,432',
    change: '+23.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-[#4d7cf5] to-[#3660e0]'
  },
  {
    name: 'Conversion Rate',
    value: '24.8%',
    change: '-2.4%',
    trend: 'down',
    icon: Activity,
    color: 'from-[#4d7cf5] to-[#3660e0]'
  },
];

const recentActivities = [
  { id: 1, type: 'lead', name: 'John Smith', action: 'New lead generated', time: '2 min ago' },
  { id: 2, type: 'customer', name: 'Sarah Johnson', action: 'Purchased Enterprise plan', time: '15 min ago' },
  { id: 3, type: 'meeting', name: 'Team Meeting', action: 'Scheduled for tomorrow', time: '1 hour ago' },
  { id: 4, type: 'lead', name: 'Mike Davis', action: 'Lead converted to customer', time: '2 hours ago' },
];

export default function CRMDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#eef0f4] hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-[#2e9e5b]' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1c1f26]">{stat.value}</h3>
            <p className="text-sm text-[#8a90a2] mt-1">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eef0f4]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#1c1f26]">Revenue Overview</h3>
            <select className="text-sm border border-[#eef0f4] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4d7cf5]">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 45, 78, 52, 89, 67, 95].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-[#4d7cf5] to-[#3660e0] rounded-t-lg transition-all hover:from-[#3660e0] hover:to-[#4d7cf5]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-[#8a90a2]">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Lead Sources */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eef0f4]">
          <h3 className="text-lg font-bold text-[#1c1f26] mb-6">Lead Sources</h3>
          <div className="space-y-4">
            {[
              { source: 'Website', percentage: 45, color: 'bg-[#4d7cf5]' },
              { source: 'Social Media', percentage: 25, color: 'bg-[#4d7cf5]' },
              { source: 'Referrals', percentage: 20, color: 'bg-[#4d7cf5]' },
              { source: 'Direct', percentage: 10, color: 'bg-[#4d7cf5]' },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#1c1f26]">{item.source}</span>
                  <span className="text-sm font-bold text-[#1c1f26]">{item.percentage}%</span>
                </div>
                <div className="h-2 bg-[#eef0f4] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eef0f4]">
        <h3 className="text-lg font-bold text-[#1c1f26] mb-6">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#eef0f4] transition-colors"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                activity.type === 'lead' ? 'bg-[#e8f5e9]' :
                activity.type === 'customer' ? 'bg-[#dbeafe]' :
                'bg-[#f3e8ff]'
              }`}>
                {activity.type === 'lead' ? (
                  <TrendingUp className="w-5 h-5 text-[#2e9e5b]" />
                ) : activity.type === 'customer' ? (
                  <Users className="w-5 h-5 text-[#4d7cf5]" />
                ) : (
                  <Activity className="w-5 h-5 text-[#8b5cf6]" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1c1f26]">{activity.name}</p>
                <p className="text-xs text-[#8a90a2]">{activity.action}</p>
              </div>
              <span className="text-xs text-[#8a90a2]">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
