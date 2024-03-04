import { Button, Group } from "@mantine/core";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import { IconArrowBackUp } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import SolicitudForm from "../components/SolicitudForm/SolicitudForm";

export function SolicitudesRegisterPage() {
    return <CollapseDesktop>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                <Button component={Link} to="/proveedores" rightSection={<IconArrowBackUp size={14} />}>Volver</Button>
            </Group>
            <SolicitudForm
                nombre="Registrar Solicitud"
            />
        </CollapseDesktop>
}