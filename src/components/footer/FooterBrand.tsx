export const FooterBrand: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-3">
        <img src="/images/logo.svg" alt="logo" className="w-4" />
        <span className="text-white font-bold text-xl tracking-wide">
          SETAPP
        </span>
      </div>

      <div>
        <p className="text-gray-400 mb-4 text-sm">
          Updates from our team, written with love{" "}
          <span className="text-orange-500">♥</span>
        </p>
        <div className="relative max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#3d3d42] text-gray-200 px-4 py-3 rounded pr-12 text-sm border border-transparent focus:border-gray-500 outline-none placeholder-gray-500 transition-colors"
          />
          <button
            className="absolute right-0 top-0 bottom-0 w-12 bg-white text-black rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Subscribe"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
