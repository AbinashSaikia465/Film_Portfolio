# DRIFTHUE | Abinash Saikia - Filmmaker Portfolio

A professional, cinematic filmmaker portfolio built with **React** and **Tailwind CSS**. Designed with a dark, modern aesthetic to showcase visual storytelling and high-end cinematography.

![Cinematic Aesthetic](https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

- **Cinematic Hero Section:** Full-screen background intro with elegant typography and smooth scroll navigation.
- **Interactive Project Grid:** Responsive layout featuring your latest films with autoplay previews and role-specific details.
- **Fullscreen Video Player:** Cinematic, high-quality video playback modal with smooth transitions, sound, and full controls.
- **Custom Showreel 2026:** A dedicated widescreen player for your latest featured work (currently *Koka Aru Nati*).
- **Engaging About Section:** Narrative-driven description of your journey as a filmmaker with achievement counters.
- **Premium Animations:** Powered by `framer-motion` for smooth fade-ins, cinematic pops, and hover states.
- **Fully Responsive:** Optimized for a premium experience on desktop, tablet, and mobile.

## 🚀 Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 📁 Project Structure

```text
public/
└── videos/              # Locally hosted project and showreel videos
src/
├── components/          # Reusable UI components (Navbar, ProjectCard)
├── sections/            # Major page sections (Hero, Projects, Showreel, etc.)
├── data/                # Static data files (Project lists, portfolio details)
├── App.jsx              # Main application shell
└── index.css            # Global styles and Tailwind directives
```

## 🎨 Customization

### Adding Project Videos
1. Place your `.mov` or `.mp4` files in the `public/videos/` directory.
2. Edit `src/data/projects.js` to update the titles, roles, and video paths.

### Updating the Showreel
Update the `src/sections/ShowreelSection.jsx` to point to your latest featured film in the `public/videos/` folder.

## 📄 License
This project is open-source and available for personal or professional use.

---
**Created by Abinash Saikia | DRIFTHUE**
*"The Emotional Colour of a Journey"*
