export default class API{

    token = '2d86b4fdf3ee2150542c993efe89639b8f98ff853d72b57031e0fa5a2cc5d77d';

    async get_seven_days_meteo(){
        const response = await fetch('https://api.meteo-concept.com/api/forecast/daily?insee=59350&world=false&end=6&token=' + this.token);
        const meteo = await response.json();
        console.log(meteo.forecast)
        return meteo.forecast; 

    }

}