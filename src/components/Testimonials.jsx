
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: "Using this service has transformed the way I manage my projects. The intuitive interface and powerful features have made my tasks so much easier to handle. I can't imagine going back to my old methods!"
  },
  {
    name: 'David Lee',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    content: "This platform has been a game-changer for our team. The collaboration tools and real-time updates have significantly improved our productivity. Highly recommended for any team looking to streamline their workflow."
  },
  {
    name: 'Emily Davis',
    role: 'UX Designer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: "As a designer, I appreciate the attention to detail and user-centric approach of this service. It has made it so much easier to share my designs and get feedback from stakeholders. The seamless integration with other tools is a huge plus!"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className='max-w-6xl mx-auto mb-16'>
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* left side header */}
          <div className='lg:w-1/2 w-full text-center lg:text-left'>
            <h2 className='text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
              What Developers Are Saying About Us
            </h2>
            <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">Hear from our satisfied users and how our platform has made a difference in their work.</p>
          </div>
          {/* testimonials */}
          <div className='lg:w-1/2 w-full'>
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">"

                      </div>
                    </div>
                    <div className="flex-grow text-white">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}</p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                        <div className="">
                          <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
