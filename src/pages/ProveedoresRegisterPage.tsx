import { Button, Group } from "@mantine/core";
import { IconArrowBackUp } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ProveedorForm from "../components/ProveedorForm/ProveedorForm";
import Layout from "./Layout";

export function ProveedoresRegisterPage() {
    return <Layout>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                <Button component={Link} to="/proveedores" rightSection={<IconArrowBackUp size={14} />}>Volver</Button>
            </Group>
            <ProveedorForm
                nombre="Registrar Proveedor"
            />
        </Layout>
}