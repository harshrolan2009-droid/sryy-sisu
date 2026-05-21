
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I'm solly";
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
gif.style.width = "400px"; 
  noBtn.innerHTML = "Nahi 😑";
  yesBtn.innerHTML = "Accha thik hai";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Hehehe!! Thntu minduu..";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Sryy na bhna…😭Kr na maaf!";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Okie kr diya maaf 😒";
    noBtn.innerHTML = "Nhi kr rhi 😠";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Hehehe!! Thntu minduu..!";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "Sach me itna gussa hai mujhse…? 🥺";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "Hn";
      noBtn.innerHTML = "Final no";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Hehehe!! Thntu minduu..";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "krna hoga maaf mujhe minduuuu… 😭😭😭";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "okay kr diya 😒";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "Hehehe!! Thntu minduu..";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })
        // Hover effect for the "yes" button
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50; // Margin from each side
        
          // Calculate maximum available space for the button
          const maxX = screenWidth - yesBtnRect.width - margin * 2; // Considering margin on both sides
          const maxY = screenHeight - yesBtnRect.height - margin * 2; // Considering margin on both sides
        
          // Generate random position within the available space
          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin; // Add margin to X position
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin; // Add margin to Y position
        
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });
        
        
      });
    });
  });
});




