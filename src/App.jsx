import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-screen">
      <div className="max-w-[1140px] mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Efficient Infinite Scrolling in React Using Native JavaScript
            IntersectionObserver
          </h1>
          <p className="text-gray-600 mt-2 flex justify-center items-center">
            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md">
              Scroll down to load more!
            </span>
            <span className="ml-2 animate-bounce">
              {/* Down arrow using Tailwind CSS */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </p>
        </header>

        <main>
          <ProductList />
        </main>

        <footer className="text-center text-sm text-gray-500 mt-8">
          &copy; 2024 Your Store Name. Built with React &amp; Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}
