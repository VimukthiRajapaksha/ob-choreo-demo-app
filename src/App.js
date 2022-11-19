import { Routes, Route } from "react-router-dom"
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Banks } from "./pages/Banks";
import { Callback } from "./services/oauth2-service";
import { Toast } from "bootstrap";
import { useEffect } from "react";

function App() {

  useEffect (() => {
    // initialize bootstrap toasts
    const toastElList = document.querySelectorAll('.toast');
    const toastList = [...toastElList].map(toastEl => new Toast(toastEl));
    toastList.map(toast => toast.show());
  });

  return (
    <div className="App" style={{background:'#d7e2de'}}>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/banks" element={ <Banks/> } />
        <Route path="/oauth2/callback" element={ <Callback/> } />
      </Routes>
    </div>
  );
}

export default App;
