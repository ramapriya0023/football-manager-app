import React, { useState } from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import FilePicker from "./components/common/FilePicker";
import SearchBox from "./components/common/SearchBox";
import CustomButton from "./components/common/CustomButton";
import ImportDialog from "./components/Dialogs/ImportDialog";
import FootballFieldWithPlayerCard from "./components/Field/FootballFieldWithPlayerCard";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider>
      <div>
        <h1>Football Manager</h1>
        <CustomButton
          text={"Import team"}
          type={"primary"}
          onClick={() => setOpen(true)}
        />
        <ImportDialog setOpen={setOpen} open={open} />
      </div>
      <FootballFieldWithPlayerCard />
    </ThemeProvider>
  );
};

export default App;
