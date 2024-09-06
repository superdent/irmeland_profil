<template>
  <div class="about">
    <section class="text-box">
      <div class="content-container">
        <div class="text-content">
          <h1 class="heading-color">Downloads</h1>
          <ul class="download-links">
            <li><a href="https://www.irmeland.com/downloads/schlenter_cv.pdf" target="_blank">Lebenslauf herunterladen (PDF)</a></li>
            <li><a href="https://www.irmeland.com/downloads/schlenter_arbeitszeugnisse.pdf" target="_blank">Arbeitszeugnisse herunterladen (PDF)</a></li>
            <li><a href="https://www.irmeland.com/downloads/schlenter_zertifikate.zip" target="_blank">Zertifikate herunterladen (ZIP)</a></li>
            <li><a href="https://www.irmeland.com/downloads/schlenter_abschluesse.zip" target="_blank">Abschlüsse herunterladen (ZIP)</a></li>
          </ul>
        </div>
        <a href="https://www.irmeland.com/downloads/schlenter_bewerbungsunterlagen.zip" download>
          <img src="@/assets/download.png" alt="Downloadbild" class="circle-pic">
        </a>
      </div>
    </section>
    <p class="note">Das Passwort für die Downloads bitte per E-Mail erfragen!</p>
  </div>
</template>

<style scoped>
.download-links {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.download-links li {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.download-links a {
  color: #8fd19e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.download-links a:hover {
  color: #f9a875;
}
</style>
