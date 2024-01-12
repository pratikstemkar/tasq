import { Metadata } from "next";

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | Settings`,
    description:
        "Manage your account settings and set notification preferences.",
};

const Settings = () => {
    return <div>Settings</div>;
};

export default Settings;
