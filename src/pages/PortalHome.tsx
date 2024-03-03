import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import { ResourcesTable } from "../components/ResourcesTable/ResourcesTable";

export function PortalHome() {
    return <CollapseDesktop>
    <ResourcesTable></ResourcesTable>
    </CollapseDesktop>
}