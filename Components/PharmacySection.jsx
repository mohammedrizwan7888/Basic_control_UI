import React from 'react';

const PharmacySection = ({ sectionTitle, permissions, handleChange, handleSelectAll }) => {
  return (
    <div>
      <h3>{sectionTitle}</h3>
      <button onClick={handleSelectAll}>Select All</button>
      <ul>
        {permissions.map((perm) => (
          <li key={perm.label}>
            <label>
              <input
                type="checkbox"
                checked={perm.checked}
                onChange={() => handleChange(perm.label)}
              />
              {perm.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PharmacySection;
