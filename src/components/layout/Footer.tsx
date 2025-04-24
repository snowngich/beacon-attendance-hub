
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beacon-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-beacon-purple flex items-center justify-center mr-2">
                <div className="h-3 w-3 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-bold">
                Beacon<span className="text-beacon-purple">Hub</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionizing workplace attendance with iBeacon technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-beacon-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beacon-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beacon-purple transition-colors">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beacon-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-beacon-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beacon-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beacon-purple transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beacon-purple transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md text-gray-900 w-full"
              />
              <Button className="rounded-l-none bg-beacon-purple hover:bg-beacon-dark-purple">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} BeaconHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
