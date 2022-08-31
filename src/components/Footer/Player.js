import { Icon } from "Icons";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

export default function Player() {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [values, set_values] = useState([50]);

  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]">Sol</div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffle" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerPrev" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]">
            <Icon size={16} name="play" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerNext" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="repeat" />
          </button>
        </div>
        <div className="w-full">
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => set_values(values)}
            renderTrack={({ props, children }) => (
              <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} className="w-full h-7 flex group" style={props.style}>
                <div
                  ref={props.ref}
                  className="h-1 w-full rounded-md self-center"
                  style={{
                    background: getTrackBackground({
                      values: values,
                      colors: ["#1db954", "#535353"],
                      min: MIN,
                      max: MAX,
                    }),
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className={`h-3 w-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100`} 
                style={{
                  ...props.style,
                  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 50%)",
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end">Sag</div>
    </div>
  );
}
