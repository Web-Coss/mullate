import type {Metadata} from "next";
import "src/styles/global.style.scss";
import 'src/styles/global.style.scss';
import 'src/styles/page.style.scss';
import 'src/styles/shape/_shape.scss';
import 'src/styles/fonts/_typography.scss';
import 'src/styles/color/_sementic.scss';
import 'src/styles/function/_flex.scss';

import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
    title: "mullate",
    description: "누구에게나 쉽고 간편한 카페 키오스크",
    icons: {
        icon: "/icons/logo.svg"
    }
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body>
        {children}
        <ToastContainer/>
        </body>
        </html>
    );
}