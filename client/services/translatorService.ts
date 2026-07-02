const API_URL = "http://localhost:5000/api/translator";

export async function translateText(
  text: string,
  language: string
) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      language,
    }),
  });

  if (!response.ok) {
    throw new Error("Translation failed");
  }

  return response.json();
}