"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, User, Palette, FileText, Lightbulb } from "lucide-react"

interface DesignInfoProps {
  onBack: () => void
}

export default function DesignInfo({ onBack }: DesignInfoProps) {
  const [activeSection, setActiveSection] = useState("resources")

  const sections = [
    { id: "resources", name: "Resources", icon: Lightbulb },
    { id: "personas", name: "Personas", icon: User },
    { id: "storyboards", name: "Storyboards", icon: Palette },
    { id: "report", name: "Design Report", icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onBack}
            className={"border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-cyan-200 bg-black/20"
            }
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Game
          </Button>
          <div></div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                onClick={() => setActiveSection(section.id)}
                className={
                  activeSection === section.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white shadow-lg"
                    : "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-cyan-200 bg-black/20"
                }
              >
                <Icon className="w-4 h-4 mr-2" />
                {section.name}
              </Button>
            )
          })}
        </div>

        {/* Content */}
        <Card className="bg-black/40 backdrop-blur-sm border-cyan-500/30 p-8">
          {activeSection === "resources" && (
            <div>
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">Inspirational Resources</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Primary Inspiration Sources</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <strong className="text-cyan-300">1. Simon Says Memory Game</strong>
                      <p>Source: https://www.mathsisfun.com/games/simon-says.html</p>
                      <p className="mt-2">
                        This classic sequence memorization game inspired the core mechanic of Nexus. The concept of
                        showing a pattern and having users reproduce it forms the foundation of our spatial memory
                        challenge. However, we enhanced it by moving from a simple 4-button interface to a dynamic grid
                        system that scales with difficulty.
                      </p>
                    </div>

                    <div>
                      <strong className="text-cyan-300">2. Memory Card Matching Games</strong>
                      <p>Source: https://www.helpfulgames.com/subjects/braintraining/memory.html</p>
                      <p className="mt-2">
                        The grid-based layout and visual feedback mechanisms from card matching games influenced our
                        spatial arrangement. We adapted the grid concept but focused on sequence memory rather than pair
                        matching, creating a more dynamic and challenging experience.
                      </p>
                    </div>

                    <div>
                      <strong className="text-cyan-300">3. Cognitive Training Research</strong>
                      <p>
                        Source: Jaeggi, S. M., et al. (2008). "Improving fluid intelligence with training on working
                        memory"
                      </p>
                      <p className="mt-2">
                        Academic research on working memory training informed our level progression system and the
                        cognitive benefits we aim to provide. This research supports the effectiveness of spatial
                        sequence memory tasks in cognitive enhancement.
                      </p>
                    </div>
                    <div>
                      <strong className="text-cyan-300">4. Cognitive Training Research (Replication/Meta-Analysis)</strong>
                      <p>
                        Source: Au, J. L., et al. (2014). "Improving fluid intelligence with training on working memory: a meta-analysis." *Psychonomic Bulletin & Review*, 22(2), 366-377.
                      </p>
                      <p className="mt-2">
                        This meta-analysis provides further support for the potential of working memory training, specifically n-back tasks which often involve spatial sequences, to improve fluid intelligence, reinforcing the theoretical basis for cognitive enhancement programs.
                      </p>
                    </div>

                    <div>
                      <strong className="text-cyan-300">5. Modern UI/UX Design Principles</strong>
                      <p>Source: Material Design Guidelines & Apple Human Interface Guidelines</p>
                      <p className="mt-2">
                        Contemporary design systems influenced our visual hierarchy, color schemes, and interaction
                        patterns. We applied these principles to create an engaging, accessible interface that surpasses
                        the dated designs of existing memory games.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "personas" && (
            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-6">Target User Personas</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Persona 1 */}
                <Card className="bg-gray-800/50 border-cyan-500/30 p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400">Alex Chen</h3>
                    <p className="text-gray-300">Competitive Gamer, Age 22</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Intrinsic Characteristics:</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Highly competitive and achievement-oriented</li>
                        <li>• Quick learner with excellent hand-eye coordination</li>
                        <li>• Seeks challenging experiences and measurable progress</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Technology Relationship:</h4>
                      <p className="text-gray-300">
                        Power user who embraces cutting-edge gaming technology. Comfortable with complex interfaces and
                        expects responsive, high-performance applications.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Domain Relationship:</h4>
                      <p className="text-gray-300">
                        Experienced with memory and reaction-based games. Understands the cognitive benefits of brain
                        training and actively seeks games that improve mental performance.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Primary Goal:</h4>
                      <p className="text-cyan-300 font-medium">
                        Achieve high scores and master increasingly difficult levels to enhance cognitive performance
                        for competitive gaming.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Persona 2 */}
                <Card className="bg-gray-800/50 border-purple-500/30 p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-400">Dr. Maria Rodriguez</h3>
                    <p className="text-gray-300">Healthcare Professional, Age 45</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Intrinsic Characteristics:</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Detail-oriented and methodical in approach</li>
                        <li>• Values evidence-based solutions and measurable outcomes</li>
                        <li>• Balances professional demands with personal wellness</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Technology Relationship:</h4>
                      <p className="text-gray-300">
                        Moderate user who appreciates intuitive, well-designed interfaces. Prefers applications that are
                        straightforward and don't require extensive learning curves.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Domain Relationship:</h4>
                      <p className="text-gray-300">
                        Understands the importance of cognitive health from a medical perspective. Interested in brain
                        training as both personal wellness and professional development.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Primary Goal:</h4>
                      <p className="text-purple-300 font-medium">
                        Maintain and improve cognitive sharpness for professional performance while enjoying a relaxing,
                        beneficial activity during breaks.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeSection === "storyboards" && (
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-6">User Journey Storyboards</h2>

              <div className="space-y-12">
                {/* Storyboard 1 - Alex Chen - Gaming UI */}
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                    Storyboard 1: Alex Chen - Gaming-Focused Interface
                  </h3>
                  <p className="text-gray-300 mb-6">
                    <strong>Design Philosophy:</strong> Compact, data-rich interface with gaming aesthetics,
                    leaderboards, achievements, and competitive elements.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Gaming UI Mockup 1 */}
                    <Card className="bg-gray-900 border-cyan-500/30 p-4">
                      <h4 className="text-cyan-300 font-semibold mb-3">Step 1: Competitive Setup</h4>
                      <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-3 rounded-lg mb-3 min-h-[250px] text-xs">
                        {/* Header with stats */}
                        <div className="flex justify-between items-center mb-2 pb-2 border-b border-cyan-500/30">
                          <div className="text-cyan-400 font-bold text-sm">NEXUS PRO</div>
                          <div className="flex gap-2">
                            <span className="bg-cyan-500/20 px-2 py-1 rounded text-cyan-300">LVL 47</span>
                            <span className="bg-purple-500/20 px-2 py-1 rounded text-purple-300">2.1K XP</span>
                          </div>
                        </div>

                        {/* Compact level selection */}
                        <div className="mb-3">
                          <div className="text-cyan-300 text-xs mb-1">DIFFICULTY</div>
                          <div className="grid grid-cols-2 gap-1">
                            <div className="bg-gray-700 p-1 rounded text-center text-gray-400">BEG</div>
                            <div className="bg-gray-700 p-1 rounded text-center text-gray-400">INT</div>
                            <div className="bg-gray-700 p-1 rounded text-center text-gray-400">ADV</div>
                            <div className="bg-cyan-500 p-1 rounded text-center text-white font-bold">EXP</div>
                          </div>
                        </div>

                        {/* Leaderboard preview */}
                        <div className="mb-3">
                          <div className="text-purple-300 text-xs mb-1">TODAY'S LEADERBOARD</div>
                          <div className="space-y-1">
                            <div className="flex justify-between bg-yellow-500/20 p-1 rounded">
                              <span className="text-yellow-300">1. ProGamer_X</span>
                              <span className="text-yellow-300">3,240</span>
                            </div>
                            <div className="flex justify-between bg-gray-700/50 p-1 rounded">
                              <span className="text-gray-300">2. MemoryMaster</span>
                              <span className="text-gray-300">2,890</span>
                            </div>
                            <div className="flex justify-between bg-cyan-500/20 p-1 rounded border border-cyan-500">
                              <span className="text-cyan-300">3. YOU</span>
                              <span className="text-cyan-300">2,840</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-1 mb-3">
                          <div className="bg-green-500/20 p-1 rounded text-center">
                            <div className="text-green-300 text-xs">WIN%</div>
                            <div className="text-green-300 font-bold">87%</div>
                          </div>
                          <div className="bg-blue-500/20 p-1 rounded text-center">
                            <div className="text-blue-300 text-xs">AVG</div>
                            <div className="text-blue-300 font-bold">2.1K</div>
                          </div>
                          <div className="bg-purple-500/20 p-1 rounded text-center">
                            <div className="text-purple-300 text-xs">STREAK</div>
                            <div className="text-purple-300 font-bold">12</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded text-center text-white font-bold">
                          ENTER ARENA
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        <strong>UI Features:</strong> Compact layout, leaderboards, XP system, competitive stats, gaming
                        terminology
                      </p>
                    </Card>

                    {/* Gaming UI Mockup 2 */}
                    <Card className="bg-gray-900 border-cyan-500/30 p-4">
                      <h4 className="text-cyan-300 font-semibold mb-3">Step 2: High-Intensity Gameplay</h4>
                      <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-3 rounded-lg mb-3 min-h-[250px] text-xs">
                        {/* Gaming HUD */}
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex gap-2">
                            <span className="bg-red-500 px-2 py-1 rounded text-white font-bold">LIVE</span>
                            <span className="text-cyan-400">R15</span>
                          </div>
                          <div className="text-right">
                            <div className="text-purple-400 font-bold">2,840 PTS</div>
                            <div className="text-gray-400">+180 combo</div>
                          </div>
                        </div>

                        {/* Performance meters */}
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div>
                            <div className="text-green-300 text-xs">ACCURACY</div>
                            <div className="bg-gray-700 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: "94%" }}></div>
                            </div>
                            <div className="text-green-300 text-xs">94%</div>
                          </div>
                          <div>
                            <div className="text-yellow-300 text-xs">SPEED</div>
                            <div className="bg-gray-700 rounded-full h-2">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "87%" }}></div>
                            </div>
                            <div className="text-yellow-300 text-xs">0.8s avg</div>
                          </div>
                        </div>

                        {/* Compact game grid */}
                        <div className="grid grid-cols-6 gap-1 mb-2">
                          {Array.from({ length: 36 }, (_, i) => (
                            <div
                              key={i}
                              className={`aspect-square rounded ${[5, 12, 23, 30, 8, 15, 27, 33].includes(i)
                                  ? "bg-cyan-400 shadow-sm shadow-cyan-400/50"
                                  : "bg-gray-700 border border-cyan-500/30"
                                }`}
                            />
                          ))}
                        </div>

                        {/* Real-time feedback */}
                        <div className="bg-cyan-500/20 border border-cyan-500 p-2 rounded">
                          <div className="text-cyan-300 font-bold text-center">PERFECT SEQUENCE!</div>
                          <div className="text-center text-gray-300">+50 bonus • 8/8 correct</div>
                        </div>

                        {/* Achievement popup */}
                        <div className="mt-2 bg-yellow-500/20 border border-yellow-500 p-1 rounded">
                          <div className="text-yellow-300 text-xs">🏆 ACHIEVEMENT: Speed Demon</div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        <strong>UI Features:</strong> Real-time performance metrics, achievement popups, gaming HUD
                        elements, competitive feedback
                      </p>
                    </Card>

                    {/* Gaming UI Mockup 3 */}
                    <Card className="bg-gray-900 border-cyan-500/30 p-4">
                      <h4 className="text-cyan-300 font-semibold mb-3">Step 3: Victory & Progression</h4>
                      <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-3 rounded-lg mb-3 min-h-[250px] text-xs">
                        {/* Victory header */}
                        <div className="text-center mb-3">
                          <div className="text-yellow-400 text-lg font-bold">🏆 VICTORY!</div>
                          <div className="text-white text-xl font-bold">3,240 PTS</div>
                          <div className="text-green-400">NEW PERSONAL BEST!</div>
                        </div>

                        {/* Detailed stats */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-green-500/20 p-2 rounded">
                            <div className="text-green-300 text-xs">ROUNDS SURVIVED</div>
                            <div className="text-green-300 font-bold">23</div>
                          </div>
                          <div className="bg-blue-500/20 p-2 rounded">
                            <div className="text-blue-300 text-xs">MAX SEQUENCE</div>
                            <div className="text-blue-300 font-bold">10 tiles</div>
                          </div>
                          <div className="bg-purple-500/20 p-2 rounded">
                            <div className="text-purple-300 text-xs">PERFECT ROUNDS</div>
                            <div className="text-purple-300 font-bold">18/23</div>
                          </div>
                          <div className="bg-cyan-500/20 p-2 rounded">
                            <div className="text-cyan-300 text-xs">AVG REACTION</div>
                            <div className="text-cyan-300 font-bold">0.7s</div>
                          </div>
                        </div>

                        {/* XP and level up */}
                        <div className="mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-purple-300">XP GAINED: +340</span>
                            <span className="text-purple-300">LVL 47 → 48</span>
                          </div>
                          <div className="bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="grid grid-cols-2 gap-1">
                          <div className="bg-cyan-500 p-2 rounded text-center text-white font-bold">REMATCH</div>
                          <div className="bg-gray-700 p-2 rounded text-center text-gray-300">SHARE</div>
                        </div>

                        {/* Leaderboard update */}
                        <div className="mt-2 bg-yellow-500/20 border border-yellow-500 p-1 rounded text-center">
                          <div className="text-yellow-300 text-xs">🥈 MOVED TO #2 ON LEADERBOARD!</div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        <strong>UI Features:</strong> Detailed performance analytics, XP progression, leaderboard
                        updates, competitive achievements
                      </p>
                    </Card>
                  </div>
                </div>

                {/* Storyboard 2 - Dr. Maria Rodriguez - Wellness UI */}
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-6">
                    Storyboard 2: Dr. Maria Rodriguez - Wellness-Focused Interface
                  </h3>
                  <p className="text-gray-300 mb-6">
                    <strong>Design Philosophy:</strong> Clean, spacious layout with medical/wellness aesthetics, larger
                    text, progress tracking, and calming elements.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Wellness UI Mockup 1 */}
                    <Card className="bg-gray-900 border-purple-500/30 p-4">
                      <h4 className="text-purple-300 font-semibold mb-3">Step 1: Mindful Configuration</h4>
                      <div className="bg-gradient-to-br from-green-900 to-teal-900 p-4 rounded-lg mb-3 min-h-[250px]">
                        {/* Clean header */}
                        <div className="text-center mb-4">
                          <div className="text-green-400 text-xl font-bold mb-1">Nexus</div>
                          <div className="text-gray-300 text-sm">Cognitive Wellness Training</div>
                        </div>

                        {/* Spacious level selection */}
                        <div className="mb-4">
                          <div className="text-green-300 text-sm mb-3 font-medium">Choose Your Challenge Level</div>
                          <div className="space-y-2">
                            <div className="bg-gray-700 p-3 rounded-lg text-center text-gray-400">
                              <div className="font-medium">Gentle</div>
                              <div className="text-xs">Perfect for daily practice</div>
                            </div>
                            <div className="bg-green-500/20 border-2 border-green-400 p-3 rounded-lg text-center">
                              <div className="text-green-300 font-medium">Moderate</div>
                              <div className="text-green-300 text-xs">Balanced cognitive exercise</div>
                            </div>
                          </div>
                        </div>

                        {/* Theme with wellness focus */}
                        <div className="mb-4">
                          <div className="text-emerald-300 text-sm mb-2 font-medium">Visual Environment</div>
                          <div className="bg-emerald-500/20 border border-emerald-400 p-3 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-emerald-300 font-medium">Forest Calm</div>
                                <div className="text-emerald-300 text-xs">Soothing natural tones</div>
                              </div>
                              <div className="flex space-x-1">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg text-center text-white font-medium">
                          Begin Wellness Session
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        <strong>UI Features:</strong> Large text, spacious layout, wellness terminology, calming colors,
                        clear descriptions
                      </p>
                    </Card>

                    {/* Wellness UI Mockup 2 */}
                    <Card className="bg-gray-900 border-purple-500/30 p-4">
                      <h4 className="text-purple-300 font-semibold mb-3">Step 2: Guided Practice</h4>
                      <div className="bg-gradient-to-br from-green-900 to-teal-900 p-4 rounded-lg mb-3 min-h-[250px]">
                        {/* Gentle header */}
                        <div className="text-center mb-4">
                          <div className="text-green-400 text-lg font-medium">Session in Progress</div>
                          <div className="text-gray-300 text-sm">Exercise 8 of your daily routine</div>
                        </div>

                        {/* Progress indicator */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-green-300">Progress</span>
                            <span className="text-green-300">8/12 exercises</span>
                          </div>
                          <div className="bg-gray-700 rounded-full h-3">
                            <div className="bg-green-500 h-3 rounded-full" style={{ width: "67%" }}></div>
                          </div>
                        </div>

                        {/* Instruction focus */}
                        <div className="bg-green-500/10 border border-green-500/30 p-3 rounded-lg mb-3">
                          <div className="text-green-300 text-center font-medium mb-2">Observe the Pattern</div>
                          <div className="text-gray-300 text-sm text-center">
                            Watch as 5 tiles light up in sequence. Take your time to memorize the pattern.
                          </div>
                        </div>

                        {/* Larger, spaced grid */}
                        <div className="grid grid-cols-4 gap-3 mb-3 justify-center">
                          {Array.from({ length: 16 }, (_, i) => (
                            <div
                              key={i}
                              className={`w-6 h-6 rounded-lg ${[2, 7, 10, 13, 5].includes(i)
                                  ? "bg-green-400 shadow-lg shadow-green-400/50"
                                  : "bg-gray-700 border-2 border-green-500/30"
                                }`}
                            />
                          ))}
                        </div>

                        {/* Encouraging message */}
                        <div className="text-center">
                          <div className="text-gray-300 text-sm">
                            "Focus on the pattern. There's no rush - take the time you need."
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        <strong>UI Features:</strong> Clear instructions, progress tracking, encouraging messages,
                        larger interactive elements
                      </p>
                    </Card>

                    {/* Wellness UI Mockup 3 */}
                    <Card className="bg-gray-900 border-purple-500/30 p-4">
                      <h4 className="text-purple-300 font-semibold mb-3">Step 3: Wellness Summary</h4>
                      <div className="bg-gradient-to-br from-green-900 to-teal-900 p-4 rounded-lg mb-3 min-h-[250px]">
                        {/* Completion celebration */}
                        <div className="text-center mb-4">
                          <div className="text-green-400 text-xl font-medium mb-2">Session Complete! 🌟</div>
                          <div className="text-gray-300">Excellent cognitive exercise today</div>
                        </div>

                        {/* Wellness metrics */}
                        <div className="space-y-3 mb-4">
                          <div className="bg-green-500/20 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-green-300 font-medium">Working Memory</div>
                                <div className="text-green-300 text-sm">Actively engaged</div>
                              </div>
                              <div className="text-green-400 text-2xl">✓</div>
                            </div>
                          </div>
                          <div className="bg-teal-500/20 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-teal-300 font-medium">Attention Training</div>
                                <div className="text-teal-300 text-sm">15 minutes focused practice</div>
                              </div>
                              <div className="text-teal-400 text-2xl">✓</div>
                            </div>
                          </div>
                          <div className="bg-emerald-500/20 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-emerald-300 font-medium">Pattern Recognition</div>
                                <div className="text-emerald-300 text-sm">12 sequences completed</div>
                              </div>
                              <div className="text-emerald-400 text-2xl">✓</div>
                            </div>
                          </div>
                        </div>

                        {/* Wellness recommendation */}
                        <div className="bg-green-500/10 border border-green-500/30 p-3 rounded-lg mb-3">
                          <div className="text-green-300 text-sm text-center">
                            "Great mental workout! Consider returning tomorrow for continued cognitive wellness."
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg text-center text-white font-medium">
                          Schedule Next Session
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        <strong>UI Features:</strong> Wellness-focused metrics, cognitive benefits highlighted, routine
                        encouragement, medical terminology
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "report" && (
            <div>
              <h2 className="text-3xl font-bold text-orange-400 mb-6">Comprehensive Design Report</h2>

              <div className="space-y-8">
                {/* Designers */}
                <section className="border-l-4 border-orange-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Designers</h3>
                  <div className="text-gray-300">
                    <p>
                      <strong>Group:</strong> Group 9
                    </p>
                    <p>
                      <strong>Name:</strong> Hamed Tavakoli Dastjerdi
                    </p>
                    <p>
                      <strong>Student Number:</strong> 300321356
                    </p>
                  </div>
                </section>

                {/* Game */}
                <section className="border-l-4 border-cyan-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Game</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-2">a. Game Name and Type</h4>
                      <p>
                        <strong>Name:</strong> Nexus
                      </p>
                      <p>
                        <strong>Type:</strong> Spatial sequence memory game that combines pattern recognition, working
                        memory, and attention training. Players must observe and reproduce increasingly complex
                        sequences of highlighted tiles on a dynamic grid.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-2">b. Inspirational Sites</h4>
                      <ul className="space-y-2">
                        <li>
                          <strong>Simon Says (mathsisfun.com):</strong> Provided the core sequence memorization
                          mechanic. We enhanced this by expanding from 4 buttons to scalable grids (3x3 to 6x6) and
                          adding visual themes.
                        </li>
                        <li>
                          <strong>Memory Card Games (helpfulgames.com):</strong> Influenced our grid-based layout and
                          visual feedback systems. We adapted the spatial arrangement but focused on sequence memory
                          rather than pair matching.
                        </li>
                        <li>
                          <strong>Memory Health Check (memorylosstest.com):</strong> Informed our approach to cognitive
                          assessment and level progression, inspiring our evidence-based difficulty scaling.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Storyboard Summary */}
                <section className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Storyboard with Mockups</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">a. Persona Definitions</h4>
                      <p>
                        <strong>Alex Chen (Competitive Gamer):</strong> Achievement-oriented power user seeking maximum
                        challenge and performance metrics. Prefers high-intensity gameplay with detailed feedback.
                      </p>
                      <p>
                        <strong>Dr. Maria Rodriguez (Healthcare Professional):</strong> Methodical wellness-focused user
                        seeking cognitive maintenance through evidence-based brain training with calming, intuitive
                        interface.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">b. Visual Differentiation</h4>
                      <p>
                        <strong>Alex's Journey:</strong> High-contrast neon theme, expert-level complexity, competitive
                        scoring, achievement tracking, and rapid-fire gameplay progression.
                      </p>
                      <p>
                        <strong>Maria's Journey:</strong> Calming nature theme, moderate difficulty, wellness-focused
                        messaging, cognitive benefit emphasis, and mindful pacing with routine encouragement.
                      </p>
                    </div>
                  </div>
                </section>

                {/* High-Fidelity Prototype */}
                <section className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">High-Fidelity Prototype</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-green-300 mb-2">a. Visual Design Choices</h4>
                      <ul className="space-y-2">
                        <li>
                          <strong>Universal Theming System:</strong> Four comprehensive themes that affect all UI
                          elements including backgrounds, buttons, cards, and accents - not just game tiles. Each theme
                          creates a complete visual environment.
                        </li>
                        <li>
                          <strong>Dual Interface Paradigms:</strong>
                          <br />• <strong>Gaming Interface (Alex):</strong> Compact, data-dense layout with HUD
                          elements, real-time performance metrics, leaderboards, XP systems, and competitive
                          terminology.
                          <br />• <strong>Wellness Interface (Maria):</strong> Spacious, clean design with larger text,
                          progress tracking, cognitive benefit emphasis, and medical/wellness terminology.
                        </li>
                        <li>
                          <strong>Gestalt Principles Applied:</strong> Proximity in grid layouts and UI groupings,
                          similarity in tile states and button styles, closure in sequence completion feedback, and
                          figure-ground relationships in layered interfaces.
                        </li>
                        <li>
                          <strong>Cognitive Load Management:</strong> Gaming interface maximizes information density for
                          power users, while wellness interface minimizes distractions and emphasizes clarity for
                          focused cognitive exercise.
                        </li>
                        <li>
                          <strong>Interaction Design Differentiation:</strong> Gaming UI uses rapid feedback,
                          achievement popups, and competitive elements, while wellness UI employs gentle guidance,
                          encouraging messages, and routine-building features.
                        </li>
                        <li>
                          <strong>Typography Hierarchy:</strong> Gaming interface uses condensed, technical fonts with
                          smaller text for information density. Wellness interface uses larger, more readable fonts with
                          generous spacing for accessibility.
                        </li>
                        <li>
                          <strong>Perfect Grid System:</strong> Fixed overlapping tile issues with proper aspect ratios,
                          consistent spacing (gap-3), and responsive scaling that maintains visual integrity across all
                          screen sizes.
                        </li>
                        <li>
                          <strong>Enhanced Button States:</strong> Implemented proper hover states with appropriate
                          contrast ratios and visual feedback that aligns with each theme's color palette and
                          accessibility standards.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-300 mb-2">b. Portfolio Link</h4>
                      <p>
                        <a
                          href="https://qerope.github.io/SEG3525-Assignments/Devoir1/"
                          className="text-green-400 hover:underline"
                        >
                          https://qerope.github.io/SEG3525-Assignments/Devoir1/
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Code */}
                <section className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Code</h3>
                  <div className="text-gray-300">
                    <p>
                      <strong>GitHub Repository:</strong>{" "}
                      <a
                        href="https://github.com/Qerope/SEG3525-Assignments/tree/main/Devoir3"
                        className="text-blue-400 hover:underline"
                      >
                        https://github.com/Qerope/SEG3525-Assignments/tree/main/Devoir3
                      </a>
                    </p>
                    <p className="mt-2">
                      The implementation uses React with TypeScript, featuring modular components, state management for
                      game logic, and responsive design principles. The codebase emphasizes maintainability and
                      extensibility for future cognitive training features.
                    </p>
                  </div>
                </section>

                {/* Generative AI Acknowledgement */}
                <section className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Generative AI Acknowledgement</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">a. Mockups</h4>
                      <p>
                        <strong>Tool Used:</strong> ChatGPT
                      </p>
                      <p>
                        <strong>Role:</strong> Starting inspiration development help confirm progress quality
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">b. High-Fidelity Prototypes</h4>
                      <p>
                        <strong>Tool Used:</strong> ChatGPT
                      </p>
                      <p>
                        <strong>Role:</strong> Help debugging react code
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">c. Report</h4>
                      <p>
                        <strong>Tool Used:</strong> ChatGPT
                      </p>
                      <p>
                        <strong>Role:</strong> Helped structure and format layout of this report
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
