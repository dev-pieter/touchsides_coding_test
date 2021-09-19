import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import "@fontsource/source-code-pro"

const theme = extendTheme({
  fonts: {
    heading: "Source Code Pro",
  },
})

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
