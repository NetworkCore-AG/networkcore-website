import { ReactNode, useEffect, useState } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

const PhoneFrame = ({ children }: PhoneFrameProps) => {
  const [time, setTime] = useState<string>(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
  );

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto w-[260px] h-[540px] rounded-[44px] bg-neutral-900 p-[10px] shadow-2xl ring-1 ring-black/20">
      {/* Side buttons */}
      <div className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-l bg-neutral-800" />
      <div className="absolute -left-[2px] top-40 h-16 w-[3px] rounded-l bg-neutral-800" />
      <div className="absolute -right-[2px] top-32 h-20 w-[3px] rounded-r bg-neutral-800" />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-neutral-900" />

        {/* Status bar */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-2 text-[10px] font-medium text-neutral-900">
          <span>{time}</span>
          <span className="opacity-0">·</span>
          <span className="opacity-0">·</span>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-28px)] w-full">{children}</div>
      </div>
    </div>
  );
};

export default PhoneFrame;
