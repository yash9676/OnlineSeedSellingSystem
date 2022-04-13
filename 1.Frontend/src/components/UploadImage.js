import React from "react";
import { useState } from "react";
import { axios } from "axios";
import {url} from '../common/constant';
const UplaodImage = () => {
    
    const [image, setImage] = useState(undefined);
    const [name, setName] = useState('');

    const UplaodImage = () => {
        // const data = new FormData();
        // data.append('file', image);
        // data.append('name', name);
        // console.table(data);

        let data = {
            file: image,
            name: name
        };
        console.log(data);
        
        
        axios.post(url+'/admin/image/upload', data).then((response) => {
            console.log(response.data);
            alert("image saved")
            setName(response.data.name);
        });

    }

    const onFileSelect = (event) => {
    setImage(event.target.files[0])
    }
    return (
        <div className="container">
            <div >
        <label htmlFor="">Thumbnail</label>
        <input
          accept="image/*"
          onChange={onFileSelect}
          type="file"
          className="form-control"
        />
        {/* <input type="text" placeholder="name of file" value={name!==null?name:''} > </input> */}
        <button onClick={UplaodImage}>Upload</button>
      </div>
        </div>
    );
}
export default UplaodImage;