import { OrganizationList } from "@clerk/nextjs";

const SelectOrg = () => {
    return (
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/team/:id"
            afterCreateOrganizationUrl="/team/:id"
        />
    );
};

export default SelectOrg;
