import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { IFormField } from "@/lib/types";

interface Props {
  submitOptions: {
    loading: boolean;
    label: React.ReactNode;
  };
  fields: IFormField[];
  handleSubmit: (formData: FormData) => void;
}

export default function AppForm({
  submitOptions,
  fields,
  handleSubmit,
}: Props) {
  return (
    <Box action={handleSubmit} component="form" sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {fields.map(
          (
            { autoFocus, gridSizes, id, label, rows, placeholder, required },
            idx
          ) => {
            return (
              <Grid key={idx} item {...gridSizes}>
                <TextField
                  autoFocus={autoFocus}
                  fullWidth
                  id={id}
                  label={label}
                  rows={rows}
                  multiline={!!rows}
                  name={id}
                  placeholder={placeholder}
                  required={required}
                />
              </Grid>
            );
          }
        )}
      </Grid>
      <Box sx={{ position: "relative" }}>
        <Button
          disabled={submitOptions.loading}
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          type="submit"
          variant="outlined"
        >
          {submitOptions.label}
        </Button>
        {submitOptions.loading && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-9px",
              marginLeft: "-15px",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
