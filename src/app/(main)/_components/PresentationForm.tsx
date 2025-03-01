import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PresentationFormProps } from "@/types/types";
import Spinner from "@/components/Spinner";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import supportedLanguages from "@/config/languages";


function PresentationForm({
  topic,
  numSlides,
  language,
  setTopic,
  setNumSlides,
  setLanguage,
  loading,
  handleGeneratePPT,
} : PresentationFormProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
      <h2 className="text-center text-lg font-semibold text-blue-400">
        AI-Powered Presentations
      </h2>
      <h1 className="mt-2 text-center text-3xl font-bold">
        Generate Custom PowerPoint Slides
      </h1>
      <p className="mt-2 text-center text-gray-700 dark:text-slate-300">
        Enter a topic, specify the number of slides, and choose a layout preference.
      </p>
      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleGeneratePPT();
        }}
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 gap-3 space-y-3">
            <Label htmlFor="topic">Presentation Topic</Label>
            <Input
              id="topic"
              type="text"
              placeholder="Enter your topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </div>
          <div className="flex-1 gap-3 space-y-3">
            <Label htmlFor="numSlides">Number of Slides</Label>
            <Input
              id="numSlides"
              type="number"
              min="1"
              placeholder="Enter slides count"
              value={numSlides}
              onChange={(e) => setNumSlides(Number(e.target.value))}
              required
            />
          </div>
        </div>


          {/* Dropdown for Language Selection */}
          <div className="mt-4 gap-3 space-y-3">
            <Label>Presentation Language</Label>
            <Select onValueChange={setLanguage} value={language}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {supportedLanguages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        <div className="text-center mt-3">
          <Button type="submit" className="w-full sm:w-auto cursor-pointer">
            {loading ? <Spinner/> : "Generate Presentation"}
          </Button>
        </div>
      </form>
      </div>
    </>
  );
}

export default PresentationForm;
