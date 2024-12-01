import React from 'react';

const PermissionCheckbox = ({ label, checked, onChange }) => (
  <div className="permission-checkbox">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <label>{label}</label>
  </div>
);

export default PermissionCheckbox;
