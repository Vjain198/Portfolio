import * as React from "react";

import Modal from "@mui/material/Modal";

export default function BasicModal({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
  children: React.JSX.Element;
}) {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px]">
          {children}
        </div>
      </Modal>
    </>
  );
}
