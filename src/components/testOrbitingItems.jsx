import { Icons } from "./Icons";
import { cn } from "./lib/utils";

export const testOrbitingItems = [
  <Icons.gitHub key="github" className="h-6 w-6" />,
  <Icons.twitter key="twitter" className="h-6 w-6" />,
  <Icons.react key="react" className="h-6 w-6" />,
  <Icons.tailwind key="tailwind" className="h-6 w-6" />,
  <Icons.framerMotion key="framer" className="h-6 w-6" />,
  <Icons.Html key="html" className="h-6 w-6" />,
  <Icons.css key="css" className="h-6 w-6" />,
  <Icons.Bootstrap key="Bootstrap" className="h-6 w-6" />,
  <Icons.NodeJs key="nodejs" className="h-6 w-6" />,
  <Icons.javascipt key="tailwind" className="h-6 w-6" />,
  
];

const calculateItemStyle = ({ index, radius, totalItems }) => {
  const angle = (index / totalItems) * 360;
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  return {
    left: `${50 + x}%`,
    top: `${50 + y}%`,
    transform: "translate(-50%, -50%)",
  };
};

export default function OrbitingItems({
  radius = 50,
  items = testOrbitingItems,
  pauseOnHover = true,
  backgroundClassName = "",
  containerClassName = "",
  className = "",
}) {
  const reverse = cn(
    "ease-linear direction-reverse",
    {
      "group-hover:[animation-play-state:paused]": pauseOnHover,
    }
  );

  return (
    <div
      className={cn(
        "storybook-fix group flex items-center justify-center py-32 relative",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full rounded-full ",
          backgroundClassName
        )}
      />
      <div
        className={cn(
          "relative flex h-64 w-64 items-center justify-center rounded-full border-2 border-gray-500 ease-linear",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
          className
        )}
        style={{ animation: "var(--animation-rotate-full)" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-gray-200"
            style={calculateItemStyle({ index, radius, totalItems: items.length })}
          >
            <div
              className={reverse}
              style={{ animation: "none" }} // cancel rotation for icons so they stay upright
            >
              {item}
            </div>
          </div>
        ))}
        <div
          className={cn(
            "absolute h-1/2 w-1/2 rounded-full border-2 border-gray-700",
            reverse
          )}
        />
      </div>
    </div>
  );
}
