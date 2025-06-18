import { redirect } from 'next/navigation';

type Props = {
    params: { locale: string };
};

export default function LocaleRoot({ params }: Props) {
    redirect(`/${params.locale}/main`);
}