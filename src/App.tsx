import Alert from "./components/Alert.tsx";
import Button, {Color} from "./components/Button.tsx";
import {useState} from "react";

export default function App() {
  const [isAlertShown, setAlertShown] = useState(false);

  return <div>
    {isAlertShown && <Alert onClose={() => setAlertShown(false)}>My Alert</Alert>}
    <Button color={Color.WARNING} onClick={() => setAlertShown(true)}>Test</Button>
  </div>;
}