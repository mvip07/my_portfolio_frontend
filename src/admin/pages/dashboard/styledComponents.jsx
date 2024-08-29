import styled from "styled-components"

export const LineChartContainer = styled.div`
    width: 100%;
    padding: 40px;
    margin-top: 32px;
    overflow-x: auto;
    border-radius: 12px;
    background: var(--white);

    .scroll {
        max-width: 100%;
        overflow-x: auto;
        min-width: 1090px;
    }

    h2 {
        font-size: 20px;
        font-weight: 700;
        text-align: left;
        line-height: 28px;
        color: var(--black);
    }

    .chartContent {
        width: 100%;
        height: 400px;
        cursor: pointer;
        margin-top: 24px;
        user-select: none;
    }

    @media (max-width: 992px) {
        padding: 24px;
        margin-top: 0px;
    }
`

export const TotalView = styled.div`
    width: 100%;
    display: grid;
    padding: 40px;
    margin: 32px 0;
    border-radius: 12px;
    justify-content: center;
    background: var(--white);
    grid-template-columns: repeat(4, 1fr);

    .item:not(.item:last-child) {
        border-right: 1px solid var(--black);
    }

    .item h2 {
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        line-height: 32px;
        text-align: center;
        margin-bottom: 10px;
        color: var(--black);
    }

    .item p {
        opacity: 60%;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        color: var(--black);
    }

    @media (max-width: 992px) {
        padding: 24px;
        grid-template-columns: repeat(2, 1fr);

        .item:not(.item:last-child) {
            border-right: 0;
        }

        .item:not(.item:nth-child(3), .item:nth-child(4)) {
            padding: 6px 0;
            border-bottom: 1px solid var(--black);
        }

        .item {
            padding: 6px 0;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);

        .item:not(.item:last-child) {
            padding: 6px 0;
            border-bottom: 1px solid var(--black);
        }
    }
`

export const VisitorsInCountryAndDevice = styled.div`
    gap: 32px;
    display: flex;
    margin: 32px 0;
    align-items: stretch;


    @media (max-width: 1450px) {
        display: block;
    }
`

export const Country = styled.div`
    width: 70%;
    padding: 40px;
    border-radius: 12px;
    background: var(--white);

    .country-header .flex {
        gap: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .country-header h2 {
        font-size: 20px;
        font-weight: 700;
        text-align: left;
        line-height: 28px;
        color: var(--black);
    }

    .country-header .sortedContent .flex {
        gap: 12px;
        display: flex;
        align-items: center;
    }

    .country-header .sortedContent input,
    .country-header .sortedContent select {
        border: 0;
        outline: 0;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        appearance: none;  
        line-height: 24px;
        padding: 8px 16px;
        border-radius: 8px;
        color: var(--black);
        -moz-appearance: none;
        -webkit-appearance: none;
        background: var(--darkWhite);
        border: 1px solid var(--black);
    }

    .progressContent {
        margin-top: 30px;     
        overflow-x: auto;
        position: relative;
    }

    .progressContent .flex-item {
        gap: 24px;
        display: flex;
        margin: 14px 0;
        align-items: center;
        justify-content: flex-start;
    }

    table {
        width: 100%;
        padding: 24px;
        border-radius: 12px;
        border-collapse: collapse;
        background: var(--lightOrange);
    }

    table thead tr th,
    table tbody tr td {
        padding: 0 12px;
    }

    table thead tr  {
        height: 60px;
        font-size: 18px;
        text-align: left;
        font-weight: 500;
        color: var(--mainCl);
        text-transform: uppercase;
    }

    table tbody tr {
        height: 50px;
        padding: 0 24px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
        background: var(--white);
    }

    table tbody tr:nth-child(even) {
        background: var(--light);
    }

    table tbody tr .progress-bg {
        width: 300px;
        height: 18px;
        border-radius: 50px;
        background: var(--light);
    }

    table tbody tr:nth-child(even) .progress-bg {
        background: var(--white);
    }

    table tbody tr .progress-bg .progress-bar {
        height: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
        color: var(--white);
        border-radius: 50px;
        background: var(--mainCl);
    }

    table tbody tr button {
        border: 0;
		outline: 0;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		padding: 6px 10px;
		width: fit-content;
		border-radius: 8px;
		text-align: center;
        white-space: nowrap;
		color: var(--white);
		background: var(--mainCl);
    }

    .paginations {
        gap: 10px;
        width: 100%;
        display: flex;
        margin-top: 15px;
        align-items: center;
        justify-content: flex-end;
    }

    .paginations .item {
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

    @media (max-width: 1450px) {
        width: 100%;
    }

    @media (max-width: 992px) {
        padding: 24px;
    }

    
    @media (max-width: 768px) {
        .country-header .flex {
            flex-wrap: wrap;
        }
    }
`

export const Devices = styled.div`
    width: 30%;
    padding: 40px;
    border-radius: 12px;
    background: var(--white);

    h2 {
        font-size: 20px;
        font-weight: 700;
        text-align: left;
        line-height: 28px;
        color: var(--black);
        margin-bottom: 24px;
    }

    .chartContent {
        left: 50%;
        width: 300px;
        height: 300px;
        max-width: 350px;
        max-height: 350px;
        position: relative;
        transform: translate(-50%);
    }

    @media (max-width: 1450px) {
        width: 100%;
        margin-top: 32px;
    }

    @media (max-width: 992px) {
        padding: 24px;
    }

    @media (max-width: 576px) {
        .chartContent {
            width: 250px;
            height: 250px;
        }
    }
`

export const Projects = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
    overflow-x: auto;
    border-radius: 12px;
    background: var(--white);

    .scroll {
        max-width: 100%;
        overflow-x: auto;
        min-width: 650px;
    }

    h2 {
        font-size: 20px;
        font-weight: 700;
        text-align: left;
        line-height: 28px;
        color: var(--black);
        margin-bottom: 24px;
    }

    table {
        width: 100%;
        padding: 24px;
        position: relative;
        border-radius: 12px;
        border-collapse: collapse;
        background: var(--lightOrange);
    }

    table thead tr {
        height: 60px;
    }

    table thead tr th,
    table tbody tr td {
        padding: 6px 12px;
    }

    table thead tr {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        color: var(--mainCl);
        text-transform: uppercase !important;
    }

    table tbody tr {
        opacity: 60%;
        height: 50px;
        font-size: 16px;
        padding: 0 24px;
        text-align: left;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
        background: var(--white);
    }

    table tbody tr:nth-child(even) {
        background: var(--light);
    }

    table tbody tr .progress-bg {
        height: 18px;
        border-radius: 50px;
        background: var(--light);
    }

    table tbody tr:nth-child(even) .progress-bg {
        background: var(--white);
    }

    table tbody tr .progress-bg .progress-bar {
        height: 100%;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        color: var(--white);
        border-radius: 50px;
        background: var(--mainCl);
    }

    table tbody tr button {
        border: 0;
		outline: 0;
        width: 100px;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		border-radius: 8px;
		padding: 6px 10px;
		text-align: center;
		color: var(--white);
		background: var(--mainCl);
    }

    @media (max-width: 992px) {
        padding: 24px;
    }
`