import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/block').default);
app.model(require('./models/transaction').default);
app.model(require('./models/dashboard').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
