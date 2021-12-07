import { ReactNode } from "react";
import User from "./User";

const DataDisplay = ({ children }: { children: ReactNode }) => <>{children}</>;

DataDisplay.User = User;

export default DataDisplay;
