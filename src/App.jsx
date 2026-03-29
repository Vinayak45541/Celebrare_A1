import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { EventProvider } from "./context/EventContext";

function App() {

  return (

    <BrowserRouter>

      <AuthProvider>
        <EventProvider>

          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
          
        </EventProvider>
      </AuthProvider>

    </BrowserRouter>

  );

}

export default App;