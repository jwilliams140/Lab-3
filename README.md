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

Step 4
1. The index.tsx file helps render the User Interface using the return statement, manage values using useState, and handle data processing by using the handleSearch function.
2. To reuse the same API code presented in index.tsx, you would need to move the same code that manages how the API searches for pokemon data into a different file and make sure that resuable component only focuses on rendering only.
3. Because the app is partially complete at the momemnt, I believe separating the logic into a different function would make it possible to the test the API parsing logic.

Part 2
Step 5
1. Separating both files without including React makes it easier to use multiple times across the app and reduces the code to look much simpler.
2. The service function uses the Pokemon name as an input, initiates the API request, and returns the Pokemon data succesfully if found. If it fails or does not exist, an error will be called by the call component.

Step 6 & 7
1. The builder pattern allows the app to use the Pokemon object to contruct the data step by step. By using this pattern, it is easier to read and edit properties when making new objects.
2. A model is is better structured than raw API JSON and it should help reduce errors and make the code easier to manage.
