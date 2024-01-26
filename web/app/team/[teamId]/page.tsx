import { auth } from "@clerk/nextjs";

const TeamPage = () => {
    const { userId, orgId } = auth();
    return <div>Team: {orgId}</div>;
};

export default TeamPage;
