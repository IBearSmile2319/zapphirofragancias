import { AuthProvider } from "./auth/AuthContext"
import SocketContext, { SocketProvider } from "./context/SocketContext"
import AppRouter from "./router/AppRouter"

function App() {
  return (
    <AuthProvider >
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  )
}

export default App
