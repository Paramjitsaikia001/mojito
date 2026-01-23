# 🍹 Mojito - GSAP Mastery Project

A modern, interactive cocktail bar website built with React and GSAP (GreenSock Animation Platform). This project serves as a comprehensive learning journey to master advanced GSAP animation techniques, including scroll-triggered animations, text splitting, video scrubbing, and complex timeline orchestrations.

## 🎯 Project Purpose

This project is designed to **master GSAP** through hands-on implementation of professional-grade animations. Each component demonstrates different GSAP techniques and best practices, making it an ideal learning resource for developers looking to elevate their animation skills.

## ✨ Features

- **Hero Section** with video scrubbing and parallax leaf animations
- **Text Animations** using SplitText for character and word-level animations
- **Scroll-Triggered Animations** throughout the entire page
- **Interactive Menu Slider** with smooth transitions
- **Mask Animations** for creative reveal effects
- **Responsive Design** with mobile-optimized animations
- **Smooth Scroll Interactions** with pinning and scrubbing

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite 7** - Lightning-fast build tool and dev server
- **GSAP 3.14.2** - Professional animation library
- **@gsap/react** - React hooks for GSAP
- **Tailwind CSS 4** - Utility-first CSS framework
- **react-responsive** - Media query hooks for responsive animations

## 🎨 GSAP Techniques Demonstrated

### 1. **ScrollTrigger**
- Scroll-based animations with custom start/end points
- Pin animations for fixed sections during scroll
- Scrub animations tied to scroll position
- Responsive scroll triggers for mobile/desktop

### 2. **SplitText**
- Character-level text animations
- Word-level text splitting
- Line-by-line paragraph reveals
- Staggered text animations

### 3. **Timelines**
- Complex animation sequences
- Parallel animations using position parameters
- Nested timelines for organized code
- Scroll-triggered timelines

### 4. **Video Scrubbing**
- Video playback controlled by scroll position
- Smooth video timeline scrubbing
- Pin video during scroll animation

### 5. **Mask Animations**
- CSS mask property animations
- Scale and position mask effects
- Reveal animations with masking

### 6. **Advanced Easing**
- Custom easing functions (`expo.out`, `power1.inOut`)
- Stagger animations for sequential reveals
- Smooth transitions between states

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mojito
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Usage

After starting the development server, navigate to `http://localhost:5173` (or the port shown in your terminal) to view the website.

### Key Sections to Explore:

- **Hero**: Scroll to see video scrubbing and parallax effects
- **Cocktails**: Scroll-triggered leaf animations
- **About**: Staggered grid image reveals
- **Art**: Mask animation reveal effects
- **Menu**: Interactive cocktail slider with transitions
- **Contact**: Scroll-triggered footer animations

## 📁 Project Structure

```
mojito/
├── public/
│   ├── images/          # All image assets
│   ├── videos/          # Video files for hero section
│   └── fonts/           # Custom fonts
├── src/
│   ├── components/
│   │   ├── Navber.jsx   # Navigation component
│   │   ├── Hero.jsx     # Hero with video scrubbing
│   │   ├── Cocktails.jsx # Cocktail list section
│   │   ├── About.jsx    # About section with grid
│   │   ├── Art.jsx      # Art section with masks
│   │   ├── Menu.jsx     # Interactive menu slider
│   │   └── Contact.jsx  # Contact/footer section
│   ├── constant/
│   │   └── index.js     # Data constants
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎓 Learning Points

### GSAP Best Practices Implemented:

1. **Plugin Registration**: Properly registering ScrollTrigger and SplitText plugins
2. **useGSAP Hook**: Using React-specific GSAP hook for cleanup and performance
3. **Responsive Animations**: Adapting animations based on screen size
4. **Performance**: Using `scrub` for smooth scroll animations
5. **Code Organization**: Separating animation logic using timelines
6. **Accessibility**: Maintaining semantic HTML while animating

### Key GSAP Concepts:

- **ScrollTrigger**: Creating scroll-based animations
- **Timelines**: Orchestrating complex animation sequences
- **SplitText**: Advanced text animation techniques
- **Easing Functions**: Creating natural motion
- **Stagger**: Sequential element animations
- **Pin**: Fixed elements during scroll
- **Scrub**: Scroll-linked animations

## 🔧 Configuration

### GSAP Plugins Used:
- `ScrollTrigger` - Scroll-based animations
- `SplitText` - Text splitting for animations

### Responsive Breakpoints:
- Mobile: `max-width: 767px`
- Desktop: `768px` and above

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Future Enhancements

- [ ] Add more GSAP plugins (MorphSVG, DrawSVG)
- [ ] Implement custom cursor animations
- [ ] Add page transitions
- [ ] Create animation presets library
- [ ] Add performance monitoring
- [ ] Implement lazy loading for animations

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP React Integration](https://greensock.com/react/)
- [ScrollTrigger Plugin](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [SplitText Plugin](https://greensock.com/docs/v3/Plugins/SplitText)

## 📄 License

This project is for educational purposes to master GSAP animation techniques.

## 👨‍💻 Author

Built as a learning project to master GSAP (GreenSock Animation Platform).

---

**Note**: This project focuses on demonstrating GSAP capabilities. The cocktail bar theme serves as a creative canvas for implementing various animation techniques.
