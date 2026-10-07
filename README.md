# Dopamine Drive

A dark luxury car-shopping playground featuring BMW, Mercedes-Benz, Audi, and Volvo. Purchases are simulated; no payments or personal information are collected.

To view without Node.js, download the project files into one folder and open `index.html` in your browser. Keep `style.css` and `app.js` alongside it. Local-storage persistence depends on browser support for local files.

Alternatively, run with Node.js 24 (no package installation required):

```sh
npm run dev
```

The server listens on port 3000; override with `PORT`. Brand filters, search, favorites, car details, and a dream garage work in the browser. Favorites and claimed cars persist in local storage when available. Car artwork is original stylized SVG; prices and specifications are illustrative. Fonts optionally load from Google Fonts with local fallbacks.
