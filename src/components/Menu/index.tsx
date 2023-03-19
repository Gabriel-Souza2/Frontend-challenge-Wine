import Link from "next/link";
import { useRouter } from "next/router";

import {
  Container,
  Content,
  Nav,
  Actions,
  ActionButton,
  HambugerMenu,
  Overlay,
  AccountAccess,
  CloseButton,
  MenuItem,
} from "./styles";

import Busca from "../../assets/Busca.svg";
import Conta from "../../assets/conta.svg";
import Group from "../../assets/group.svg";
import Hamburger from "../../assets/ic-line.svg";
import Arrow from "../../assets/arrow-right-pink.svg";
import Close from "../../assets/icon_close.svg";

import { useState } from "react";

interface MenuLink {
  link: string;
  name: string;
}

export function Menu() {
  const router = useRouter();

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const menuItens: MenuLink[] = [
    {
      link: "/clube",
      name: "Clube",
    },
    {
      link: "/",
      name: "Loja",
    },
    {
      link: "/produtores",
      name: "Produtores",
    },
    {
      link: "/ofertas",
      name: "Ofertas",
    },
    {
      link: "/eventos",
      name: "Eventos",
    },
  ];

  function handleToggleMenu() {
    setOpenMobileMenu((state) => {
      return !state;
    });
  }
  return (
    <>
      <Container>
        <Content>
          <HambugerMenu onClick={handleToggleMenu}>
            <Hamburger />
          </HambugerMenu>
          <Overlay openMobileMenu={openMobileMenu} onClick={handleToggleMenu} />

          <img src="/black.svg" />

          <Nav openMobileMenu={openMobileMenu}>
            <AccountAccess openMobileMenu={openMobileMenu}>
              <CloseButton onClick={handleToggleMenu}>
                <Close />
              </CloseButton>
              <Conta />
              <div>
                <p>Acesse sua conta</p>
                <a href="#">
                  Entrar <Arrow />
                </a>
              </div>
            </AccountAccess>
            <ul>
              {menuItens.map((item) => {
                return (
                  <MenuItem key={item.name} active={item.link === router.route}>
                    <Link href={item.link}>{item.name}</Link>
                  </MenuItem>
                );
              })}
            </ul>
          </Nav>
          <Actions>
            <ActionButton>
              <Busca />
            </ActionButton>
            <ActionButton>
              <Conta />
            </ActionButton>
            <ActionButton>
              <Group />
            </ActionButton>
          </Actions>
        </Content>
      </Container>
    </>
  );
}