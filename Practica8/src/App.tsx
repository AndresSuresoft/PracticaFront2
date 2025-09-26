
import ColorManager from "./components/ColorManager";
import type FormValidation from "./components/UserForm";
import UserForm from "./components/UserForm";
import WindowSizeMonitor from "./components/WindowSizeMonitor";

function App() {
  
  return (
    <div style={{ padding: "20px" }}>
      <ColorManager/>
      <WindowSizeMonitor/>
      <UserForm/>
      
    </div>
  );
}

export default App;
