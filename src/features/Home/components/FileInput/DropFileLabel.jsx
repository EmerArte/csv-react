const DropFileLabel = ({ acceptedFiles }) => {
  return (
    <>
      <span className="text-xs text-black font-extrabold leading-[15px] tracking-tight">
        {typeof acceptedFiles[0] != 'undefined' ? acceptedFiles[0].name : "Subir o arrastrar el archivo aquí"}
      </span>
      <span className="text-xs text-black font-extrabold leading-[15px] tracking-tight uppercase">
        {typeof acceptedFiles[0] != 'undefined' ? acceptedFiles[0].type : "EXCEL, CSV"}
      </span>
    </>
  );
};
export default DropFileLabel;
