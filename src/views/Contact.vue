<template>
  <div class="about">
    <section class="text-box">
      <div class="content-container">
        <div class="text-content">
          <h1 class="heading-color">Kontakt</h1>
          
          <ul class="contact-links">
            <li><a href="https://www.linkedin.com/in/ruediger-schlenter-2633391b1/" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.xing.com/profile/Ruediger_Schlenter/" target="_blank">Xing</a></li>
          </ul>
        </div>
        <img src="@/assets/shakehands.png" alt="Kontaktbild" class="circle-pic">
      </div>
    </section>
  </div>
</template>

<style scoped>

.contact-links {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.contact-links li {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.contact-links a {
  color: #8fd19e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-links a:hover {
  color: #f9a875;
}
</style>
