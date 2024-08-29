import API from './axios';
import { faker } from '@faker-js/faker';

function getRandomYearDate() {
    const year = faker.helpers.arrayElement([2023, 2024, 2025]);
    const month = faker.datatype.number({ min: 0, max: 11 });
    const day = faker.datatype.number({ min: 1, max: 28 }); // keeping it simple with up to 28 days
    const hour = faker.datatype.number({ min: 0, max: 23 });
    const minute = faker.datatype.number({ min: 0, max: 59 });
    const second = faker.datatype.number({ min: 0, max: 59 });
    return new Date(Date.UTC(year, month, day, hour, minute, second)).toISOString();
}

export default function generateFakeData(numEntries) {
    const devices = ["Desktop", "Tablet", "Mobile", "IOS"];
    const countries = [
        "Australia",
    ];

    for (let i = 0; i < numEntries; i++) {
        const ip = faker.internet.ipv4();

        const data = {
            ip: ip,
            location: {
                as: `AS${faker.datatype.number()} "${faker.company.name()} Joint Stock Company"`,
                city: faker.address.city(),
                country: faker.address.country(),
                countryCode: faker.address.countryCode(),
                isp: faker.company.name() + " JSC",
                lat: faker.address.latitude(),
                lon: faker.address.longitude(),
                org: "",
                query: ip,
                region: faker.address.stateAbbr(),
                regionName: faker.address.state(),
                status: "success",
                timezone: faker.address.timeZone(),
                zip: faker.address.zipCode(),
                device: faker.helpers.arrayElement(devices),
            },
            block: false,
            createdAt: getRandomYearDate(),
        };

        API.post(`/create/visitor`, data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
