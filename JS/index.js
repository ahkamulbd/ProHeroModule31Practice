const users = [{ id: 1, name: 'aboutArray', job: 'doctor' }];
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'sabul', job: 'leaderFucker' }
    ]
}

const firstJob = data.data[1].job;
console.log(firstJob);

const user = {
    id: 5001,
    name: 'Ching Mong Jong',
    address: {
        street: {
            first: '35/A Kochukhet Road',
            second: 'Third Floor',
            Third: 'Right Side'
        },
        postOffice: 'Cantonment',
        City: 'Dhaka'
    }
}
const userFloor = user.address.street.Third
const userCity = user.address.City
console.log(userFloor);
console.log(userCity);