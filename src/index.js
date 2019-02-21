import dva from 'dva';
// 引入全局样式，消除浏览器的差异
import './index.css';
// 引入antd的样式
import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// 挂载 发现页面redux
app.model(require('./models/discover').default);
// 挂在 登录页面redux
app.model(require('./models/login').default);
// 挂在 搜索页面redux
app.model(require('./models/search').default);
// 挂在 播放页面redux
app.model(require('./models/play').default);

// 4. Router
// 挂在router路由信息
app.router(require('./routes/index').default);

// 5. Start
app.start('#root');
