window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".es"];

  const getRandomNumber = max => Math.floor(Math.random() * max);

  const getRandomName = () =>
    `${pronoun[getRandomNumber(pronoun.length)]} ${
      adj[getRandomNumber(adj.length)]
    } ${noun[getRandomNumber(noun.length)]} ${
      domain[getRandomNumber(domain.length)]
    }`;

  const setRandomName = () => {
    document.getElementById("random-name").innerText = getRandomName();
  };

  document.getElementById("generate").addEventListener("click", setRandomName);

  setRandomName();
};
