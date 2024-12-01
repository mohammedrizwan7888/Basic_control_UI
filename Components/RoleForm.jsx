import React, { useState } from 'react';
import PermissionSection from './PermissionSection';
import '../styles/App.css';
import ReportsSection from './ReportsSection';
import PharmacySection from './PharmacySection';
import PatientSection from './PatientSection';
import OtherSection from './OtherSection';
import LabSection from './LabSection';
import DoctorSection from './DoctorSection';
import InvoiceSection from './InvoiceSection';
import ChannelSection from './ChannelSection';

const RoleForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [permissions, setPermissions] = useState({
    userPermissions: [
      { label: 'View User', checked: false },
      { label: 'Create User', checked: false },
      { label: 'Delete User', checked: false },
      { label: 'Reset User Password', checked: false },
    ],
    ChannelSection: [
      { label: 'View Channel', checked: false },
      { label: 'Create Channel', checked: false },
      { label: 'Delete Channel', checked: false },
    ],
    ReportsSection: [
      { label: 'View Reports', checked: false },
      { label: 'Generate Reports', checked: false },
    ],
    PharmacySection: [
      { label: 'View Pharmacy', checked: false },
      { label: 'Manage Inventory', checked: false },
    ],
    PatientSection: [
      { label: 'View Patient', checked: false },
      { label: 'Manage Patient Records', checked: false },
    ],
    OtherSection: [
      { label: 'View Patient', checked: false },
      { label: 'Manage Patient Records', checked: false },
    ],
    LabSection: [
      { label: 'View Lab Results', checked: false },
      { label: 'Request Lab Tests', checked: false },
    ],
    DoctorSection: [
      { label: 'View Doctors', checked: false },
      { label: 'Manage Doctor Schedule', checked: false },
    ],
    InvoiceSection: [
      { label: 'View Invoices', checked: false },
      { label: 'Manage Invoices', checked: false },
    ],
  });

  // Select all or deselect all permissions in a section
  const handleSelectAll = (section) => {
    setPermissions((prevPermissions) => {
      const areAllSelected = prevPermissions[section].every((perm) => perm.checked);
      return {
        ...prevPermissions,
        [section]: prevPermissions[section].map((perm) => ({
          ...perm,
          checked: !areAllSelected, // Toggle based on current state
        })),
      };
    });
  };

  // Handle individual permission change
  const handlePermissionChange = (section, label) => {
    setPermissions((prevState) => ({
      ...prevState,
      [section]: prevState[section].map((perm) =>
        perm.label === label ? { ...perm, checked: !perm.checked } : perm
      ),
    }));
  };

  return (
    <div className="role-form-container">
      <h2 className="role-heading" >{selectedRole} Role Name</h2>
      <input
        type="text"
        placeholder="Search permissions..."
        className="role-search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Example Usage in Channel Section */}
      <div className="permissions-section">
        <hr />
        <ChannelSection
          sectionTitle="Channel Session"
          permissions={permissions.ChannelSection}
          handleChange={(label) => handlePermissionChange('ChannelSection', label)}
          handleSelectAll={() => handleSelectAll('ChannelSection')} // Pass the function here
        />
      </div>

      {/* Example Usage in Reports Section */}
      <div className="permissions-section">
        <hr />
        <ReportsSection
          sectionTitle="Report "

          permissions={permissions.ReportsSection}
          handleChange={(label) => handlePermissionChange('ReportsSection', label)}
          handleSelectAll={() => handleSelectAll('ReportsSection')} // Pass the function here
        />
      </div>

      {/* Example Usage in Pharmacy Section */}
      <div className="permissions-section">
        <hr />
        <PharmacySection
          sectionTitle="Pharmacy Section "
          permissions={permissions.PharmacySection}
          handleChange={(label) => handlePermissionChange('PharmacySection', label)}
          handleSelectAll={() => handleSelectAll('PharmacySection')} // Pass the function here
        />
      </div>

      {/* Example Usage in Patient Section */}
      <div className="permissions-section">
        <hr />
        <PatientSection
          sectionTitle="Patient Section "
          permissions={permissions.PatientSection}
          handleChange={(label) => handlePermissionChange('PatientSection', label)}
          handleSelectAll={() => handleSelectAll('PatientSection')} // Pass the function here
        />
      </div>

      {/* Example Usage in Other Section */}
      <div className="permissions-section">
        <hr />
        <OtherSection
          sectionTitle="Other Section "
          permissions={permissions.OtherSection}
          handleChange={(label) => handlePermissionChange('OtherSection', label)}
          handleSelectAll={() => handleSelectAll('OtherSection')} // Pass the function here
        />
      </div>

      {/* Example Usage in Lab Section */}
      <div className="permissions-section">
        <hr />
        <LabSection
          sectionTitle="Lab Section "
          permissions={permissions.LabSection}
          handleChange={(label) => handlePermissionChange('LabSection', label)}
          handleSelectAll={() => handleSelectAll('LabSection')} // Pass the function here
        />
      </div>

      {/* Example Usage in Doctor Section */}
      <div className="permissions-section">
        <hr />
        <DoctorSection
          sectionTitle="Doctor Section "
          permissions={permissions.DoctorSection}
          handleChange={(label) => handlePermissionChange('DoctorSection', label)}
          handleSelectAll={() => handleSelectAll('DoctorSection')} // Pass the function here
        />
      </div>

      {/* Example Usage in Invoice Section */}
      <div className="permissions-section">
        <hr />
        <InvoiceSection
          sectionTitle="Invoice Section "
          permissions={permissions.InvoiceSection}
          handleChange={(label) => handlePermissionChange('InvoiceSection', label)}
          handleSelectAll={() => handleSelectAll('InvoiceSection')} // Pass the function here
        />

      </div>
      <div className="action-buttons">
        <button className="update-btn">Update Role</button>
        <button className="close-btn">Close</button>
      </div>
      
    </div>

  );
};

export default RoleForm;
