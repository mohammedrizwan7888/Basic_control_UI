import React from 'react';

const PermissionSection = ({ sectionTitle, permissions, handleChange, handleSelectAll }) => (
  <div className="permissions-container">
    <div className="permissions-header">
      <h3>{sectionTitle}</h3>
      <div className="select-all-container">
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={permissions.every(perm => perm.checked)}
        />
        <label>Select All</label>
      </div>
      <hr />
    </div>
    <div className="permissions-list">
      {permissions.map((perm, index) => (
        <div key={index} className="permission-item">
          <input
            type="checkbox"
            checked={perm.checked}
            onChange={() => handleChange(perm.label)}
          />
          <label>{perm.label}</label>
        </div>
      ))}
    </div>
  </div>
);

export default PermissionSection;
