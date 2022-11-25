import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SelectionBar from './voucherComponent/SelectionBar';
import Dataview from './voucherComponent/Dataview';
import AddModal from './voucherComponent/AddModal';
import UpdateModal from './voucherComponent/UpdateModal';
import DeleteModal from './voucherComponent/DeleteModal'


const Voucher = () => {
  const [operation, setOperation] = useState('view');
  const [data, setData] = useState([]);

  useEffect(() => {
    getVoucherData();
  }, []);

  const getVoucherData = async() => {
    try{
      let response = await axios.get('http://localhost:4500/api/voucher/get');
      console.log(response.data);
      setData(response.data);
    }catch(err){
      console.log(err);
    }
    
  }

  const updateOperationType = (value) => {
    setOperation(value);
  }



  return (
    <div >
      <SelectionBar setOperation={updateOperationType} operation={operation}/>
      {operation==='view' && <Dataview data={data}/>}
      {operation==='add' && <AddModal />}
      {operation==='update' && <UpdateModal />}
      {operation==='delete'  && <DeleteModal/>}
    </div>
  )
}

export default Voucher