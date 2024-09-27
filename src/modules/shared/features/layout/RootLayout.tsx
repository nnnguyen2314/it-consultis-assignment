import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {Layout, MenuProps, Typography} from 'antd';
import {HomeFilled} from "@ant-design/icons";
import styled from 'styled-components';
import MainNav from "@modules/shared/features/nav/MainNav";

const { Header, Content } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledLayoutHeader = styled(Header)`
  color: #000;
  background: linear-gradient(90deg, white 0%, #dceaff 100%);
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  height: auto;
  
  .branding {
    display: flex;
    align-items: center;
    
    .branding-logo {
      display: flex;
      font-size: 50px;
      height: 70px;
      padding: 25px 15px;
      img {
        height: 100%;
        display: block;
      }
    }
  }

  .ant-menu-light {
    background: transparent;
    border: none;
  }

  .ant-menu-item-active {
    font-weight: 600;

    &&::after {
      border: none;
    }
  }
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-flow: row;
  height: auto;
  padding: 0 50px;
  width: 100%;
`;

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <StyledLayout>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledLayout>
    );
};

export default RootLayout;