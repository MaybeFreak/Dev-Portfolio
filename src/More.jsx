import { gsap } from "gsap";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const More = ({ onClose, children }) => {
  const tl = new gsap.timeline();

  useEffect(() => {
    tl.to(".modal", { opacity: 1, duration: 0.5 });
  });

  const handleClose = () => {
    tl.to(".modal", { opacity: 0, duration: 0.5 });
    tl.call(onClose);
  };

  return createPortal(
    <div className="modal" onClick={() => handleClose()}>
      <div className="modalContent">{children}</div>
    </div>,
    document.getElementById("root")
  );
};

export default More;
