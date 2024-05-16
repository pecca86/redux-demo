import styled from "styled-components";
import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { useCloseModal } from "../hooks/useCloseModal";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(
    --color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();


const Modal = ({ children }) => {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = (name) => setOpenName(name);

  return (
    // The ModalContext.Provider component is a wrapper that provides the context to all its children, in this case the children have access to the openName, close, and open functions through the useContext hook.
    <ModalContext.Provider value={{ openName, close, open }}> 
      {children}
    </ModalContext.Provider>
  );
}

const Open = ({ children, opens }) => {
  const { open } = useContext(ModalContext);

  return (
    cloneElement(children, { onClick: () => open(opens) }) // clones the React component that was passed in and adds the onClick event listener
  );
}

// REACT Portal allows us where in the DOM tree we want to render the modal
// Use this to avoid css conflicts (like overflow hidden etc.)
const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);
  // check if user clicked outside the modal
  const ref = useRef();
  useCloseModal(close, ref);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <div>
          <Button onClick={close}>X</Button>
          {cloneElement(children, { onClose: close })}
        </div>
      </StyledModal>
    </Overlay>,
    document.body // parent element
  )
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;