import { Button, Group } from "@mantine/core";
import { IconArrowBackUp } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import SolicitudForm from "../components/SolicitudForm/SolicitudForm";
import Layout from "./Layout";

export function SolicitudesRegisterPage() {
    return <Layout>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                <Button component={Link} to="/proveedores" rightSection={<IconArrowBackUp size={14} />}>Volver</Button>
            </Group>
            <SolicitudForm
                nombre="Registrar Solicitud"
            />
        </Layout>
}