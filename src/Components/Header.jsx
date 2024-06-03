import React from "react";
import * as S from './styles'

import ItemMenu from "./ItemMenu";

import LogoItau from '../assets/logo.svg'
import IconUser from '../assets/icon-user.svg'

export default function Header() {
    return (
        <S.Header>
            <S.Container>
                <S.ContainerItens>
                    <div>
                        <S.Img src={LogoItau} alt="Logo Itaú" />
                    </div>

                    <S.Ul>
                        <li>
                            <ItemMenu name='Para Você' />
                        </li>
                        <li>
                            <ItemMenu name='Para Empresas' />
                        </li>
                        <li>
                            <ItemMenu name='Serviços' />
                        </li>
                        <li>
                            <ItemMenu name='Ajuda' />
                        </li>
                    </S.Ul>

                    <S.DivButtonAccess>
                        <S.ButtonAccess>
                            <img src={IconUser} alt="icone usuário" />
                            <span>Acessar Conta</span>
                        </S.ButtonAccess>
                    </S.DivButtonAccess>
                </S.ContainerItens>
            </S.Container>
        </S.Header>
    )
}