import { MariaPrea } from "./componentes";
import { Mensagem } from "../components/Mensagem";
import { MensagemComParametro } from "../components/MensagemComParametro";



export default function NovaRotaHome(){

    return (

       <div>

          <h1>Nova Rota, Nova Página</h1>

          <MariaPrea/>
          <Mensagem/>
          <MensagemComParametro texto="Morreu Maria Preá" />

       </div>

    )

}