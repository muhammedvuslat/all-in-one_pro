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

  const handleGetData = () => {
    if (selectedItem) {
      customerId(selectedItem.id);
      setChartOpen(true);
    }
  };

  return (
    <div className="flex flex-row  gap-2 w-auto relative items-center my-6 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-40 md:w-96 h-10 text-left px-4 py-2 border-x border-b rounded-b-xl  p-2.5 dark:bg-dark-secondary bg-light-secondary border-light-quintuple dark:border-dark-quaternary dark:placeholder-dark-seventh placeholder:text-dark-seventh dark:text-dark-sixth text-light-sixth truncate"
      >
        {selectedItem ? selectedItem.companyName : "Select an item"}
      </button>

      {isOpen && (
        <div className="absolute top-12 z-10 w-full border-x border-b rounded-b-xl  p-2.5 dark:bg-dark-primary bg-light-secondary border-light-quintuple dark:border-dark-quaternary dark:placeholder-dark-seventh placeholder:text-dark-seventh dark:text-dark-sixth text-light-sixth">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-auto px-3 py-2 border-x border-b rounded-b-xl  p-2.5 dark:bg-dark-secondary bg-light-secondary border-light-quintuple dark:border-dark-quaternary dark:placeholder-dark-seventh placeholder:text-dark-seventh dark:text-dark-sixth text-light-sixth"
          />

          <ul className="max-h-60 overflow-y-auto ">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 cursor-pointer hover:border rounded-b-xl hover:dark:border-dark-quaternary hover:border-light-quintuple "
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
        className={`px-4 py-2 rounded-md  h-10 w-auto text-white transition-colors ${
          selectedItem
            ? "dark:bg-dark-quaternary dark:hover:bg-dark-eighth bg-light-quintuple hover:bg-light-ninth"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Get Data
      </button>
    </div>
  );
};

export default DropdownSearch;
