import type { ReactNode } from "react";
type MainProp = {
    children: ReactNode
}
export default function Main({children}:MainProp) {
    return (
      <div className="mobile-px py-3 sm:px-[10vw] md:py-5 lg:px-[160px] ">
        {children}
      </div>
    );
}