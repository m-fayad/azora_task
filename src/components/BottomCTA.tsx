export const BottomCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 split-gradient">
      <div className="container mx-auto">
        <div className="bg-[#F5F5F5] rounded-3xl p-16 md:p-24 text-center md:text-left relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="h-20 md:h-32 mb-5"
            />
            <h2 className="text-2xl md:text-5xl font-semibold text-background tracking-widest mb-4">
              Superpowers starting $9.99/month.
            </h2>
            <h2 className="text-xl md:text-5xl font-semibold text-background tracking-widest mb-16">
              Free for 7 days.
            </h2>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <button className="bg-background text-white px-8 py-4 rounded-lg font-medium md:text-lg hover:bg-gray-800 transition-colors w-full md:w-auto">
                Get started now
              </button>
              <button className="bg-white border border-background text-background px-8 py-4 rounded-lg font-medium text-sm md:text-lg hover:bg-gray-50 transition-colors w-full md:w-auto">
                More about Setapp
              </button>
            </div>
          </div>

          {/* Decorative background element if needed */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block pointer-events-none">
            {/* Could be an image or gradient, design shows plain background mainly */}
          </div>
        </div>
      </div>
    </section>
  );
};
