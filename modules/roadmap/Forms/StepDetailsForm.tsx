import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";

import { RoadmapStep } from "types";
import { TextArea } from "components";
import { setUpdatedStep, updateStep } from "features/roadmap";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "features/store";
import { addStep } from "features/roadmap";
import { StepColor } from "./StepColor";
import {
  MenuProps,
  years,
  months,
  colors,
  initialStepState,
  ColorInputWrapper,
} from "./utils";

const StepDetailsForm = () => {
  const { udaptedStep } = useAppSelector(({ roadmap }) => roadmap);
  const dispatch = useAppDispatch();

  const { control, reset, handleSubmit } = useForm({
    defaultValues: initialStepState,
  });

  const submit = (step: RoadmapStep) => {
    if (udaptedStep) {
      dispatch(updateStep(step));
      reset(initialStepState);
      dispatch(setUpdatedStep(null));
      return;
    }
    dispatch(addStep(step));
    reset(initialStepState);
  };

  const resetResetForm = () => {
    reset(initialStepState);
  };

  React.useEffect(() => {
    if (udaptedStep) {
      reset(udaptedStep);
    }
  }, [udaptedStep]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Typography gutterBottom variant="h6">
        Step details
      </Typography>

      <Stack spacing={2}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              size="small"
              {...field}
              label="title"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Stack direction="row" spacing={2}>
          <FormControl fullWidth size="small">
            <InputLabel>month</InputLabel>
            <Controller
              control={control}
              name="month"
              render={({ field }) => (
                <Select
                  {...field}
                  onChange={(event) => {
                    const value = event.target.value;
                    field.onChange(value);
                  }}
                  label="month"
                  MenuProps={MenuProps}
                >
                  {months.map((month: string) => (
                    <MenuItem value={month}>{month.toUpperCase()}</MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel>year</InputLabel>
            <Controller
              control={control}
              name="year"
              render={({ field }) => (
                <Select
                  {...field}
                  onChange={(event) => {
                    const value = event.target.value;
                    field.onChange(value);
                  }}
                  label="year"
                  MenuProps={MenuProps}
                >
                  {years.map((year: string) => (
                    <MenuItem value={year}>{year}</MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Stack>

        <Controller
          control={control}
          name="description"
          render={({ field }) => <TextArea {...field} label="description" />}
        />

        <ColorInputWrapper>
          <Typography>Shape Color</Typography>
          <Stack direction="row" spacing={2}>
            <FormControl size="small" sx={{ width: "140px" }}>
              <InputLabel>color</InputLabel>
              <Controller
                control={control}
                name="color"
                render={({ field }) => (
                  <Select
                    {...field}
                    onChange={(event) => {
                      const value = event.target.value;
                      field.onChange(value as any);
                    }}
                    size="small"
                    label="color"
                    MenuProps={MenuProps}
                    renderValue={(selected) => (
                      <StepColor selected={selected} />
                    )}
                  >
                    {colors.map((color) => (
                      <MenuItem
                        value={color as any}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <StepColor selected={color} />
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Stack>
        </ColorInputWrapper>
        <Box>
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
          >
            {udaptedStep ? "Update Step" : "Add Step"}
          </Button>

          <Link
            component="button"
            type="button"
            onClick={resetResetForm}
            color="primary"
          >
            reset
          </Link>
        </Box>
      </Stack>
    </form>
  );
};

export default StepDetailsForm;
