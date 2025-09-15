import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 12px;
`;

export const ModalContainer = styled.div`
  background: rgba(255, 255, 255, 0.96);
  border-radius: 14px;
  width: 100%;
  max-width: 360px;
  padding: 18px 20px;
  position: relative;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
  font-family: "Inter", sans-serif;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f1f1f1;
  border: none;
  font-size: 18px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    background: #e2e8f0;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 14px;
  color: #1e293b;
`;

export const Label = styled.label`
  display: block;
  font-size: 12.5px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #475569;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 11px;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  font-size: 13.5px;
  margin-bottom: 12px;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1.5px rgba(37, 99, 235, 0.25);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px 11px;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  font-size: 13.5px;
  resize: none;
  margin-bottom: 12px;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1.5px rgba(37, 99, 235, 0.25);
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 12px;
`;

export const DropdownHeader = styled.div`
  padding: 8px 11px;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  font-size: 13.5px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  width: 100%;
  max-height: 120px; /* Scrollable */
  overflow-y: auto;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  margin: 0;
  padding: 4px 0;
  list-style: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

export const DropdownItem = styled.li`
  padding: 7px 11px;
  font-size: 13.5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

export const HighlightNumber = styled.div`
  margin: 12px 0;
  padding: 10px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  font-weight: 600;
  background: #f1f5f9;
  border-radius: 7px;
  color: #2563eb;
  border: 1px dashed #2563eb;
  line-height: 1.4;
  text-align: center;

  svg {
    flex-shrink: 0;
  }
`;



export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: transform 0.15s, opacity 0.2s;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`;
