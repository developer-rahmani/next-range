"use client";

// !! Types
import { PropsType } from "./index.types";

// !! Hooks
import { useRef } from "react";

const Slider = ({ value, onChange, isDisabled }: PropsType) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: any) => {
    handleChangePosition(event);
  };

  const handleChangePosition = (event: any) => {
    const sliderRect: DOMRect | undefined =
      sliderRef.current?.getBoundingClientRect();

    if (sliderRect) {
      const newPosition = Math.round(
        ((event.clientX - sliderRect.left) / sliderRect.width) * 100 < 0
          ? 0
          : ((event.clientX - sliderRect.left) / sliderRect.width) * 100 > 100
          ? 100
          : ((event.clientX - sliderRect.left) / sliderRect.width) * 100
      );

      onChange(newPosition);
    }
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div
        className={`w-full h-[4px] bg-gray-500 relative group/slider ltr ${
          isDisabled ? "" : "cursor-grab"
        }`}
        ref={sliderRef}
        onClick={(event) => {
          isDisabled ? null : handleMouseMove(event);
        }}
        onMouseDown={() => {
          isDisabled ? null : handleMouseDown();
        }}
        onTouchMove={(event) => {
          isDisabled ? null : handleChangePosition(event.changedTouches[0]);
        }}
      >
        <div
          className="relative h-full bg-gray-700"
          style={{
            width: `${(value * 100) / 100}%`,
          }}
        >
          <div className="w-[12px] h-[12px] flex rounded-[24px] bg-inherit absolute right-0 translate-x-[50%] top-[50%] -translate-y-[50%] z-[1] invisible group-hover/slider:!visible"></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
