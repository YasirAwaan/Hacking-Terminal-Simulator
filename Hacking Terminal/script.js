 // Messages (same order as image)
      const messages = [
        "Initializing Hacking...",
        "Reading your Files...",
        "Password files Detected...",
        "Sending all passwords and personal files to server...",
        "Cleaning up...",
      ];

      const terminal = document.getElementById("terminal");

      // helper: pause for ms (returns a Promise)
      function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      // helper: random delay between 1s (1000ms) and 7s (7000ms)
      function randomDelay() {
        return Math.floor(Math.random() * 6000) + 1000; // 1000..7000
      }

      // main async runner: shows messages one by one with random delay
      async function runSimulator() {
        for (const msg of messages) {
          // create line element
          const p = document.createElement("div");
          p.className = "line";
          p.textContent = msg;

          // append blinking dots span while waiting
          const dots = document.createElement("span");
          dots.className = "dots";
          p.appendChild(dots);

          terminal.appendChild(p);
          // autoscroll
          terminal.scrollTop = terminal.scrollHeight;

          // wait random time (while dots blink via CSS)
          const delay = randomDelay();
          await wait(delay);

          // remove dots once wait is over, keep the message shown
          dots.remove();
        }

        // final message
        const done = document.createElement("div");
        done.className = "line done";
        done.textContent = "Process complete.";
        terminal.appendChild(done);
        terminal.scrollTop = terminal.scrollHeight;
      }

      // start the simulator when page loads
      runSimulator();