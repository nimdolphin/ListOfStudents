export type Student = {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  group: string;
  birthday: string;
  rating: number;
  color: string;
};

export type StudentItemProps = {
  filteredStudents: Student[];
  setData: React.Dispatch<React.SetStateAction<Student[]>>;
  sortOption: string;
};
