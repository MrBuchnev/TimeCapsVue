import Navigation from './components/Navigation/Navigation.vue';
import Capsule from './components/Capsule/Capsule.vue';
import Motto from './components/Motto/Motto.vue';
import HowTo from './components/HowTo/HowTo.vue';
import CustomFooter from './components/Footer/Footer.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: 'app',
    components: {
        Navigation,
        Capsule,
        Motto,
        HowTo,
        CustomFooter
    },
};
