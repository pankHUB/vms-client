import React, {useState} from "react";
import axios from "axios";

const AddModal = () => {
    const [file, setFile] = useState(null);
    const [userId, setUserId] = useState("");

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("Test", file);
    formData.append("userId", userId);
    const res = await axios.post("http://localhost:4500/api/voucher/excelAdd", formData);
    const { message } = res.data;
    message?alert(`Message:${message} `):alert(`Message: Error in creating Vouchers`)
    ;
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const onaddId = (e) => {
    setUserId(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    uploadFile();
  };

  return (
    <>
      <div >
                <div >
                    <form onSubmit={onSubmit}>
                        <h3>Create Voucher</h3>
                        <div className="form-group">
                          <lable>
                            User Id :
                            <input type="text" name="userId" onChange={(e)=>onaddId(e)} />
                          </lable>
                          <br/>
                          <br/>
                            <input type="file" accept=".xlsx" onChange={(e)=>onFileChange(e)} />
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Add</button>
                        </div>
                </form>
        </div>
    </div>
    </>
  );
};

export default AddModal;
