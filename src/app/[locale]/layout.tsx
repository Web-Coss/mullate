import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Sidebar from 'src/components/common/sidebar';
import CartWrapper from 'src/components/cartWrapper';
import { routing } from 'src/i18n/routing';

import 'src/styles/global.style.scss';
import 'src/styles/page.style.scss';
import 'src/styles/shape/_shape.scss';
import 'src/styles/fonts/_typography.scss';
import 'src/styles/color/_sementic.scss';
import 'src/styles/function/_flex.scss';

export const metadata: Metadata = {
    title: '머라떼',
    description: '깔끔한 키오스크',
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch {
        notFound();
    }

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="layout">
                <Sidebar />
                <div id="modal" />
                <div>{children}</div>
                <CartWrapper />
            </div>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}