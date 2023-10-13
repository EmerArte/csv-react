import CardStiled from "../../../components/Card/Card";
import Message from "../../../components/Message/Message";
import Title from "../../../components/Title/Title";
import Selection from "../../../assets/Selection.svg";
import DropFileInput from "../components/FileInput/DropFileInput";
const HomeView = () => {
  return (
    <>
      <div className="flex w-full items-center space-x-2 my-6">
        <img src={Selection} alt="icon" />
        <Title>Carga la informacion de las facturas de tu empresa</Title>
      </div>
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
        </div>
        <br />
        <br />
      </CardStiled>
    </>
  );
};
export default HomeView;
