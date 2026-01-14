import React from "react";

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

      <div className="flex gap-2.5">
        {/* Facebook */}
        <a
          href="#"
          className="bg-gray-500 p-2 rounded-full hover:bg-gray-500/40 transition-colors text-background hover:text-white"
          aria-label="Facebook"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
          </svg>
        </a>
        {/* Twitter (X) */}
        <a
          href="#"
          className="bg-gray-500 p-2 rounded-full hover:bg-gray-500/40 transition-colors text-background hover:text-white"
          aria-label="Twitter"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
        {/* Instagram */}
        <a
          href="#"
          className="bg-gray-500 p-2 rounded-full hover:bg-gray-500/40 transition-colors text-background hover:text-white"
          aria-label="Instagram"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        {/* YouTube */}
        <a
          href="#"
          className="bg-gray-500 p-2 rounded-full hover:bg-gray-500/40 transition-colors text-background hover:text-white"
          aria-label="YouTube"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
