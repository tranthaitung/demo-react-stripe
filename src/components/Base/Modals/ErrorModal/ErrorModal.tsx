import React from 'react';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const modalStyles = {
  width: '450px',
};

interface IErrorModalProps {
  isOpen: boolean;
  message?: string;
  onHide: () => void;
}

const ErrorModal: React.FC<IErrorModalProps> = props => {
  const { isOpen, message, onHide } = props;
  return (
    <Dialog
      visible={isOpen}
      style={modalStyles}
      draggable={false}
      header="Error"
      modal
      footer={<Button label="Hide" onClick={onHide} />}
      onHide={onHide}
    >
      <div className="p-d-flex p-jc-start p-ai-center">
        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '32px' }} />
        <div>{message}</div>
      </div>
    </Dialog>
  );
};

export default ErrorModal;
