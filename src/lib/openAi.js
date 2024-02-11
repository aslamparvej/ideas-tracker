// Import OpenAI
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: `${import.meta.env.VITE_OPENAI_API_KEY}`, // This is the default and can be omitted
  //apiKey: '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', // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });

  console.log(chatCompletion);
}

export default main;
