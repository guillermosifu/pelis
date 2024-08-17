import {
  AuthProvider,
  MovieFavoriteProvider,
  ShoppingCartProvider,
} from "./context";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./router";
import "./App.css"
function App() {
  return (
    <AuthProvider>
      <MovieFavoriteProvider>
        <ShoppingCartProvider>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </ShoppingCartProvider>
      </MovieFavoriteProvider>
    </AuthProvider>
  );
}

export default App;
