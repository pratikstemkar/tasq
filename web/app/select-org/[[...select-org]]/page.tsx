import { OrganizationList } from "@clerk/nextjs";

const SelectOrg = () => {
    return (
        <main className="flex justify-center items-center mt-10">
            <OrganizationList
                hidePersonal
                afterSelectOrganizationUrl="/team/:id"
                afterCreateOrganizationUrl="/team/:id"
            />
        </main>
    );
};

export default SelectOrg;
