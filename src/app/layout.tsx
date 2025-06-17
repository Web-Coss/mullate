import type {Metadata} from "next";
import "src/styles/global.style.scss";

export const metadata: Metadata = {
    title: "모라떼",
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
        </body>
        </html>
    );
}