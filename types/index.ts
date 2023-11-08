export interface RoadmapStep {
  id: number;
  title: string;
  month: string;
  year: string;
  description: string;
  color: { before: string; after: string };
}

export interface RoadmapStyle {
  colors: {
    title: string;
    date: string;
    description: string;
    backgroundColor: string;
  };
}
