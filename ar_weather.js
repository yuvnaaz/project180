var coordinates = {}
$(document).ready(function(){
    getCoordinates();
    getWeather();
})
function getCoordinates(){
    var devide = new URLSearchParams(window.location.search)
    if(devide.has('source')&& devide.has('destination')){
        var source = devide.get('source')
        var destination = devide.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lng = source.split(';')[1]
        coordinates.destination_lat = destination.split(';')[0]
        coordinates.destination_lng = destination.split(';')[1]

        
    } else{
        alert("no coordinates provided")
        window.history.back()
    }

}
function getWeather(){
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=19.129578&lon=72.836901&appid=94212e971d0ca977303f8ae892224bbd`,
        type: "get",
        success: function(response){
            let name = response.name
            let weather = response.weather[0].main
            console.log(weather)
            console.log(name)
            $("#scene_container").append(
                `
                        <a-entity>
                            <a-text height="50" value="Weather forcast is ${weather} at ${name}"></a-text>
                     </a-entity>
                     `
            )
        }
    })
}
