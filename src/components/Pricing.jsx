import { Check, Star, X, CreditCard, Lock } from "lucide-react";
import { useState } from "react";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: '',
  });

  const handleOpenPopup = (plan) => {
    setSelectedPlan(plan);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedPlan(null);
    setFormData({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      email: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment for:', selectedPlan.name, formData);
    alert(`Payment processing for ${selectedPlan.name} plan!`);
    handleClosePopup();
  };

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
              <button onClick={() => handleOpenPopup(plan)} className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${plan.mostPopular ? 'bg-gradient-to-b from-blue-500 to-cyan-500 text-white' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
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

      {/* Checkout Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-300">
            {/* Close Button */}
            <button onClick={handleClosePopup} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" onClick={handleClosePopup}/>
            </button>

            {/* Header */}
            <div className="p-6 border-b border-slate-800">
              <span className='text-3xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold animate-in slide-in-from-bottom duration-700'>14 Day Free Trial</span>
              <p className="text-gray-400 text-sm">
                {selectedPlan?.name} Plan - {selectedPlan?.price}/month
              </p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
              </div>

              {/* Card Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    placeholder="MM/YY"
                    maxLength="5"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    placeholder="123"
                    maxLength="4"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-center space-x-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <Lock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p className="text-xs text-blue-300">
                  Your information is secure and encrypted
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Start Free Trial
              </button>

              <button
                type="button"
                onClick={handleClosePopup}
                className="w-full py-3 px-6 bg-slate-800 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:bg-slate-700"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
