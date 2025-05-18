export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Our Website
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover amazing products and services
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">About Us</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Learn more about our company and our mission.
                </p>
                <div className="mt-4">
                  <a
                    href="/about"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Our Products</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Explore our range of amazing products.
                </p>
                <div className="mt-4">
                  <a
                    href="/products"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View products →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Contact Us</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get in touch with our team.
                </p>
                <div className="mt-4">
                  <a
                    href="/contact"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Contact us →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
