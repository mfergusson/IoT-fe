$(document).ready(() => {
    const heatSensorAPIDataURL = 'https://api.thingspeak.com/channels/696479/feeds.json?api_key=C6GA60ZH1HX5MHF6&results=2';
    $('.test').click(() => {
        $.ajax({
            url: heatSensorAPIDataURL,
            type: 'GET',
            success: success.bind(this),
            error: failure.bind(this),
        });
    });
});

const success = (data) => {
    const temp = data.feeds[0].field1;
    const humidity = data.feeds[0].field2;
};

const failure = (error) => {
    console.log(error);
};
