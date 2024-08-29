import { useDashboard } from "./useDashboard"
import { LineGraph } from "../../../chart/LineChart"
import { DoughnutGraph } from "../../../chart/Doughnut"
import {
    Devices,
    Country,
    Projects,
    TotalView,
    LineChartContainer,
    VisitorsInCountryAndDevice,
} from "./styledComponents"

export const Dashboard = () => {
    const {
        data,
        sortType,
        searchTerm,
        currentPageC,
        countriesList,

        handleSort,
        handleSearch,
        paginationItems,
        handlePageChange,
        handleCurrentPage,
        handleItemsPerPageChange,

    } = useDashboard()

    return (
        <>
            <LineChartContainer id="visitorAnalytics">
                <div className="scroll">
                    <h2>Visitors Analytics</h2>
                    <div className="chartContent">
                        <LineGraph visitorsList={data.yearlyMonthlyCounts} />
                    </div>
                </div>
            </LineChartContainer>
            <TotalView id="totalView">
                <div className="item">
                    <h2>{data.totalVisitor['total']}</h2>
                    <p>Total Visitors</p>
                </div>
                <div className="item">
                    <h2>{data.totalVisitor['year']}</h2>
                    <p>In Years Visitors</p>
                </div>
                <div className="item">
                    <h2>{data.totalVisitor['month']}</h2>
                    <p>In Month Visitors</p>
                </div>
                <div className="item">
                    <h2>{data.totalVisitor['today']}</h2>
                    <p>Today Visitors</p>
                </div>
            </TotalView>
            <VisitorsInCountryAndDevice>
                <Country id="country">
                    <div className="country-header">
                        <div className="flex">
                            <h2>Top Countries</h2>
                            <div className="sortedContent">
                                <div className="flex">
                                    <input type="text" id="countryname" defaultValue={searchTerm} onChange={handleSearch} placeholder="Country Name..." />
                                    <select value={sortType} onChange={(e) => handleSort(e.target.value)}>
                                        <option value="name-asc">A-Z</option>
                                        <option value="name-desc">Z-A</option>
                                        <option value="percentage-asc">View(high - low)</option>
                                        <option value="percentage-desc">View(low - high)</option>
                                    </select>
                                    <select onChange={(e) => handleItemsPerPageChange("countries", e)}>
                                        <option defaultValue="5">5</option>
                                        <option defaultValue="10">10</option>
                                        <option defaultValue="15">15</option>
                                        <option defaultValue="20">20</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="progressContent">
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>View (%)</th>
                                    <th>Blocked</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countriesList}
                            </tbody>
                        </table>
                    </div>
                    <div className="paginations">
                        <div className="item" onClick={() => handlePageChange("countries", "prev")}>
                            <i className="fa-solid fa-left-long"></i>
                        </div>
                        {
                            paginationItems("countries")?.map((item, index) => (
                                <div
                                    key={index}
                                    className={`item ${currentPageC === item ? 'active' : ''}`}
                                    onClick={() => typeof item === 'number' && handleCurrentPage("countries", item)}
                                >
                                    {item}
                                </div>
                            ))
                        }
                        <div className="item" onClick={() => handlePageChange("countries", "next")}>
                            <i className="fa-solid fa-right-long"></i>
                        </div>
                    </div>
                </Country>
                <Devices id="device">
                    <div className="text">
                        <h2>Visitors Analytics</h2>
                    </div>
                    <div className="chartContent">
                        <DoughnutGraph device={data.devices} />
                    </div>
                </Devices>
            </VisitorsInCountryAndDevice>
        </>
    )
}