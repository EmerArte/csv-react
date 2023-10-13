import useIPAddress from "../../hooks/useIpAddress";
import formatDate from "../../utils/FormatDate";
const time = formatDate(new Date());

const NavBar = () => {
    const [ipAddress, setIpAddress] = useIPAddress('');

    return (
        <div className="grid grid-row-2 w-full">
            <div className="col-2 my-10 text-right">
                <p className=" font-medium text-text ">Último ingreso {time}</p>
                <p>IP Address: {ipAddress}</p>
            </div>
            
            
        </div>
    )

}

export default NavBar;