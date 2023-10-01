import{S as Q,i as X,s as Z,k as t,a as m,q as T,l as o,c as p,m as s,h as a,r as L,n as l,$ as nn,b as G,E as n,I as O}from"../chunks/index.0c4ffdad.js";function en($){let h,E,c,e,f,W,I,S,M,v,z,k,P,g,A,D,x,H,C,u,w,y,_,F,Y,b,j;return{c(){h=t("!DOCTYPE"),E=m(),c=t("html"),e=t("head"),f=t("script"),I=m(),S=t("meta"),M=m(),v=t("link"),z=m(),k=t("meta"),P=m(),g=t("title"),A=T("Fireworks Popup"),D=m(),x=t("style"),H=T(`body {
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
        }`),C=m(),u=t("body"),w=t("div"),y=t("div"),_=t("h1"),F=T("Alice's Garden"),Y=m(),b=t("script"),j=T(`function closeModal() {
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
        const fireworks = new Fireworks.default(container)`),this.h()},l(i){h=o(i,"!DOCTYPE",{html:!0}),E=p(i),c=o(i,"HTML",{lang:!0});var d=s(c);e=o(d,"HEAD",{});var r=s(e);f=o(r,"SCRIPT",{src:!0});var J=s(f);J.forEach(a),I=p(r),S=o(r,"META",{charset:!0}),M=p(r),v=o(r,"LINK",{href:!0,rel:!0}),z=p(r),k=o(r,"META",{name:!0,content:!0}),P=p(r),g=o(r,"TITLE",{});var R=s(g);A=L(R,"Fireworks Popup"),R.forEach(a),D=p(r),x=o(r,"STYLE",{});var V=s(x);H=L(V,`body {
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
        }`),V.forEach(a),r.forEach(a),C=p(d),u=o(d,"BODY",{});var q=s(u);w=o(q,"DIV",{class:!0});var B=s(w);y=o(B,"DIV",{class:!0});var K=s(y);_=o(K,"H1",{});var N=s(_);F=L(N,"Alice's Garden"),N.forEach(a),K.forEach(a),B.forEach(a),Y=p(q),b=o(q,"SCRIPT",{});var U=s(b);j=L(U,`function closeModal() {
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
        const fireworks = new Fireworks.default(container)`),U.forEach(a),q.forEach(a),d.forEach(a),this.h()},h(){l(h,"html",""),nn(f.src,W="https://unpkg.com/fireworks-js@2.x/dist/index.umd.js")||l(f,"src",W),l(S,"charset","UTF-8"),l(v,"href","https://fonts.cdnfonts.com/css/satoshi"),l(v,"rel","stylesheet"),l(k,"name","viewport"),l(k,"content","width=device-width, initial-scale=1.0"),l(y,"class","popup-content"),l(w,"class","modal"),l(c,"lang","en")},m(i,d){G(i,h,d),G(i,E,d),G(i,c,d),n(c,e),n(e,f),n(e,I),n(e,S),n(e,M),n(e,v),n(e,z),n(e,k),n(e,P),n(e,g),n(g,A),n(e,D),n(e,x),n(x,H),n(c,C),n(c,u),n(u,w),n(w,y),n(y,_),n(_,F),n(u,Y),n(u,b),n(b,j)},p:O,i:O,o:O,d(i){i&&a(h),i&&a(E),i&&a(c)}}}class on extends Q{constructor(h){super(),X(this,h,null,en,Z,{})}}export{on as component};
