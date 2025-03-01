export type LayoutPreference = "Varied" | "Text-Heavy" | "Image-Focused";

export type Language = string; // Language code (e.g., "en", "fr")

export interface GeneratedComponentProps {
    isDownloading: boolean;
    handleDownloadPPT: () => void;
    handleGenerateAgain: () => void;
    pptFile : string
  }
  

export interface PresentationFormProps {
  topic: string;
  numSlides: number;
  setTopic: (value: string) => void;
  setNumSlides: (value: number) => void;
  loading: boolean;
  handleGeneratePPT: () => void;
  layoutPreference: LayoutPreference;
  setLayoutPreference: (value: LayoutPreference) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

export interface GeneratePPTResponse {
    filename: string;
    message: string; 
    pptFile : string
  }