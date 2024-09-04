<template>
  <div class="about">
    <section class="text-box">
      <div class="content-container">
        <div class="text-content">
          <h1 class="heading-color">Meine Geschichte</h1>
          <p>Meine berufliche Reise begann in der Gastronomie, wo ich schnell lernte, unter Druck zu arbeiten und mit Menschen umzugehen.</p>
          <p>Schon bevor ich 1997 meinen ersten Job in der IT antrat, hatte ich Erfahrung mit verschiedenen Programmiersprachen gesammelt. Bereits 1996 begann ich, mich intensiv mit Java zu beschäftigen und meine Programmierkenntnisse weiter auszubauen.</p>
          <p>Seitdem habe ich umfangreiche Erfahrungen als Entwickler, Product Owner und IT-Architekt gesammelt. Meine Arbeit umfasst die Entwicklung von Softwarelösungen und die Leitung von Projekten im agilen Umfeld. Heute bringe ich mein breites Wissen und meine langjährige Erfahrung in verschiedenen Branchen ein, um benutzerfreundliche IT-Lösungen zu entwickeln.</p>
        </div>
        <img src="@/assets/ruediger3.png" alt="" class="circle-pic">
      </div>
    </section>

    <section class="text-box">
      <div class="content-container">
        <div class="text-content">
          <h1 class="heading-color">Worauf ich Wert lege</h1>
          <p>Für mich steht der Mensch im Mittelpunkt der Technologie.</p>
          <p>Ob es um Prozessverbesserungen, technische Implementierungen oder die Anpassung von Arbeitsmethoden geht, mein Ziel ist es, benutzerfreundliche Lösungen zu schaffen.</p>
          <p>Die besten Ergebnisse entstehen durch Zusammenarbeit im Team und durch den Austausch mit allen relevanten Stakeholdern.</p>
          <p>Ich sehe mich dabei stets als Bindeglied zwischen den Entwicklungsteams und den Kunden bzw. Fachabteilungen.</p>
        </div>
        <img src="@/assets/maenner_am_tisch.png" alt="" class="circle-pic">
      </div>
    </section>

    <section class="text-box">
      <div class="content-container">
        <div class="text-content">
          <h2 class="heading-color">Beruflicher Werdegang</h2>
          <p>Mit über 25 Jahren Erfahrung in der IT-Branche habe ich in verschiedenen Rollen und Projekten gearbeitet.</p>
          <p>Ich habe sowohl als Entwickler als auch in leitender Funktion gearbeitet und dabei Teams fachlich angeleitet und viele IT-Projekte erfolgreich umgesetzt.</p>
          <p>Meine Schwerpunkte liegen in den Bereichen:</p>
          <ul class="big-bullet-point-list">
            <li><i class="big-bullet-point"></i> Software-Architektur</li>
            <li><i class="big-bullet-point"></i> Agile Methoden</li>
            <li><i class="big-bullet-point"></i> Cloud-Lösungen</li>
            <li><i class="big-bullet-point"></i> Migrationen und Modernisierung von Legacy-Systemen</li>
            <li><i class="big-bullet-point"></i> Requirements Engineering</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="text-box">
      <div class="content-container">
        <div class="text-content">
          <h2 class="heading-color">Persönliche Interessen</h2>
          <p>Ich besitze eine Dauerkarte bei einem Bundesliga-Club und verfolge die Spiele regelmäßig im Stadion. Im Schachverein spiele ich seit über 40 Jahren und schätze die Gemeinschaft dort.</p>
          <p>Meine Reisen haben mich bereits in viele Länder geführt, und demnächst plane ich eine Reise nach Südamerika und in die Antarktis.</p>
          <p>Außerdem besuche ich gerne Musicals und die Philharmonie, sowohl lokal als auch während meiner jährlichen Besuche in London. Ich bilde mich kontinuierlich weiter und erweitere mein Wissen in verschiedenen Bereichen.</p>
        </div>
        <img src="@/assets/bvb_ente.jpg" alt="" class="circle-pic">
      </div>
    </section>

    <section class="text-box">
      <h2 class="heading-color">Kontaktieren Sie mich</h2>
      <p>Interessiert an einer Zusammenarbeit? Kontaktieren Sie mich für mehr Informationen oder um ein Projekt zu besprechen.</p>
      <button @click="navigateToContact">Kontakt</button>
    </section>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'About',
  setup() {
    const router = useRouter();

    const navigateToContact = () => {
      router.push('/contact');  
    };

    return {
      navigateToContact,
    };
  },
};
</script>