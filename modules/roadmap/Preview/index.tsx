import * as React from "react";
import Typography from "@mui/material/Typography";

import Step from "../Step";
import { RoadmapStep, RoadmapStyle } from "../../../types";
import { useAppDispatch, useAppSelector } from "features/store";

const Preview = () => {
  const { roadmap } = useAppSelector((state) => state.roadmap);

  if (!roadmap.length)
    return <Typography align="center">create your first step</Typography>;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="main-timeline">
            {roadmap.map((step, index) => {
              return <Step key={step.id} step={step} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
