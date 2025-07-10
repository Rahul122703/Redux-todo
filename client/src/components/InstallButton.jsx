import React, { useState, useEffect } from "react";

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the -infobar from appearing on mobile
      e.preventDefault();
      // Save the event for later
      setDeferredPrompt(e);
      // Show the install button
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("PWA installation accepted");
    } else {
      console.log("PWA installation dismissed");
    }
    // Hide the button
    setIsVisible(false);
    // Clear the saved event
    setDeferredPrompt(null);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      onClick={handleInstall}
      className="fixed bottom-4 right-4 px-4 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none">
      Install App
    </div>
  );
}
