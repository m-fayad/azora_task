import { FooterBrand } from "./footer/FooterBrand";
import { FooterLinks } from "./footer/FooterLinks";
import { FooterBottom } from "./footer/FooterBottom";
import { LanguageSelector } from "./footer/LanguageSelector";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#26262b] text-white pt-20 pb-10 text-sm font-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <FooterBrand />
          </div>
          <div className="lg:col-span-7">
            <FooterLinks />
          </div>
        </div>

        {/* DMCA & Language */}
        <div className="flex justify-between items-center mb-8 gap-4">
          <div className="flex items-center">
            <div className="bg-[#4a4a4f] flex items-center gap-1 text-[10px] font-semibold text-white cursor-pointer hover:bg-gray-600 transition-colors">
              <span className="bg-[#969799] p-1.5">DMCA</span>
              <span className="px-2">PROTECTED</span>
            </div>
          </div>
          <LanguageSelector />
        </div>

        <div className="border-t border-border/20 mb-8"></div>

        <FooterBottom />
      </div>
    </footer>
  );
};
