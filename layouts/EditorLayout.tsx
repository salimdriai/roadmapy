import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const drawerWidth = 400;

const drawerStyle = {
  display: { xs: "none", sm: "block" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
    p: 3,
  },
};
interface Props {
  form: React.ReactNode;
  preview: React.ReactNode;
}

export const EditorLayout = (props: Props) => {
  const { form, preview } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer variant="permanent" sx={drawerStyle} open>
          <Box>
            <IconButton LinkComponent={Link} href="/" edge="start">
              <KeyboardBackspaceIcon />
            </IconButton>
          </Box>

          {form}
        </Drawer>
      </Box>
      <Box
        component="main"
        py={4}
        px={10}
        flex={1}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {preview}
      </Box>
    </Box>
  );
};
