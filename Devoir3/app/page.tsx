"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Info } from "lucide-react"
import GameBoard from "@/components/game-board"
import DesignInfo from "@/components/design-info"

const THEME_STYLES = {
  neon: {
    background: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
    cardBg: "bg-black/40 backdrop-blur-sm border-cyan-500/30",
    primaryButton:
      "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/30",
    secondaryButton:
      "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-cyan-200 bg-black/20",
    accent: "text-cyan-400",
    title: "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
  },
  nature: {
    background: "bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900",
    cardBg: "bg-black/40 backdrop-blur-sm border-green-500/30",
    primaryButton:
      "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white shadow-lg shadow-green-500/25 hover:shadow-green-400/30",
    secondaryButton:
      "border-green-500/50 text-green-300 hover:bg-green-500/20 hover:border-green-300 hover:text-green-200 bg-black/20",
    accent: "text-green-400",
    title: "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent",
  },
  sunset: {
    background: "bg-gradient-to-br from-orange-900 via-red-900 to-pink-900",
    cardBg: "bg-black/40 backdrop-blur-sm border-orange-500/30",
    primaryButton:
      "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-400/30",
    secondaryButton:
      "border-orange-500/50 text-orange-300 hover:bg-orange-500/20 hover:border-orange-300 hover:text-orange-200 bg-black/20",
    accent: "text-orange-400",
    title: "bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent",
  },
  ocean: {
    background: "bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900",
    cardBg: "bg-black/40 backdrop-blur-sm border-blue-500/30",
    primaryButton:
      "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30",
    secondaryButton:
      "border-blue-500/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-300 hover:text-blue-200 bg-black/20",
    accent: "text-blue-400",
    title: "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent",
  },
}

export default function Home() {
  const [currentView, setCurrentView] = useState<"menu" | "game" | "design">("menu")
  const [gameConfig, setGameConfig] = useState({
    level: "beginner",
    theme: "neon",
  })

  const currentTheme = THEME_STYLES[gameConfig.theme as keyof typeof THEME_STYLES]

  const startGame = (level: string, theme: string) => {
    setGameConfig({ level, theme })
    setCurrentView("game")
  }

  if (currentView === "game") {
    return <GameBoard config={gameConfig} onBack={() => setCurrentView("menu")} />
  }

  if (currentView === "design") {
    return <DesignInfo onBack={() => setCurrentView("menu")} />
  }

  return (
    <div
      className={`min-h-screen ${currentTheme.background} flex items-center justify-center p-4 transition-all duration-500`}
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Brain className={`w-16 h-16 ${currentTheme.accent} mr-4`} />
            <h1 className={`text-6xl font-bold ${currentTheme.title}`}>NEXUS</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Challenge your spatial memory and attention with dynamic pattern sequences. Watch, remember, and reproduce
            the glowing patterns to advance through levels.
          </p>
        </div>

        {/* Game Configuration */}
        <Card className={`${currentTheme.cardBg} p-8 mb-8 transition-all duration-500`}>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Configure Your Challenge</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Level Selection */}
            <div>
              <h3 className={`text-lg font-semibold ${currentTheme.accent} mb-4`}>Difficulty Level</h3>
              <div className="space-y-3">
                {[
                  { id: "beginner", name: "Beginner", desc: "3x3 grid, 3-4 sequence length" },
                  { id: "intermediate", name: "Intermediate", desc: "4x4 grid, 4-6 sequence length" },
                  { id: "advanced", name: "Advanced", desc: "5x5 grid, 6-8 sequence length" },
                  { id: "expert", name: "Expert", desc: "6x6 grid, 8-10 sequence length" },
                ].map((level) => (
                  <div
                    key={level.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      gameConfig.level === level.id
                        ? `border-${gameConfig.theme === "neon" ? "cyan" : gameConfig.theme === "nature" ? "green" : gameConfig.theme === "sunset" ? "orange" : "blue"}-400 bg-${gameConfig.theme === "neon" ? "cyan" : gameConfig.theme === "nature" ? "green" : gameConfig.theme === "sunset" ? "orange" : "blue"}-400/10`
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                    onClick={() => setGameConfig((prev) => ({ ...prev, level: level.id }))}
                  >
                    <div className="text-white font-medium">{level.name}</div>
                    <div className="text-gray-400 text-sm">{level.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme Selection */}
            <div>
              <h3 className={`text-lg font-semibold ${currentTheme.accent} mb-4`}>Visual Theme</h3>
              <div className="space-y-3">
                {[
                  { id: "neon", name: "Neon Cyber", colors: ["bg-cyan-500", "bg-purple-500", "bg-pink-500"] },
                  { id: "nature", name: "Forest Glow", colors: ["bg-green-500", "bg-emerald-500", "bg-teal-500"] },
                  { id: "sunset", name: "Sunset Vibes", colors: ["bg-orange-500", "bg-red-500", "bg-yellow-500"] },
                  { id: "ocean", name: "Deep Ocean", colors: ["bg-blue-500", "bg-indigo-500", "bg-cyan-500"] },
                ].map((theme) => (
                  <div
                    key={theme.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      gameConfig.theme === theme.id
                        ? `border-${theme.id === "neon" ? "cyan" : theme.id === "nature" ? "green" : theme.id === "sunset" ? "orange" : "blue"}-400 bg-${theme.id === "neon" ? "cyan" : theme.id === "nature" ? "green" : theme.id === "sunset" ? "orange" : "blue"}-400/10`
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                    onClick={() => setGameConfig((prev) => ({ ...prev, theme: theme.id }))}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-white font-medium">{theme.name}</div>
                      <div className="flex space-x-1">
                        {theme.colors.map((color, i) => (
                          <div key={i} className={`w-4 h-4 rounded-full ${color}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              onClick={() => startGame(gameConfig.level, gameConfig.theme)}
              className={currentTheme.primaryButton}
            >
              Start Game
            </Button>
            <Button variant="outline" onClick={() => setCurrentView("design")} className={currentTheme.secondaryButton}>
              <Info className="w-4 h-4 mr-2" />
              Design Info
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-400">
          <p>Test your cognitive abilities • Spatial Memory • Working Memory • Attention</p>
        </div>
      </div>
    </div>
  )
}
