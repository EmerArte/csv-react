import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const onDropZone = (acceptedFiles) =>{
    const whenDrop = useCallback((acceptedFiles)=>{
        const file = new FileReader;

        file.onload = function() {
          setPreview(file.result);
        }
    
        file.readAsDataURL(acceptedFiles[0])
    }, [])
    
};

const onDrop = useCallback((acceptedFiles) => {
  const file = new FileReader();
  file.onload = function (event) {
    console.log(event);
    const contents = event.target.result;
    console.log("File contents: " + contents);
  };
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });
  return 
});
