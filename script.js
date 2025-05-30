const addWordBtn = document.getElementById("addWordBtn");
const searchWordBtn = document.getElementById("searchWordBtn");
const dictionaryContainer = document.querySelector(".dictionary-container");
const statusDisplay = document.getElementById("statusDisplay");

let dictionary = [];

addWordBtn.addEventListener("click", (event) => {
  const addWordInput = document.getElementById("addWord");
  if (addWordInput.value === "") {
    warningMessage();
    return;
  }
  dictionary.push(addWordInput.value.toLowerCase());
  addWordInput.value = "";
});

searchWordBtn.addEventListener("click", (event) => {
  const searchWordInput = document.getElementById("searchWord");
  if (searchWordInput.value === "") {
    warningMessage();
    return;
  }
  // Type '/console' to return the dictionary in console
  if (searchWordInput.value === "/console") {
    if (!dictionary.length) {
      console.log("Dictionary is empty 🫧");
    } else {
      console.log(dictionary);
    }
    searchWordInput.value = "";
    return;
  }

  // Type '/help' to show existent words
  if (searchWordInput.value === "/help") {
    statusDisplay.textContent = "";
    if (!dictionary.length) {
      dictionaryContainer.textContent = "Dictionary is empty 🫧";
      searchWordInput.value = "";
      return;
    }
    dictionaryContainer.textContent = "Existent words:  ";
    dictionary.forEach((word, index, array) => {
      dictionaryContainer.textContent += `${
        word.charAt(0).toUpperCase() + word.slice(1)
      }${index < array.length - 1 ? ", " : "."}`;
    });
    searchWordInput.value = "";
    return;
  }

  // show status when searching for words
  if (dictionary.includes(searchWordInput.value.toLowerCase())) {
    statusDisplay.innerHTML = `Status: <mark>${searchWordInput.value}</mark> exists ✅`;
  } else {
    statusDisplay.innerHTML = `Status: <mark>${searchWordInput.value}</mark> does NOT exist ❌`;
  }
  searchWordInput.value = "";
  dictionaryContainer.textContent = "";
});

// I used this only 2 times, but it's reusable ok?
function warningMessage() {
  statusDisplay.textContent = "Please enter a valid word";
}
