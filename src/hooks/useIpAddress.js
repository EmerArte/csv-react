import { useState, useEffect } from 'react';

const useIPAddress = () =>{
    const [ipAddress, setIPAddress] = useState('');

    const getIPAddress = async () => {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        setIPAddress(data.ip);
    };

    useEffect(() => {
        getIPAddress();
    }, []);

    return [ipAddress];
}
export default useIPAddress;