function ExtensionCard({ item, isChecked, toggleChecked, onRemove }) {
  return (
    <div className="extension-box">
      <div className="extension-main">
        <div className="extension-icon">
          <img src={item.logo} alt={item.name + " icon"} />
        </div>
        <div className="extension-details">
          <h2>{item.name}</h2>
          <p className="extension-description">{item.description}</p>
        </div>
      </div>

      <div className="extension-bottom">
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          Remove
        </button>
        <label className="switch">
          <input
            type="checkbox"
            checked={isChecked(item.id)}
            onChange={() => toggleChecked(item.id)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default ExtensionCard;
