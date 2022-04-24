import React, { useEffect, useState } from "react";
import { imgDev } from "../constants/";
import "../styles/styleHome.css";
import "../styles/chargeFile.css";
import { handleUploadFiles } from "../utils/controllerUploadFile";
import { postAPI } from "../utils/fetchData";

const Home = () => {
  // Initialize state
  const [image, setImage] = useState({
    uri: null,
    file: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const [dataForm, setDataForm] = useState({
    attendu: "",
    prediction: "",
    linkImg: ""
  });

  const loadImage = (e) =>
    setImage({
      uri: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0]
    });

  // Load a picture
  const handleSubmit = async (img_) => {
    setIsLoading(true);
    let fileUploaded = null;
    if (img_.file) {
      fileUploaded = await handleUploadFiles.uploadFile(img_);
      const { url } = fileUploaded;

      // call API-IA
      if (url) {
        setDataForm({ ...dataForm, linkImg: url });
        createPrediction(url);
      }
      //
      console.log("url", url);
    }
    setIsLoading(false);
  };

  const createPrediction = async () => {
    // const res = await postAPI("");
    const res = {
      success: true,
      prediction: "glasses"
    };

    if (res) {
      //
      //   setImage({ uri: null, file: null });
      setDataForm({ ...dataForm, prediction: res.prediction });
    }
  };
  useEffect(() => {
    //
  }, [dataForm.linkImg]);

  return (
    <div className='mainHome'>
      <div className='contentResume'>
        {/* resume your model here */}
        Place the details of your model here
      </div>
      <div className='contentChargeFile-res'>
        <div className='firstFlex'>
          <h2> Charger votre photo ici </h2>

          <div className='contentInputPicture'>
            <div className='contentInput'>
              <div>
                <input
                  type='text'
                  className='inputText'
                  placeholder=' Entrez le resultat attendu, ex  glasses'
                  onChange={(e) => {
                    setDataForm({ ...dataForm, attendu: e.target.value });
                  }}
                />
              </div>
              <div>
                <input
                  type='file'
                  multiple={false}
                  onChange={(e) => loadImage(e)}
                />
              </div>
              <div>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => handleSubmit(image)}
                  disabled={
                    dataForm.attendu === "" || image.uri === null ? true : false
                  }
                >
                  {isLoading ? "Loading..." : "Charger"}
                </button>
              </div>
            </div>
          </div>
          {/* fin */}

          {/* <ChargeFile /> */}
        </div>
        <div className='lastFlex photoLoaded'>
          <h2> Photo chargée </h2>
          {image.uri !== null && <img src={image.uri} alt='...' />}
        </div>
        <div className='lastFlex'>
          <h2> Resultat de la prédiction </h2>
          <h4>
            Resultat attendu :{dataForm.prediction !== "" && dataForm.attendu}
          </h4>
          <h4>
            Resultat de la prediction :
            {dataForm.prediction !== "" && dataForm.prediction}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Home;
