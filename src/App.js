import React, { Suspense, useState } from "react"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import LoadingSpinner from "./components/LoadingSpinner"
import Layout from "./Layout"
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import routes from "./config/routes"
import SidebarNav from "./Layout/Sidebar"
import Topbar from "./Layout/Topbar"

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarNav isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" name="Layout" element={<Layout />} >
                  {
                    routes.map((route, index) => {
                      return (
                        <Route
                          key={index}
                          path={route.path}
                          name={route.name}
                          element={<route.element />}
                        />
                      )
                    })
                  }
                </Route>
              </Routes>
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
