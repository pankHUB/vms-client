import React, { useState } from "react";
import axios from "axios";

const UpdateModal = (props) => {
  const {row} = props;
  console.log(row);
  const [updateData, setUpdateData] = useState({
    type: "",
    Brand: "",
  });

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
      console.log(updateData);
      const res = await axios.patch(`http://localhost:4500/api/voucher/update`, updateData);
      const { Error } = res;
      Error ? alert('Error in updating value'):alert('Updated successfully');
    }catch(err){
      alert(`Error : ${err}`);
    }
  };

  return (
    <div>
      <h3> Update Voucher</h3>
      <form onSubmit={handleSubmit}>
        <label>
          VoucherId:
        <input
          type="text"
          onChange={handleChange}
          name={"vaucherId"}
          placeholder={"Voucher Id"}
        ></input>
        </label>
        <br/>
        <br/>
        <label>
          Type:
        <input
          type="text"
          onChange={handleChange}
          name={"type"}
          placeholder={"Type"}
        ></input>
        </label>
        <br/>
        <br/>
        <lable>
          Brand:
        <input
          type="text"
          onChange={handleChange}
          name={"Brand"}
          placeholder={"Brand"}
        ></input>
        <br/>
        <br/>
        </lable>
        <input type="submit" value={"Update"}></input>
      </form>
    </div>
  );
};

export default UpdateModal;
