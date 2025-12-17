import { Github, Twitter, Mail, Linkedin } from 'lucide-react'

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Support", "Community", "Tutorials"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export default function Footer() {
  return (
    <footer className='border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
        <div className='hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12'>
          <div className='col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left'>
            <div className='flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4'>
              <div className='rounded-lg'>
                <img src="/logo.png" alt="HyperCode Logo" className='w-6 h-6 sm:w-8 sm:h-8' />
              </div>
              <span className='text-lg sm:text-xl font-bold'>
                <span className='text-white'>Hyper</span>
                <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'>Code</span>
              </span>
            </div>
            <p className='text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base'>Transform your work flow with AI-powered tools and automation. Built for modern developers.</p>
            <div className='flex justify-center sm:justify-start space-x-3 sm:space-x-4'>
              <a href="https://github.com/masonprotsman" target="_blank" className='p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200' aria-label="GitHub">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mason-p-368a91202/" target="_blank" className='p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200' aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:masonprotsman@gmail.com"
                className='p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200'
                aria-label="Send email to Mason Protsman"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* footer links */}
          <div className='sm:col-span-3 lg:col-span-4'>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12'>
              {Object.entries(footerLinks).map(([category, links], index) => (
                <div key={category}>
                  <h3 className='font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base'>{category}</h3>
                  <ul className='space-y-2 sm:space-y-3'>
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className='text-gray-400 hover:text-white text-xs sm:text-base transition-colors duration-200'>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
