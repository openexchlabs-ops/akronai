"use client"

import { useState } from "react"
import { ArrowUp } from "lucide-react"

export function HeroSection() {
  const [inputValue, setInputValue] = useState("")

  const integrations = [
    { name: "Slack", icon: "🔗", prompt: "Build an agent to manage Slack messages", color: "bg-[#E01E5A]" },
    { name: "Gmail", icon: "📧", prompt: "Create an agent to read and organize my emails", color: "bg-[#EA4335]" },
    { name: "Teams", icon: "👥", prompt: "Build a Teams workflow automation agent", color: "bg-[#0078D4]" },
    { name: "Zapier", icon: "⚙️", prompt: "Create an agent to automate my workflows", color: "bg-[#FF4F00]" },
    { name: "Power", icon: "⚡", prompt: "Build a Power Automate integration agent", color: "bg-[#0078D4]" },
    { name: "Notion", icon: "📝", prompt: "Create an agent to manage my Notion database", color: "bg-[#000000]" },
    { name: "Discord", icon: "💬", prompt: "Build a Discord bot agent", color: "bg-[#5865F2]" },
    { name: "Stripe", icon: "💳", prompt: "Create an agent to handle payments", color: "bg-[#635BFF]" },
    { name: "Google", icon: "🔍", prompt: "Build an agent to search and organize data", color: "bg-[#4285F4]" },
    { name: "Drive", icon: "☁️", prompt: "Create an agent to manage cloud files", color: "bg-[#34A853]" },
    { name: "Figma", icon: "🎨", prompt: "Build an agent to automate design tasks", color: "bg-[#F24E1E]" },
    { name: "Vercel", icon: "▲", prompt: "Create an agent to manage deployments", color: "bg-[#000000]" },
  ]

  const handleIconClick = (prompt: string) => {
    setInputValue(prompt)
  }

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log("Submitted:", inputValue)
    }
  }

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Title and Subtitle */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight font-sans text-balance">
              Workflows for LLMs
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium">Build and deploy AI agent workflows</p>
          </div>

          {/* Integration Icons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
            {integrations.map((integration) => (
              <button
                key={integration.name}
                onClick={() => handleIconClick(integration.prompt)}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-2xl md:text-3xl rounded-lg transition-transform duration-200 cursor-pointer"
                title={integration.prompt}
              >
                {integration.icon}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="w-full max-w-2xl">
            <div className="relative flex items-center bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Ask Sim to build an agent to read my emails..."
                className="flex-1 px-6 py-4 md:py-5 text-base md:text-lg bg-transparent outline-none text-gray-900 placeholder-gray-400 font-sans"
              />
              <button onClick={handleSubmit} className="mr-4 p-2 text-gray-400 cursor-pointer">
                <ArrowUp size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
