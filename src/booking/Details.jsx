import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField } from "@mui/material";
import { setBooking } from "./services/bookingService";

export default function Details() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = booking => {
    setBooking(booking)
      .then(() => navigate('../document'))
      .catch(() => console.log('Failed to save booking'));
  }

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="Name"
            fullWidth
            autoFocus
            {...register('name', { required: true })}
            error={!!errors?.name}
          />
        </Box>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="Surname"
            fullWidth
            {...register('surname', { required: true })}
            error={!!errors?.surname}
          />
        </Box>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            {...register('email', { required: true })}
            error={!!errors?.email}
          />
        </Box>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="Passport"
            fullWidth
            {...register('passport', { required: true })}
            error={!!errors?.passport}
          />
        </Box>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="Price"
            fullWidth
            {...register('price', { required: true })}
            error={!!errors?.price}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </form>
    </Container>
  );
}
