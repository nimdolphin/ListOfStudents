import { SelectChangeEvent } from "@mui/material";

export interface DropdownListProps {
  sortOption: string;
  setSortOption: (value: string) => void;
}

export type HandleDropdownList = (event: SelectChangeEvent<unknown>) => void;
