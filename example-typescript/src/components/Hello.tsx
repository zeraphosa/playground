import React from "react";

interface IProps {
  name: string;
  description?: string;
  label?: string;
  onSmthHappen: (name: string) => void;
}
// export default function Hello({ name, description, label, onSmthHappen }: IProps) {
//   return (
//     <div>
//       <h1>
//         Hello {name}, {description}, {label}
//       </h1>
//       <div>{onSmthHappen(name)}</div>
//     </div>
//   );
// }

const Hello: React.FC<IProps> = ({ name, description = "Desc" }) => {
  const handleChange = (event: React.FormEvent<HTMLDivElement>) : void => {
    console.log(event)
  };
  return (
    <div>
      <h1>
        Hello {name}, {description}
      </h1>
      <div onChange={handleChange} />
      {/* {onSmthHappen(name)} */}
    </div>
  );
};
export default Hello;
