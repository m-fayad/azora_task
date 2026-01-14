interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant: "pink" | "cream" | "blue";
  imageSrc?: string;
  className?: string;
  imagePosition?: "top" | "bottom";
  textLayout?: "column" | "row";
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variant,
  imageSrc,
  className = "",
  imagePosition = "bottom",
  textLayout = "column",
}) => {
  const variantStyles = {
    pink: "bg-[#DF96AE] text-foreground",
    cream: "bg-[#F4F0E4] text-background",
    blue: "bg-[#384C75] text-foreground",
  };

  const ImageArea = (
    <div
      className={`grow relative w-full h-full ${
        imagePosition === "top" ? "mb-6" : "mt-6 order-last"
      }`}
    >
      <img
        src={imageSrc}
        alt={`${title} image`}
        className="object-cover w-full h-full transform"
      />
    </div>
  );

  const TextArea = (
    <div
      className={`z-10 relative flex ${
        textLayout === "row"
          ? "flex-row items-start gap-4"
          : "flex-col items-start"
      }`}
    >
      <div
        className={`w-14 h-14 overflow-hidden flex items-center justify-center shrink-0 ${
          textLayout === "column" ? "mb-4" : ""
        }`}
      >
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-1 tracking-tight">{title}</h3>
        <p className="text-sm max-w-xs">{description}</p>
      </div>
    </div>
  );

  return (
    <div
      className={`rounded-3xl p-8 overflow-hidden relative flex flex-col justify-between h-150 transition-transform hover:scale-[1.01] duration-300 ${variantStyles[variant]} ${className}`}
    >
      {imagePosition === "top" ? (
        <>
          {ImageArea}
          {TextArea}
        </>
      ) : (
        <>
          {TextArea}
          {ImageArea}
        </>
      )}
    </div>
  );
};
