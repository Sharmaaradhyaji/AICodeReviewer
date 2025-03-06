import generateContent from "../services/ai.service.js"

const getAiReview = async (req, res) => {

    const code = req.body.code; 

    if (!code) {
        return res.status(400).json({ error: "code is required" });
    }

    try {
        const response = await generateContent(code);
        res.send(response);
    } catch (error) {
        console.error("Error in getAiResponse:", error);
        return res.status(500).json({ error: "Failed to get AI response" });
    }
};

export default getAiReview;  