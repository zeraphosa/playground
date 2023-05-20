interface IProps {
  name: string;
  description?: string;
  label?: string;
  onSmthHappen: (name: string) => void;
}
export default function Hello({ name, description, label }: IProps) {
  return (
    <div>
      Hello {name}, {description}, {label}
    </div>
  );
}
