# Lab-3
Part 0
1. index.tsx is acting as the main screen when launched.
2. State in index.tsx is const [pokemonName, setPokemonName] = useState("");. This line controls what it will search when the user types in the pokemon they want to search for.

Part 1
1. When fetch receives a non-200 response, it doesn't produce an error. It will return a response object that means there was a unsuccessful attempt to fetch. 2. APIs can return different structures depending on what has happened. Just because it returned something doesn't mean JSON responded in the way it should. This is why it is best to not assume this because the response could mean the program has errors such as runtime errors.

Step 2
1. App truth currently lives in the index.tsx file which houses all code used so far.
2. When loading is not set to false, the app UI will be stuck in a loop thinkin the request is still in progress.

Step 3
1. Rendering raw JSON displays data without organizing or translating it. Rendering a shaped object requires extracting specific fields from the code and structuring it in a clear format before dispalying in the UI.
2. The UI is responsible for outputting the code presented in the entire index.jsx file while the logic's responsibility is to determine how data is managed when using things such as the handlesearch function, API calls, etc.
