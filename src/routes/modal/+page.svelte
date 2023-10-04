<script>

  import { attr } from "svelte/internal";

</script>
<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://unpkg.com/fireworks-js@2.x/dist/index.umd.js"></script>
    <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet">
    <meta charset="UTF-8">
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
            background-color: black;

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
            <img src='https://i.imgur.com/oVWqQvB.gif' alt="GIF" />
        </div>
    </div>

    <script>
        function closeModal() {
            var modal = document.querySelector('.modal');
            modal.style.display = 'none';
            fireworks.stop();
        }
        document.querySelector('.modal').classList.add('active');
            var timestamp = new Date().getTime();
            document.querySelector('img').src = 'https://i.imgur.com/YtSH5ba.gif?' + timestamp;

        const container = document.querySelector('.modal')
        const fireworks = new Fireworks.default(container)

        setTimeout(()=> {
            fireworks.start();
        },1000);

    </script>
</body>

</html>