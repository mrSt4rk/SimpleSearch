import React, {useState, useEffect} from 'react';
import { Checkbox } from 'semantic-ui-react';


const Toggle = ({ onToggle, value }) => {
    const [insertedValue, setInsertedValue] = useState('popularity_desc');

    useEffect(() => { setInsertedValue(value); }, [value])

    const onChange = (data) => {
        onToggle(data);
    }
    return (
        <Checkbox checked={insertedValue === 'popularity_asc' ? true : false} label='popularity' toggle onChange={(e, data) => onChange(data.checked)} />
    );
}

export default Toggle;
