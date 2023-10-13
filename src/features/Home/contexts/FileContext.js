import { createContext } from "react";

const FileContext = createContext({
    file: null,
    setFile: () => {},
});

export default FileContext;