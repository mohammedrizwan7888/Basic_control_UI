import React from 'react';
import PermissionCheckbox from './PermissionCheckbox';

const DoctorSection = ({ sectionTitle, permissions, handleChange,handleSelectAll }) => (
  <div className="Doctor-Section">
    <h3>{sectionTitle}</h3>
    <button onClick={handleSelectAll}>Select All</button>
    <div className="checkbox-group">
      { permissions.map((perm, index) => (
        <PermissionCheckbox
          key={index}
          label={perm.label}
          checked={perm.checked}
          onChange={() => handleChange(perm.label)}
        />
      ))}
    </div>
  </div>
);


export default DoctorSection;
