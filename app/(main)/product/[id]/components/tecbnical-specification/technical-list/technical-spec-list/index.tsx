/** @format */

import { FC } from "react";
import { ITechnicalSpecListProps } from "./index.types";
import TechnicalSpecItem from "./technical-spec-item";
import { Button } from "@nextui-org/react";
import { ArrowDownIcon } from "@/app/lib/design/common/icons";

const TechnicalSpecList: FC<ITechnicalSpecListProps> = ({ showMore, specifications, onToggleShowMore }) => {
  // !!  variable
  const visibleSpecifications = showMore ? specifications : specifications.slice(0, 4);

  return (
    // !!Render
    <section>
      {/* Render Technial List => Items */}
      {visibleSpecifications.map((item, index) => {
        return (
          <TechnicalSpecItem
            key={item._id}
            spec={item}
            isDimmed={!showMore && index === visibleSpecifications.length - 1}
          />
        );
      })}

      {/* Show More Item */}
      <Button
        size="md"
        color="primary"
        endContent={
          <span className={`transform transition-all duration-300 ${showMore ? "rotate-180" : "rotate-0"}`}>
            <ArrowDownIcon color="white" width={20} height={20} />
          </span>
        }
        onPress={onToggleShowMore}
        className="px-4 py-2 flex items-center gap-4 w-fit mx-auto"
      >
        {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
      </Button>
    </section>
  );
};

export default TechnicalSpecList;
