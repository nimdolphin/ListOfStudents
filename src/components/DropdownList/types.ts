import { SelectChangeEvent } from "@mui/material";
import { Positions } from "components/Search/types";

export interface DropdownListProps {
  sortOption: string | Positions;
  setSortOption: (value: string) => void;
}

export type HandleDropdownList = (event: SelectChangeEvent<unknown>) => void;
