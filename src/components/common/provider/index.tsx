"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "src/src/styles/toast/style.scss"
import "src/src/styles/page.tsx.style.scss"
import "src/src/styles/global.style.scss";
import "src/src/styles/shape/_shape.scss";
import "src/src/styles/color/_sementic.scss";
import "src/src/styles/fonts/_typography.scss";
import "src/src/styles/function/_flex.scss";

const queryClient = new QueryClient();

interface Props {
    children: React.ReactNode;
}

const Provider = ({children}: Props) => {

    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer limit={2} position="top-right" autoClose={3000} closeButton={false} pauseOnHover={false}/>
            {children}
        </QueryClientProvider>
    );
};

export default Provider;