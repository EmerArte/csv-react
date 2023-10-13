import { useDropzone } from "react-dropzone";
import { RiFileLine } from "react-icons/ri";
import DropFileContainer from "./DropFileContainer";
import DropFileLabel from "./DropFileLabel";

const DropFileInput = () => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isfocused,
    isdragAccept,
    isdragreject,
  } = useDropzone({ accept: { "text/csv": [".csv"] }, maxFiles: 1, maxSize: 1000000 });

  return (
    <div className="max-w-[368px]">
      <DropFileContainer {...getRootProps({ isfocused, isdragAccept, isdragreject })}>
        <input {...getInputProps()} />
        <p className="flex flex-row items-center justify-between w-[80%]">
          <RiFileLine className="w-8 h-8 text-primary" />
          <DropFileLabel acceptedFiles={acceptedFiles}></DropFileLabel>
        </p>
      </DropFileContainer>
    </div>
  );
};
export default DropFileInput;
