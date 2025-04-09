// const lastSeizureDate = new Date('2023-12-29');
// const today = new Date();
// const diffTime = Math.abs(today - lastSeizureDate);
// const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
// const diffMonths = Math.floor(diffDays / 30);
// const diffYears = Math.floor(diffMonths / 12);

// const years = diffYears;
// const months = diffMonths % 12;
// const days = diffDays % 30;

// const trackerText = `Everett Bramer is ${years} year(s), ${months} month(s), and ${days} day(s) seizure free.`;
// document.getElementById('seizure-free-tracker').textContent = trackerText;


function calculateSeizureFreeDuration(lastDate) {
    const today = new Date();
    const last = new Date(lastDate);
    const name = "Everett Bramer";
  
    
    let years = today.getFullYear() - last.getFullYear();
    let months = today.getMonth() - last.getMonth();
    let days = today.getDate() - last.getDate();
  
    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    return { name, years, months, days };
  }
  
  const { name, years, months, days } = calculateSeizureFreeDuration('2023-12-29');
  document.getElementById('seizure-free-name').textContent = `${name} has been seizure free for `;
  document.getElementById('seizure-years').textContent = `${years} Year${years !== 1 ? 's' : `, ${months} Month${months !== 1 ? 's' : ''}, and ${days} Day${days !== 1 ? 's' : ''}`}!`;
//   document.getElementById('seizure-detail').textContent = `!`;
  

  const modalHTML = `
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3 id="modal-title"></h3>
      <p id="modal-description"></p>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('afterbegin', modalHTML);

const seizureEvents = [
    {
      date: "2023-12-29",
      title: "Final Seizure",
      description: "Everett experienced his last seizure on this day. A turning point in his journey!"
    },
    // {
    //   date: "2023-10-15",
    //   title: "Episode",
    //   description: "A mild seizure after waking up."
    // },
    // {
    //   date: "2023-07-03",
    //   title: "First Seizure",
    //   description: "Everett's very first seizure."
    // }
  ];
  
  const timelineContainer = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close");
  
  seizureEvents.forEach(event => {
    const el = document.createElement("div");
    el.className = "timeline-event";
    el.textContent = new Date(event.date).toLocaleDateString();
    el.onclick = () => {
      modalTitle.textContent = event.title;
      modalDesc.textContent = event.description;
      modal.style.display = "block";
    };
    timelineContainer.appendChild(el);
  });
  
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
  
  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
  