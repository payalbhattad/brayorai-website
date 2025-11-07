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

  // Duplicate items to create seamless loop
  const allItems = [...items, ...items, ...items];

  return (
    <div className="py-10 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {allItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center px-8 py-3 mx-2 bg-white rounded-full shadow-sm text-gray-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
