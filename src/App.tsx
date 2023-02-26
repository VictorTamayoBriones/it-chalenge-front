import { Alert, AlertToDelete, CircleProgressIndicator } from "./components"
import { AppRoutes } from "./routes"


function App() {
  
  return (
    <div className="app">
      <AppRoutes/>
      <CircleProgressIndicator/>
      <Alert/>
      <AlertToDelete/>
    </div>
  )
}

export default App
