import React, {useState, useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [];

for (let i = 2010; i < 2023; i++) {
  friendOptions.unshift({ key: i, text: i, value: i });
}


const Dropdwn = ({ onDropdownFilter, selectedItem }) => {
  const [insertedValue, setInsertedValue] = useState(0);
  const onChange = (event) => {
    onDropdownFilter(event.target.textContent);
  }

  useEffect(() => {
    selectedItem && setInsertedValue(+selectedItem);
  }, [selectedItem])



  return (
    <Dropdown className="w-[200px]"
      placeholder='Select a year'
      selection
      options={friendOptions}
      onChange={e => onChange(e)}
      value={insertedValue}
    />


  );
}

export default Dropdwn;
