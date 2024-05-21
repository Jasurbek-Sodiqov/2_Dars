import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ height: "20px" }} />}
          sx={{
            border: "none",
            boxShadow: "none",
            height: "32px",
            overflow: "hidden",
          }}
        >
          <Avatar sx={{ bgcolor: "rgba(0, 98, 255, 1)" }}></Avatar>
          <Typography
            sx={{ height: "14px", mt: "10px", ml: "10px", mr: "18px" }}
          >
            Austin Robertson
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ position: "absolute" }}>
          <Typography sx={{ position: "absolute" }}>
            <h1>New Name</h1>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ display: "none" }}>
        <AccordionSummary></AccordionSummary>
      </Accordion>
    </div>
  );
}
