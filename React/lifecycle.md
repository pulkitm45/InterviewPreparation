LIFECYCLE Class Based -- Mounting,Updating and Unmounting
Constructor -- used to initialise any variables before page loads
ComponentDidMount -- this is will run first time when page renders
return -- Returns the jsx which will be displayed on the ui
ComponentDidUpdate -- this is called when state or props change
ComponentWillUnmount -- this is used for cleaning up.

LIFECYCLE Function Based -- UseEffect is used.

Hooks -- Hooks allows us to use the states,lifecycle methods and context and other features which were available in class based components in functional components

useState -- Used to manage the states in functional components
useEffect -- used to run sideeffects. used when doing network calls and fetching data.

useContext -- used to make a state available globally to all the components.
1) counterContext = createContext(intialValue) 2)Wrap the App component in counterContext.Provider component 3)Pass the state in <counterContext.Provider /> component. 4) use value wherever u want with useContext hook. let count =  useContext(count)

useReducer -- Same as useState but used to manage more complex state logics.
useCallback -- its useful for performance. it freezes a function. Second dependency if anything there then computation will be performed if it is changed.
useMemo -- its also useful for performance and returns a memoized value. memoizes a value and doesn't compute an expensive calculation again and again. let a = useMemo(()=>num.find(),[]). Second dependency if anything there then computation will be performed if it is changed.

useRef -- is used to make a value persist between the renders. let a = useRef(0), a.current = a.current+1. It is also used to make a ref to a dom element to use it again and again

Memo is used to cache the value and render only once. It will rerender only when props change

Props -- used to pass data from parent component to child component. these are read only and cannot be changed.
Components -- they are reusable independent UI which has functionality and behaviours
Elements -- they represent the structure of the ui.
High Order Components -- these are components that take another component as an input and returns new compoonent with enhanced functionality/ they are used to reuse logic etc.
