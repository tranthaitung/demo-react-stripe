import React from 'react';
import classNames from 'classnames';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const modalStyles = {
  width: '450px',
};

interface IConfirmModalProps {
  isOpen: boolean;
  isLoading?: boolean;
  header?: string;
  message?: string;
  acceptLabel?: string;
  rejectLabel?: string;
  onHide: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<IConfirmModalProps> = props => {
  const {
    isOpen,
    isLoading = false,
    header = 'Confirm',
    message = '',
    acceptLabel = 'Ok',
    rejectLabel = 'Cancel',
    onConfirm,
    onHide,
  } = props;
  return (
    <Dialog
      visible={isOpen}
      style={modalStyles}
      draggable={false}
      header={header}
      modal
      footer={
        <>
          <Button
            label={acceptLabel}
            onClick={onConfirm}
            disabled={isLoading}
            icon={classNames({ 'pi pi-spin pi-spinner': isLoading })}
          />
          <Button
            label={rejectLabel}
            className="p-button-text p-button-plain p-ml-2"
            onClick={onHide}
            disabled={isLoading}
          />
        </>
      }
      onHide={onHide}
    >
      <div className="p-d-flex p-jc-start p-ai-center">
        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '32px' }} />
        <div>{message}</div>
      </div>
    </Dialog>
  );
};

export default ConfirmModal;
