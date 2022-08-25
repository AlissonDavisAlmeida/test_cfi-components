import { CFI } from "cfi-components/dist"

function App() {

  const onFocus = (data: { value: string, formatValue?: string }) => {
    console.log(data.value)
    console.log(data.formatValue)
  }

  const lostFocus = (data: { value: string, formatValue?: string }) => {
    console.log(data.value)
    console.log(data.formatValue)
  }

  return (
    <CFI.GridContainer>

      <CFI.TextInput
        idResource="telefone"
        className="col-2"
        id="tel"
        onFocus={onFocus}
        onLostFocus={lostFocus}
        type="tel"

      />
      <CFI.TextInput
        idResource="email"
        id="email"
        className="col-2"
        onFocus={onFocus}
        onLostFocus={lostFocus}
        type="email"

      />
      <CFI.TextInput
        idResource="cadastroAditivos"
        id="cadastroAditivos"
        className="col-3"
        onFocus={onFocus}
        onLostFocus={lostFocus}
        type="text"

      />
      <CFI.TextInput
        idResource="cadastroAditivos"
        id="password"
        className="col-2"
        onFocus={onFocus}
        onLostFocus={lostFocus}
        type="password"

      />
    </CFI.GridContainer>

  );
}

export default App;
