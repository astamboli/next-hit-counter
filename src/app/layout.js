import React from "react";

import "./styles.css";

export const dynamic = "force-dynamic";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {new Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
