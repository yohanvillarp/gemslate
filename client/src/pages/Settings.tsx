import { User, Key, Save, Settings as SettingsIcon } from "lucide-react";
import { useState } from "react";

interface SettingsProps {
  onFinish: () => void;
}

const USER_DEFAULT = "Gemslater";

const text = {
  description: (
    <>
      The <b>username</b> is eligible for the user.
      <br />
      You can get the <b>Api key</b> from{" "}
      <a
        href="https://aistudio.google.com/app/apikey"
        target="_blank"
        rel="noreferrer"
      >
        Google AI Studio
      </a>
    </>
  ),
};

function Settings({ onFinish }: SettingsProps) {

  // Initialise the state directly from local storage.
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || USER_DEFAULT,
  );
  const [apiKey, setApiKey] = useState(
    () => localStorage.getItem("apiKey") || "",
  );

  // Manual save function
  const handleSave = () => {
    if (username.trim() && apiKey.trim()) {
      localStorage.setItem("username", username);
      localStorage.setItem("apiKey", apiKey);
      console.log("Settings saved.");
      onFinish();
    } else {
      alert("Please complete both fields.");
    }
  };

  return (
    <>
      <h1>
        <SettingsIcon size={24} /> Settings
      </h1>

      <p>{text.description}</p>

      <label>
        <User size={18} /> Username
      </label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your name"
      />

      <br />

      <label>
        <Key size={18} /> API KEY
      </label>
      <input
        type="password"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="AIza..."
      />

      <br />

      <button onClick={handleSave}>
        <Save size={18} />
        Update settings
      </button>
    </>
  );
}

export default Settings;
