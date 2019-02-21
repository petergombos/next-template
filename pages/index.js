import Head from "next/head";

import View from "../components/View";
import Flex from "../components/Flex";
import Text, {H1} from "../components/Text";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default () => (
  <>
    <Head>
      <title>Next.js 8</title>
    </Head>
    <View p={10} bg="primary.5">
      <H1 color="grey.0" mb={2}>
        Page
      </H1>
      <Text maxWidth="400px" color="white">
        This is a starting template using next.js serverless mode and
        styled-system based default components.
      </Text>
    </View>
    <Flex p={10}>
      <TextInput mr={5} />
      <Button>Search</Button>
    </Flex>
  </>
);
