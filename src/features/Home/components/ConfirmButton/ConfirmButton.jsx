import { Button } from "@material-tailwind/react";
import FileContext from "../../contexts/FileContext";
import { useContext } from 'react';
import { chargeFileService } from "../../service/ChargeFileService";
import { redirect } from "react-router-dom";
const ConfirmButton = () => {
    const {file, setFile} = useContext(FileContext);

    const uploadFile = async () => {
        if(file == null){
            return;
        }
        console.log(file);
        const response = await chargeFileService(file);
        if(response.message){
            window.alert(response.message);
        }else{
            redirect("/billing")
        }
        console.log(response);
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