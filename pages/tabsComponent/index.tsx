import { useState } from "react";
import { CSSTabs } from "./css";
import { useTabs } from "./useTabs";
import { Circle, Square, Triangle } from "./shapes";

export default function App() {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Circle",
        children: <Circle />,
        id: "Circle",
      },
      {
        label: "Triangle",
        children: <Triangle />,
        id: "Triangle",
      },
      {
        label: "Square",
        children: <Square />,
        id: "Square",
      },
    ],
    initialTabId: "Triangle",
  });

  // return tabProps(tabs, selectedTabIndex, onChange, setSelectedTab)
  // selectedTab
  const css = useTabs(hookProps);
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-24">
      <div className="max-w-6xl">
        <p className="my-2 font-bold text-center">CSS Solution</p>
        <CSSTabs {...css.tabProps} />
        <div className="w-60 p-9">{css.selectedTab.children}</div>
      </div>
    </div>
  );
}
