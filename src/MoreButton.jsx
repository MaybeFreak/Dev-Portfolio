import { useState } from "react";
import More from "./More";

const MoreButton = ({ title, children }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <button onClick={() => setShowMore(true)}>{title}</button>
      {showMore && <More onClose={() => setShowMore(false)}>{children}</More>}
    </>
  );
};

export default MoreButton;
