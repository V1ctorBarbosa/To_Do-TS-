import React from "react";
import { Fade, Container } from "./ModalStyles" 

interface Props {
  children: React.ReactNode;
  title: string;
}



const Modal = ({ children, title }: Props) => {


  return (
    <div>
      <Fade></Fade>
      <Container>
        <h2>{title}</h2>
        <>{children}</>
      </Container>
    </div>
  )
}

export default Modal