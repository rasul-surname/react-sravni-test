import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Loader = () => {
    const {loading, error} = useTypedSelector(state => state.card);

    return (
        <>
            {loading ? <h1>Идет загрузка...</h1> : false}
            {error ? <h1>{error}</h1> : false}
        </>
    );
};

export default Loader;