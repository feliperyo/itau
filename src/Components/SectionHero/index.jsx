import React from "react";
import ImgApple from '../../assets/btn-apple-store.svg'
import ImgGoogle from '../../assets/btn-google-play.svg'
import Arrow from '../../assets/arrow-explorer.svg'
import WomanImg from '../../assets/woman.png'

import * as S from './styles'

export default function SectionHero() {
    return (
        <S.Section>
            <S.Container>
                <S.DivLeft>
                    <h1>Tenha seu banco na palma da mão</h1>
                    <p>Todas as operações que você precisa em um só lugar. Simples, completo e feito para você.</p>

                    <div>
                        <S.Button>
                            <img src={ImgApple} alt="Apple Store" />
                        </S.Button>
                        <S.Button>
                            <img src={ImgGoogle} alt="Google Play" />
                        </S.Button>
                    </div>

                    <S.ButtonExplorer>
                        <img src={Arrow} alt="Seta Baixo" />
                        <span>Continue explorando</span>
                    </S.ButtonExplorer>
                </S.DivLeft>

                <S.ImageWoman src={WomanImg} alt="Mulher" />
            </S.Container>
        </S.Section>
    )
}