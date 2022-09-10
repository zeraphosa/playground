import { Icon } from "Icons";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { secondsToTime } from "utils";
import CustomRange from "./Footer/CustomRange";

export default function FullScreenPlayer({ toggle, state, controls }) {
  const { current } = useSelector((state) => state.player);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return "volumeMuted";
    }
    if (state.volume > 0 && state.volume < 0.33) {
      return "volumeLow";
    }
    if (state.volume > 0.33 && state.volume < 0.66) {
      return "volumeNormal";
    }
    return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <div className="h-full relative" onClick={controls[state?.playing ? "pause" : "play"]}>
      <div className="absolute inset-0 object-cover bg-center bg-cover blur-sm opacity-50" style={{ backgroundImage: `url(${current.image})` }} />
      <div className="absolute opacity-70 top-8 left-8 gap-x-4 text-white flex items-center">
        <Icon size={34} name="logo" />
        <div className="text-xs">
          <p style={{ fontSize: 11 }}>PLAYING FROM PLAYLIST</p>
          <h6 className="font-semibold mt-0.5">{current.title}</h6>
        </div>
      </div>
      <div className="absolute bottom-36 left-8 flex items-center gap-x-5">
        <img src={current.image} alt="" className="w-24 h-24 object-cover" />
        <div className="self-end">
          <h3 className="text-3xl font-bold">{current.title}</h3>
          <p className="text-sm font-medium opacity-50">{current.description}</p>
        </div>
      </div>
      <div onClick={(e) => e.stopPropagation()} className="w-full absolute bottom-4 flex flex-col px-8 items-center">
        <div className="w-full flex items-center gap-x-2 mb-1.5">
          <div className="text-[0.688rem] text-white text-opacity-70">{secondsToTime(state?.time)}</div>
          <CustomRange step={0.1} min={0} max={state?.duration || 1} value={state?.time} onChange={(value) => controls.seek(value)} />
          <div className="text-[0.688rem] text-white text-opacity-70">{secondsToTime(state?.duration)}</div>
        </div>

        <div className="flex items-center gap-x-5">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="shuffle" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="playerPrev" />
          </button>
          <button onClick={controls[state?.playing ? "pause" : "play"]} className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]">
            <Icon size={24} name={state?.playing ? "pause" : "play"} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="playerNext" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="repeat" />
          </button>
        </div>
        <div className="flex items-center absolute bottom-3 right-6 gap-x-3">
          <button onClick={controls[state.muted ? "unmute" : "mute"]} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name={volumeIcon} />
          </button>
          <div className="w-[5.813rem] max-w-full">
            <CustomRange
              step={0.01}
              min={0}
              max={1}
              value={state.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.unmute();
                controls.volume(value);
              }}
            />
          </div>
          <button onClick={toggle} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="fullScreenOff" />
          </button>
        </div>
      </div>
    </div>
  );
}
