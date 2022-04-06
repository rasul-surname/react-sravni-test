import React from 'react';
import { Select } from 'antd';

interface InterfaceSelect {
    onChange: (value: any) => void;
    filterList: any[];
}

const SelectComponent: React.FC<InterfaceSelect> = (props) => {
    const {onChange, filterList} = props;
    const { Option } = Select;

    return (
        <Select onChange={onChange} defaultValue="Любая" style={{width: 280}}>
            {filterList.map((elem: any) => {
                return (
                    <Option value={elem.value}>{elem.value}</Option>
                )
            })}
        </Select>
    );
};

export default SelectComponent;