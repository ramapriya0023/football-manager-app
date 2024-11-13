import { useRoster } from "../providers/RosterContextProvider";

export const useFileAPI = () => {
  const { baseUrl } = useRoster();
  const FINAL_URL = `${baseUrl}/api/file`;

  const getFiles = async () => {
    const response = await fetch(FINAL_URL);
    if (!response.ok) {
      let errorMessage = `Error fetching files: ${response.statusText}`;

      const errorBody = await response.json();
      errorMessage = errorBody.message || errorMessage;
      throw new Error(errorMessage);
    }
    return response.json();
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(FINAL_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      let errorMessage = `Error uploading file: ${response.statusText}`;
      try {
        const errorBody = await response.json();
        errorMessage = errorBody.message || errorMessage;
      } catch (error) {
        errorMessage = "JSON parsing failed.";
      }
      throw new Error(errorMessage);
    }
    return response.text();
  };

  const updateFileName = async (fileId, fileName) => {
    const response = await fetch(FINAL_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileId, fileName }),
    });

    if (!response.ok) {
      throw new Error(`Error updating file name: ${response.statusText}`);
    }
    return response.text();
  };

  const deleteFile = async (fileId) => {
    const response = await fetch(`${FINAL_URL}/${fileId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error deleting file: ${response.statusText}`);
    }
    return response.text();
  };

  return { getFiles, uploadFile, updateFileName, deleteFile };
};
