import React, { useState, useRef } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";
import shareIcon from "../static/share-social-outline.svg";

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ShareDivStyle = styled.div`
  align-self: flex-end;

  button {
    background-color: Transparent;
    border: none;
    cursor: pointer;
  }

  img {
    padding-right: 10px;
    height: 20px;
    width: 20px;
  }
`;

type ShareModalButtonProps = {
  shortUrl: string;
};

export default function ShareModalButton({ shortUrl }: ShareModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const textInputRef = useRef<any>(null);

  function toggleModal(e: any) {
    setIsOpen(!isOpen);
    setCopySuccess(false);
  }

  function copyToClipboard(e: any) {
    if (textInputRef) {
      textInputRef.current.select();
      document.execCommand("copy");
      setCopySuccess(true);
    }
  }

  return (
    <ShareDivStyle>
      <button onClick={toggleModal}>
        <img src={shareIcon} alt="Share"></img>
      </button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <label htmlFor="shortUrl">Share with a friend!</label>
        <input
          type="text"
          id="shortUrl"
          name="shortUrl"
          readOnly
          ref={textInputRef}
          value={shortUrl}
        />
        <button onClick={copyToClipboard}>Copy</button>

        {copySuccess ? <p>Copied!</p> : null}
      </StyledModal>
    </ShareDivStyle>
  );
}
