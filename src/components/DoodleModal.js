import React from "react";

// components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// other imports
import CloseIcon from "@mui/icons-material/Close";

const DoodleModal = ({ onClose, open, image }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%", // Full width but will respect the maxWidth
            maxWidth: "800px", // Adjust maxWidth to fit your design
          },
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex", // Flex container for side-by-side layout
          flexDirection: "row", // Content flows horizontally
          alignItems: "flex-start", // Align items at the start of the flex container
          overflow: "hidden", // Prevents overflow
        }}
        className="gap-5"
      >
        {/* Image container */}
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
        {/* Text content container */}
        <div style={{ flexGrow: 1, flexShrink: 1, overflowY: "auto" }}>
          <DialogActions>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </DialogActions>
          <div className="h-full flex flex-col mt-5">
            <DialogTitle sx={{ padding: 0 }}>{image.title}</DialogTitle>
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
