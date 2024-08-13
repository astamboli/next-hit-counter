import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  const [isCensored, setIsCensored] = React.useState(true);
  const { hits } = JSON.parse(readFile(DATABASE_PATH));
  hits++;
  writeFile(JSON.stringify({ hits }));
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
        <button
          onClick={() => setIsCensored(!isCensored)}
          className={isCensored ? "censored" : null}
        >
          {hits}
        </button>
        .
      </p>
    </main>
  );
}

export default Home;
