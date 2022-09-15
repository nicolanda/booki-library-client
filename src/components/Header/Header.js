import { Button, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const Header = () => {
  /*
  todo: add funtionality to the search button
  todo: add buttons funtionality
  todo: add conditional rendering to the admin show and hide buttons
  */


  return (
    <div>
      <div
        style={{
          backgroundColor: "#232020",
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
          gap: ".5rem",
        }}
      >
        <Link to="/user/login" style={{ textDecoration: 'none'}}>
        <Button
          size="small"
          variant="outlined"
          sx={{ mt: 1, mb: 1 }}
          style={{
            color: "white",
            borderColor: "white",
            textTransform: "none",
          }}
        >
          Inicio Sesion
        </Button>
        </Link>
        <Link to='/user/register' style={{ textDecoration: 'none'}} >
          <Button
            size="small"
            variant="outlined"
            sx={{ mt: 1, mb: 1, mr: 1 }}
            style={{
              color: "white",
              borderColor: "white",
              textTransform: "none",
            }}
          >
            Registro
          </Button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#776d6d",
        }}
      >
        <div
          style={{
            fontFamily: "Roboto",
            color: "white",
            textWeight: "black",
            fontStyle: "italic",
            fontSize: ".8rem",
            width: "7rem",
            paddingLeft: "1rem",
          }}
        >
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <h1>Libreria Booki</h1>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "auto",
          }}
        >
          <TextField
            id="filled-basic"
            variant="filled"
            label="Buscar"
            size="small"
            color="grey"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "65%",
            }}
          />
          <IconButton arial-label="search" size="large">
            <SearchIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#c4c4c4",
            borderRadius: "5px",
            marginRight: "1rem",
          }}
        >
          <IconButton arial-label="cart" size="large">
            <ShoppingCartIcon style={{ color: "black" }} />
          </IconButton>
          <div
            style={{
              borderLeft: "1px solid black",
              height: "2rem",
            }}
          />
          <Typography variant="h6" style={{ color: "black", padding: ".5rem" }}>
            00
          </Typography>
        </div>
      </div>
    </div>
  );
};
