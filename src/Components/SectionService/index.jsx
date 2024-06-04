import React from "react";
import * as S from './styles'

import ItemList from "./ItemList";

import PhoneIcon from '../../assets/icon-phone.svg'
import SoluctionIcon from '../../assets/icon-solutions.svg'
import OptionIcon from '../../assets/icon-options.svg'
import CardIcon from '../../assets/icon-card.svg'

import CellPhone from '../../assets/phone.png'

export default function SectionService() {
    return (
        <S.Section>
            <S.Container>
                <S.DivLeft>
                    <span>Serviços exclusivos</span>
                    <h2>Gerencie suas finanças sem sair de casa</h2>
                    <S.P>Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</S.P>

                    <S.Ul>
                        <S.Li>
                            <ItemList
                                img={PhoneIcon}
                                alt={'Icone Celular'}
                                p={'Acompanhar sua conta, fazer transferências e pagamentos de onde estiver.'}
                            />
                        </S.Li>
                        <S.Li>
                            <ItemList
                                img={SoluctionIcon}
                                alt={'Icone Soluções'}
                                p={'Soluções de empréstimos e negociação para suas finanças.'}
                            />
                        </S.Li>
                        <S.Li>
                            <ItemList
                                img={OptionIcon}
                                alt={'Icone Opções'}
                                p={'Diversas opções de investimentos, de acordo com o seu perfil de investidor.'}
                            />
                        </S.Li>
                        <S.Li>
                            <ItemList
                                img={CardIcon}
                                alt={'Icone Card'}
                                p={'Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.'}
                            />
                        </S.Li>
                    </S.Ul>
                </S.DivLeft>

                <S.DivRight>
                    <img src={CellPhone} alt="Celular" />
                </S.DivRight>
            </S.Container>
        </S.Section>
    )
}