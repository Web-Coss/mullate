"use client";

import { use } from "react";
import Sidebar from "src/components/common/sidebar";
import styles from "./style.module.scss";
import "src/styles/color/_sementic.scss";
import "src/styles/fonts/_typography.scss";
import "src/styles/function/_flex.scss";
import "src/styles/shape/_shape.scss";

export default function LocaleLayout({
                                         children,
                                         params,
                                     }: {
    children: React.ReactNode;
    params: Promise<{ locale: "ko" | "en" }>;
}) {
    const { locale } = use(params);

    return (
        <div className={styles.container}>
            <Sidebar />
            {children}
        </div>
    );
}