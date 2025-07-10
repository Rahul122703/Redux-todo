import React from "react";

export default function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check out this cool app!",
          url: window.location.href,
        });
        console.log("Shared successfully");
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert(
        "Your browser does not support sharing. Please copy the URL manually."
      );
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Share
    </button>
  );
}
