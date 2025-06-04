let currentTab = "online"
let gamesPlayedCount = 1
let matrixAnimation

const onlineGames = [
  {
    id: 1,
    title: "Cyber Strike",
    image: "https://i.ytimg.com/vi/0pIuJZ_R6Jo/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Space Warriors",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Neon Racing",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/696150/capsule_616x353.jpg?t=1744738856",
  },
  {
    id: 4,
    title: "Battle Royale X",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "Mech Warfare",
    image:
      "https://spectrum.ieee.org/media-library/image.jpg?id=26775013&width=800&height=196&quality=85",
  },
  {
    id: 6,
    title: "Ninja Legends",
    image:
      "https://tr.rbxcdn.com/180DAY-697deba19107a2b2bc191aa8f3694f94/768/432/Image/Webp/noFilter",
  },
  {
    id: 7,
    title: "Galaxy Quest",
    image:
      "https://icv2.com/images/article_thumbs/650x650_269d09da9a6d8654ceef43e9782e97ee7ec8057649d7e9b757606c47.jpg",
  },
  {
    id: 8,
    title: "Street Fighter X",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 17,
    title: "Zombie Apocalypse",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 18,
    title: "Dragon Slayer",
    image:
      "https://images.sftcdn.net/images/t_app-icon-m/p/55ec51de-e24c-4254-9714-7082890af22a/5059263/special-forces-group-2-icon%20(32).png",
  },
  {
    id: 19,
    title: "Pirate Adventure",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2353650/capsule_616x353.jpg?t=1680257718",
  },
  {
    id: 20,
    title: "Robot Wars",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/18/Robot_Wars_-_Arenas_of_Destruction_Coverart.png",
  },
]

const offlineGames = [
  {
    id: 9,
    title: "Quantum Quest",
    image:
      "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 10,
    title: "Mech Commander",
    image:
      "https://assets-prd.ignimgs.com/2023/06/23/mechcomm2-1687480932992.jpg",
  },
  {
    id: 11,
    title: "Shadow Ninja",
    image:
      "https://play-lh.googleusercontent.com/c7R2N3bJB2d64PuoC1iFRMofa-hL-HIeyu1Paokv6LH9SGrVgRUwRetPH4RJ0mEoqA=w526-h296-rw",
  },
  {
    id: 12,
    title: "City Builder Pro",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3UkVkFVzxxv5UQTGqTyCY5nMTGo_8aRazTzo3iwu_7qHujye8vcsWR-WRatLF5hrhPjMLzg5DRo6RS71UHWc-67ri2IUQX32Y8YzPVGAaQWtRNQNas5Pqqzq2d0qr47IXx4K33BXehLonOuvPOB-20l6mEuqQ2nX05eX3A73YzWUKxE9zqo1hVdOvLA/s616/2022-07-17-UrbekCityBuilder-Banner.webp",
  },
  {
    id: 13,
    title: "Racing Legends",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 14,
    title: "Fantasy World",
    image:
      "https://cdn1.epicgames.com/spt-assets/9c5bd462980b4d9f892d2e1a1da7e435/fantasy-world-td-1kqwb.jpg",
  },
  {
    id: 15,
    title: "Sniper Elite",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 16,
    title: "Adventure Quest",
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 21,
    title: "Puzzle Master",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70050000051246/88e6a5bd0a277bbda08739423fdf9f619e24b4381d8cb9caca91ff41fe4f453f",
  },
  {
    id: 22,
    title: "Treasure Hunter",
    image:
      "https://cdn-www.bluestacks.com/bs-images/TreasureHunter_Article_HowToInstallandPlay_EN3.jpg",
  },
  {
    id: 23,
    title: "Space Explorer",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop&crop=center",
  },
  {
    id: 24,
    title: "Medieval Kingdom",
    image:
      "https://hb.imgix.net/1b90f11663e67c566f93b7c9ff49da9a9ad8d2dd.jpg?auto=compress,format&fit=crop&h=353&w=616&s=77ee29a66eeff2e423d232776421c2bf",
  },
]

function createMatrixRain() {
  const canvas = document.getElementById("matrixCanvas")
  const ctx = canvas.getContext("2d")

  let drops = []
  let columns = 0
  const fontSize = 14
  const chars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

  function resizeCanvas() {
    // Force canvas to cover full viewport
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Recalculate columns based on new width
    columns = Math.ceil(canvas.width / fontSize)

    // Reset drops array for new column count
    drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = (Math.random() * canvas.height) / fontSize
    }
  }

  // Initial setup
  resizeCanvas()

  // Listen for window resize and orientation change
  window.addEventListener("resize", resizeCanvas)
  window.addEventListener("orientationchange", () => {
    setTimeout(resizeCanvas, 100) // Small delay for orientation change
  })

  function draw() {
    // Semi-transparent black to create trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#10b981"
    ctx.font = fontSize + "px monospace"

    for (let i = 0; i < drops.length && i < columns; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)]
      const x = i * fontSize
      const y = drops[i] * fontSize

      ctx.fillText(text, x, y)

      // Reset drop to top when it reaches bottom
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
  }

  // Clear any existing animation
  if (matrixAnimation) {
    clearInterval(matrixAnimation)
  }

  // Start new animation
  matrixAnimation = setInterval(draw, 35)
}

function createGameCard(game) {
  return `
                <div class="game-card" onclick="launchGame('${game.title}', ${
    game.id
  }, '${game.image}')">
                    <div class="game-icon">
                        <img src="${game.image}" alt="${
    game.title
  }" loading="lazy" onerror="this.src='https://via.placeholder.com/80x80/0f172a/10b981?text=${encodeURIComponent(
    game.title.charAt(0)
  )}'">
                    </div>
                    <div class="game-name">${game.title}</div>
                </div>
            `
}

