import ButtonUI from 'components/common/button';
import React, {useState} from 'react';
import {getData} from '../../api/db/getData'



const Favorite = () => {

const [data, setData ] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');


return (<>
<ButtonUI onClick={()=>getData({ setData, setLoading, setError })} />
    <div>{data && data.length}</div>
    <div>{error}</div>
    <div>{loading && "I'm loading dude"}</div>
    </>
    );};

export default Favorite;
