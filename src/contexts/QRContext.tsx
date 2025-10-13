import { createContext } from "react";
import { QRInterface } from "../interfaces/QRInterface";

export const QRContext = createContext<QRInterface>({
    email: null,
    isInside: false,
})