import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

interface StepColorProps {
  selected: { before: string; after: string };
}

export const StepColor: React.FunctionComponent<StepColorProps> = ({
  selected,
}) => {
  return (
    <Stack direction="row" justifyContent="center">
      <Box
        sx={{
          p: 2,
          backgroundColor: selected.before,
          borderRadius: "12px 0px 0px 12px",
        }}
      />
      <Box
        sx={{
          p: 2,
          backgroundColor: selected.after,
          borderRadius: "0px 12px 12px 0px",
        }}
      />
    </Stack>
  );
};
