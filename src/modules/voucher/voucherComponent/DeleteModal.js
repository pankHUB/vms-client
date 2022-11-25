import React, { useState } from "react";
import axios from "axios";

const DeleteModal = () => {
  const [updateData, setUpdateData] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        console.log({
            ...updateData
        })
      console.log(updateData);
      const res = await axios.delete(`http://localhost:4500/api/voucher/${updateData.voucherId}`);
      const { Error } = res;
      Error ? alert('Error in delete value'):alert('Deleted successfully');
    }catch(err){
      alert(`Error : ${err}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br/>
        <label>
          VoucherId:
          <input
            type="text"
            onChange={handleChange}
            name={"voucherId"}
            placeholder={"Voucher Id"}
          ></input>
        </label>
        <br />
        <br />
        <input type="submit" value={"Delete"}></input>
      </form>
    </div>
  );
};

export default DeleteModal;
