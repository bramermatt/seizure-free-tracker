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
      title: "Final Seizure (December 29, 2023)",
      description: "Everett experienced his last seizure on this day. A turning point in his journey!"
    },
    {
      date: "2023-10-11",
      title: "Episode (October 11, 2023)",
      description: "3 1/2 beautiful months and we had to reset the seizure clock yesterday morning 😔 we had started to let ourselves believe that he might be growing out of it. Thankfully it was small and short but still hate to see what it does to him. Please continue to keep our warrior in your prayers 💜 #epilepsyawareness #epilepsywarrior"
    },
    {
      date: "2023-07-04",
      title: "Episode (July 4, 2023)",
      description: "Been up since 4am because I had to use the restroom and when I came back to bed, Everett was moving/tossing a lot. So panic set in. So now I stay up to make sure he’s okay and I don’t miss a seizure. This is being an epilepsy mama. We had our longest stent of seizure free time (6 weeks) cut short last Tuesday when I was awoken at about 5:50am to my baby seizing once again. Thank you Jesus for waking me up and I pray I’ve never missed one from being asleep.It’s been 3 months since our diagnosis and he has suffered 5 seizures(including his first). It never gets easier. I’m more educated and I know what to do but every time feels like the first time. I feel helpless. Lord, please protect my child. #epilepsyawareness #mamaofawarrior"
    },
    {
      date: "2023-03-29",
      title: "First Seizure (March 26, 2023)",
      facebookPostUrl: "https://www.facebook.com/share/p/1V2AEKhowq/",
      description: "From Sandy (Everett's Mom). Hi everyone. We already have a lot of immediate family and if you mix in our church family, it’s much easier for me to share this here than to try to tell/text everyone individually. Friday afternoon, Everett woke up from a nap and was immediately unresponsive to me. Still breathing but head was locked to the side, eyes glazed over, and not responding to anything. Immediately I knew this was a seizure. We called for an ambulance and when we got to Kosair, he had another seizure. This time, just like the ones you see in movies, with convulsions and twitching. He finally stopped after the doctors gave him three rounds of medicine. This was an hour total of two seizures and being in an unresponsive postictal state. We were at the hospital for the next 24 hours. He had blood work, CT scan, EEG, and an MRI. His blood work was clean meaning he didn’t get into any medicine or anything to make him seize. He did not have a fever so it was not a febrile seizure. He has no allergies aside from seasonal. There is purely no known cause for what happened. Therefore, our sweet, beautiful, perfect baby boy was diagnosed with Epilepsy. His EEG showed that his brain is making a lot of potential seizure activity with no cause. Our miracle is that after seizing for way, way too long… his CT and MRI came back normal and the seizures did not seem to do any brain damage. My baby was been through so much the past three days and he is just worn out completely. Matt and I are beside ourselves with anxiety and worry as to what our life may look like now as we are now always on watch for a seizure with no known triggers at this time. I’m absolutely terrified of seeing my son go through that again.. I honestly don’t have a lot of words right now. I am just asking for anyone who believes in prayer, to put my boy in your prayers please. He does not deserve to go through this. And please, hug your babies for me. NOBODY deserves to see their happy, carefree child like this.. ."
    }
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
  


