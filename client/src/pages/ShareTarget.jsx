import React, { useState, useEffect } from "react";

export default function ShareTarget() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    if ("launchQueue" in window && "files" in LaunchParams.prototype) {
      window.launchQueue.setConsumer(async ({ files }) => {
        if (!files.length) return;

        const names = await Promise.all(
          files.map(async (fileHandle) => {
            const file = await fileHandle.getFile();
            return file.name;
          })
        );

        setFileNames(names);
      });
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Shared Files</h2>
      {fileNames.length > 0 ? (
        <ul className="list-disc list-inside">
          {fileNames.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No files shared yet.</p>
      )}
    </div>
  );
}
