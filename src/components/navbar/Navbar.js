import { Button, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <div style={{ background: "black" }}>
      <Button variant="text">
        <Typography variant="body2" style={{ color: "white" }}>
          Libros
        </Typography>
      </Button>
      <Button variant="text">
        <Typography variant="body2" style={{ color: "white" }}>
          E-books
        </Typography>
      </Button>
    </div>
  );
};
