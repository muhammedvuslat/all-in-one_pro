import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerServices";

const DropdownSearch = ({ customerId, setChartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomers();
        setItems(data);
      } catch (error) {
        console.log(error, "fetch erroru bu");
      }
    };
    fetchCustomer();
  }, []);

  const filteredItems = items.filter((item) =>
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  //   console.log(items);

  const handleGetData = () => {
    if (selectedItem) {
      console.log("Veriler getiriliyor:", selectedItem.id);
      // Veriyi dışa aktarma (örneğin grafik componentine)
      customerId(selectedItem.id);
      setChartOpen(true);
    }
  };

  return (
    <div className="flex flex-row items-start gap-2 w-64 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none"
      >
        {selectedItem ? selectedItem.companyName : "Select an item"}
      </button>

      {isOpen && (
        <div className="absolute top-12 z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-auto px-3 py-2 border-b border-gray-200 focus:outline-none"
          />

          <ul className="max-h-60 overflow-y-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect(item)}
                >
                  {item.companyName}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-400">No items found</li>
            )}
          </ul>
        </div>
      )}

      <button
        onClick={handleGetData}
        disabled={!selectedItem}
        className={`mt-2 px-4 py-2 rounded-md w-full  text-white transition-colors ${
          selectedItem
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Get Data
      </button>
    </div>
  );
};

export default DropdownSearch;
