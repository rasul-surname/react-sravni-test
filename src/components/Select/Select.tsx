import React from 'react';
import { Select } from 'antd';
import {CardActionTypes} from "../../types/card";
import {useDispatch} from "react-redux";
import classes from "./Select.module.scss";

interface InterfaceSelect {
    title?: string;
    filterList: any[];
    path: string;
}

const SelectComponent: React.FC<InterfaceSelect> = (props) => {
    const {title, filterList, path} = props;
    const dispatch = useDispatch();
    const { Option } = Select;

    function handleChange(value: any) {
        dispatch({type: CardActionTypes.FILTER_DATA, payload: {value, path}});
    }

    return (
        <div>
            <p className={classes.title}>{title}</p>
            <Select className={classes.select} onChange={handleChange} defaultValue="Любая">
                {filterList.map((elem: {value: string}) => <Option value={elem.value}>{elem.value}</Option>)}
            </Select>
        </div>
    );
};

export default SelectComponent;