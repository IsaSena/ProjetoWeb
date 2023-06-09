import { 
    Container 
} from './styles';

export function Dashboard(){
    return(
        <Container>
            <h1>Eventos de caridade</h1>

            <table>
                <thead>
                   <tr>
                        <th>Nome do evento</th>
                        <th>Data</th>
                        <th>Hora de início</th>
                        <th>Hora de finalização</th>
                        <th>Detalhes</th>
                    </tr> 
                </thead>
            </table>
        </Container>
    );
}