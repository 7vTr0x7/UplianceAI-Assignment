import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { User, UserFormData, UserFormDataProps } from "../types/user.types";

const UserForm: React.FC<UserFormDataProps> = ({ setUserData, userData }) => {
  const initialFormState: User = {
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const [formData, setFormData] = useState<User>(userData || initialFormState);
  const [initialData, setInitialData] = useState<UserFormData>(
    userData || initialFormState
  );
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (userData) {
      setFormData(userData);
      setInitialData(userData);
      setIsDirty(false);
    }
  }, [userData]);

  useEffect(() => {
    const hasChanges: boolean =
      JSON.stringify(formData) !== JSON.stringify(initialData);
    setIsDirty(hasChanges);

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [formData, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSave = {
      ...formData,
      id: formData.id || uuidv4(),
    };

    setUserData(dataToSave);
    setInitialData(dataToSave);
    setIsDirty(false);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {isDirty && <Alert severity="warning">You have unsaved changes</Alert>}

        {formData.id && (
          <TextField
            label="User ID"
            value={formData.id}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}

        <TextField
          required
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={2}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}>
          Save User Data
        </Button>
      </Stack>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="User data saved successfully"
      />
    </Box>
  );
};

export default UserForm;
