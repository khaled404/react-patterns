import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { classNames } from "../../utils";

type TChildrenProps = {
  activeId: number | null;
  openCollapse: (index: number) => () => void;
};
interface ICollapse {
  children: (props: TChildrenProps) => any;
}

const CollapseContainer = ({ children }: ICollapse) => {
  const [activeId, stActiveId] = useState<any>(null);
  const openCollapse = (index: number) => () => {
    stActiveId((oldIndex: number) => (index === oldIndex ? null : index));
  };
  return children({
    activeId,
    openCollapse,
  });
};

interface ICollapseItem {
  children: any;
  active: boolean;
  onClick: any;
  title: string;
}

const CollapseItem = ({ children, active, onClick, title }: ICollapseItem) => {
  return (
    <dl
      className="mt-6 space-y-6 divide-y divide-gray-200 mb-6 cursor-pointer select-none"
      onClick={onClick}
    >
      <dt className="text-lg flex items-center justify-between">
        <span className="font-medium text-gray-900">{title}</span>
        <span className="ml-6 h-7 flex items-center">
          <ChevronDownIcon
            className={classNames(
              active ? "-rotate-180" : "rotate-0",
              "h-6 w-6 transform transition-all"
            )}
            aria-hidden="true"
          />
        </span>
      </dt>
      <p
        className={classNames(
          active ? "h-auto pt-6" : "h-0",
          "text-base text-gray-500 overflow-hidden transition-all"
        )}
      >
        {children}
      </p>
    </dl>
  );
};

export { CollapseContainer, CollapseItem };
