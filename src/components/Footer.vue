<template>
  <footer>
    <p>© 2024 Rüdiger Schlenter. Alle Rechte vorbehalten.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  background-color: #c4a7e7; /* Pastellviolett für einen weichen, modernen Look */
  color: #333333; /* Dunkelgrau für Text */
  text-align: center;
  padding: 1.5rem; /* Mehr Padding für einen luftigen Look */
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Schatteneffekt für mehr Tiefe */
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
