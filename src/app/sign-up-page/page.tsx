import React from 'react';
import Header from '../../components/Header'
import {NextUIProvider} from "@nextui-org/react";
const Page = () => {
    return (
      <NextUIProvider>
      <Header/>
      </NextUIProvider>
    );
}

export default Page;
