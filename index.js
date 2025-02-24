```javascript
// app/layout.js
import './globals.css';
import { ErrorBoundary } from 'next/error-boundary';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <ErrorBoundary>
              {children}
          </ErrorBoundary>
      </body>
    </html>
  );
}

export default RootLayout;
```
```javascript
// app/not-found.js

export default function NotFound(){
    return (
        <div>404 - Page Not Found</div>
    );
}
```
```javascript
// pages/about.js

export default function About() {
  throw new Error('Intentional error');
}
```