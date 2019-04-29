export default {
  created() {
    this.$store && this.$store.dispatch('enterModulePage', this.$route)
      .then(() => {});
  },
};
