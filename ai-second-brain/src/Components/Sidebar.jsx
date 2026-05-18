import { useState } from "react";


function Sidebar() {
  const sidebarItems = [
    {
      name: "All Notes",
      style: "bg-gray-500 rounded-full",
    },
    {
      name: "Favorites",
      style: "bg-gray-500 rounded-full",
    },
    {
      name: "Task",
      style: "bg-gray-500 rounded-full",
    },
    {
      name: "Completed",
      style: "bg-gray-500 rounded-full",
    },
  ];








  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <div className="flex flex-col gap-3">
        {sidebarItems.map((item) => (
          <p
            key={item.name}
            className={`${item.style} p-3 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200 text-center font-medium`}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
