import FilterControls from "../components/FilterControls";
import ExtensionsList from "../components/ExtensionsList";
import { useState } from "react";
import extensionsData from "../data/extensionsData.json";

function Home() {
  const [extensions, setExtensions] = useState(extensionsData);
  const [filter, setFilter] = useState("all");
  const [checkedMap, setCheckedMap] = useState(() => {
    const map = {};
    extensionsData.forEach((item) => (map[item.id] = false));
    return map;
  });

  const handleRemove = (idToRemove) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== idToRemove));
  };

  const filteredExtensions = extensions.filter((item) => {
    const isChecked = checkedMap[item.id];
    if (filter === "active") return isChecked;
    if (filter === "inactive") return !isChecked;
    return true; //if all
  });

  const isChecked = (id) => !!checkedMap[id];

  const toggleChecked = (id) => {
    setCheckedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="extensions-list">
        <h2>Extensions List</h2>

        <FilterControls filter={filter} setFilter={setFilter} />
      </div>
      <ExtensionsList
        extensions={filteredExtensions}
        isChecked={isChecked}
        toggleChecked={toggleChecked}
        onRemove={handleRemove}
      />
    </>
  );
}

export default Home;
