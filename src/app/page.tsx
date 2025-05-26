import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-teal)] text-white">
        <div className="container-custom py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ParkEase
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6">
              One card. Every parking spot.
            </p>
            <p className="mb-8 text-lg">
              The universal solution for all your parking needs across the UK. No more juggling multiple apps and payment methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/register" className="btn-primary bg-white text-[var(--primary-blue)] hover:bg-opacity-90">
                Get Started
              </Link>
              <Link href="#how-it-works" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-20">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-96 md:w-80 md:h-[30rem]">
              {/* This would be replaced with an actual app mockup image */}
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl flex items-center justify-center">
                <p className="text-center text-white">App Mockup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full bg-[var(--neutral-light)] py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">The Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="h-12 w-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-3">Fragmented Systems</h3>
              <p>Parking systems across the UK are fragmented, causing frustration for drivers who need multiple apps and payment methods.</p>
            </div>
            <div className="card">
              <div className="h-12 w-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-3">No Universal Payment</h3>
              <p>There's no single payment method accepted everywhere, forcing drivers to maintain multiple accounts and cards.</p>
            </div>
            <div className="card">
              <div className="h-12 w-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-3">Wasted Resources</h3>
              <p>The current situation results in lost time, wasted money, and contributes to poor urban mobility across cities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="w-full bg-white py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">The Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="mb-4 text-[var(--secondary-teal)] text-4xl">
                💳
              </div>
              <h3 className="mb-3">Digital Card & App</h3>
              <p>A universal digital card and mobile application that works for all your parking needs in one place.</p>
            </div>
            <div className="card">
              <div className="mb-4 text-[var(--secondary-teal)] text-4xl">
                🅿️
              </div>
              <h3 className="mb-3">Universal Compatibility</h3>
              <p>Works with council meters, private lots, valet services, and even peer-to-peer parking spaces.</p>
            </div>
            <div className="card">
              <div className="mb-4 text-[var(--secondary-teal)] text-4xl">
                👆
              </div>
              <h3 className="mb-3">One-Tap Access</h3>
              <p>Simplified parking with a unified interface and smart features for a seamless experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="w-full bg-[var(--neutral-light)] py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Product Demo</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-96 md:w-72 md:h-[28rem]">
                {/* This would be replaced with actual app screenshots */}
                <div className="absolute inset-0 bg-[var(--primary-blue)] bg-opacity-10 rounded-3xl flex items-center justify-center">
                  <p className="text-center">App Screenshots</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="mb-4">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="mb-1">Locate</h4>
                    <p>Find available parking spots near you using our interactive map.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="mb-1">Park</h4>
                    <p>Park your vehicle in your chosen spot without worrying about payment methods.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="mb-1">Pay</h4>
                    <p>Use your ParkEase card or app to make a quick, hassle-free payment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="mb-1">Receipt</h4>
                    <p>Get an instant digital receipt and parking confirmation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="w-full bg-white py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Business Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="mb-4 text-[var(--secondary-teal)] text-4xl">
                💷
              </div>
              <h3 className="mb-3">Affordable Subscriptions</h3>
              <p>Just £1 a month for unlimited access to all parking features with no advertisements.</p>
            </div>
            <div className="card">
              <div className="mb-4 text-[var(--secondary-teal)] text-4xl">
                🤝
              </div>
              <h3 className="mb-3">B2B Partnerships</h3>
              <p>White-labeled solutions and API licensing for businesses and parking operators.</p>
            </div>
            <div className="card">
              <div className="mb-4 text-[var(--secondary-teal)] text-4xl">
                📣
              </div>
              <h3 className="mb-3">Optional Advertising</h3>
              <p>Targeted advertisements from local UK businesses for additional revenue streams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="w-full bg-[var(--neutral-light)] py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Competitive Landscape</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-[var(--primary-blue)] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Features</th>
                  <th className="py-3 px-4 text-center">ParkEase</th>
                  <th className="py-3 px-4 text-center">RingGo</th>
                  <th className="py-3 px-4 text-center">JustPark</th>
                  <th className="py-3 px-4 text-center">PayByPhone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">Universal Card Support</td>
                  <td className="py-3 px-4 text-center text-[var(--success-green)]">✓</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Wallet Integration</td>
                  <td className="py-3 px-4 text-center text-[var(--success-green)]">✓</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                  <td className="py-3 px-4 text-center text-[var(--success-green)]">✓</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Peer-to-Peer Parking</td>
                  <td className="py-3 px-4 text-center text-[var(--success-green)]">✓</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                  <td className="py-3 px-4 text-center text-[var(--success-green)]">✓</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">White-Label API</td>
                  <td className="py-3 px-4 text-center text-[var(--success-green)]">✓</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                  <td className="py-3 px-4 text-center text-[var(--alert-red)]">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Traction & Roadmap Section */}
      <section className="w-full bg-white py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Traction & Roadmap</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="mb-4">Current Traction</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>MVP ready in 6 months</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>5 operators interested in integration</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Initial funding secured</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="mb-4">Roadmap</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--secondary-teal)]"></div>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-8 w-8 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-4 flex-shrink-0 z-10">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="mb-1">Beta Launch Q4 2025</h4>
                      <p>Initial release in pilot cities with core functionality.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-8 w-8 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-4 flex-shrink-0 z-10">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="mb-1">100k Users by Q3 2026</h4>
                      <p>Expand user base through marketing and partnerships.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-8 w-8 rounded-full bg-[var(--secondary-teal)] text-white flex items-center justify-center mr-4 flex-shrink-0 z-10">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="mb-1">Expand to 10 UK Metros by 2027</h4>
                      <p>Scale operations to major metropolitan areas across the UK.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-teal)] text-white py-16">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Simplify Parking?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join ParkEase today and experience the future of parking. One card for every parking spot across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="btn-primary bg-white text-[var(--primary-blue)] hover:bg-opacity-90">
              Get Started
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[var(--neutral-dark)] text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ParkEase</h3>
              <p className="mb-4">One card. Every parking spot.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[var(--secondary-teal)]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[var(--secondary-teal)]">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[var(--secondary-teal)]">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[var(--secondary-teal)]">About Us</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-teal)]">Careers</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-teal)]">Press</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-teal)]">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[var(--secondary-teal)]">Help Center</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-teal)]">Partners</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-teal)]">API Documentation</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-teal)]">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Email: info@parkease.co.uk</li>
                <li>Phone: +44 20 1234 5678</li>
                <li>Address: 123 Parking Lane, London, UK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} ParkEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
