const BASE_URL = "http://localhost:5001/api/file";

export const getFiles = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Error fetching files: ${response.statusText}`);
  }
  return response.json();
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(BASE_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Error uploading file: ${response.statusText}`);
  }
  return response.text();
};

export const updateFileName = async (fileId, fileName) => {
  const response = await fetch(BASE_URL, {
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

export const deleteFile = async (fileId) => {
  const response = await fetch(`${BASE_URL}/${fileId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error deleting file: ${response.statusText}`);
  }
  return response.text();
};
