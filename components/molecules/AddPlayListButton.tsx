"use client";

import { useState } from "react";

import { IconButton, Tooltip } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

import { AppForm, AppModal } from ".";

import submitNewPlaylist from "@/app/actions";
import { newPlaylistFormFields } from "@/lib/utils";

export default function AddPlayListButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={async ()=>{
        const response = await fetch('/api/test', {method: 'POST'})
        const body = await response.text();
        console.log(body);
      }}>test edge function</button>
      <Tooltip title="Add new playlist">
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={handleOpen}
        >
          <PlaylistAddIcon />
        </IconButton>
      </Tooltip>
      <AppModal open={open} handleClose={handleClose}>
        <AppForm
          fields={newPlaylistFormFields}
          handleSubmit={async (formData) => {
            const data = await submitNewPlaylist(formData);
            console.log({ msg: data.msg });
            handleClose();
          }}
          submitOptions={{
            loading: false,
            label: "Create playlist",
          }}
        />
      </AppModal>
    </>
  );
}
