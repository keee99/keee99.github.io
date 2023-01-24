import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from "pinia";

const store = createPinia();

store.use(piniaPluginPersistedState)

export default store;
