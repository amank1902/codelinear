import xPattern from "../../assets/icons/x-pattern.svg";

/**
 * The brand X-pattern tile used in featured Insights and Case Study cards.
 */
export default function PatternTile({ className = "" }) {
  return (
    <img
      src={xPattern}
      alt=""
      aria-hidden="true"
      draggable="false"
      className={`block h-full w-full select-none rounded-xl object-cover ${className}`}
    />
  );
}
