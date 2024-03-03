import { Button, Group } from "@mantine/core";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import { ResourcesTable } from "../components/ResourcesTable/ResourcesTable";
import { IconPlus } from "@tabler/icons-react";

export function ProveedoresPage() {
    return <CollapseDesktop>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                <Button rightSection={<IconPlus size={14} />}>Agregar</Button>
            </Group>
            <ResourcesTable/>
        </CollapseDesktop>
}