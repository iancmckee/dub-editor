import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

interface EditableFieldProps {
  initialValue: string;
  onSave: (newValue: string) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({ initialValue, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSaveClick = () => {
    onSave(value);
    setIsEditing(false);
  };

  return (
    <div>
    {isEditing ? (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <input type="text" value={value} onChange={handleInputChange} />
        <button onClick={handleSaveClick}>
          <EditIcon/>  {/* Replace with your icon class */}
        </button>
      </div>
    ) : (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>{value}</span>
        <button onClick={handleEditClick}>
            <EditIcon/>  {/* Replace with your icon class */}
        </button>
      </div>
    )}
  </div>
  );
};

export default EditableField;