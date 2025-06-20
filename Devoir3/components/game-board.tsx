"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Play, RotateCcw, Trophy } from "lucide-react"

interface GameConfig {
  level: string
  theme: string
}

interface GameBoardProps {
  config: GameConfig
  onBack: () => void
}

const LEVEL_CONFIG = {
  beginner: { gridSize: 3, minSequence: 3, maxSequence: 4, speed: 800 },
  intermediate: { gridSize: 4, minSequence: 4, maxSequence: 6, speed: 700 },
  advanced: { gridSize: 5, minSequence: 6, maxSequence: 8, speed: 600 },
  expert: { gridSize: 6, minSequence: 8, maxSequence: 10, speed: 500 },
}

const THEME_COLORS = {
  neon: {
    background: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
    cardBg: "bg-black/40 backdrop-blur-sm border-cyan-500/30",
    primaryButton:
      "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/30",
    secondaryButton:
      "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-cyan-200 bg-black/20",
    accent: "text-cyan-400",
    active: "bg-cyan-400 shadow-lg shadow-cyan-400/50",
    inactive: "bg-gray-800/80 border-2 border-cyan-500/30 hover:border-cyan-400/50",
    wrong: "bg-red-500 shadow-lg shadow-red-500/50",
  },
  nature: {
    background: "bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900",
    cardBg: "bg-black/40 backdrop-blur-sm border-green-500/30",
    primaryButton:
      "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white shadow-lg shadow-green-500/25 hover:shadow-green-400/30",
    secondaryButton:
      "border-green-500/50 text-green-300 hover:bg-green-500/20 hover:border-green-300 hover:text-green-200 bg-black/20",
    accent: "text-green-400",
    active: "bg-green-400 shadow-lg shadow-green-400/50",
    inactive: "bg-gray-800/80 border-2 border-green-500/30 hover:border-green-400/50",
    wrong: "bg-red-500 shadow-lg shadow-red-500/50",
  },
  sunset: {
    background: "bg-gradient-to-br from-orange-900 via-red-900 to-pink-900",
    cardBg: "bg-black/40 backdrop-blur-sm border-orange-500/30",
    primaryButton:
      "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-400/30",
    secondaryButton:
      "border-orange-500/50 text-orange-300 hover:bg-orange-500/20 hover:border-orange-300 hover:text-orange-200 bg-black/20",
    accent: "text-orange-400",
    active: "bg-orange-400 shadow-lg shadow-orange-400/50",
    inactive: "bg-gray-800/80 border-2 border-orange-500/30 hover:border-orange-400/50",
    wrong: "bg-red-500 shadow-lg shadow-red-500/50",
  },
  ocean: {
    background: "bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900",
    cardBg: "bg-black/40 backdrop-blur-sm border-blue-500/30",
    primaryButton:
      "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30",
    secondaryButton:
      "border-blue-500/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-300 hover:text-blue-200 bg-black/20",
    accent: "text-blue-400",
    active: "bg-blue-400 shadow-lg shadow-blue-400/50",
    inactive: "bg-gray-800/80 border-2 border-blue-500/30 hover:border-blue-400/50",
    wrong: "bg-red-500 shadow-lg shadow-red-500/50",
  },
}

