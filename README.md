# Catching array change in React Hooks with useEffect

Look at the /src/App.js file...

When you just update state with a copy of “oldUncaught”, the reference is a same of the preview state.

When you use “oldCaught” inside spread operator, the new state is assigned to a new reference different from initial state.

In JS array are copied by reference, so if you don’t use spread operator, the reference doesn't change and useEffect can’t catch the change. Voilà !

