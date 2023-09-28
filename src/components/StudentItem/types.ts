export type Student = {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  group: string;
  birthday: Date;
  rating: number;
  color: string;
};

export type StudentItemProps = {
  filteredStudents: Student[];
  setData: React.Dispatch<React.SetStateAction<Student[]>>;
  sortOption: string | Positions | number;
};

export const enum Positions {
  NameA,
  NameYa,
  Oldest,
  Youngest,
  HighRating,
  LowerRating,
}
