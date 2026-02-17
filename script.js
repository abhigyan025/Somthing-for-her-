const app = document.getElementById('app');

const pages = {
  landing: {
    text: "Hieeeeeeee\nI’ve got a lil question… wait 😭 questions for you 👉🏻👈🏻",
    buttons: [
      { text: "Okayyyy lesgoooo 😭", next: "q1" },
      { text: "Am not interested 🥀", next: "sad1" }
    ]
  },
  sad1: {
    text: "uhh... okay 😭",
    buttons: [
      { text: "I Wanna try again", next: "landing" },
      { text: "Nah I’m done", next: "end1" }
    ]
  },
  end1: { text: "Thank you for at least trying 😭 bieeeeee", buttons: [] },
  q1: {
    text: "You know my lil secret 😭👉🏻👈🏻",
    buttons: [
      { text: "Yes I do 😭", next: "q3" },
      { text: "I don’t care 🥀", next: "end1" }
    ]
  },
  q3: {
    text: "Yk it’s Valentine week going on 👉🏻👈🏻",
    buttons: [
      { text: "Ig I know what you talking about 👀", next: "q4" },
      { text: "Nah am not interested 🥀", next: "end1" }
    ]
  },
  q4: {
    text: "Yk you are just so perfect 😭",
    buttons: [
      { text: "Yes I am 💅🏻", next: "q5" },
      { text: "I don’t think so", next: "liar" }
    ]
  },
  liar: {
    text: "LIAR 😤",
    buttons: [
      { text: "Try again", next: "q4" }
    ]
  },
  q5: {
    text: "You already know the story and I just can't write it here 😭… so will you be my Valentine 👉🏻👈🏻",
    buttons: [
      { text: "No I can't 😭", next: "end1" },
      { text: "I gotta think about it 😭", next: "celebration" },
      { text: "Ig I will give you chance", next: "celebration" }
    ]
  },
  celebration: {
    text: "AM I DREAMING!? REALLY!!!??? THANK YOUUUU 😭😭🎀🎀",
    buttons: []
  }
};

function renderPage(pageKey) {
  const page = pages[pageKey];
  app.innerHTML = '';

  const textDiv = document.createElement('div');
  textDiv.classList.add('glass');
  textDiv.innerText = page.text;
  app.appendChild(textDiv);

  page.buttons.forEach(btn => {
    const button = document.createElement('button');
    button.innerText = btn.text;
    button.onclick = () => renderPage(btn.next);
    app.appendChild(button);
  });
}

// Start the app
renderPage('landing');
