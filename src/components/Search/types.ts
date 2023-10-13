export interface Student {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  group: string;
  birthday: Date;
  rating: number;
  color: string;
}

export interface SearchProps {
  data: Student[];
  searchName: string;
  setSearchText: (value: string) => void;
  setData: React.Dispatch<React.SetStateAction<Student[]>>;
  sortOption: string | Positions | number;
  setSortOption: (value: string) => void;
}

export const enum Positions {
  NameA,
  NameYa,
  Oldest,
  Youngest,
  HighRating,
  LowerRating,
}
