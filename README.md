# Lab-3
Part 0
1. index.tsx is acting as the main screen when launched.
2. State in index.tsx is const [pokemonName, setPokemonName] = useState("");. This line controls what it will search when the user types in the pokemon they want to search for.
Part 1
1. When fetch receives a non-200 response, it doesn't produce an error. It will return a response object that means there was a unsuccessful attempt to fetch. 2. APIs can return different structures depending on what has happened. Just because it returned something doesn't mean JSON responded in the way it should. This is why it is best to not assume this because the response could mean the program has errors such as runtime errors. 
