import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContext.jsx";
function App() {
  return (
   <UserContextProvider>
       <Login/>  
       <h1>Namaste!</h1>
       <Profile/>
    </UserContextProvider>

  );
}

export default App;
