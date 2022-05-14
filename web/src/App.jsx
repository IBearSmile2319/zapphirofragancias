import { AuthProvider } from "./auth/AuthContext"
import AppRouter from "./router/AppRouter"

function App() {
  return (
    <AuthProvider >
     <AppRouter/> 
    </AuthProvider>
  )
}

export default App
