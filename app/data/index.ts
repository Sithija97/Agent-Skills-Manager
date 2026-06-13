export type AISkill = {
  id: string;
  name: string;
  description: string;
  created: Date;
  updated: Date;
};

export const mockAISkills: AISkill[] = [
  {
    id: "1",
    name: "Natural Language Processing",
    description: "Advanced NLP capabilities for text analysis, sentiment analysis, and language understanding",
    created: new Date("2024-01-15"),
    updated: new Date("2024-01-20"),
  },
  {
    id: "2",
    name: "Computer Vision",
    description: "Image recognition, object detection, and visual analysis using deep learning models",
    created: new Date("2024-01-10"),
    updated: new Date("2024-01-18"),
  },
  {
    id: "3",
    name: "Machine Learning",
    description: "ML model training, optimization, and deployment with automated hyperparameter tuning",
    created: new Date("2024-01-05"),
    updated: new Date("2024-01-19"),
  },
  {
    id: "4",
    name: "Data Analysis",
    description: "Statistical analysis, data visualization, and pattern recognition from large datasets",
    created: new Date("2024-01-12"),
    updated: new Date("2024-01-21"),
  },
  {
    id: "5",
    name: "Code Generation",
    description: "Automatic code generation, refactoring suggestions, and debugging assistance",
    created: new Date("2024-01-08"),
    updated: new Date("2024-01-17"),
  },
  {
    id: "6",
    name: "Knowledge Retrieval",
    description: "Semantic search, information extraction, and knowledge base querying",
    created: new Date("2024-01-20"),
    updated: new Date("2024-01-22"),
  },
  {
    id: "7",
    name: "Speech Recognition",
    description: "Audio processing, voice-to-text conversion, and speaker identification",
    created: new Date("2024-01-14"),
    updated: new Date("2024-01-19"),
  },
  {
    id: "8",
    name: "Reasoning & Logic",
    description: "Complex problem solving, logical inference, and multi-step reasoning",
    created: new Date("2024-01-11"),
    updated: new Date("2024-01-23"),
  },
];
