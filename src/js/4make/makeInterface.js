// makeInterface.js

function makeInterface()
{
    ba(makeTitleOfApp());

    ba(ce('hr'));

    let sunLabel = ce('div');
    sunLabel.textContent = 'Position of the Sun in the Sky';
    ba(sunLabel);

    let sunSlider = ce('input');
    sunSlider.type = 'range';
    sunSlider.id = 'sunSlider';
    sunSlider.min = 0;
    sunSlider.max = 24;
    sunSlider.value = 0;
    sunSlider.style.width = '100%';
    ba(sunSlider);

    ba(ce('hr'));

    // ALL WEATHER DATA AS ONE OBJECT
    let allWeatherDetails = ce('details');
    ba(allWeatherDetails);

    let allWeatherSummary = ce('summary');
    allWeatherSummary.textContent = 'ALL DATA';
    allWeatherSummary.onclick = function()
    {
        clickSound();
    };
    allWeatherDetails.append(allWeatherSummary);

    let weatherDataDiv = ce('pre');
    weatherDataDiv.style.border = 'solid 1px rgb(255, 255, 255)';
    weatherDataDiv.id = 'weatherDataDiv';
    weatherDataDiv.style.width = '300px';
    weatherDataDiv.style.height = '200px';
    weatherDataDiv.style.overflowY = 'scroll';
    weatherDataDiv.style.padding = '4px 8px';
    allWeatherDetails.append(weatherDataDiv);

    //-//

    ba(ce('hr'));

    //-//

    // WEATHER DATA - PIECE BY PIECE

    let weatherDetails = ce('details');
    ba(weatherDetails);

    let weatherSummary = ce('summary');
    weatherSummary.textContent = 'Weather';
    weatherSummary.onclick = function()
    {
        clickSound();
    };
    weatherDetails.append(weatherSummary);

    //-//

    let weatherContainer = ce('div');
    weatherContainer.style.display = 'flex';
    weatherContainer.style.flexDirection = 'column';
    weatherContainer.style.overflowY = 'scroll';
    weatherContainer.style.width = '200px';
    weatherContainer.style.height = '290px';
    weatherContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    weatherContainer.style.padding = '4px 8px';
    weatherDetails.append(weatherContainer);

    //-//

    let weatherUpdateTimeDiv = ce('div');
    weatherUpdateTimeDiv.id = 'weatherUpdateTimeDiv';
    weatherContainer.append(weatherUpdateTimeDiv);

    weatherContainer.append(ce('hr'));

    //-//

    let zipcodeInput = ce('input');
    zipcodeInput.id = 'zipcodeInput';
    zipcodeInput.value = weatherZipcode;
    weatherContainer.append(zipcodeInput);

    let zipcodeBtn = ce('button');
    zipcodeBtn.textContent = 'Enter';
    zipcodeBtn.onclick = function()
    {
        clickSound();
        weatherZipcode = zipcodeInput.value;
        get_local_data(weatherZipcode);
    };
    weatherContainer.append(zipcodeBtn);

    //-//

    let weatherLocationDiv = ce('div');
    weatherLocationDiv.id = 'weatherLocationDiv';
    weatherContainer.append(weatherLocationDiv);

    weatherContainer.append(ce('hr'));

    let weatherRegionDiv = ce('div');
    weatherRegionDiv.id = 'weatherRegionDiv';
    weatherContainer.append(weatherRegionDiv);

    weatherContainer.append(ce('hr'));

    let weatherDescriptionDiv = ce('div');
    weatherDescriptionDiv.textContent = '';
    weatherDescriptionDiv.id = 'weatherDescriptionDiv';
    weatherContainer.append(weatherDescriptionDiv);

    weatherContainer.append(ce('hr'));

    let temperatureDiv = ce('div');
    temperatureDiv.textContent = '';
    temperatureDiv.id = 'temperatureDiv';
    weatherContainer.append(temperatureDiv);

    weatherContainer.append(ce('hr'));

    let humidityDiv = ce('div');
    humidityDiv.textContent = '';
    humidityDiv.id = 'humidityDiv';
    weatherContainer.append(humidityDiv);

    weatherContainer.append(ce('hr'));

    let pressureDiv = ce('div');
    pressureDiv.textContent = '';
    pressureDiv.id = 'pressureDiv';
    weatherContainer.append(pressureDiv);

    weatherContainer.append(ce('hr'));

    let windSpeedDiv = ce('div');
    windSpeedDiv.textContent = '';
    windSpeedDiv.id = 'windSpeedDiv';
    weatherContainer.append(windSpeedDiv);

    weatherContainer.append(ce('hr'));

    let uvIndexDiv = ce('div');
    uvIndexDiv.textContent = '';
    uvIndexDiv.id = 'uvIndexDiv';
    weatherContainer.append(uvIndexDiv);

    weatherContainer.append(ce('hr'));

    // sunrise
    let sunriseDiv = ce('div');
    sunriseDiv.textContent = '';
    sunriseDiv.id = 'sunriseDiv';
    weatherContainer.append(sunriseDiv);

    weatherContainer.append(ce('hr'));

    // sunset
    let sunsetDiv = ce('div');
    sunsetDiv.textContent = '';
    sunsetDiv.id = 'sunsetDiv';
    weatherContainer.append(sunsetDiv);

    weatherContainer.append(ce('hr'));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

