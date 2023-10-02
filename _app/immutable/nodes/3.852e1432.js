import{S as X,i as Z,s as $,k as t,a as d,q as F,l as o,c as p,m as c,h as r,r as A,n as i,_ as Q,b as W,E as n,I as j}from"../chunks/index.94a0dac5.js";function nn(U){let u,x,l,e,h,G,T,q,L,g,I,k,M,b,D,z,S,H,P,f,w,v,y,O,Y,_,C;return{c(){u=t("!DOCTYPE"),x=d(),l=t("html"),e=t("head"),h=t("script"),T=d(),q=t("meta"),L=d(),g=t("link"),I=d(),k=t("meta"),M=d(),b=t("title"),D=F("Fireworks Popup"),z=d(),S=t("style"),H=F(`body {
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
        }`),P=d(),f=t("body"),w=t("div"),v=t("div"),y=t("img"),Y=d(),_=t("script"),C=F(`function closeModal() {
            var modal = document.querySelector('.modal');
            modal.style.display = 'none';
            fireworks.stop();
        }
        document.querySelector('.modal').classList.add('active');
    //     document.querySelector('.popup-content h1').addEventListener('animationend', function() {
    //         let word = "Alice's Garden";
    //         let timer = word.length;
    // let interval = setInterval(() => {
    //     if (timer == 0) {
    //         clearInterval(interval);
    //         document.querySelector('.modal').classList.add('animation');
    //         document.querySelector('.popup-content h1').innerHTML = "sweeek.";
    //         fireworks.start()
    //     } else {
    //         let trimmedWord = word.slice(0, timer);
    //         document.querySelector('.popup-content h1').innerHTML = trimmedWord;
    //         timer--;
    //     }
    
            var timestamp = new Date().getTime();
            document.querySelector('img').src = 'https://i.imgur.com/YtSH5ba.gif?' + timestamp;

        const container = document.querySelector('.modal')
        const fireworks = new Fireworks.default(container)

        setTimeout(()=> {
            fireworks.start();
        },1000);`),this.h()},l(s){u=o(s,"!DOCTYPE",{html:!0}),x=p(s),l=o(s,"HTML",{lang:!0});var m=c(l);e=o(m,"HEAD",{});var a=c(e);h=o(a,"SCRIPT",{src:!0});var J=c(h);J.forEach(r),T=p(a),q=o(a,"META",{charset:!0}),L=p(a),g=o(a,"LINK",{href:!0,rel:!0}),I=p(a),k=o(a,"META",{name:!0,content:!0}),M=p(a),b=o(a,"TITLE",{});var V=c(b);D=A(V,"Fireworks Popup"),V.forEach(r),z=p(a),S=o(a,"STYLE",{});var B=c(S);H=A(B,`body {
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
        }`),B.forEach(r),a.forEach(r),P=p(m),f=o(m,"BODY",{});var E=c(f);w=o(E,"DIV",{class:!0});var R=c(w);v=o(R,"DIV",{class:!0});var K=c(v);y=o(K,"IMG",{src:!0,alt:!0}),K.forEach(r),R.forEach(r),Y=p(E),_=o(E,"SCRIPT",{});var N=c(_);C=A(N,`function closeModal() {
            var modal = document.querySelector('.modal');
            modal.style.display = 'none';
            fireworks.stop();
        }
        document.querySelector('.modal').classList.add('active');
    //     document.querySelector('.popup-content h1').addEventListener('animationend', function() {
    //         let word = "Alice's Garden";
    //         let timer = word.length;
    // let interval = setInterval(() => {
    //     if (timer == 0) {
    //         clearInterval(interval);
    //         document.querySelector('.modal').classList.add('animation');
    //         document.querySelector('.popup-content h1').innerHTML = "sweeek.";
    //         fireworks.start()
    //     } else {
    //         let trimmedWord = word.slice(0, timer);
    //         document.querySelector('.popup-content h1').innerHTML = trimmedWord;
    //         timer--;
    //     }
    
            var timestamp = new Date().getTime();
            document.querySelector('img').src = 'https://i.imgur.com/YtSH5ba.gif?' + timestamp;

        const container = document.querySelector('.modal')
        const fireworks = new Fireworks.default(container)

        setTimeout(()=> {
            fireworks.start();
        },1000);`),N.forEach(r),E.forEach(r),m.forEach(r),this.h()},h(){i(u,"html",""),Q(h.src,G="https://unpkg.com/fireworks-js@2.x/dist/index.umd.js")||i(h,"src",G),i(q,"charset","UTF-8"),i(g,"href","https://fonts.cdnfonts.com/css/satoshi"),i(g,"rel","stylesheet"),i(k,"name","viewport"),i(k,"content","width=device-width, initial-scale=1.0"),Q(y.src,O="https://i.imgur.com/oVWqQvB.gif")||i(y,"src",O),i(y,"alt","GIF"),i(v,"class","popup-content"),i(w,"class","modal"),i(l,"lang","en")},m(s,m){W(s,u,m),W(s,x,m),W(s,l,m),n(l,e),n(e,h),n(e,T),n(e,q),n(e,L),n(e,g),n(e,I),n(e,k),n(e,M),n(e,b),n(b,D),n(e,z),n(e,S),n(S,H),n(l,P),n(l,f),n(f,w),n(w,v),n(v,y),n(f,Y),n(f,_),n(_,C)},p:j,i:j,o:j,d(s){s&&r(u),s&&r(x),s&&r(l)}}}class tn extends X{constructor(u){super(),Z(this,u,null,nn,$,{})}}export{tn as component};
