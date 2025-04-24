
export default function Features() {
  const features = [
    {
      title: "Real-time Attendance Tracking",
      description: "Automatically log employee arrival and departure times with precise timestamp data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "No Hardware for Employees",
      description: "Employees only need their smartphones with our app installed. No special badges or cards required.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: "Customizable Zones",
      description: "Create different zones within your workspace to track departmental attendance and movements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
          <path d="M12 12v-2" />
          <path d="M12 12h2" />
        </svg>
      ),
    },
    {
      title: "Privacy Focused",
      description: "Employees are only tracked while at work. The app doesn't collect location data outside work hours.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Comprehensive Reports",
      description: "Generate attendance, late arrival, and work hour reports for payroll and compliance purposes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      ),
    },
    {
      title: "API Integration",
      description: "Connect with HR systems, payroll software, and other business tools through our robust API.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
          <path d="M2 20h20" />
          <path d="M14 12v.01" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span> for Modern Workplaces
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our attendance management system provides everything you need to streamline attendance tracking with minimal setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-beacon-purple/50 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-lg bg-beacon-soft-blue flex items-center justify-center mb-4 group-hover:bg-beacon-purple text-beacon-purple group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center bg-beacon-dark-blue rounded-xl overflow-hidden">
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Visualize Your Workspace Data</h3>
            <p className="text-white/80 mb-6">
              Our dashboard provides comprehensive analytics and visualization tools to help you make data-driven decisions about attendance and workspace utilization.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Attendance trends and patterns",
                "Department-specific reports",
                "Employee punctuality metrics",
                "Custom alert configurations"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beacon-purple mr-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-lg shadow-lg mx-6 md:ml-0 md:mr-6 mb-6 md:mb-0 md:translate-x-6">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                alt="Dashboard visualization" 
                className="rounded w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
