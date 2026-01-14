import { SocialIcons } from "../common/SocialIcons";

export const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs">
      <div className="flex flex-col gap-4 text-white">
        <p>
          © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14,
          Ireland. Reg. 584165. VAT ID: IE3425001BH
        </p>
        <div className="flex gap-4 text-[#969799]">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Terms of Use
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>

      <SocialIcons variant="footer" />
    </div>
  );
};
