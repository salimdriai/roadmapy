import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useAppSelector } from "features/store";
import { Download } from "components";
import { EditorLayout } from "layouts/EditorLayout";
import Preview from "./Preview";
import Forms from "./Forms";

export default function RoadmapGenerator() {
  const { style, roadmap } = useAppSelector(({ roadmap }) => roadmap);

  return (
    <EditorLayout
      form={<Forms />}
      preview={
        <Card elevation={0} variant="outlined" sx={{ flex: 4, p: 2 }}>
          <Download disabled={!roadmap.length} />
          <Box
            sx={{
              mt: 2,
              py: 5,
              px: 2,
              borderRadius: "12px",
              backgroundColor: style.colors.backgroundColor,
              minHeight: "80vh",
            }}
            id="roadmap"
          >
            <Preview />
          </Box>
        </Card>
      }
    />
  );
}
