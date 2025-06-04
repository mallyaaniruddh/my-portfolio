export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const getActiveSection = () => {
  const sections = ['home', 'about', 'experience', 'work', 'contact'];
  let currentActive = 'home';
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentActive = section;
        break;
      }
    }
  }
  return currentActive;
};