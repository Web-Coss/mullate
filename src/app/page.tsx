import { redirect } from "next/navigation";

export default function LocaleRoot() {
    redirect(`/${"main"}`); // `/ko/main`으로 보내고 싶다면
}