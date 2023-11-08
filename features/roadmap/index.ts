import { createSlice } from "@reduxjs/toolkit";
import { RoadmapStep, RoadmapStyle } from "types";

interface InitialState {
  roadmap: RoadmapStep[];
  style: RoadmapStyle;
  udaptedStep: RoadmapStep | null;
}

const initialState: InitialState = {
  roadmap: [],
  style: {
    colors: {
      title: "#3590F3",
      date: "#C2BBF0",
      description: "#888787",
      backgroundColor: "#FFFFFF",
    },
  },
  udaptedStep: null,
};

const roadmapSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {
    addStep: (state, action) => {
      const newStep = { ...action.payload, id: state.roadmap.length };
      state.roadmap = [...state.roadmap, newStep];
    },

    updateStep: (state, action) => {
      const updatedRoadmap = state.roadmap.map((step) =>
        step.id === action.payload.id ? action.payload : step
      );
      state.roadmap = updatedRoadmap;
    },

    removeStep: (state, action) => {
      const updatedRoadmap = state.roadmap.filter(
        (step) => step.id !== action.payload
      );
      state.roadmap = updatedRoadmap;
    },

    updateStyle: (state, action) => {
      state.style = action.payload;
    },

    setUpdatedStep: (state, action) => {
      state.udaptedStep = action.payload;
    },
  },
});

export const { addStep, updateStep, removeStep, updateStyle, setUpdatedStep } =
  roadmapSlice.actions;

export default roadmapSlice.reducer;
