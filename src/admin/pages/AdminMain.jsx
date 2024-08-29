import styled from "styled-components"
import { Dashboard } from "./dashboard/Dashboard"

export const AdminMain = () => {
    return (
        <AdminPanel>
            <Dashboard />
        </AdminPanel>
    )
}

const AdminPanel = styled.div`
        left: 332px;
        height: 100dvh;
        position: fixed;
        overflow-y: auto;
        padding-bottom: 30px;
        width: calc(100% - 364px);

    @media (max-width: 992px) {
        left: 16px;
        width: calc(100% - 32px);
        height:  calc(100dvh - 128px);
    }
`