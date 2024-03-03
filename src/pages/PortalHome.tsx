import { useState } from "react";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import InputForm from "../components/ProveedorForm/ProveedorForm";
import { ResourcesTable } from "../components/ResourcesTable/ResourcesTable";

export function PortalHome() {
    const [valueNombre, setValueNombre] = useState<string>("");
    const [valueDireccion, setValueDireccion] = useState<string>("");
    const [valueContacto, setValueContacto] = useState<string>("");

    return <CollapseDesktop>
        <InputForm
            nombre="Registrar Proveedor"
            values={{valueNombre, valueDireccion, valueContacto}}
            setters={{setValueNombre,setValueDireccion, setValueContacto}}
        ></InputForm>    
        </CollapseDesktop>
}