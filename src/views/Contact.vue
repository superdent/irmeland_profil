<template>
  <div class="about">
    <section class="text-box">
      <div class="content-container">
        <div class="text-content">
          <h1 class="heading-color">Kontakt</h1>
          
          <ul>
            <li class="contact-link"><a class="contact-link" href="https://www.linkedin.com/in/ruediger-schlenter-2633391b1/" target="_blank">LinkedIn</a></li>
            <li class="contact-link"><a class="contact-link" href="https://www.xing.com/profile/Ruediger_Schlenter/" target="_blank">Xing</a></li>
          </ul>

          <!-- CAPTCHA -->
          <div>
            <label for="captcha">Captcha: Erst die Aufgabe, dann die E-Mail: 2 + 3?</label>
            <input type="text" id="captcha" v-model="captchaInput" @keydown.enter="validateCaptcha" maxlength="1" />
            <button @click="validateCaptcha">Bestätigen</button>
          </div>

          <!-- E-Mail-Adresse erst anzeigen, wenn Captcha gelöst wurde -->
          <p v-if="captchaCorrect">
            <a href="#" id="email-link" class="contact-link">E-Mail anzeigen</a>
          </p>
        </div>
        <img src="@/assets/shakehands.png" alt="Kontaktbild" class="circle-pic">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      captchaInput: '',
      captchaCorrect: false
    };
  },
  methods: {
    validateCaptcha() {
      if (this.captchaInput === '5') {
        this.captchaCorrect = true;
        this.$nextTick(() => {  // Warte, bis das DOM aktualisiert wurde
          const user = "ruediger.schlenter";
          const domain = "gmx.de";
          const emailLink = document.getElementById('email-link');
          emailLink.href = 'mailto:' + user + '@' + domain;
          emailLink.textContent = user + '@' + domain;
        });
      } else {
        alert('Captcha falsch! Bitte versuche es erneut.');
      }
    }
  }
};
</script>

<style scoped>
.contact-link {
  color: #8fd19e;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease;
  margin: 0.5rem;
}

.contact-link:hover {
  color: #f9a875;
}

label {
  font-size: 1rem;
  margin-top: 4rem; /* Fügt zusätzlichen Platz oberhalb des Labels hinzu */
  margin-bottom: 0rem; /* Verringert den Abstand zwischen Label und Eingabefeld */
  display: block;
}

input[type="text"] {
  width: 3rem; /* Kleinere Breite für eine Ziffer */
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  margin-right: 0.5rem;
}

p {
  margin: 1rem 0;
}

#captcha {
  margin-top: 1rem;
}

</style>
