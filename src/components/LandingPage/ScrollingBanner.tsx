export function ScrollingBanner() {
  const items = [
    "Enhanced Clarity",
    "Consistent Branding",
    "Team-Wide Standardization",
    "Client-Ready Output",
    "AI-Enhanced",
    "Faster Submissions",
    "Time Savings",
    "Cost-Effective",
    "Error-Free Formatting",
  ];

  const colors = [
    "#315762", // deep teal
    "#006D77", // cyan-blue
    "#264653", // slate blue
    "#2A9D8F", // green-teal
    "#457B9D", // blue-gray
    "#118AB2", // sky blue
    "#073B4C", // dark cyan
    "#5C6BC0", // indigo
    "#0096C7", // bright azure
  ];

  const allItems = [...items, ...items, ...items];

  return (
    <div
      style={{
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        background: "linear-gradient(to right, #f9fafb, #f3f4f6)",
        overflow: "hidden",
      }}
    >
      <div
        className="flex animate-scroll whitespace-nowrap"
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {allItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 2rem",
              margin: "0 0.5rem",
              borderRadius: "9999px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              color: "#ffffff",
              backgroundColor: colors[index % colors.length],
              fontWeight: 500,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
