# Catching array change in React Hooks with useEffect

It's a little bit trucky and you need to understand the way JS copy Array data type.

When you just copy the array like "oldUncaught", the reference is a copy of "uncaughtChange".

When you use spread operator "oldArray" is assigned to a new reference different from "caughChange".

In JS array are copied by reference so if you don't use spread operator, useEffect can't catch the change. Voilà !