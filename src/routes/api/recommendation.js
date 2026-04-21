import { AppRoute } from '../index.js'
import OpenAIWrapper from '../../lib/openai.js'

const openai = new OpenAIWrapper(true)

export const route = new AppRoute('/recommendation', 'post', async (req, res) => {
  try {
    const { text } = req.body

    // Validation
    if (!text) {
      return res.status(400).json({ error: 'text is required' })
    }

    const convesation = [
      {
        role: 'system',
        content: 'You are an assistant that provides recommendations for improving lesson plans based on the provided class information and a specific prompt. Your responses should be concise, actionable, and focused on enhancing the quality of the lesson plan.'
      },
      {
        role: 'system',
        content: 'Your answer only contains the recommendation without any additional explanations or comments. The recommendation should be directly related to the provided class information and the prompt, and should aim to improve the lesson plan effectively.'
      },
      {
        role: 'system',
        content: 'You should answer in Indonesian language, and your recommendation should be clear and easy to understand for educators. Focus on providing practical suggestions that can be implemented to enhance the lesson plan.'
      }
    ]

    const response = await openai.setContext(convesation).chat(text)

    res.json({ result: response })
  } catch (error) {
    console.error('Error generating recommendation:', error)
    res.status(500).json({ error: 'Failed to generate recommendation' })
  }
})
