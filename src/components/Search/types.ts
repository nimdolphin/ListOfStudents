export interface Student {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  group: string;
  birthday: string;
  rating: number;
  color: string;
}

export interface SearchProps {
  data: Student[];
  searchName: string;
  setSearchText: (value: string) => void;
  setData: React.Dispatch<React.SetStateAction<Student[]>>;
  sortOption: string;
  setSortOption: (value: string) => void;
}
