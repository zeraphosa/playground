import React, { useState } from "react";

interface IProps {
  name: string;
  description?: string;
  label?: string;
  onSmthHappen: (name: string) => void;
}

const Hello: React.FC<IProps> = ({ name, description = "Desc" }) => {
  const [count, setCount] = useState<number | string | null | undefined>(1453);
  setCount("44");
  return (
    <div>
      <h1>
        Hello {name}, {description}
      </h1>
      {count}
      {/* {onSmthHappen(name)} */}
    </div>
  );
};
export default Hello;
