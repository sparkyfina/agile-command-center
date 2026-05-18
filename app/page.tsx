import { AlertCircle, CheckCircle2, AlertTriangle, TrendingUp, Users, Calendar } from 'lucide-react';

export default function Dashboard() {
  // Mock data - will be replaced with real API calls
  const deliveryHealth = {
    overall: 'at-risk',
    podCount: 4,
    activeSprintCount: 4,
    completionRate: 67,
    riskCount: 3,
    blockerCount: 2,
  };

  const pods = [
    { id: 1, name: 'Platform Pod', progress: 75, status: 'on-track', capacity: '8/10' },
    { id: 2, name: 'Mobile Pod', progress: 58, status: 'at-risk', capacity: '9/10' },
    { id: 3, name: 'Data Pod', progress: 82, status: 'on-track', capacity: '7/10' },
    { id: 4, name: 'DevOps Pod', progress: 45, status: 'at-risk', capacity: '6/10' },
  ];

  const risks = [
    {
      id: 1,
      title: 'API integration delay',
      pod: 'Mobile Pod',
      severity: 'high',
      description: 'Third-party API response time exceeding SLA by 40%',
    },
    {
      id: 2,
      title: 'Database schema migration',
      pod: 'Data Pod',
      severity: 'medium',
      description: 'Migration test failed. Requires redesign of index strategy.',
    },
    {
      id: 3,
      title: 'Resource shortage',
      pod: 'Platform Pod',
      severity: 'high',
      description: 'Senior backend engineer out on leave for 2 weeks',
    },
  ];

  const blockers = [
    {
      id: 1,
      title: 'Blocked: Wait for design review',
      pod: 'Mobile Pod',
      storyId: 'MOB-234',
      blockedSince: '2 days',
    },
    {
      id: 2,
      title: 'Blocked: External vendor approval',
      pod: 'DevOps Pod',
      storyId: 'OPS-156',
      blockedSince: '1 day',
    },
  ];

  const milestones = [
    { id: 1, name: 'Q2 Launch MVP', date: 'May 31', pods: ['Platform Pod', 'Mobile Pod'], status: 'on-track' },
    { id: 2, name: 'Database Migration Complete', date: 'June 15', pods: ['Data Pod'], status: 'at-risk' },
    { id: 3, name: 'Performance Baseline Established', date: 'June 22', pods: ['DevOps Pod', 'Platform Pod'], status: 'at-risk' },
  ];

  const warnings = [
    { type: 'data-quality', message: 'Mobile Pod missing risk updates for 3 stories' },
    { type: 'data-quality', message: 'RAID log not updated since May 15 — refresh recommended' },
  ];

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'text-green-600';
      case 'at-risk':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Agile Delivery Command Center</h1>
            <p className="text-sm text-gray-600">Real-time visibility across Scrum pods</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Generate Report
            </button>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              Settings
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-6 space-y-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Navigation</div>
            <a href="#" className="block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
              Dashboard
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              Risks & Dependencies
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              Sprint Planning
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              Reports
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              Setup & Connections
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 max-w-6xl">
          {/* Overall Health Summary */}
          <section className="mb-8">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Overall Health</span>
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-2xl font-bold text-red-600 capitalize">{deliveryHealth.overall}</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Sprint Completion</span>
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-blue-600">{deliveryHealth.completionRate}%</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Active Risks</span>
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-orange-600">{deliveryHealth.riskCount}</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Blockers</span>
                  <AlertCircle className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-2xl font-bold text-red-600">{deliveryHealth.blockerCount}</p>
              </div>
            </div>
          </section>

          {/* Data Quality Warnings */}
          {warnings.length > 0 && (
            <section className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Data Quality Warnings</h3>
                  <ul className="space-y-1 text-sm text-amber-800">
                    {warnings.map((warning) => (
                      <li key={warning.type} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        {warning.message}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          <div className="grid grid-cols-3 gap-6">
            {/* Sprint Progress by Pod */}
            <div className="col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sprint Progress by Pod</h2>
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                {pods.map((pod) => (
                  <div key={pod.id} className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-gray-400" />
                        <div>
                          <h3 className="font-medium text-gray-900">{pod.name}</h3>
                          <p className="text-xs text-gray-500">Capacity: {pod.capacity}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-semibold capitalize ${getHealthColor(pod.status)}`}>
                        {pod.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${pod.status === 'on-track' ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${pod.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">{pod.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Milestones */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Milestones</h2>
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <div className="flex items-start gap-3 mb-2">
                      <Calendar className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 text-sm leading-tight">{milestone.name}</h3>
                        <p className="text-xs text-gray-600 mt-1">{milestone.date}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${getHealthColor(milestone.status) === 'text-green-600' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {milestone.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* High-Priority Risks */}
          <section className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">High-Priority Risks & Dependencies</h2>
            <div className="grid grid-cols-2 gap-4">
              {risks.map((risk) => (
                <div key={risk.id} className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{risk.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${getSeverityColor(risk.severity)}`}>
                      {risk.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{risk.description}</p>
                  <p className="text-xs text-gray-500">{risk.pod}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Blockers */}
          {blockers.length > 0 && (
            <section className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Blockers</h2>
              <div className="bg-white rounded-lg border border-red-200 shadow-sm overflow-hidden">
                {blockers.map((blocker) => (
                  <div key={blocker.id} className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-red-50">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{blocker.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                          <span>{blocker.pod}</span>
                          <span>Story: {blocker.storyId}</span>
                          <span className="text-red-600">Blocked for {blocker.blockedSince}</span>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
                        Resolve
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
