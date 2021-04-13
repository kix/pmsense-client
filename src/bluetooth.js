// const characteristicMap = {
//     'cc4f2f18-7b99-4fae-b46d-3568a42cb3f8': 'pm01', // PM0.1
//     'd7f6bea5-4e01-458d-9395-9e42ddd00b69': 'pm25', // PM2.5
//     '4e79550a-da13-4cc3-905c-2c4426d305be': 'pm10', // PM10
// };

export function createCharacteristicProvider() {
    return new Promise((resolve, reject) => {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['faf6c799-5567-4f54-89fb-c7188b3f3b88']
        })
        .then(device => device.gatt.connect())
        .then(server => server.getPrimaryService('faf6c799-5567-4f54-89fb-c7188b3f3b88'))
        .then(primaryService => {
            resolve(primaryService);
        });
    })
}
