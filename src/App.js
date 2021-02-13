import './App.css';
import TodoApp from "./TodoApp";
import {ThemeProviderr} from "./contexts/ThemeContext";
import {LanguageProvider} from "./contexts/LanguageContext";


function App() {
  return (
    <LanguageProvider>
      <ThemeProviderr>
        <TodoApp/>
      </ThemeProviderr>
    </LanguageProvider>
  );
}

export default App;
