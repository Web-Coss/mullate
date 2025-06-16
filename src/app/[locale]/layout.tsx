"use client";

import {use} from "react";
import Sidebar from "src/components/common/sidebar";
import styles from "./style.module.scss";

export default function LocaleLayout({
                                         children,
                                         params,
                                     }: {
    children: React.ReactNode;
    params: Promise<{ locale: "ko" | "en" }>;
}) {
    const {locale} = use(params);

    return (
        <html lang={locale}>
        <body>
        <div className={styles.container}>
            <Sidebar/>
            {children}
        </div>
        </body>
        </html>
    );
}