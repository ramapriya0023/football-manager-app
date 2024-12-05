import React, { createContext, useContext, useState } from "react";

const RosterContext = createContext();

export const RosterContextProvider = ({ children }) => {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isFileImported, setIsFileImported] = useState(false);
  const [rosterName, setRosterName] = useState(null);
  const [selectedView, setSelectedView] = useState("roster");
  const [showImportedFiles, setShowImportedFiles] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [baseUrl, setBaseUrl] = useState("http://localhost:5001");
  const [fileId, setFileId] = useState("");

  const selectRoster = (name) => {
    setRosterName(name);
    setSelectedView("roster");
  };

  const updateIsFileImported = (status) => {
    setIsFileImported(status);
  };

  const updateRosterName = (name) => {
    setRosterName(name);
  };

  const updateViewLayout = (layout) => {
    setSelectedView(layout);
  };

  const openImportModal = () => {
    setIsImportModalOpen(!isImportModalOpen);
  };

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const updateFileId = (id) => {
    setFileId(id);
  };

  const updateBaseUrl = (url) => {
    setBaseUrl(url);
  };

  return (
    <RosterContext.Provider
      value={{
        isImportModalOpen,
        isFileImported,
        updateIsFileImported,
        rosterName,
        selectRoster,
        updateRosterName,
        selectedView,
        updateViewLayout,
        showImportedFiles,
        setShowImportedFiles,
        openImportModal,
        searchValue,
        updateSearchValue,
        fileId,
        updateFileId,
        baseUrl,
        updateBaseUrl,
      }}
    >
      {children}
    </RosterContext.Provider>
  );
};

export const useRoster = () => {
  return useContext(RosterContext);
};
