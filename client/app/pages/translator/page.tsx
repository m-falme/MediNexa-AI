"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { translateText } from "@/services/translatorService";
import {
  Languages,
  Copy,
  Volume2,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function TranslatorPage() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("Swahili");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const languages = [
    "Swahili",
    "Kikuyu",
    "Luo",
    "Luhya",
    "Kalenjin",
    "Kamba",
    "Somali",
    "English",
  ];

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);

    try {
      const response = await translateText(
        inputText,
        language
      );

      setTranslatedText(response.translation);
    } catch (error) {
      setTranslatedText(
        "Unable to translate. Please try again."
      );
    }

    setLoading(false);
  };

  const handleCopy = async () => {
    if (!translatedText) return;

    await navigator.clipboard.writeText(translatedText);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleSpeak = () => {
    if (!translatedText) return;

    const speech = new SpeechSynthesisUtterance(
      translatedText
    );

    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
  };

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
            Medical Translator
          </h1>

          <p className="text-slate-500 mt-2">
            Translate doctor's instructions into simple local
            languages for easier understanding.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT PANEL */}

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8">

            <div className="flex items-center gap-3 mb-6">

              <Languages
                size={30}
                className="text-blue-600"
              />

              <h2 className="text-2xl font-semibold">
                Doctor's Instructions
              </h2>

            </div>

            <label className="font-medium">
              Select Language
            </label>

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value)
              }
              className="w-full mt-2 mb-6 border rounded-xl p-3"
            >
              {languages.map((lang) => (
                <option key={lang}>
                  {lang}
                </option>
              ))}
            </select>

            <label className="font-medium">
              Medical Instructions
            </label>

            <textarea
  rows={10}
  value={inputText}
  onChange={(e) => setInputText(e.target.value)}
  placeholder="Paste the doctor's instructions here..."
  className="w-full mt-2 border border-slate-300 rounded-2xl p-4 resize-none outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-slate-800 dark:text-white relative z-10"
/>
                       <button
              onClick={handleTranslate}
              disabled={loading}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-3 transition"
            >
              {loading ? (
                <>
                  <Loader2
                    size={22}
                    className="animate-spin"
                  />
                  Translating...
                </>
              ) : (
                <>
                  <Languages size={22} />
                  Translate Instructions
                </>
              )}
            </button>

          </div>

          {/* RIGHT PANEL */}

          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-semibold">
                Translation
              </h2>

              <div className="flex gap-3">

                <button
                  onClick={handleCopy}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl p-3 transition"
                >
                  {copied ? (
                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />
                  ) : (
                    <Copy size={20} />
                  )}
                </button>

                <button
                  onClick={handleSpeak}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl p-3 transition"
                >
                  <Volume2 size={20} />
                </button>

              </div>

            </div>

            <div className="min-h-[420px] rounded-2xl border bg-slate-50 dark:bg-slate-800 p-6 whitespace-pre-wrap leading-8 text-lg">

              {translatedText ? (
                translatedText
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400">

                  <Languages
                    size={70}
                    className="mb-5"
                  />

                  <p className="text-center">
                    Your translated medical instructions
                    will appear here.
                  </p>

                </div>
              )}

            </div>

            {translatedText && (

              <div className="mt-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-5">

                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                  MediNexa AI Note
                </h3>

                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                  This translation is intended to help patients
                  better understand medical instructions. It
                  does not replace professional medical advice.
                </p>

              </div>

            )}

          </div>

        </div>      </div>

    </DashboardLayout>
  );
}