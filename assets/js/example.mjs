// Import the OpenAI library
import OpenAI from "openai";

// Create an async function
async function generateHaiku() {
    // Instantiate OpenAI with your API key
    const openai = new OpenAI({
        apiKey: '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', // Ensure you add your OpenAI API key here
    });

    try {
        // Use the OpenAI API to create a chat completion
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: "Write a haiku about recursion in programming." },
            ],
        });

        // Output the response
        console.log(completion.choices[0].message.content);
    } catch (error) {
        // Handle any errors
        console.error("Error generating haiku:", error);
    }
}

// Call the async function
generateHaiku();