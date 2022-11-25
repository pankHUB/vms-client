import React, {useState} from "react";
import axios from "axios";

const AddModal = () => {
    const [file, setFile] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("Test", file);

    console.log(...formData);
    const res = await axios.post("http://localhost:4500/api/voucher/excelAdd", formData);
    const { message } = res.data;
    message?alert(`Message:${message} `):alert(`Message: Error in creating Vouchers`)
    ;
  };

  const onFileChange = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0]);
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
                            <input type="file" onChange={(e)=>onFileChange(e)} />
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
