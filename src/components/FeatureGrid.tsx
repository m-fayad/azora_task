import React from "react";
import { FeatureCard } from "./FeatureCard";

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-y border-border my-24">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          What you get on Setapp.
        </h2>
        <p className="text-sm hidden md:block max-w-sm">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Featured Card */}
        <FeatureCard
          icon="/assets/images/mac-icon.png"
          title="Keep your Mac clean"
          description="Remove junk, scan for malware, wipe email attachments"
          variant="pink"
          className="md:col-span-2 min-h-125"
          imageSrc="/assets/images/clean-mac.png"
          textLayout="row"
        />

        {/* Smaller Cards */}
        <FeatureCard
          icon="/assets/images/code-icon.png"
          title="Write code"
          description="Create applications in more than 25 languages"
          variant="cream"
          imageSrc="/assets/images/code.png"
          imagePosition="top"
        />

        <FeatureCard
          icon="/assets/images/meetings-icon.png"
          title="Join meetings in a click"
          description="Quickly access links to your meetings from menu bar"
          variant="blue"
          imageSrc="/assets/images/meetings.png"
        />
      </div>

      <div className="text-center mt-12">
        <button className="hover:text-gray-400 transition-colors text-sm font-medium flex items-center gap-1 mx-auto group">
          View all superpowers
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>

      <div className="flex justify-between items-end mt-27">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Your Setapp journey.
        </h2>
        <p className="text-sm hidden md:block max-w-sm">
          Type in your task into Setapp search and get instant app
          recommendations.
        </p>
      </div>
    </section>
  );
};
