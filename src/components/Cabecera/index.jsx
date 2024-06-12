import styled from "styled-components";
import CampoTexto from "../CampoTexto";
const HeaderEstilizado = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    .logo {
        width: 212px;
    }
`;

const Cabecera = () => {
    return (
        <HeaderEstilizado>
            <img className="logo" src="/imagenes/logo.png" alt="Logo" />
            <CampoTexto />
        </HeaderEstilizado>
    );
};

export default Cabecera;
