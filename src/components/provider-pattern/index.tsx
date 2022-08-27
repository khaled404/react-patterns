import { createContext, useContext, useMemo, useState } from "react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

interface IThemeContext {
  color: string;
  changeColor: (color: string) => void;
}
const ThemeContext = createContext<IThemeContext | null>(null);
const ThemeProvider = ({ children }: { children: JSX.Element[] }) => {
  const [color, setColor] = useState("#4f46e5");

  const changeColor = (newColor: string) => setColor(newColor);

  const value = useMemo(() => ({ color, changeColor }), [color]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw Error("useTasks should be used within <TasksProvider />");
  return context;
};

const ThemeControls = () => {
  const { changeColor, color } = useTheme();
  return (
    <div>
      <label
        htmlFor="color"
        className="block text-sm font-medium text-gray-700 capitalize"
        style={{ color }}
      >
        change components colors
      </label>
      <div className="mt-1">
        <input
          type="color"
          id="color"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          onChange={(val) => changeColor(val.target.value)}
          value={color}
        />
      </div>
    </div>
  );
};

const Button = () => {
  const { color } = useTheme();
  return (
    <button
      type="button"
      className="inline-flex capitalize items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white focus:outline-none"
      style={{ background: color }}
    >
      button component
    </button>
  );
};

const Banner = () => {
  const { color } = useTheme();
  return (
    <div style={{ background: color }}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 mt-5">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span
              className="flex p-2 rounded-lg  "
              style={{ background: color }}
            >
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span>Big news! This is Banner</span>
            </p>
          </div>
          <div className="order-3  mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              style={{ color }}
              className="flex  items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium   bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              style={{ background: color }}
              type="button"
              className="-mr-1 flex p-2 rounded-md   focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProviderPattern = () => {
  return (
    <ThemeProvider>
      <ThemeControls />
      <div className="py-5">
        <h3 className="capitalize mb-3 font-bold">components</h3>
        <Button />
        <Banner />
      </div>
    </ThemeProvider>
  );
};

export default ProviderPattern;
