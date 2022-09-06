import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#776d6d",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "12rem",
          }}
        >
          <IconButton
            aria-label="Linked"
            size="large"
            href="https://www.linkedin.com/in/nicolas-landazabal-73b88966/"
            target="_blank"
            sx={{
              bgcolor: "white",
            }}
          >
            <LinkedInIcon sx={{ color: "#01579b" }} />
          </IconButton>
          <IconButton
            aria-label="Facebook"
            size="large"
            href="https://www.facebook.com/nico.landa.04/"
            target="_blank"
            sx={{
              bgcolor: "white",
            }}
          >
            <FacebookIcon sx={{ color: "#01579b" }} />
          </IconButton>
          <IconButton
            aria-label="Github"
            size="large"
            href="https://github.com/nicolanda"
            target="_blank"
            sx={{
              bgcolor: "white",
            }}
          >
            <GitHubIcon sx={{ color: "black" }} />
          </IconButton>
        </div>
        <div
          style={{
            paddingTop: "1rem",
          }}
        >
          <Typography>
            © 2022 Nicolas Landazabal, derechos reservados.
          </Typography>
        </div>
      </div>
    </div>
  );
};
