export default {
    data () {
        return {
            showNavigation: true,
            lastScrollPosition: 0,
            navMenuOpen: false,
        };
    },

    mounted () {
        window.addEventListener('scroll', this.onScroll);
    },

    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll);
    },

    methods: {
        onScroll () {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            // failsafe for momentum scrolling on mobile devices
            if (currentScrollPosition < 0) {
                return;
            }
            this.showNavigation = currentScrollPosition < this.lastScrollPosition;
            this.navMenuOpen = false;
            this.lastScrollPosition = currentScrollPosition;
        },
    },
};
