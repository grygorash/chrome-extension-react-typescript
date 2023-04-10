import { createRoot } from 'react-dom/client';

import App from 'popup/components/App';
import 'assets/popup';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
