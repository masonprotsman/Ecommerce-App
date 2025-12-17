import { Check, Star } from "lucide-react";

const plans = [
  {
    name: 'Basic',
    price: '$29.99',
    description: 'Essential features for personal use',
    features: [
      'Up to 5 projects',
      '10GB Storage',
      'Community Support',
      'Email Support',
      'API Access',
      'Basic Analytics',
      'Mobile App',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: '$79.99',
    description: 'Advanced features for professionals',
    features: [
      'Up to 25 projects',
      '100GB Storage',
      'Priority Support',
      'Email Support',
      'API Access',
      'Advanced Analytics',
      'Mobile App',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: '$199.99',
    description: 'Comprehensive solutions for enterprises',
    features: [
      'Unlimited projects',
      'Unlimited Storage',
      '24/7 Phone Support',
      'Email Support',
      'API Access',
      'Advanced Security Features',
      'Dedicated Account Manager',
      'Enterprise Analytics',
      'Custom Integrations',
      'Mobile App',
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className='max-w-6xl mx-auto mb-32'>
        <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent'>Simple, Transparent</span>
            <br />
            <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'>Pricing Plans</span>
          </h2>
          <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">Choose the plan that best fits your needs and start building with confidence.</p>
          <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'>14 Day Free Trial.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {plans.map((plan, key) => (
            <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.mostPopular ? 'border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105' : 'border-slate-800 hover:border-slate-700'}`}>

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg"/>
              {plan.mostPopular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 tansform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    <Star className="text-white w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                    <span className="text-white">Most Popular</span>
                  </div>
                </div>
              )}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                <div className="text-white flex items-baseline justify-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-gray-400 ml-0 sm:ml-2 text-sm sm:text-base">/month</span>
                </div>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                {plan.features.map((feature, featureKey) => (
                  <li key={featureKey} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="text-white flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <Check className="text-white w-2.5 h-3 sm:h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${plan.mostPopular ? 'bg-gradient-to-b from-blue-500 to-cyan-500 text-white' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-base text-xl">
            Need a custom plan?{" "}<a href="#" className="text-blue-400 hover:text-blue-300">Contact Our Sales Team</a>
          </p>
        </div>
      </div>
    </section>
  )
}
