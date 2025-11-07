import { Clock, Target, Users } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: Clock,
      gradient: "from-purple-500 to-purple-600",
      title: "Time Waste",
      description: "Recruiters spend hours weekly reformatting resumes instead of placing candidates.",
    },
    {
      icon: Target,
      gradient: "from-pink-500 to-pink-600",
      title: "Inconsistent Quality",
      description: "Messy, unprofessional resumes damage your agency's reputation with clients.",
    },
    {
      icon: Users,
      gradient: "from-blue-500 to-blue-600",
      title: "Missed Placements",
      description: "Poor resume formatting causes qualified candidates to get rejected by ATS systems.",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            The Recruiter's Daily Struggle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manual resume formatting wastes hours and hurts consistency.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
