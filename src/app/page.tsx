import { redirect } from "next/navigation";
export const page = () => {
    redirect("/page/home");
    return <div>page</div>;
};
