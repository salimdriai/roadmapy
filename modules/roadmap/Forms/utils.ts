import { Box, styled } from "@mui/material";

export const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "mai",
  "jun",
  "jul",
  "sep",
  "oct",
  "nov",
  "dec",
];

export const years = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
  "2034",
  "2035",
];

export const colors = [
  { before: "#46b2bc", after: "#65c7d0" },
  { before: "#ea3c14", after: "#ef5720" },
  { before: "#8cc63e", after: "#6caf29" },
  { before: "#f99324", after: "#fbb03b" },
  { before: "#0071bd", after: "#0050a3" },
  { before: "#333333", after: "#555555" },
  { before: "#cccccc", after: "#dddddd" },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      //  width: 250,
    },
  },
};

export const ColorInputWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px",
});

export const initialStepState = {
  id: 0,
  title: "",
  month: "",
  year: "",
  description: "",
  color: { before: "#333333", after: "#555555" },
};
