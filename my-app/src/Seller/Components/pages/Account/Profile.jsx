import React, { useState } from "react";
import { Edit } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Modal, Typography } from "@mui/material";
import PersonalDetails from "./PersonalDetails";
import BusinessDetails from "./BusinessDetails";
import PickupAddress from "./PickupAddress";
import BankDetails from "./BankDetails";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState("personalDetails");

  const handleOpen = (formName) => {
    setOpen(true);
    setSelectedForm(formName);
  };

  const handleClose = () => setOpen(false);

  const renderSelectedForm = () => {
    switch (selectedForm) {
      case "personalDetails":
        return <PersonalDetails />;
      case "businessDetails":
        return <BusinessDetails />;
      case "pickupAddress":
        return <PickupAddress />;
      case "bankDetails":
        return <BankDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="lg:px-20 pt-3 pb-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
          <Button
            variant="contained"
            onClick={() => handleOpen("personalDetails")}
            size="small"
            sx={{ borderRadius: "2.9rem" }}
          >
            <Edit />
          </Button>
        </div>
        <div>
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://img.daki.market/uploads/dakimakura_imgs/thumbs/17091-1-fix_500x500.webp"
          />
        </div>
      </div>

      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Business Details</h1>
          <Button
            variant="contained"
            onClick={() => handleOpen("businessDetails")}
            size="small"
            sx={{ borderRadius: "2.9rem" }}
          >
            <Edit />
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Pickup Address</h1>
          <Button
            variant="contained"
            onClick={() => handleOpen("pickupAddress")}
            size="small"
            sx={{ borderRadius: "2.9rem" }}
          >
            <Edit />
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Bank Details</h1>
          <Button
            variant="contained"
            onClick={() => handleOpen("bankDetails")}
            size="small"
            sx={{ borderRadius: "2.9rem" }}
          >
            <Edit />
          </Button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{renderSelectedForm()}</Box>
      </Modal>
    </div>
  );
};

export default Profile;
