export const handleUploadFiles = {
  uploadFile: async image => {
    // KEYS
    const URLUploadImg =
      "https://api.Cloudinary.com/v1_1/:pacyl20/image/upload";
    const uploadPreset = "lyu4vqcl";
    const apiKey = "485816724636379";
    const apiSecret = "485816724636379";

    const formData = new FormData();
    formData.append("file", image.file);
    formData.append("upload_preset", uploadPreset);
    formData.append("api_key", apiKey);
    formData.append("api_secret", apiSecret);
    const options = {
      method: "POST",
      body: formData
    };
    try {
      const res = await fetch(URLUploadImg, options);
      return await res.json();
    } catch (err) {
      return err;
    }
  },

  chargeFile: async (file, initialTabFiles) => {
    const resUpload = {
      success: false,
      tabFiles: null
    };

    try {
      if (!file.file) {
        console.clear();
        console.log("Veillez Ajouter le fichier ");
        return resUpload;
      }
      let fileUploaded = null;
      if (file.file) fileUploaded = await handleUploadFiles.uploadFile(file);
      if (fileUploaded.error) {
        console.clear();
        console.log("Extension File no supported");
        return {
          ...resUpload,
          success: false,
          tabFiles: [],
          message: "extension File no supported"
        };
      }
      const tabFiles = initialTabFiles;
      tabFiles.push(fileUploaded.url);
      return { ...resUpload, success: true, tabFiles: tabFiles };
    } catch (error) {
      console.clear();
      console.log("Erreuer , veillez  reaolod la page");
      console.log("error.message :>> ", error.message);
    }
  }
};
