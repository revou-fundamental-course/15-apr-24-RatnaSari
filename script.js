document.addEventListener('DOMContentLoaded', function () {
    const celciusInput = document.getElementById('celcius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const fahrenheitReverseInput = document.getElementById('fahrenheit-reverse-input');
    const celciusReverseInput = document.getElementById('celcius-reverse-input');
    const convertButton = document.getElementById('convert-button');
    const resetButton = document.getElementById('reset-button');
    const reverseButton = document.getElementById('reverse-button');
    const rumusText = document.querySelector('.section-rumus textarea');

    
    function celciusToFahrenheit(celcius) {
        return (celcius * 9 / 5) + 32;
    }

    
    function fahrenheitToCelcius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    
    convertButton.addEventListener('click', function () {
        if (reverseButton.dataset.reverse === 'true') {
            
            const fahrenheitValue = parseFloat(fahrenheitReverseInput.value);
            
            
            const celciusValue = fahrenheitToCelcius(fahrenheitValue);

            
            celciusReverseInput.value = celciusValue.toFixed(2);

            
            rumusText.textContent = `Rumus: (${fahrenheitValue} - 32) * 5/9 = ${celciusValue.toFixed(2)} 
Fahrenheit ke Celcius : F = (F - 32) x 5/9`;
        } else {
            
            const celciusValue = parseFloat(celciusInput.value);

            
            const fahrenheitValue = celciusToFahrenheit(celciusValue);

            
            fahrenheitInput.value = fahrenheitValue.toFixed(2);

            
            rumusText.textContent = `Rumus: (${celciusValue} * 9/5) + 32 = ${fahrenheitValue.toFixed(2)} 
Celcius ke Fahrenheit °C = 5/9 x (°F - 32)`;
        }
        });

    
    resetButton.addEventListener('click', function () {
        
        celciusInput.value = '';
        fahrenheitInput.value = '';
        fahrenheitReverseInput.value = '';
        celciusReverseInput.value = '';

        
        rumusText.textContent = '';
    });

    reverseButton.addEventListener('click', function () {
        
        if (reverseButton.dataset.reverse === 'false') {
            reverseButton.dataset.reverse = 'true';
            reverseButton.textContent = 'REVERSE';
            
            
            document.getElementById('celcius-fahrenheit').classList.add('hidden');
            document.getElementById('fahrenheit-celcius').classList.remove('hidden');
        } else {
            reverseButton.dataset.reverse = 'false';
            reverseButton.textContent = 'REVERSE';
            
            
            document.getElementById('celcius-fahrenheit').classList.remove('hidden');
            document.getElementById('fahrenheit-celcius').classList.add('hidden');
        }
    
        
        rumusText.textContent = '';
    });
    
});