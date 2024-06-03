
import ArrowDown from '../assets/arrow-down.svg'
import { ButtonItemMenu } from './styles'

export default function ItemMenu({ name }) {
    return (
        <>
            <ButtonItemMenu>
                <span>{name}</span>
                <img src={ArrowDown} alt="Seta para Baixo" />
            </ButtonItemMenu>
        </>
    )
}