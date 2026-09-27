import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  const SYSTEM_INSTRUCTION = `You are the official AI Client Consultant & Solutions Architect for Ayaan Digital, a premium web engineering and digital agency founded by Ayaan Rangrez.

ABOUT AYAAN DIGITAL:
- Founder & Principal Engineer: Ayaan Rangrez
- Contact Email: ayaanrangrezz1032008@gmail.com
- GitHub: https://github.com/ayaanrangrerz
- What we do: High-performance modern web apps, high-converting commercial landing pages, custom enterprise SaaS, responsive user experiences, search engine optimization (SEO), and custom AI workflows (Gemini API integrations).
- Core Tech Stack: React 19, TypeScript, Tailwind CSS, Vite, Node.js, Express, PostgreSQL / Cloud SQL, Firebase, Framer Motion, Three.js 3D visualizations, Google GenAI SDK.
- Service Packages:
  1. Starter Launch ($299 / ₹24,999): Single or multi-section high-converting landing page, responsive design, fast performance, on-page SEO, standard contact transmission. Delivered in 3-5 days.
  2. Growth Business ($699 / ₹54,999): Complete 5-8 page business web application, CMS/blog or portfolio archive, custom interactivity, local SEO optimization, analytics integration, 30-day post-launch support. Delivered in 1-2 weeks.
  3. Custom Full-Stack ($1,299 / ₹99,999): Complex web applications, full database persistence (SQL/NoSQL), authentication (Auth), server API routes, real-time features, AI-powered tools or assistants, dedicated architectural consultation. Delivered in 2-4 weeks.
  4. Enterprise Custom: Dedicated architectural retainers, custom AI automation agents, bespoke design systems, high-availability deployments.

YOUR ROLE & TONE:
- Be friendly, professional, articulate, and technical yet accessible.
- Assist prospective clients in clarifying their digital needs, scoping feature requirements, estimating timelines, and choosing the optimal package.
- Highlight Ayaan's engineering quality, clean code discipline, modern performance benchmarks, and transparency.
- Provide clear answers with bullet points where appropriate.
- Always provide actionable next steps: invite the user to submit an inquiry through the contact form or email Ayaan directly at ayaanrangrezz1032008@gmail.com for a formal quotation or kick-off call.
- Keep responses concise, structured, and focused on value (aim for 2-4 short paragraphs or bullet lists).`;

  // Multi-turn Gemini chat consultation endpoint
  app.post('/api/consultation/chat', async (req, res) => {
    try {
      const { messages } = req.body;

      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages array is required.' });
      }

      // Format conversation history for Gemini API
      const contents = messages.map((m: { role: 'user' | 'assistant' | 'model'; content: string }) => ({
        role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      // Check if API key is present
      if (!process.env.GEMINI_API_KEY) {
        // Fallback friendly message if key not configured yet
        return res.json({
          reply: `Hello! I am Ayaan Digital's AI Consultant. I am ready to help you plan your website or application. You can explore our Starter Launch ($299), Growth Business ($699), or Custom Full-Stack ($1,299) packages, or email Ayaan directly at ayaanrangrezz1032008@gmail.com to discuss your project!`,
        });
      }

      let response;
      const candidateModels = ['gemini-flash-latest', 'gemini-2.5-flash', 'gemini-3.8-flash'];
      let lastErr = null;

      for (const candidateModel of candidateModels) {
        try {
          response = await ai.models.generateContent({
            model: candidateModel,
            contents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              temperature: 0.7,
            },
          });
          if (response && response.text) {
            break;
          }
        } catch (err) {
          lastErr = err;
          console.warn(`Model ${candidateModel} failed, trying next fallback:`, err);
        }
      }

      if (!response || !response.text) {
        if (lastErr) throw lastErr;
      }

      const reply = response?.text || "I'd be glad to help you scope your project. Feel free to tell me what type of website or software you're looking to build!";

      return res.json({ reply });
    } catch (error: any) {
      console.error('Error generating AI consultation response:', error);
      return res.status(500).json({
        error: error?.message || 'Failed to generate AI consultation response.',
        reply: "I encountered a momentary issue processing that request. Please feel free to send your inquiry directly to Ayaan at ayaanrangrezz1032008@gmail.com, or ask your question again.",
      });
    }
  });

  // Serve static assets in production or Vite middleware in development
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
