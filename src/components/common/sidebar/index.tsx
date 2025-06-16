"use client"

import Link from "next/link"
import {usePathname} from "next/navigation";
import styles from "./style.module.scss";
import {SIDEBAR_MENUS} from "src/constants/sidebar/sidebar.constants";
import Logo from "src/../public/icons/logo.svg";
import Image from "next/image";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <Image src={Logo} alt="Logo" width={100} height={100} />
            </div>

            <nav className={styles.menu}>
                {SIDEBAR_MENUS.map(({ href, label, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`${styles.menuItem} ${pathname === href ? styles.active : ""}`}
                    >
                        <Icon className={styles.icon} size={20} strokeWidth={1.5} />
                        <span className={styles.label}>{label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;