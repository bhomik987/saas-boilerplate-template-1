import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function generateWithProgress(prompt, onProgress) {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Start the generation
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Simulate progress updates (in a real implementation, you might want to use streaming)
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress <= 100) {
        onProgress(progress);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return text;
  } catch (error) {
    console.error('Error generating content with Gemini:', error);
    throw error;
  }
}

// Example usage:
// const text = await generateWithProgress("Your prompt here", (progress) => {
//   console.log(`Progress: ${progress}%`);
// }); 