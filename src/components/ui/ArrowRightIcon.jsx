import arrowRight from "../../assets/mockups/arrow-right.svg";

export default function ArrowRightIcon({ className = "h-4 w-4", ...rest }) {
  return (
    <img
      src={arrowRight}
      alt=""
      aria-hidden="true"
      draggable="false"
      className={`inline-block select-none ${className}`}
      {...rest}
    />
  );
}
