export default class API{

    token = 'token';

    async get_seven_days_meteo(){
        const response = await fetch('https://api.meteo-concept.com/api/forecast/daily?insee=59350&world=false&end=6&token=' + this.token);
        const meteo = await response.json();
        console.log(meteo.forecast)
        return meteo.forecast; 

    }

}