import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function CreatePost() {
    const [upImg, setUpImg] = useState(null)
    const [caption, setCaption] = useState('')

    const displayImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    return (
        <>
            <Navbar />
            <form className="img-upload-form">
                <input type="file" placeholder="Image" accept="image/*" onChange={displayImage} />
                <img src={upImg} alt="" />
                <input type="text" placeholder="Caption" defaultValue={caption} />
                <button className="btn waves-effect waves-light submit-btn right" type="submit">Upload</button>
            </form>
        </>
    )
}
