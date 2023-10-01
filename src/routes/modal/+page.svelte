<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://unpkg.com/fireworks-js@2.x/dist/index.umd.js"></script>
    <meta charset="UTF-8">
    <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fireworks Popup</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Satoshi', sans-serif;
            height: 100vh;
            margin: 0;
        }

        .modal {
            background-color: white;

            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            animation: open 1s ease-in-out forwards;
        }
        /* .modal.active {
             transform: scale(1);
        } */

        .modal.animation {
            animation: bg-animation 2s ease-in-out forwards;
        }
        .popup-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }

        .popup-content h1 {
            font-weight: 700;
            font-size: 100px;
            white-space: nowrap;
            overflow: hidden;
            animation: typing-animation 3s steps(60) forwards;
        }
        @media screen and (max-width: 768px) {
            .popup-content h1 {
                font-size: 50px;
            }
        }
        .popup-content h2 {
            font-weight: 700;
            font-size: 20px;
            white-space: nowrap;
            overflow: hidden;
        }

        @keyframe open {
            0% {
                transform: scale(0);
            }

            100% {
                transform: scale(1);
            }
        }

        @keyframes bg-animation {
            from {
                background: white;
                color:black;
            }

            to {
                background: black;
                color:white;
            }
        }
        @keyframes typing-animation {
            0% {
                width: 0;

            }

            100% {
                width: 100%;
            }
        }

    </style>
</head>

<body>
    <div class="modal">
        <div class="popup-content">
            <h1>Alice's Garden</h1>
        </div>
    </div>

    <script>
        function closeModal() {
            var modal = document.querySelector('.modal');
            modal.style.display = 'none';
            fireworks.stop();
        }
        document.querySelector('.modal').classList.add('active');
        document.querySelector('.popup-content h1').addEventListener('animationend', function() {
            let word = "Alice's Garden";
            let timer = word.length;
    let interval = setInterval(() => {
        if (timer == 0) {
            clearInterval(interval);
            document.querySelector('.modal').classList.add('animation');
            document.querySelector('.popup-content h1').innerHTML = "sweeek.";
            fireworks.start()
        } else {
            let trimmedWord = word.slice(0, timer);
            document.querySelector('.popup-content h1').innerHTML = trimmedWord;
            timer--;
        }
    }, 100);
});

        const container = document.querySelector('.modal')
        const fireworks = new Fireworks.default(container)
    </script>
</body>

</html>
