import { useState } from "react";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import { Flex , Text} from "@mantine/core";

export function PortalHome() {
    return <CollapseDesktop>
      <Flex mt={50} direction="column" align="center" style={{ gap: "30px" }}>
        <Text
            size="xl"
            fw={500}
        >
          Este es tu dashboard, todo luce bien ;)
        </Text>
      </Flex>
        </CollapseDesktop>
}