function renderGames() {
  const gameGrid = document.getElementById("gameGrid")
  const games = currentTab === "online" ? onlineGames : offlineGames
  const sectionTitle = document.getElementById("sectionTitle")
  const sectionSubtitle = document.getElementById("sectionSubtitle")

  if (currentTab === "online") {
    sectionTitle.textContent = "ONLINE MATRIX GAMES"
    sectionSubtitle.textContent = "Connect to the digital battlefield"
  } else {
    sectionTitle.textContent = "LOCAL STORAGE GAMES"
    sectionSubtitle.textContent = "Offline gaming arsenal"
  }

  gameGrid.innerHTML = games.map(createGameCard).join("")
}

function switchTab(tab) {
  currentTab = tab

  document
    .querySelectorAll(".nav-tab")
    .forEach((t) => t.classList.remove("active"))
  document.getElementById(tab + "Tab").classList.add("active")

  renderGames()
}

function launchGame(title, id, imageUrl) {
  gamesPlayedCount++

  localStorage.setItem("matrixGamesPlayed", gamesPlayedCount)

  const gameWindow = document.getElementById("gameWindow")
  const windowTitle = document.getElementById("windowTitle")
  const windowTitleIcon = document.getElementById("windowTitleIcon")
  const loadingText = document.getElementById("loadingText")
  const loadingBar = document.getElementById("loadingBar")

  windowTitle.textContent = title
  windowTitleIcon.src = imageUrl
  windowTitleIcon.onerror = function () {
    this.src = `https://via.placeholder.com/30x30/0f172a/10b981?text=${encodeURIComponent(
      title.charAt(0)
    )}`
  }

  loadingBar.style.width = "0%"
  loadingText.textContent = "Initializing game..."

  gameWindow.classList.add("active")

  let progress = 0
  const loadingInterval = setInterval(() => {
    progress += Math.random() * 10
    if (progress >= 100) {
      progress = 100
      clearInterval(loadingInterval)
      loadingText.textContent = "Game Ready!"

      setTimeout(() => {
        loadingText.textContent = "Game launched successfully!"
      }, 1000)
    } else {
      const messages = [
        "Loading assets...",
        "Connecting to server...",
        "Initializing physics engine...",
        "Loading textures...",
        "Preparing game environment...",
      ]
      loadingText.textContent = messages[Math.floor(progress / 25)]
    }
    loadingBar.style.width = `${progress}%`
  }, 200)
}

function closeWindow() {
  document.getElementById("gameWindow").classList.remove("active")
}

function minimizeWindow() {
  const gameWindow = document.getElementById("gameWindow")
  gameWindow.style.transform = "translate(-50%, -50%) scale(0.1)"
  gameWindow.style.opacity = "0"

  setTimeout(() => {
    gameWindow.classList.remove("active")
    gameWindow.style.transform = ""
    gameWindow.style.opacity = ""
  }, 300)
}

function maximizeWindow() {
  const gameWindow = document.getElementById("gameWindow")

  if (gameWindow.style.width === "95%") {
    gameWindow.style.width = "80%"
  } else {
    gameWindow.style.width = "95%"
  }
}

function handleLogin(event) {
  event.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const errorMessage = document.getElementById("errorMessage")

  if (email === "admin@gmail.com" && password === "admin123") {
    errorMessage.style.display = "none"
    document.getElementById("loginScreen").classList.add("hidden")
    document.getElementById("mainContent").classList.add("visible")

    localStorage.setItem("matrixLoginStatus", "true")
    localStorage.setItem("matrixLoginTime", Date.now().toString())
  } else {
    errorMessage.style.display = "block"
    errorMessage.style.animation = "shake 0.5s ease-in-out"
    setTimeout(() => {
      errorMessage.style.animation = ""
    }, 500)
  }
}

function logout() {
  if (
    confirm(
      "⚠️ Are you sure you want to disconnect from the Matrix?\n\n🔌 This will end your current session."
    )
  ) {
    document.getElementById("mainContent").classList.remove("visible")
    document.getElementById("loginScreen").classList.remove("hidden")

    localStorage.removeItem("matrixLoginStatus")
    localStorage.removeItem("matrixLoginTime")

    document.getElementById("loginForm").reset()
    document.getElementById("errorMessage").style.display = "none"
  }
}

const style = document.createElement("style")
style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `
document.head.appendChild(style)

document.addEventListener("DOMContentLoaded", function () {
  const loginStatus = localStorage.getItem("matrixLoginStatus")
  const loginTime = localStorage.getItem("matrixLoginTime")
  const savedGamesPlayed = localStorage.getItem("matrixGamesPlayed")

  if (loginStatus === "true" && loginTime) {
    const timeDiff = Date.now() - parseInt(loginTime)
    if (timeDiff < 24 * 60 * 60 * 1000) {
      document.getElementById("loginScreen").classList.add("hidden")
      document.getElementById("mainContent").classList.add("visible")
    }
  }

  if (savedGamesPlayed) {
    gamesPlayedCount = parseInt(savedGamesPlayed)
  }

  createMatrixRain()

  document.getElementById("loginForm").addEventListener("submit", handleLogin)

  renderGames()

  console.log("🎮 Texno GAME ZONE - Successfully Loaded! 🎮")
  console.log("🔐 Login Credentials:")
  console.log("📧 Email: admin@gmail.com")
  console.log("🔑 Password: admin123")
  console.log("⚡ Welcome to the Texno Zone, Neo...")
})
