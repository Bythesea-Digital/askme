import { ReactNode } from "react";
import TextInput from "./inputs/TextInput";

const DataEntry = ({ children }: { children: ReactNode }) => <>{children}</>;

DataEntry.Input = TextInput;

export default DataEntry;
