import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const vuetify = createVuetify({
  icons: {
    iconfont: 'md' || 'fa' // Default to 'md' or use 'fa' for FontAwesome
  },
});

export default vuetify;
