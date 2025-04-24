
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Revolutionize <span className="gradient-text">Attendance</span> with Beacon Technology
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Automate your workplace attendance system using iBeacon technology. 
              No more time cards, sign-in sheets, or manual tracking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-beacon-purple hover:bg-beacon-dark-purple text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-beacon-purple text-beacon-purple hover:bg-beacon-light-purple/20 px-8 py-6 text-lg">
                Book Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-10 w-10 rounded-full bg-gradient-to-br from-beacon-purple/80 to-beacon-dark-purple border-2 border-white`}>
                    <span className="sr-only">User profile</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-beacon-dark-blue">2,500+</span> companies trust BeaconHub
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="bg-gradient-to-br from-beacon-purple/60 to-beacon-dark-purple/80 rounded-3xl p-1 shadow-xl">
              <div className="bg-white rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Modern office with people working" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 animate-float">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  +1
                </div>
                <div>
                  <p className="font-medium text-sm">John arrived</p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  98%
                </div>
                <div>
                  <p className="font-medium text-sm">Attendance Rate</p>
                  <p className="text-xs text-gray-500">This month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
