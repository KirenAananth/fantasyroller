document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('rollButton');
    const positionNumber = document.getElementById('positionNumber');
    const positionName = document.getElementById('positionName');
    const positionImage = document.getElementById('positionImage');
    const animationOverlay = document.getElementById('animationOverlay');
    const typeSelector = document.getElementById('typeSelector');
    const resultDisplay = document.getElementById('resultDisplay');
    const warningMessage = document.createElement('div');

    warningMessage.style.color = 'red';
    warningMessage.style.marginTop = '20px';
    warningMessage.textContent = 'All positions Completed, Please Refresh...';
    resultDisplay.appendChild(warningMessage);

    const positionsFuck = [
        { Position: 1, name: 'The Side Saddle', image: 'SideSaddle.png' },
        { Position: 2, name: 'Stand & Deliver', image: 'Stand&Deliver.png' },
        { Position: 19, name: 'Choose a position where she can finger while getting fucked', image: 'peach&egg.jpg' } ,
        { Position: 3, name: 'On-Top Ruller', image: 'OnTheTopRuller.png' },
        { Position: 4, name: 'Cupped', image: 'Cupped.png'  },
        { Position: 5, name: 'The Lust Full Leg', image: 'TheLustFullLeg.png' },
        { Position: 15, name: 'Choose any position from the list', image: 'ChooseAny.jpg' },
        { Position: 6, name: 'The Ape', image: 'TheApe.png' },
        { Position: 7, name: 'Street Dog', image: 'StreetDog.png' },
        { Position: 8, name: 'Ape 2', image: 'Ape2.png' },
        { Position: 9, name: 'WaterFall', image: 'Waterfall.png' },
        { Position: 10, name: 'Rocket Launcher', image: 'RocketLauncher2.webp' },
        { Position: 16, name: 'Choose any position of your wish', image: 'Iamlucky.jpg' },
        { Position: 11, name: 'LapTop', image: 'TheLapTop.png' },
        { Position: 12, name: 'Indian Handstand', image: 'TheIndianHandStand.png' },
        { Position: 13, name: 'Flying High', image: 'FlyingHigh.jpg' },
        { Position: 14, name: 'The Bridge Ride', image: 'Bridge.png' },
        { Position: 17, name: 'Use Property around "Ex: Make her sit on table and fuk"', image: 'Iamlucky.jpg' },
        { Position: 18, name: 'Lift & Fuck', image: 'Lift&Fuck.png' }    
    ];

    const positionsOral = [
        { Position: 1, name: 'Under The Sink', image: 'UnderSink.png' },
        { Position: 2, name: 'Tea Bag', image: 'TeaBag.png' },
        { Position: 3, name: 'North/South Face', image: 'SouthFace.png' },
        { Position: 4, name: 'Bent 69', image: 'Bent69.png'  },
        { Position: 10, name: 'Choose any position from the list Oral', image: 'EatVeggies.jpg' },
        { Position: 5, name: 'Leaning Buttler', image: 'LeaningButtler.png' },
        { Position: 6, name: 'Oral Watterfall', image: 'OralWaterFall.png' },
        { Position: 7, name: 'Jack Hammer', image: 'JackHammer.png' },
        { Position: 8, name: 'Shake & Blast', image: 'Shake&Blast.jpg'  },
        { Position: 9, name: 'Choose any position of your wish Oral', image: 'Iamlucky.jpg' }     
    ];
  
    const positionsBoth = [
        { Position: 1, name: 'The Side Saddle', image: 'SideSaddle.png' },
        { Position: 2, name: 'Stand & Deliver', image: 'Stand&Deliver.png' },
        { Position: 19, name: 'Choose a position where she can finger while getting fucked', image: 'peach&egg.jpg' } ,
        { Position: 3, name: 'On-Top Ruller', image: 'OnTheTopRuller.png' },
        { Position: 4, name: 'Cupped', image: 'Cupped.png'  },
        { Position: 5, name: 'The Lust Full Leg', image: 'TheLustFullLeg.png' },
        { Position: 15, name: 'Choose any position from the list', image: 'ChooseAny.jpg' },
        { Position: 6, name: 'The Ape', image: 'TheApe.png' },
        { Position: 7, name: 'Street Dog', image: 'StreetDog.png' },
        { Position: 8, name: 'Ape 2', image: 'Ape2.png' },
        { Position: 9, name: 'WaterFall', image: 'Waterfall.png' },
        { Position: 10, name: 'Rocket Launcher', image: 'RocketLauncher2.webp' },
        { Position: 16, name: 'Choose any position of your wish', image: 'Iamlucky.jpg' },
        { Position: 11, name: 'LapTop', image: 'TheLapTop.png' },
        { Position: 12, name: 'Indian Handstand', image: 'TheIndianHandStand.png' },
        { Position: 13, name: 'Flying High', image: 'FlyingHigh.jpg' },
        { Position: 14, name: 'The Bridge Ride', image: 'Bridge.png' },
        { Position: 17, name: 'Use Property around "Ex: Make her sit on table and fuk"', image: 'Iamlucky.jpg' },
        { Position: 18, name: 'Lift & Fuck', image: 'Lift&Fuck.png' },
                { Position: 1, name: 'Under The Sink', image: 'UnderSink.png' },
        { Position: 2, name: 'Tea Bag', image: 'TeaBag.png' },
        { Position: 3, name: 'North/South Face', image: 'SouthFace.png' },
        { Position: 4, name: 'Bent 69', image: 'Bent69.png'  },
        { Position: 10, name: 'Choose any position from the list Oral', image: 'EatVeggies.jpg' },
        { Position: 5, name: 'Leaning Buttler', image: 'LeaningButtler.png' },
        { Position: 6, name: 'Oral Watterfall', image: 'OralWaterFall.png' },
        { Position: 7, name: 'Jack Hammer', image: 'JackHammer.png' },
        { Position: 8, name: 'Shake & Blast', image: 'Shake&Blast.jpg'  },
        { Position: 9, name: 'Choose any position of your wish Oral', image: 'Iamlucky.jpg' }  
    ];

  let rolledPositions = new Set();
    let currentPositions = [];

    rollButton.addEventListener('click', () => {
        if (currentPositions.length === 0) {
            currentPositions = getPositionsArray(typeSelector.value);
            rolledPositions.clear();
        }

        positionNumber.innerHTML = '';
        positionName.innerHTML = '';
        positionImage.src = '';
        positionImage.style.visibility = 'hidden';
        warningMessage.style.display = 'none';

        animationOverlay.style.display = 'flex';
        animationOverlay.style.animation = 'magicEffect 1s forwards';

        setTimeout(() => {
            if (rolledPositions.size === currentPositions.length) {
                warningMessage.style.display = 'block';
                setTimeout(() => {
                    warningMessage.style.display = 'none';
                    positionNumber.innerHTML = '';
                    positionName.innerHTML = '';
                    positionImage.src = '';
                    positionImage.style.visibility = 'hidden';
                }, 3000);
                return;
            }

            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * currentPositions.length);
            } while (rolledPositions.has(currentPositions[randomIndex].Position));

            const randomPosition = currentPositions[randomIndex];
            rolledPositions.add(randomPosition.Position);

            positionNumber.innerHTML = randomPosition.Position;
            positionName.innerHTML = randomPosition.name;
            positionImage.src = `images/${randomPosition.image}`;
            positionImage.style.visibility = 'visible';
            resultDisplay.style.display = 'block';
            animationOverlay.style.display = 'none';
        }, 1000);
    });

    function getPositionsArray(type) {
        switch (type) {
            case 'Fuck':
                return positionsFuck;
            case 'Oral':
                return positionsOral;
            case 'Both':
                return positionsBoth;
            default:
                return [];
        }
    }
});