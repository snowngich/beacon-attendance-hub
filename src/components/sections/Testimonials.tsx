
export default function Testimonials() {
  const testimonials = [
    {
      quote: "BeaconHub has revolutionized our attendance system. We've saved countless hours on administration and have much more accurate data.",
      author: "Sarah Johnson",
      title: "HR Director, TechCorp Inc.",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      quote: "The seamless integration with our existing HR systems made implementation a breeze. Our employees love not having to manually check in.",
      author: "David Chen",
      title: "CTO, Innovative Solutions",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      quote: "We've seen a 30% reduction in administrative tasks related to attendance and a noticeable improvement in punctuality.",
      author: "Michelle Rodriguez",
      title: "Operations Manager, GlobalCo",
      avatar: "https://i.pravatar.cc/150?img=20"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Companies across various industries trust BeaconHub to streamline their attendance management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-5 left-8 text-6xl text-beacon-purple/20">"</div>
              <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-beacon-purple/30"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Companies" },
                { number: "50,000+", label: "Users" },
                { number: "99.9%", label: "Uptime" },
                { number: "30%", label: "Admin Time Saved" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-4xl font-bold gradient-text">{stat.number}</span>
                  <span className="text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
