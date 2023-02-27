import { Container } from "./Container/container";
import { Form } from "./Container/Form/form";
import { Header } from "./Container/Header/header";

function App() {
  return (
    <Container>
      <Header
        title="Currency Calculator" />
      <Form />
    </Container>
  );
}

export default App;
