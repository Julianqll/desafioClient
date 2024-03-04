import { Button, Group } from "@mantine/core";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import ResourcesTable  from "../components/ResourcesTable/ResourcesTable";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllSolicitudes } from "../api/solicitudes.api";
import authInstance from "../auth";

export function SolicitudesPage() {

    const [solicitudes, setSolicitudes] = useState<any>([]);
    const isColocador = authInstance.getUser()?.groups.includes(2);
    
    useEffect(() => {
        async function loadProveedores() {
            const resSolicitudes = await getAllSolicitudes();
            setSolicitudes(resSolicitudes.data);
        }
        loadProveedores();
    }, []);
    
    return <CollapseDesktop>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                {isColocador && (
                    <Button component={Link} to="/solicitudes/register" rightSection={<IconPlus size={14} />}>Agregar</Button>
                )}
            </Group>
            <ResourcesTable type="solicitudes" data={solicitudes}/>
        </CollapseDesktop>
}