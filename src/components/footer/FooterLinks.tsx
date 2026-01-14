import React from "react";

interface LinkItem {
  label: string;
  href: string;
}

const column1: LinkItem[] = [
  { label: "Home", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "All Apps", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Setapp for Teams", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Podcast", href: "#" },
  { label: "Download", href: "#" },
];

const column2: LinkItem[] = [
  { label: "About", href: "#" },
  { label: "Support", href: "#" },
  { label: "Education Discount", href: "#" },
  { label: "Family Plan", href: "#" },
  { label: "For Developers", href: "#" },
  { label: "Gift Cards", href: "#" },
  { label: "Redeem Card or Code", href: "#" },
  { label: "Setapp Reviews", href: "#" },
  { label: "Affiliate Program", href: "#" },
  { label: "Mac Developer Survey 2023", href: "#" },
];

const column3: LinkItem[] = [
  { label: "Getting started with Setapp", href: "#" },
  { label: "Remote access to other Mac", href: "#" },
  { label: "Fix macOS Ventura problems", href: "#" },
  { label: "Best productivity apps", href: "#" },
  { label: "Best YouTube downloaders", href: "#" },
  { label: "Uninstall apps", href: "#" },
];

export const FooterLinks: React.FC = () => {
  const renderLinks = (links: LinkItem[]) => (
    <div className="space-y-4 text-sm">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="block text-gray-400 hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {renderLinks(column1)}
      {renderLinks(column2)}
      {renderLinks(column3)}
    </div>
  );
};
