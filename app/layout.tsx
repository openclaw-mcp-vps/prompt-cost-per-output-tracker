import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptROI — Track AI Prompt Costs Per Business Outcome',
  description: 'Log AI prompts with business context, track cost-per-conversion across OpenAI, Anthropic and more. Know exactly which prompts drive ROI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b3c07b3f-fe60-4dd3-aafd-36d0f0ee8ed3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
