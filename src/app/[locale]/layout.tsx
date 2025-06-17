"use client";

import Sidebar from "src/components/common/sidebar";
import "src/styles/color/_sementic.scss";
import "src/styles/fonts/_typography.scss";
import "src/styles/function/_flex.scss";
import "src/styles/shape/_shape.scss";
import "src/styles/page.style.scss";
import "src/styles/global.style.scss";

export default function LocaleLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
    params: Promise<{ locale: "ko" | "en" }>;
}) {

    return (
        <div className="layout">
            <Sidebar/>
            <div id="modal" />
            <div className="main">
                {children}
            </div>
        </div>
    );
}