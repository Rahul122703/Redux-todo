import React, { useEffect } from "react";

export default function ShareTarget() {
  useEffect(() => {
    // Only works in PWA installed mode
    if ("launchQueue" in window && "files" in LaunchParams.prototype) {
      window.launchQueue.setConsumer(async (launchParams) => {
        if (!launchParams.files.length) return;

        for (const fileHandle of launchParams.files) {
          const file = await fileHandle.getFile();
          console.log("Received file:", file);
          // Do something with the file (preview, upload, etc.)
        }
      });
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Receiving Shared Content...</h2>
      <p>Check the console for shared file info.</p>
    </div>
  );
}
