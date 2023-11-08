import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { ColorPicker } from "components";
import { useAppDispatch, useAppSelector } from "features/store";
import { updateStyle } from "features/roadmap";

export const ColorInputWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 0px",
});

const RoadmapStylesForm: React.FunctionComponent = () => {
  const { style } = useAppSelector(({ roadmap }) => roadmap);
  const dispatch = useAppDispatch();

  const setBackgroundColor = (color: string) => {
    dispatch(
      updateStyle({ colors: { ...style.colors, backgroundColor: color } })
    );
  };
  const setTitleColor = (color: string) => {
    dispatch(updateStyle({ colors: { ...style.colors, title: color } }));
  };
  const setDateColor = (color: string) => {
    dispatch(updateStyle({ colors: { ...style.colors, date: color } }));
  };
  const setDescriptionColor = (color: string) => {
    dispatch(updateStyle({ colors: { ...style.colors, description: color } }));
  };

  return (
    <div>
      <Typography variant="h6">Styles</Typography>
      <Stack spacing={2}>
        <ColorInputWrapper>
          <Typography>Background color</Typography>
          <ColorPicker
            color={style.colors.backgroundColor}
            setColor={setBackgroundColor}
          />
        </ColorInputWrapper>

        <ColorInputWrapper>
          <Typography>Title color</Typography>
          <ColorPicker color={style.colors.title} setColor={setTitleColor} />
        </ColorInputWrapper>

        <ColorInputWrapper>
          <Typography>Date color</Typography>
          <ColorPicker color={style.colors.date} setColor={setDateColor} />
        </ColorInputWrapper>

        <ColorInputWrapper>
          <Typography>Desctiption color</Typography>
          <ColorPicker
            color={style.colors.description}
            setColor={setDescriptionColor}
          />
        </ColorInputWrapper>
      </Stack>
    </div>
  );
};

export default RoadmapStylesForm;
