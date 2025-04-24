
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BeaconAI() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  // Predefined responses about beacon technology
  const knowledgeBase = {
    "what is a beacon?": "A beacon is a small wireless device that broadcasts tiny radio signals to nearby smartphones and tablets using Bluetooth Low Energy (BLE) technology. In our attendance system, beacons are used to automatically detect when employees enter or leave specific areas.",
    "how does bluetooth low energy work?": "Bluetooth Low Energy (BLE) is a wireless technology that operates at 2.4GHz and uses minimal power while maintaining reliable communication. It's perfect for beacons because they can run on small batteries for years while continuously broadcasting signals.",
    "what is the range of ibeacons?": "iBeacons typically have a range of 10-50 meters (30-150 feet), though this can vary based on environmental factors and power settings. In our system, we optimize the range for accurate room-level presence detection.",
    "are beacons secure?": "Yes, beacons are secure by design. They only broadcast one-way signals and cannot collect data themselves. Our system uses additional encryption and security measures to protect all attendance data.",
    "how accurate are beacons?": "Beacons can provide accuracy within 1-3 meters indoors, making them ideal for room-level presence detection. Our system uses multiple beacons and signal triangulation for enhanced accuracy.",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.toLowerCase().trim();
    setResponse(
      knowledgeBase[cleanQuery as keyof typeof knowledgeBase] ||
      "I don't have specific information about that. Please ask about beacon technology, range, security, or accuracy."
    );
  };

  return (
    <section className="py-16 bg-beacon-soft-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ask Our <span className="gradient-text">Beacon AI</span> Assistant
          </h2>
          <p className="text-gray-600">
            Have questions about beacon technology? Our AI assistant is here to help!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about beacon technology..."
              className="flex-1"
            />
            <Button type="submit" className="bg-beacon-purple hover:bg-beacon-dark-purple">
              Ask AI
            </Button>
          </form>

          {response && (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-beacon-purple/10 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-beacon-purple"
                  >
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600">{response}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Try asking about: What is a beacon? How does Bluetooth Low Energy work? What's the range? Are beacons secure?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
