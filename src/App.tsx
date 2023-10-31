import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    const [alertVisible, setAlertVisbility] = useState(false);

    return (
        <div>
            {alertVisible && <Alert onClose={() => setAlertVisbility(false)}>Hey listen !</Alert>}
            <Button onClick={() => setAlertVisbility(true)}>
                Click here !
            </Button>
        </div>
    );
}

export default App;
