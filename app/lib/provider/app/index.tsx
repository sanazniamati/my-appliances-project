/** @format */
"use client";

import { FC } from "react";
import { IProps } from "./index.types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";

const AppProvider: FC<IProps> = ({ children }) => {
  const store = new QueryClient();

  return (
    <QueryClientProvider client={store}>
      <NextUIProvider>
        {children}
        <ReactQueryDevtools />
        <Toaster position="top-left" />
      </NextUIProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
