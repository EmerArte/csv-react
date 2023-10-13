import { useDropzone } from "react-dropzone";
import { RiFileLine } from "react-icons/ri";
import DropFileContainer from "./DropFileContainer";
import DropFileLabel from "./DropFileLabel";
import FileContext from "../../contexts/FileContext";
import { useContext } from "react";

const DropFileInput = () => {
  const  { file, setFile }  = useContext(FileContext);
  const onDropFile = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isfocused,
    isdragAccept,
    isdragreject,
  } = useDropzone({
    accept: { "text/csv": [".csv"] },
    maxFiles: 1,
    maxSize: 1000000,
    noDragEventsBubbling: true,
    onDrop: onDropFile,
  });

  return (
    <div className="max-w-[368px] cursor-pointer">
      <DropFileContainer
        {...getRootProps({ isfocused, isdragAccept, isdragreject })}
      >
        <input id="file" {...getInputProps()} />
        <p className="flex flex-row items-center justify-between w-[80%]">
          <RiFileLine className="w-8 h-8 text-primary" />
          <DropFileLabel acceptedFiles={acceptedFiles}></DropFileLabel>
        </p>
      </DropFileContainer>
    </div>
  );
};
export default DropFileInput;
