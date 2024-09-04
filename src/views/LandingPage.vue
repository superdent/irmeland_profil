<template>
  <div class="landing-page">
    <section class="text-box text-center">
      <h1 class="heading-color">Willkommen auf meiner Website!</h1>
      <p>Ich bin Technology Consultant mit Schwerpunkt auf Software-Architektur und Erfahrung in verschiedenen Branchen und Fachbereichen.</p>
      <img src="@/assets/ruediger1.png" alt="Mein Foto" class="circle-pic">
      <button @click="navigateToDownload">Zugang zu meinen Bewerbungsunterlagen</button>
    </section>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'LandingPage',
  setup() {
    const router = useRouter();
    const navigateToDownload = () => {
      router.push('/download');
    };

    return {
      navigateToDownload,
    };
  },
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-top: 80px; /* Abstand zum Header */
  padding-bottom: 4rem;
  background-color: #f4f4f9;
  min-height: 100vh;
  box-sizing: border-box;
}

.text-center {
  text-align: center;
}

.circle-pic {
  width: 200px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Media Queries für Responsive Design */
@media (max-width: 768px) {
  .text-box {
    padding: 1.5rem; /* Reduziertes Padding auf Tablets */
    margin: 1rem;
  }
  
  .circle-pic {
    width: 150px; /* Kleinere Bilder auf Tablets */
  }

  h1 {
    font-size: 1.8rem; /* Kleinere Überschrift auf Tablets */
  }

  p {
    font-size: 1rem; /* Kleinere Schriftgröße auf Tablets */
  }
}

@media (max-width: 480px) {
  .text-box {
    padding: 1rem; /* Noch weniger Padding auf Smartphones */
    margin: 0.5rem;
  }
  
  .circle-pic {
    width: 120px; /* Noch kleinere Bilder auf Smartphones */
  }

  h1 {
    font-size: 1.5rem; /* Kleinere Überschrift auf Smartphones */
  }

  p {
    font-size: 0.9rem; /* Kleinere Schriftgröße auf Smartphones */
  }
}
</style>