import React from "react";
import { Box, Typography, Divider, Paper, Stack } from "@mui/material";
import { UserDetailsProps } from "../types/user.types";

const UserDetails: React.FC<UserDetailsProps> = ({ count, userData }) => {
  return (
    <Stack spacing={2}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Counter Value
        </Typography>
        <Typography variant="h4">{count}</Typography>
      </Paper>

      <Divider />

      {userData ? (
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            User Profile
          </Typography>
          <Box mt={1}>
            <Typography variant="body2">ID: {userData.id}</Typography>
            <Typography variant="body2">Name: {userData.name}</Typography>
            <Typography variant="body2">Email: {userData.email}</Typography>
            <Typography variant="body2">Phone: {userData.phone}</Typography>
            <Typography variant="body2">Address: {userData.address}</Typography>
          </Box>
        </Paper>
      ) : (
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            User Profile
          </Typography>
          <Typography variant="body2" color="text.secondary">
            No user data available
          </Typography>
        </Paper>
      )}
    </Stack>
  );
};

export default UserDetails;
