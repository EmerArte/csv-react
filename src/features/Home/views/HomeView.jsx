import CardStiled from "../../../components/Card/Card";
import Message from "../../../components/Message/Message";
import Title from "../../../components/Title/Title";
import Selection from "../../../assets/Selection.svg";
import DropFileInput from "../components/FileInput/DropFileInput";
import ConfirmButton from "../components/ConfirmButton/ConfirmButton";
import { Alert } from "@material-tailwind/react";
import { useState } from "react";
import FileContext from "../contexts/FileContext";
import Span from "../../../components/Span/Span";

const HomeView = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const value = { file, setFile };

  return (
    <>
      <div className="absolute w-full top-0 right-0 flex justify-end">
        <Alert
          open={open}
          className="w-1/3"
          color="blue"
          onClose={() => setOpen(false)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          Debe seleccionar un archivo
        </Alert>
      </div>

      <div className="flex w-full items-center space-x-2 my-6">
        <img src={Selection} alt="icon" />
        <Title>Carga la informacion de las facturas de tu empresa</Title>
      </div>
      <FileContext.Provider value={value}>
      <CardStiled className="max-h-[369px]">
        <Message>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos.
        </Message>
        <br />
        <div className="ml-4">
          <h2 className="text-primary text-lg font-bold leading-tight tracking-tight">
            Cargue de facturas
          </h2>
          <br />
          <DropFileInput></DropFileInput>
          <br />
          <span className="text-text text-sm font-bold leading-tight tracking-tight">El documento debe ser formato csv o excel y un tamaño maximo de 1MB.</span>
        </div>
        <br />
        <br />
        <div className="flex w-full justify-center items-center py-2">
          <ConfirmButton></ConfirmButton>
        </div>
      </CardStiled>
      </FileContext.Provider>
    </>
  );
};
export default HomeView;
