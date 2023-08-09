import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

export default function useFireBaseImage(setValue,getValues) {
  const [progress, setProgress] = useState(0);
  if (progress === 100) {
    setTimeout(() => setProgress(0), 1000);
  }
  const [imgaeUrl, setImageUrl] = useState("");
  function getImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    setValue("image", file);
    console.log(file)
    handleUploadImage(file);
  }
  function handleUploadImage(file) {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log("error");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
  }
  function deleteImage() {
    const storage = getStorage();
    const getImage = getValues("image.name");
    console.log(getImage)
    const imageRef = ref(storage, "images/" + getImage);
    deleteObject(imageRef)
      .then(() => {
        setImageUrl("");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return { progress, imgaeUrl, getImage, deleteImage, handleUploadImage,setImageUrl }
}

