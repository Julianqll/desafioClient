import { Button, Group } from "@mantine/core";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import ResourcesTable  from "../components/ResourcesTable/ResourcesTable";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { getAllProveedores } from "../api/proveedores.api";
import { Link } from "react-router-dom";

export function ProveedoresPage() {

    const [proveedores, setProveedores] = useState<any>([]);

    useEffect(() => {
        async function loadProveedores() {
            const resProveedores = await getAllProveedores();
            setProveedores(resProveedores.data);
        }
        loadProveedores();
    }, []);
    
    return <CollapseDesktop>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                <Button component={Link} to="/proveedores/register" rightSection={<IconPlus size={14} />}>Agregar</Button>
            </Group>
            <ResourcesTable type="proveedores" data={proveedores}/>
        </CollapseDesktop>
}