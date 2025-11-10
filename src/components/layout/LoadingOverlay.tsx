import Image from "next/image";
import { useEffect, useState } from "react";

export const LoadingOverlay = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading_wrap ${done ? "blur" : ""}`}>
      <Image
        src="https://hololivepro.com/wp-content/themes/hololive_production/images/common_logo_holopro.svg"
        alt="hololive production"
        width={220}
        height={60}
        priority
      />
    </div>
  );
};