export default function GameBoard({ config, onBack }: GameBoardProps) {
  const [gameState, setGameState] = useState<"ready" | "showing" | "playing" | "success" | "failure">("ready")
  const [sequence, setSequence] = useState<number[]>([])
  const [playerSequence, setPlayerSequence] = useState<number[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [activeTile, setActiveTile] = useState<number | null>(null)
  const [wrongTile, setWrongTile] = useState<number | null>(null)

  const levelConfig = LEVEL_CONFIG[config.level as keyof typeof LEVEL_CONFIG]
  const themeColors = THEME_COLORS[config.theme as keyof typeof THEME_COLORS]
  const gridSize = levelConfig.gridSize
  const totalTiles = gridSize * gridSize

  const generateSequence = useCallback(() => {
    const length =
      Math.floor(Math.random() * (levelConfig.maxSequence - levelConfig.minSequence + 1)) + levelConfig.minSequence
    const newSequence = []
    for (let i = 0; i < length; i++) {
      newSequence.push(Math.floor(Math.random() * totalTiles))
    }
    return newSequence
  }, [levelConfig, totalTiles])

  const startRound = useCallback(() => {
    const newSequence = generateSequence()
    setSequence(newSequence)
    setPlayerSequence([])
    setCurrentStep(0)
    setGameState("showing")
    setActiveTile(null)
    setWrongTile(null)
  }, [generateSequence])

  const showSequence = useCallback(() => {
    let step = 0
    const showNext = () => {
      if (step < sequence.length) {
        setActiveTile(sequence[step])
        setTimeout(() => {
          setActiveTile(null)
          step++
          if (step < sequence.length) {
            setTimeout(showNext, levelConfig.speed / 2)
          } else {
            setTimeout(() => setGameState("playing"), levelConfig.speed / 2)
          }
        }, levelConfig.speed)
      }
    }
    showNext()
  }, [sequence, levelConfig.speed])

  useEffect(() => {
    if (gameState === "showing" && sequence.length > 0) {
      showSequence()
    }
  }, [gameState, sequence, showSequence])

  const handleTileClick = (tileIndex: number) => {
    if (gameState !== "playing") return

    const newPlayerSequence = [...playerSequence, tileIndex]
    setPlayerSequence(newPlayerSequence)

    if (tileIndex === sequence[playerSequence.length]) {
      // Correct tile
      setActiveTile(tileIndex)
      setTimeout(() => setActiveTile(null), 200)

      if (newPlayerSequence.length === sequence.length) {
        // Round completed successfully
        setScore((prev) => prev + sequence.length * 10)
        setGameState("success")
        setTimeout(() => {
          setRound((prev) => prev + 1)
          startRound()
        }, 1500)
      }
    } else {
      // Wrong tile
      setWrongTile(tileIndex)
      setGameState("failure")
      setTimeout(() => setWrongTile(null), 1000)
    }
  }

  const resetGame = () => {
    setScore(0)
    setRound(1)
    setGameState("ready")
    setPlayerSequence([])
    setSequence([])
    setActiveTile(null)
    setWrongTile(null)
  }

  return (
    <div className={`min-h-screen ${themeColors.background} p-4 transition-all duration-500`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={onBack} className={themeColors.secondaryButton}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </Button>

          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className={`${themeColors.accent} text-sm`}>Round</div>
              <div className="text-white text-xl font-bold">{round}</div>
            </div>
            <div className="text-center">
              <div className={`${themeColors.accent} text-sm`}>Score</div>
              <div className="text-white text-xl font-bold">{score}</div>
            </div>
          </div>
        </div>

        {/* Game Status */}
        <Card className={`${themeColors.cardBg} p-6 mb-6 transition-all duration-500`}>
          <div className="text-center">
            {gameState === "ready" && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Ready to Start?</h2>
                <p className="text-gray-300 mb-4">
                  Watch the sequence carefully, then reproduce it by clicking the tiles.
                </p>
                <Button onClick={startRound} className={themeColors.primaryButton}>
                  <Play className="w-4 h-4 mr-2" />
                  Start Round {round}
                </Button>
              </div>
            )}

            {gameState === "showing" && (
              <div>
                <h2 className={`text-2xl font-bold ${themeColors.accent} mb-2`}>Watch Carefully!</h2>
                <p className="text-gray-300">Memorize the sequence of {sequence.length} tiles</p>
              </div>
            )}

            {gameState === "playing" && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Your Turn!</h2>
                <p className="text-gray-300">
                  Click the tiles in the correct order ({playerSequence.length}/{sequence.length})
                </p>
              </div>
            )}

            {gameState === "success" && (
              <div>
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  <Trophy className="w-6 h-6 inline mr-2" />
                  Perfect!
                </h2>
                <p className="text-gray-300">+{sequence.length * 10} points! Preparing next round...</p>
              </div>
            )}

            {gameState === "failure" && (
              <div>
                <h2 className="text-2xl font-bold text-red-400 mb-2">Game Over!</h2>
                <p className="text-gray-300 mb-4">
                  Final Score: {score} points in {round} rounds
                </p>
                <div className="space-x-4">
                  <Button onClick={resetGame} className={themeColors.primaryButton}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Play Again
                  </Button>
                  <Button variant="outline" onClick={onBack} className={themeColors.secondaryButton}>
                    Back to Menu
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Game Grid - Fixed sizing and spacing */}
        <div className="flex justify-center">
          <div
            className="grid gap-4 p-8 bg-black/20 rounded-xl backdrop-blur-sm border border-white/10"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
              maxWidth: `${Math.min(600, gridSize * 80 + (gridSize - 1) * 55)}px`,
            }}
          >
            {Array.from({ length: totalTiles }, (_, index) => {
              let tileClass = `w-16 h-16 md:w-20 md:h-20 rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 ${themeColors.inactive}`

              if (activeTile === index) {
                tileClass = `w-16 h-16 md:w-20 md:h-20 rounded-lg cursor-pointer transition-all duration-200 transform scale-110 ${themeColors.active}`
              } else if (wrongTile === index) {
                tileClass = `w-16 h-16 md:w-20 md:h-20 rounded-lg cursor-pointer transition-all duration-200 transform scale-110 ${themeColors.wrong}`
              }

              return <div key={index} className={tileClass} onClick={() => handleTileClick(index)} />
            })}
          </div>
        </div>

        {/* Game Info */}
        <div className="mt-6 text-center text-gray-400">
          <p>
            Level: {config.level.charAt(0).toUpperCase() + config.level.slice(1)} • Theme:{" "}
            {config.theme.charAt(0).toUpperCase() + config.theme.slice(1)}
          </p>
        </div>
      </div>
    </div>
  )
}
