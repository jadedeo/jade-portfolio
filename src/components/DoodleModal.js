import React from "react";

// components
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

const DoodleModal = ({ onClose, open, image }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "900px",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          overflow: "hidden",
        }}
        className="gap-5"
      >
        <div
          style={{
            maxWidth: "50%",
            height: "auto",
            flexGrow: 0,
            flexShrink: 1,
          }}
        >
          <img
            src={image.imagePath}
            alt={image.title}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div style={{ flexGrow: 1, flexShrink: 1, overflowY: "auto" }}>
          <DialogActions>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </DialogActions>
          <div className="h-full flex flex-col mt-5">
            <DialogTitle
              sx={{
                padding: 0,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
              }}
            >
              {image.title}
            </DialogTitle>
            <p>{image.subtitle}</p>
            <hr className="my-3" />
            <p
              className="flex flex-col gap-3"
              dangerouslySetInnerHTML={{ __html: image.description }}
            ></p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoodleModal;
