// On page load or when changing themes, best to add inline in `head` to avoid FOUC
"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"),// Whenever the user explicitly chooses light mode
localStorage.theme="light",// Whenever the user explicitly chooses dark mode
localStorage.theme="dark",// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");