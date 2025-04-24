
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      title: "Install Beacons",
      description: "Place small iBeacon devices throughout your workspace. These low-energy Bluetooth transmitters are discreet and battery-efficient.",
      icon: (
        <div className="bg-beacon-soft-blue p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beacon-purple">
            <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M19.692 15.692a7.5 7.5 0 1 0-15.384 0" />
            <path d="M12 22v-8" />
          </svg>
        </div>
      )
    },
    {
      title: "Employee App",
      description: "Employees download our mobile app, which runs in the background and automatically detects nearby beacons when they enter or leave.",
      icon: (
        <div className="bg-beacon-soft-blue p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beacon-purple">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        </div>
      )
    },
    {
      title: "Automatic Check-in",
      description: "When an employee's device detects a beacon, it securely logs their arrival time. No manual check-in required.",
      icon: (
        <div className="bg-beacon-soft-blue p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beacon-purple">
            <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
            <path d="M21.17 8H12V2.83c3.9 1.14 7.09 4.33 8.24 8.23" />
            <path d="M3.11 10.13c1.14-3.89 4.33-7.08 8.24-8.22" />
            <path d="M10.13 21.18c-3.89-1.13-7.08-4.33-8.22-8.23" />
          </svg>
        </div>
      )
    },
    {
      title: "Dashboard Analytics",
      description: "HR teams and managers access real-time attendance data through our intuitive dashboard with reporting and analytics.",
      icon: (
        <div className="bg-beacon-soft-blue p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beacon-purple">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
            <path d="M9 14h6" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">BeaconHub</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our system uses iBeacon technology to seamlessly automate attendance tracking without disrupting your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-beacon-purple to-beacon-dark-purple rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Ready to modernize your attendance system?</h3>
              <p className="text-white/80">Get started with BeaconHub and revolutionize how you track attendance.</p>
            </div>
            <Button className="bg-white text-beacon-purple hover:bg-gray-100 whitespace-nowrap px-8 py-6 text-lg">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
