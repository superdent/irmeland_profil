<template>
  <header>
    <nav>
      <div class="menu-icon" @click="toggleMenu">
        ☰
      </div>
      <ul :class="{ 'show-menu': showMenu }">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/about" @click="closeMenu">Über mich</router-link></li>
        <li><router-link to="/projects" @click="closeMenu">Projekte</router-link></li>
        <li><router-link to="/download" @click="closeMenu">Download</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Kontakt</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false; // Stellt sicher, dass das Menü sich schließt
    }
  }
};
</script>


<style scoped>
header {
  background-color: #c4a7e7;
  color: #333333;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: center; /* Zentriert den gesamten Inhalt */
  align-items: center;
}

.menu-icon {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center; /* Vertikale Zentrierung der Menüpunkte */
}

ul li {
  position: relative;
  padding: 0 15px; /* Sorgt für Abstand zwischen den Pipes und dem Text */
}

ul li:not(:last-child)::after {
  content: '|'; /* Pipe als Trennzeichen */
  position: absolute;
  right: 0;
  color: #333333; /* Gleiche Farbe wie die Menüpunkte */
  font-weight: bold;
}

ul li a {
  color: #333333;
  text-decoration: none;
  font-weight: bold;
}

ul li a:hover {
  color: #f9a875;
}

/* Responsive Styles */
@media (max-width: 768px) {
  nav {
    justify-content: flex-start; /* Menü links ausrichten */
    padding-left: 1rem; /* Abstand vom linken Rand */
  }

  .menu-icon {
    display: block;
    margin-right: auto; /* Sorgt dafür, dass das Menü links bleibt */
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px; /* Höhe des Headers */
    left: 10px; /* Abstand von der linken Seite */
    width: 150px; /* Schmaleres Menü */
    background-color: #c4a7e7;
    padding: 0.5rem 1rem; /* Weniger Padding */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: left; /* Links ausgerichtet */
    align-items: flex-start; /* Sorgt dafür, dass die Einträge linksbündig sind */
  }

  ul.show-menu {
    display: flex; /* Zeigt das Menü an, wenn show-menu aktiv ist */
  }

  ul li {
    margin: 0.5rem 0;
    padding: 0; /* Setzt Padding zurück für mobile Ansicht */
  }

  ul li:not(:last-child)::after {
    content: none; /* Entfernt die Pipes im mobilen Menü */
  }

  ul li a {
    display: block; /* Block-Element, um volle Breite zu nutzen */
    padding: 0.5rem 0; /* Vertikales Padding für Klickbereich */
  }
}
</style>
