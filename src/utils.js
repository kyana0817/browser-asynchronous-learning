function outputElement(name) {
  const elem = document.getElementById(name);
  
  return {
    text: (text) => {
      const p = document.createElement('p');
      p.textContent = text;
      elem.appendChild(p);
    },
    clear: () => {
      while(elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
    }
  }
}