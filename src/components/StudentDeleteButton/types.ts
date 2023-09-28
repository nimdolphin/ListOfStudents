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

export type StudentDeleteButtonProps = {
  sortedData: Student[];
  setData: React.Dispatch<React.SetStateAction<Student[]>>;
  id: number;
};
