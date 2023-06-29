import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FormModal from "./components/FormModal";
import "./reset.css";
import "./App.css";

function App() {
  const [modalFormOpen, setModalFormOpen] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [selectedValues, setSelectedValues] = useState({
    brand: null,
    model: null,
    system_id: null,
    version_system: null,
    ram: "",
    memory: "",
    screen_size: "",
    network: "",
    conditionning: "",
    price_reference: "",
  });

  const [selectedSystemId, setSelectedSystemId] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedVersionSystem, setSelectedVersionSystem] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedConditionning, setSelectedConditionning] = useState("");
  const [priceReference, setPriceReference] = useState("");
  const [priceEstimate, setPriceEstimate] = useState("");
  return (
    <div className="App overflow-hidden">
      <FormModal
        modalFormOpen={modalFormOpen}
        setModalFormOpen={setModalFormOpen}
        setSelectedValues={setSelectedValues}
        selectedSystemId={selectedSystemId}
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        selectedVersionSystem={selectedVersionSystem}
        selectedRam={selectedRam}
        selectedMemory={selectedMemory}
        screenSize={screenSize}
        selectedNetwork={selectedNetwork}
        selectedConditionning={selectedConditionning}
        priceReference={priceReference}
        priceEstimate={priceEstimate}
        setSelectedSystemId={setSelectedSystemId}
        setSelectedBrand={setSelectedBrand}
        setSelectedModel={setSelectedModel}
        setSelectedVersionSystem={setSelectedVersionSystem}
        setSelectedRam={setSelectedRam}
        setSelectedMemory={setSelectedMemory}
        setScreenSize={setScreenSize}
        setSelectedNetwork={setSelectedNetwork}
        setSelectedConditionning={setSelectedConditionning}
        setPriceReference={setPriceReference}
        setPriceEstimate={setPriceEstimate}
      />
      <NavBar />
    </div>
  );
}

export default App;
