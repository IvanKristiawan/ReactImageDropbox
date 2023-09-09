import React, { useState } from "react";
import "./styles.css";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "zp61snulkocpy3k";

export default function App() {
  const [url, setUrl] = useState("");

  function handleSuccess(files) {
    console.log(files[0].thumbnailLink);
    setUrl(files[0].thumbnailLink);
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Upload or Choose Files</h1>
      <br />
      <div className="container">
        <DropboxChooser
          appKey={APP_KEY}
          success={handleSuccess}
          cancel={() => console.log("closed")}
          multiselect={true}
        ></DropboxChooser>
        <br />
        <img src={url} alt="" />
      </div>
    </div>
  );
}
