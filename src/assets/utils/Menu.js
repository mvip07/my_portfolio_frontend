import { AdminLeftHeader, AdminTopHeader } from "../../admin/components/Header"

export const Menu = ({ children }) => {
    return (
        <>
            <AdminTopHeader />
            {children}
            <AdminLeftHeader />
        </>
    )
}