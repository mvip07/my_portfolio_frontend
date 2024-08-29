import styled from "styled-components"

export const AuthorizationP = styled.div`
    left: 332px;
    height: 100dvh;
    position: fixed;
    padding: 32px 0;
    overflow-y: auto;
    width: calc(100% - 364px);

    @media (max-width: 992px) {
        left: 16px;
        padding-top: 0;
        width: calc(100% - 32px);
        height: calc(100dvh - 128px);
    }
`

export const Permission = styled.div`
    width: 100%;
    padding: 40px;
    border-radius: 12px;
    background: var(--white);

    .permission-header {
        gap: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .permission-header .title {
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        line-height: 32px;
        color: var(--black);
        text-transform: capitalize;
    }

    .permission-header .end {
        gap: 24px;
        display: flex;
        align-items: center;
    }

    .permission-header select {
        border: 0;
		outline: 0;
		width: 100%;
        appearance: none;
		border-radius: 8px;
		padding: 12px 16px;
        -webkit-appearance: none;
		background: var(--darkWhite);
    }

    .permission-header .icons {
        gap: 12px;
        display: flex;
        align-items: center;
    }

    .permission-header .icons .item {
        width: 40px;
        height: 40px;
        display: flex;
        font-size: 18px;
        border-radius: 50%;
        align-items: center;
        color: var(--mainCl);
        justify-content: center;
        background: var(--darkWhite);
    }

    .permission-body {
        overflow-x: auto;
    }

    .permission-body table {
        width: 100%;
        padding: 24px;
        min-width: 992px;
        margin-top: 32px;
        border-radius: 12px;
        border-collapse: collapse;
        background: var(--lightOrange);
    }

    .permission-body table thead tr {
        height: 60px;
    }

    .permission-body table thead tr th,
    .permission-body table tbody tr td {
        padding: 6px 12px;
    }

    .permission-body table thead tr {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        color: var(--mainCl);
        text-transform: uppercase !important;
    }

    .permission-body table tbody tr {
        height: 50px;
        font-size: 16px;
        padding: 0 24px;
        text-align: left;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
        background: var(--white);
    }

    .permission-body table tbody tr:nth-child(even) {
        background: var(--light);
    }

    .permission-body table tbody tr .icons {
        gap: 24px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .permission-body table tbody tr .icons .item {
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        color: var(--black);
        justify-content: center;
        background: var(--darkWhite);
    }

    .permission-body table tbody tr .icons .item i {
        opacity: 60%;
    }

    .permission-footer .paginations {
        gap: 12px;
        width: 100%;
        display: flex;
        margin-top: 32px;
        align-items: center;
        justify-content: flex-end;
    }

    .permission-footer .paginations .item {
        width: 30px;
        height: 30px;
        display: flex;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
        line-height: 24px;
        border-radius: 50%;
        color: var(--white);
        align-items: center;
        justify-content: center;
        background: var(--mainCl);
    }

    @media (max-width: 768px) {
        padding: 24px;
    }
`
export const CreatePermission = styled.div``

export const UpdatePermission = styled.div``

export const DeletePermission = styled.div``


export const Role = styled.div`
    width: 100%;
    padding: 40px;
    margin-top: 32px;
    border-radius: 12px;
    background: var(--white);

    .role-header {
        gap: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .role-header .title {
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        line-height: 32px;
        color: var(--black);
        text-transform: capitalize;
    }

    .role-header .end {
        gap: 24px;
        display: flex;
        align-items: center;
    }

    .role-header select {
        border: 0;
		outline: 0;
		width: 100%;
        appearance: none;
		border-radius: 8px;
		padding: 12px 16px;
        -webkit-appearance: none;
		background: var(--darkWhite);
    }

    .role-header .icons {
        gap: 12px;
        display: flex;
        align-items: center;
    }

    .role-header .icons .item {
        width: 40px;
        height: 40px;
        display: flex;
        font-size: 18px;
        border-radius: 50%;
        align-items: center;
        color: var(--mainCl);
        justify-content: center;
        background: var(--darkWhite);
    }

    .role-body {
        overflow-x: auto;
    }

    .role-body table {
        width: 100%;
        padding: 24px;
        min-width: 992px;
        margin-top: 32px;
        border-radius: 12px;
        border-collapse: collapse;
        background: var(--lightOrange);
    }

    .role-body table thead tr {
        height: 60px;
    }

    .role-body table thead tr th,
    .role-body table tbody tr td {
        padding: 6px 12px;
    }

    .role-body table thead tr {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        color: var(--mainCl);
        text-transform: uppercase !important;
    }

    .role-body table tbody tr {
        height: 50px;
        font-size: 16px;
        padding: 0 24px;
        text-align: left;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
        background: var(--white);
    }

    .role-body table tbody tr select {
        border: 0;
		outline: 0;
        appearance: none;
		border-radius: 8px;
		padding: 12px 16px;
		background: var(--darkWhite);
    }

    .role-body table tbody tr .permission {
        height: 100%;
        max-height: 50px;
        overflow-y: auto;
    }

    .role-body table tbody tr:nth-child(even) {
        background: var(--light);
    }

    .role-body table tbody tr .icons {
        gap: 24px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .role-body table tbody tr .icons .item {
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        color: var(--black);
        justify-content: center;
        background: var(--darkWhite);
    }

    .role-body table tbody tr .icons .item i {
        opacity: 60%;
    }

    .role-footer .paginations {
        gap: 12px;
        width: 100%;
        display: flex;
        margin-top: 32px;
        align-items: center;
        justify-content: flex-end;
    }

    .role-footer .paginations .item {
        width: 30px;
        height: 30px;
        display: flex;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
        line-height: 24px;
        border-radius: 50%;
        color: var(--white);
        align-items: center;
        justify-content: center;
        background: var(--mainCl);
    }

    @media (max-width: 768px) {
        padding: 24px;
    }
`
export const CreateRole = styled.div``

export const UpdateRole = styled.div``

export const DeleteRole = styled.div``
