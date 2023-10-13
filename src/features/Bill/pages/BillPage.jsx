import { useEffect, useState } from "react";
import { getBills, rejectBill } from "../service/BillService";
import Pagination from "../components/Pagination";
import TextStyle from "../components/TextStyle";
import { Chip } from "@material-tailwind/react";
const TABLE_HEAD = [
  "Codigo",
  "Nombres y apellidos ",
  "Dirección",
  "Valor a pagar",
  "Fecha de vencimiento",
  "Fecha de pago ",
  "Estado",
];

const BillPage = () => {
  const [bills, setBills] = useState(undefined);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const pageable = async (page) => {
    const response = await getBills(page);
    setBills(response.data);
    setPageCount(response.pages - 1);
    setCurrentPage(page);
  };

  const reject = async () => {
    if(selected == null){
      window.alert("Debe seleccionar una factura");
      return;
    }
    const response = await rejectBill(selected);
    if(response.message != null){
      window.alert(response.message);
    }else{
      window.alert("Factura rechazada");
    }
  }

  useEffect(() => {
    pageable(currentPage); // Carga la primera página al inicio
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <input
          className="focus:outline-none border-solid border-sky-500 
        rounded-lg w-80 border-4 border-white 
        border-b-[#00B5E2] outline-offset-0 px-4"
          type="text"
          placeholder="Buscar por nombre o codigo"
        />
        <button onClick={reject} className="w-[178.51px] h-12 bg-cyan-500 rounded-lg font-bold text-base text-white">
          Rechazar
        </button>
      </div>
      <div className="w-full overflow-x-auto px-0">
        <table className="min-w-max w-full table-auto my-4 rounded-sm text-left bg-card ">
          <thead>
            <tr className="border-b-2 border-gray-300">
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4 text-center">
                  <TextStyle>{head}</TextStyle>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bills
              ? bills.map(
                  ({
                    billCode,
                    name,
                    lastName,
                    amount,
                    status,
                    address,
                    paymentExpirationDate,
                    paymentDueDate,
                  }) => {
                    return (
                      <tr key={billCode} className="text-center">
                        <td>
                          <div className="flex items-center gap-3">
                            <label
                              className="relative flex cursor-pointer items-center rounded-full p-3"
                              data-ripple-dark="true"
                            >
                              <input
                                type="checkbox"
                                checked={selected == billCode}
                                onChange={(e) => {
                                  setSelected(e.target.checked ? billCode: null);}}
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none 
                                rounded-md border border-blue-gray-200 transition-all before:absolute 
                                before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 
                                before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                                before:bg-blue-gray-500 before:opacity-0 before:transition-opacity 
                                checked:border-[#00B5E2] checked:bg-[#00B5E2] checked:before:bg-[#00B5E2] 
                                hover:before:opacity-5"
                                id="checkbox"
                              />
                              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  stroke="currentColor"
                                >
                                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                                </svg>
                              </div>
                            </label>
                            <div color="blue-gray" className="font-bold">
                              {billCode}
                            </div>
                          </div>
                        </td>
                        <td>
                          <TextStyle>{`${name} ${lastName}`}</TextStyle>
                        </td>
                        <td>
                          <div color="blue-gray" className="font-normal">
                            {address}
                          </div>
                        </td>
                        <td>
                          <div color="blue-gray" className="font-normal">
                            {amount}
                          </div>
                        </td>
                        <td>
                          <div color="blue-gray" className="font-normal">
                            {paymentExpirationDate}
                          </div>
                        </td>
                        <td>
                          <div
                            // variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {paymentDueDate}
                          </div>
                        </td>
                        <td align="center">
                          <Chip
                            variant="ghost"
                            className="bg-white align-middle self-center min-w-22 max-w-24 w-24"
                            size="sm"
                            value={status}
                            icon={
                              <span
                                className={`mx-auto mt-1 block h-2 w-2 rounded-full ${
                                  status.toLowerCase() == "pagado"
                                    ? " bg-green-600"
                                    : status.toLowerCase() == "progreso"
                                    ? " bg-blue-400"
                                    : status.toLowerCase() == "pendiente"
                                    ? " bg-yellow-400"
                                    : " bg-red-600"
                                }  content-['']`}
                              />
                            }
                          />
                        </td>
                      </tr>
                    );
                  }
                )
              : ""}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center border-t border-blue-gray-50 p-4 space-x-4">
        <button
          className="w-10 text-primary bg-gray-200 h-12 rounded-md hover:bg-blue-500 hover:text-white"
          disabled={currentPage == 0}
          onClick={() => pageable(currentPage - 1)}
        >
          {"<"}
        </button>
        <div className="flex items-center gap-2">
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            pageable={pageable}
          />
        </div>
        <button
          className="w-10 text-primary bg-gray-200 h-12 rounded-md hover:bg-blue-500 hover:text-white"
          size="sm"
          disabled={currentPage == pageCount}
          onClick={() => pageable(currentPage + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
export default BillPage;
