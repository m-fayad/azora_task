import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 flex flex-col items-center justify-center min-h-[60vh] text-center px-4 overflow-hidden">
      {/* Logo/Icon above title */}
      <div className="mb-6 size-20 bg-black rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
        <img
          src="/assets/images/logo.svg"
          alt="Logo"
          className="size-12 opacity-80"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
        Dozens of apps.
        <br />
        One subscription.
        <br />
        $9.99
      </h1>

      <div className="flex gap-3 mb-4 h-12">
        <button className="bg-white text-background px-8 rounded-xl font-medium text-lg hover:bg-gray-100 transition-colors cursor-pointer">
          Try free for 7 days
        </button>
        <div className="flex gap-2">
          <div className="w-14 h-full bg-white rounded-lg flex items-center justify-center">
            <img
              src="/assets/images/apple.svg"
              className="size-6"
              alt="Apple"
            />
          </div>
          <div className="w-14 h-full bg-white rounded-lg flex items-center justify-center">
            <img
              src="/assets/images/google.svg"
              className="size-6"
              alt="Google"
            />
          </div>
        </div>
      </div>
      <p className="text-sm">
        Trial is up to you. No ads. No extra fees.
        <br />
        Cancel time anytime.
      </p>

      <div className="hidden md:block size-full -z-1 opacity-5 lg:opacity-100">
        {/* Decorative Stickers - Using absolute positioning based on visual estimation */}
        <div className="absolute top-20 left-[8%] xl:left-[10%] -rotate-12 pointer-events-none">
          <img src="assets/images/hero_svgs/pics.svg" alt="pics" />
        </div>
        <div className="absolute top-55 left-[7%] xl:left-[11%] -rotate-12 pointer-events-none">
          <img src="assets/images/hero_svgs/macpaw.svg" alt="macpaw" />
        </div>
        <div className="absolute top-54 left-[13%] xl:left-[18%] rotate-12 pointer-events-none">
          <img src="assets/images/hero_svgs/pdf.svg" alt="pdf" />
        </div>
        <div className="absolute top-96 left-[2%] xl:left-[10%] rotate-[-5deg] pointer-events-none">
          <img src="assets/images/hero_svgs/teamwork.svg" alt="teamwork" />
        </div>
        <div className="absolute top-116.25 left-[5%] xl:left-[11%] rotate-[-7deg] pointer-events-none">
          <img src="assets/images/hero_svgs/secure.svg" alt="secure" />
        </div>

        {/* right side stickers */}
        <div className="absolute top-20 right-[14%] xl:right-[18%] transform translate-x-1/2 -rotate-[30] pointer-events-none">
          <img src="assets/images/hero_svgs/wifi.svg" alt="wifi" />
        </div>
        <div className="absolute top-36 right-[18%] xl:right-[25%] transform translate-x-1/2 -rotate-2 pointer-events-none">
          <img src="assets/images/hero_svgs/plan.svg" alt="plan" />
        </div>
        <div className="absolute top-87.5 right-[4%] xl:right-[12%] pointer-events-none">
          <img src="assets/images/hero_svgs/manage.svg" alt="manage" />
        </div>
        <div className="absolute top-64 right-[8%] xl:right-[14%] transform translate-x-1/2 rotate-12 pointer-events-none">
          <img src="assets/images/hero_svgs/converter.svg" alt="converter" />
        </div>
        <div className="absolute top-114 right-[5%] xl:right-[13%] transform pointer-events-none">
          <img src="assets/images/hero_svgs/code.svg" alt="code" />
        </div>
      </div>
    </section>
  );
};
