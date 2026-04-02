import { AppRoute } from "../index.js";
import G4F from "../../lib/g4f.js";

const g4f = new G4F(process.env.G4F_API_KEY, 'recommendation');

export const route = new AppRoute("/recommendation", "post", async (req, res) => {
  try {
    const { prompt } = req.body;
    const recommendation = await g4f.chat(prompt);
    res.json({ recommendation });
  } catch (error) {
    console.error('Error generating recommendation:', error);
    res.status(500).json({ error: 'Failed to generate recommendation' });
  }
});