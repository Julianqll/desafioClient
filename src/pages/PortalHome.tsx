import { Flex , Text} from "@mantine/core";
import Layout from "./Layout";

export function PortalHome() {
    return <Layout>
        <Flex mt={50} direction="column" align="center" style={{ gap: "30px" }}>
          <Text
              size="xl"
              fw={500}
          >
            Este es tu dashboard, todo luce bien ;)
          </Text>
        </Flex>
        </Layout>
}