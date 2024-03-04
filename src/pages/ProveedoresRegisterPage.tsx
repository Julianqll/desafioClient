import { Button, Group } from "@mantine/core";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import { IconArrowBackUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProveedorForm from "../components/ProveedorForm/ProveedorForm";

export function ProveedoresRegisterPage() {
    const [valueNombre, setValueNombre] = useState<string>("");
    const [valueDireccion, setValueDireccion] = useState<string>("");
    const [valueContacto, setValueContacto] = useState<string>("");

    return <CollapseDesktop>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                <Button component={Link} to="/proveedores" rightSection={<IconArrowBackUp size={14} />}>Volver</Button>
            </Group>
            <ProveedorForm
                nombre="Registrar Proveedor"
            />
        </CollapseDesktop>
}