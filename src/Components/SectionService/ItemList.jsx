import * as S from './styles'

export default function ItemList({ p, img, alt }) {
    return (
        <>
            <S.DivMask>
                <img src={img} alt={alt} />
            </S.DivMask>
            <p>{p}</p>
        </>
    )
}