interface PaginationDotsProps {
  count: number;
  activeIndex: number;
  onClick: (index: number) => void;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({
  count,
  activeIndex,
  onClick,
  className = "",
  activeColor = "bg-black",
  inactiveColor = "bg-[#D5D4D4]",
}) => {
  return (
    <div className={`flex gap-5 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          onClick={() => onClick(index)}
          className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
            index === activeIndex
              ? activeColor
              : `${inactiveColor} hover:bg-gray-400`
          }`}
        ></div>
      ))}
    </div>
  );
};
