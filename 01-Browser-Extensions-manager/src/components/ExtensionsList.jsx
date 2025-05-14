import ExtensionCard from "./ExtensionCard";

function ExtensionsList({ extensions, isChecked, toggleChecked, onRemove }) {
  return (
    <div className="extenstions-grid" id="grid-container">
      {extensions.map((item) => (
        <ExtensionCard
          key={item.id}
          item={item}
          isChecked={isChecked}
          toggleChecked={toggleChecked}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default ExtensionsList;
