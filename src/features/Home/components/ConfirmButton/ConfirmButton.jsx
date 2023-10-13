import { Button } from "@material-tailwind/react";
import FileContext from "../../contexts/FileContext";
import { useContext } from 'react';
import { chargeFileService } from "../../service/ChargeFileService";
import { useNavigate } from "react-router-dom";

const ConfirmButton = () => {
    let navigate = useNavigate();
    const {file, setFile} = useContext(FileContext);
    const uploadFile = async () => {
        if(file == null){
            return;
        }
        if(file.size > 1000000){
            window.alert("El archivo no puede ser mayor a 1MB");
            return;
        }
        const response = await chargeFileService(file);
        if(response.message){
            window.alert(response.message);
        }else{
            navigate("/billing")
        }
    };


    return (
        <>
         <Button
            variant="filled"
            className="bg-primary text-white"   
            size="md"
            disabled={file === null}
            onClick={uploadFile}
        >
            Continuar
        </Button>
        </>
       
    )
};
export default ConfirmButton;