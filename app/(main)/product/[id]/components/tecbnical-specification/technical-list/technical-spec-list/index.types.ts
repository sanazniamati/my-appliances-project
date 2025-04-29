/** @format */

import { TechnicalSpecificationsState } from "@/app/lib/services/product/index.types";

export interface ITechnicalSpecListProps {
  specifications: TechnicalSpecificationsState[];
  showMore: boolean;
  onToggleShowMore(): void;
}
