import * as React from "react";
import dynamic from "next/dynamic";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const RoadmapStylesForm = dynamic(() => import("./RoadmapStylesForm"), {
  ssr: false,
});
const StepDetailsForm = dynamic(() => import("./StepDetailsForm"), {
  ssr: false,
});

const Form = () => {
  return (
    <Stack spacing={5}>
      <StepDetailsForm />
      <Divider />
      <RoadmapStylesForm />
    </Stack>
  );
};

export default Form;
