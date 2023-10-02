import{S as J,i as X,s as Z,k as t,a as m,q as F,l as o,c as p,m as c,h as r,r as O,n as i,$ as Q,b as A,E as n,I as W}from"../chunks/index.0c4ffdad.js";function nn(U){let u,x,l,e,h,j,T,E,L,g,I,k,M,b,D,z,S,C,H,f,w,v,y,G,P,_,Y;return{c(){u=t("!DOCTYPE"),x=m(),l=t("html"),e=t("head"),h=t("script"),T=m(),E=t("meta"),L=m(),g=t("link"),I=m(),k=t("meta"),M=m(),b=t("title"),D=F("Fireworks Popup"),z=m(),S=t("style"),C=F(`body {
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
        }`),H=m(),f=t("body"),w=t("div"),v=t("div"),y=t("img"),P=m(),_=t("script"),Y=F(`function closeModal() {
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
    
        document.addEventListener('DOMContentLoaded', function() {
            var timestamp = new Date().getTime();
            document.querySelector('img').src = 'https://i.imgur.com/YtSH5ba.gif?' + timestamp;

        })
        const container = document.querySelector('.modal')
        const fireworks = new Fireworks.default(container)

        setTimeout(()=> {
            fireworks.start();
        },1000);`),this.h()},l(s){u=o(s,"!DOCTYPE",{html:!0}),x=p(s),l=o(s,"HTML",{lang:!0});var d=c(l);e=o(d,"HEAD",{});var a=c(e);h=o(a,"SCRIPT",{src:!0});var $=c(h);$.forEach(r),T=p(a),E=o(a,"META",{charset:!0}),L=p(a),g=o(a,"LINK",{href:!0,rel:!0}),I=p(a),k=o(a,"META",{name:!0,content:!0}),M=p(a),b=o(a,"TITLE",{});var V=c(b);D=O(V,"Fireworks Popup"),V.forEach(r),z=p(a),S=o(a,"STYLE",{});var B=c(S);C=O(B,`body {
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
        }`),B.forEach(r),a.forEach(r),H=p(d),f=o(d,"BODY",{});var q=c(f);w=o(q,"DIV",{class:!0});var R=c(w);v=o(R,"DIV",{class:!0});var K=c(v);y=o(K,"IMG",{src:!0,alt:!0}),K.forEach(r),R.forEach(r),P=p(q),_=o(q,"SCRIPT",{});var N=c(_);Y=O(N,`function closeModal() {
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
    
        document.addEventListener('DOMContentLoaded', function() {
            var timestamp = new Date().getTime();
            document.querySelector('img').src = 'https://i.imgur.com/YtSH5ba.gif?' + timestamp;

        })
        const container = document.querySelector('.modal')
        const fireworks = new Fireworks.default(container)

        setTimeout(()=> {
            fireworks.start();
        },1000);`),N.forEach(r),q.forEach(r),d.forEach(r),this.h()},h(){i(u,"html",""),Q(h.src,j="https://unpkg.com/fireworks-js@2.x/dist/index.umd.js")||i(h,"src",j),i(E,"charset","UTF-8"),i(g,"href","https://fonts.cdnfonts.com/css/satoshi"),i(g,"rel","stylesheet"),i(k,"name","viewport"),i(k,"content","width=device-width, initial-scale=1.0"),Q(y.src,G="https://i.imgur.com/oVWqQvB.gif")||i(y,"src",G),i(y,"alt","GIF"),i(v,"class","popup-content"),i(w,"class","modal"),i(l,"lang","en")},m(s,d){A(s,u,d),A(s,x,d),A(s,l,d),n(l,e),n(e,h),n(e,T),n(e,E),n(e,L),n(e,g),n(e,I),n(e,k),n(e,M),n(e,b),n(b,D),n(e,z),n(e,S),n(S,C),n(l,H),n(l,f),n(f,w),n(w,v),n(v,y),n(f,P),n(f,_),n(_,Y)},p:W,i:W,o:W,d(s){s&&r(u),s&&r(x),s&&r(l)}}}class tn extends J{constructor(u){super(),X(this,u,null,nn,Z,{})}}export{tn as component};
