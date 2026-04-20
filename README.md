# Browser Crash Test Website

## ⚠️ WARNING - Educational Purpose Only

This website is designed to crash your browser immediately upon loading. It is created for **educational and demonstration purposes only**.

## What It Does

The website implements multiple browser crash mechanisms simultaneously:

1. **Memory Exhaustion**
   - Infinite DOM element creation
   - Massive array allocations with nested objects
   - Continuous memory allocation without cleanup

2. **CPU Overload**
   - Infinite loops across multiple execution contexts
   - Recursive functions without base cases
   - Heavy mathematical computations
   - Large JSON operations

3. **GPU Crash**
   - Multiple WebGL contexts with massive textures
   - Continuous texture read/write operations
   - Canvas 2D intensive drawing operations
   - Infinite animation frame loops

4. **Additional Stress**
   - Nested iframes with infinite loops
   - Alert loops (if not blocked)

## Design Features

- **Sleek Modern Tech Aesthetic**: Dark theme with red accent colors
- **Glitch Effects**: Text glitching animation simulating system failure
- **Status Dashboard**: Real-time status indicators for Memory, CPU, and GPU
- **Scanline Effect**: Retro-futuristic CRT monitor effect
- **Responsive Design**: Works on mobile and desktop devices
- **Custom Typography**: Exo 2 and IBM Plex Mono fonts for tech aesthetic

## GitHub Pages Deployment

This is a static React app ready for GitHub Pages:

1. Build the production version:
   ```bash
   cd frontend
   yarn build
   ```

2. Deploy the `build` folder to GitHub Pages

3. Configure GitHub Pages to serve from the build branch/folder

## Technical Stack

- React 18
- React Router
- Custom CSS animations
- WebGL & Canvas API
- Google Fonts (Exo 2, IBM Plex Mono)

## ⚠️ Important Notes

- This will crash your browser tab/window
- May cause system instability on low-spec devices
- Use in isolated testing environment only
- Not recommended for production use
- Educational demonstration only

## Use Cases

- Browser stress testing
- Performance limit demonstrations
- Educational presentations on browser vulnerabilities
- Understanding resource management

## License

Educational use only. Use at your own risk.

---

**Remember**: This website WILL crash your browser. Only open if you understand the consequences!
