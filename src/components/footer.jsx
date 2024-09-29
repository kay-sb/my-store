import React from 'react';

function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col w-full md:w-3/4 mb-4">
            <div className="flex flex-wrap">
              <div className="flex flex-col w-full md:w-1/4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Marketing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Analytics</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Commerce</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Insights</a></li>
                </ul>
              </div>
              <div className="flex flex-col w-full md:w-1/4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Guides</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">API Status</a></li>
                </ul>
              </div>
              <div className="flex flex-col w-full md:w-1/4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Jobs</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Press</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Partners</a></li>
                </ul>
              </div>
              <div className="flex flex-col w-full md:w-1/4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Claim</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-gray-300">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="flex">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                name="email"
                id="email-address"
                required
                className="flex-grow p-2 rounded bg-gray-700 text-white placeholder-gray-400 mr-2"
                placeholder="Enter your email"
              />
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-6">© 2020 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;