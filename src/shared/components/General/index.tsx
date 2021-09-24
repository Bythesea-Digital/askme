import { ReactNode } from "react";
import Button from "./Button";

const General = ({ children }: { children: ReactNode }) => <>{children}</>;

General.Button = Button;

export default General;
