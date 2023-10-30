
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type SelectItem = {
    name: string,
    displayName: string,
}

export default function BaseSelect(props: any) {
const selectItems: SelectItem[] = props.selectItems;
const curValue: string = props.curValue;
const label: string = props.label;
const onChange: Function = props.onChange;

const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
};

return (
    <FormControl fullWidth>
    <InputLabel id="course-name-select-label">{label}</InputLabel>
    <Select
        labelId="course-name-select-label"
        id="course-name-select"
        value={curValue}
        label={label}
        onChange={handleChange}
    >
        {selectItems.map(e =>
        <MenuItem key={e.name} value={e.name}>{e.displayName}</MenuItem>
        )}
    </Select>
    </FormControl>
);
}

