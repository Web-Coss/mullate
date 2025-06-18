import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Sidebar from 'src/components/common/sidebar';
import "src/styles/page.style.scss";
import "src/styles/global.style.scss";
import "src/styles/shape/_shape.scss";
import "src/styles/fonts/_typography.scss";
import "src/styles/color/_sementic.scss";
import "src/styles/function/_flex.scss";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="layout">
                <Sidebar/>
                <div id="modal" />
                <div>
                    {children}
                </div>
            </div>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}