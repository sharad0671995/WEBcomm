import { BroweserRouter as Router } from "react-router-dom";
import { AppLayout } from "./component/layout/App-layout";
function App() {
  return (
    <div>
      <Router>
        <AppLayout />
      </Router>
    </div>
  );
}

export default App;
