import { Badge, Button, Group, Text } from "@mantine/core";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import ResourcesTable  from "../components/ResourcesTable/ResourcesTable";
import { IconArrowBackUp, IconCheckbox } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { aprobarSolicitud, getSolicitud } from "../api/solicitudes.api";
import authInstance from "../auth";

export function SolicitudesPageOne() {
    const params = useParams();
    const isAprobador = authInstance.getUser()?.groups.includes(3);

    const [solicitud, setSolicitud] = useState<any>({});
    const navigate = useNavigate();

    const onUpdate = async() => {
        let aprobada = {
            aprobada : !solicitud.aprobada
        }
        const res = await aprobarSolicitud(params.id, aprobada);
        console.log(res);
        navigate(0);
      };

    useEffect(() => {
        async function loadProveedores() {
            const resSolicitud = await getSolicitud(params.id);
            setSolicitud(resSolicitud.data);
        }
        loadProveedores();
    }, []);
    
    return <CollapseDesktop>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                <Button component={Link} to="/solicitudes" rightSection={<IconArrowBackUp size={14} />}>Volver</Button>
            </Group>
            <Text
            size="lg"
            fw={500}
             >
                Proveedor : {solicitud.proveedor?.nombre}
            </Text>
            <Text
            size="lg"
            fw={500}
             >
                Estado : {solicitud.aprobada ? 
                <Badge color="green">Aprobado</Badge>
                :
                <Badge color="red">No aprobado</Badge>
                }
            </Text>
            <ResourcesTable type="items" data={solicitud}/>
            {solicitud.aprobada ? 
                isAprobador && (<Button color="gray" onClick={onUpdate}  rightSection={<IconCheckbox size={14} />}>Desaprobar solicitud</Button>)
                :
                isAprobador && (<Button color="gray" onClick={onUpdate}  rightSection={<IconCheckbox size={14} />}>Aprobar solicitud</Button>)

            }
        </CollapseDesktop>
}