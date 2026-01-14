export interface TestimonialCardProps {
  text: string;
  authorName: string;
  authorHandle: string;
  platform: "twitter" | "instagram" | "facebook";
  variant: "blue" | "tan" | "purple";
}

const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-[#2691D5]"
  >
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.123-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.258 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-[#D41792]"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-[#3A5792]"
  >
    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
  </svg>
);

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  authorName,
  authorHandle,
  platform,
  variant,
}) => {
  const backgrounds = {
    blue: "bg-[#747a9e]",
    tan: "bg-[#d9ae87]",
    purple: "bg-[#765070]",
  };

  const Icon = {
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    facebook: FacebookIcon,
  }[platform];

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Top Content Area */}
      <div className={`${backgrounds[variant]} p-8 grow`}>
        <p className="text-white text-[19px] font-normal leading-snug tracking-tight">
          {text}
        </p>
      </div>

      {/* Bottom Author Area */}
      <div className="bg-[#f5f6f8] p-6 flex items-end justify-between">
        <div>
          <h4 className="text-[#26262B] font-bold text-sm mb-0.5">
            {authorName}
          </h4>
          <p className="text-[#969799] text-xs font-medium">{authorHandle}</p>
        </div>
        <div className="mb-0.5">
          <Icon />
        </div>
      </div>
    </div>
  );
};
