import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 16px;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  padding: 24px 22px;
  position: relative;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
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
  top: 12px;
  right: 12px;
  background: #f8fafc;
  border: none;
  font-size: 18px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
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
  margin-bottom: 18px;
  color: #1e293b;
`;

export const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #475569;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 14px;
  outline: none;
  transition: 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 14px;
  outline: none;
  resize: none;
  transition: 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 14px;
`;

export const DropdownHeader = styled.div`
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s;

  &:hover {
    border-color: #cbd5e1;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

export const DropdownItem = styled.li`
  padding: 9px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f1f5f9;
  }
`;

export const HighlightNumber = styled.div`
  margin: 14px 0;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  background: #f8fafc;
  border-radius: 10px;
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
  background: #2563eb;
  color: white;
  padding: 14px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
  }
`;
