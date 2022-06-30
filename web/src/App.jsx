import { AuthProvider } from "./auth/AuthContext"
import SocketContext, { SocketProvider } from "./context/SocketContext"
import AppRouter from "@router/AppRouter"
import moment from "moment"
import "moment/locale/es"
moment.locale('es')
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
