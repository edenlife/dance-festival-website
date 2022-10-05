export default {
    mounted() {
        this.setLocation()
    },
	methods: {
        setLocation() {
            if (this.$nuxt.$route.path.includes('/ke')) {
                this.$store.commit('setCountry', 'KE')
            } else {
                this.$store.commit('setCountry', 'NG')
            }
       }}
};
