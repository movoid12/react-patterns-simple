import { useState } from "react";

const Hoverable = ({
  render,
}: {
  render: (value: boolean) => React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? "green" : "gray" }}
    >
      {render(isHovered)}
    </div>
  );
};

export default function HoverMe() {
  return (
    <Hoverable
      render={(isHovered) => <div>{isHovered ? "Hovered" : "Not hovered"}</div>}
    />
  );
}
