import React, { useState, useEffect } from "react";
import { storage, db } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, collection, setDoc, getDocs } from "firebase/firestore";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  useEffect(() => {
    loadAllImages();
  }, []);

  const loadAllImages = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "images"));
    let currImages = [];
    querySnapshot.forEach((doc) => {
      currImages = [...currImages, doc.data().imageUrl];
    });
    setImages(currImages);
    setLoading(false);
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file == "") {
      alert("Please add the file");
    }

    const storageRef = ref(storage, `images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("download url:", downloadURL);
          const imageStoreRef = doc(db, "images", file.name);
          setDoc(imageStoreRef, {
            imageUrl: downloadURL,
          });
        });
      }
    );
  };

  return (
    <div className="images-collection">
      {loading && <p>Loading gallery...</p>}
      {images &&
        images.map((imageUrl) => {
          return (
            <div className="image-container">
              <img src={imageUrl} />
            </div>
          );
        })}
      <button onClick={openModal}>Upload an Image</button>
      <Popup open={open} onClose={closeModal}>
        <input type="file" accept="/image/*" onChange={handleChange}></input>
        <button onClick={handleUpload}>Save</button>
      </Popup>
    </div>
  );
};

export default FileUpload;
