import * as React from "react";
import { RoadmapStep, RoadmapStyle } from "../../../types";
import { Box, Link, Paper } from "@mui/material";

import { Actions } from "./Actions";
import { useAppDispatch, useAppSelector } from "features/store";
import { setUpdatedStep, removeStep } from "features/roadmap";

const Step = ({ step, index }: { step: RoadmapStep; index: number }) => {
  const [targetId, setTargetId] = React.useState<number | null>(null);

  const { style } = useAppSelector(({ roadmap }) => roadmap);

  const dispatch = useAppDispatch();

  const showActions = () => {
    setTargetId(step?.id);
  };
  const hideActions = () => {
    setTargetId(null);
  };

  const onClickEdit = () => {
    dispatch(setUpdatedStep(step));
  };

  const onClickDelete = () => {
    dispatch(removeStep(targetId));
  };

  return (
    <Box
      className="timeline"
      sx={{
        position: "relative",
        "&::before": {
          borderColor: `${step.color.before}!important`,
        },
        "&::after": {
          borderColor: `${step.color.after}!important`,
        },
      }}
      onMouseEnter={showActions}
      onMouseLeave={hideActions}
    >
      <Link
        href="#"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          textDecoration: "none",
        }}
      >
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent={index % 2 === 0 ? "start" : "end"}
        >
          <h2
            style={{
              fontSize: "48px",
              marginLeft: index % 2 === 0 ? "68px" : "0",
              marginRight: index % 2 === 0 ? "0" : "68px",
              color: style.colors.date,
            }}
          >
            {step.month + " " + step.year}
          </h2>
        </Box>
        <Box flex={1} px={4}>
          <h3 style={{ color: style.colors.title }}>{step.title}</h3>
          <p style={{ color: style.colors.description }}>{step.description}</p>
        </Box>
      </Link>

      {targetId === step.id && (
        <Actions
          index={index}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />
      )}
    </Box>
  );
};

export default Step;
