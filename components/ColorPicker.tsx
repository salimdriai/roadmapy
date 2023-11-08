import * as React from "react";
import { Box, Button, Popover } from "@mui/material";
import { SketchPicker } from "react-color";
import CircleIcon from "@mui/icons-material/Circle";

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

export const ColorPicker = ({ color, setColor }: ColorPickerProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const toggleColorPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color: any) => {
    setColor(color.hex);
  };

  return (
    <Box position="relative">
      <Button
        sx={{
          height: "100%",
          borderColor: "divider",
          width: "120px",
        }}
        color="inherit"
        endIcon={
          <CircleIcon
            sx={{ color, border: "1px solid #ccc", borderRadius: "50%" }}
          />
        }
        aria-describedby={id}
        variant="outlined"
        onClick={toggleColorPicker}
      >
        {color}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SketchPicker color={color} onChange={handleColorChange} />
      </Popover>
    </Box>
  );
};
