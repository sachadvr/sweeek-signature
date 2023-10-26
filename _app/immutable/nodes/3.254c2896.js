import{S as X,i as Z,s as $,k as e,a as d,q as j,l as a,c as p,m as c,h as i,r as H,n as s,a0 as U,b as O,E as n,I as A}from"../chunks/index.958368b0.js";function nn(W){let f,E,l,t,u,V,q,v,D,S,I,k,z,b,P,Y,_,C,F,h,w,g,y,B,L,x,M;return{c(){f=e("!DOCTYPE"),E=d(),l=e("html"),t=e("head"),u=e("script"),q=d(),v=e("link"),D=d(),S=e("meta"),I=d(),k=e("meta"),z=d(),b=e("title"),P=j("Fireworks Popup"),Y=d(),_=e("style"),C=j(`body {
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
        }`),F=d(),h=e("body"),w=e("div"),g=e("div"),y=e("img"),L=d(),x=e("script"),M=j(`function closeModal() {
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
        },1000);`),this.h()},l(r){f=a(r,"!DOCTYPE",{html:!0}),E=p(r),l=a(r,"HTML",{lang:!0});var m=c(l);t=a(m,"HEAD",{});var o=c(t);u=a(o,"SCRIPT",{src:!0});var J=c(u);J.forEach(i),q=p(o),v=a(o,"LINK",{href:!0,rel:!0}),D=p(o),S=a(o,"META",{charset:!0}),I=p(o),k=a(o,"META",{name:!0,content:!0}),z=p(o),b=a(o,"TITLE",{});var G=c(b);P=H(G,"Fireworks Popup"),G.forEach(i),Y=p(o),_=a(o,"STYLE",{});var R=c(_);C=H(R,`body {
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
        }`),R.forEach(i),o.forEach(i),F=p(m),h=a(m,"BODY",{});var T=c(h);w=a(T,"DIV",{class:!0});var K=c(w);g=a(K,"DIV",{class:!0});var N=c(g);y=a(N,"IMG",{src:!0,alt:!0}),N.forEach(i),K.forEach(i),L=p(T),x=a(T,"SCRIPT",{});var Q=c(x);M=H(Q,`function closeModal() {
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
        },1000);`),Q.forEach(i),T.forEach(i),m.forEach(i),this.h()},h(){s(f,"html",""),U(u.src,V="https://unpkg.com/fireworks-js@2.x/dist/index.umd.js")||s(u,"src",V),s(v,"href","https://fonts.cdnfonts.com/css/satoshi"),s(v,"rel","stylesheet"),s(S,"charset","UTF-8"),s(k,"name","viewport"),s(k,"content","width=device-width, initial-scale=1.0"),U(y.src,B="https://i.imgur.com/oVWqQvB.gif")||s(y,"src",B),s(y,"alt","GIF"),s(g,"class","popup-content"),s(w,"class","modal"),s(l,"lang","en")},m(r,m){O(r,f,m),O(r,E,m),O(r,l,m),n(l,t),n(t,u),n(t,q),n(t,v),n(t,D),n(t,S),n(t,I),n(t,k),n(t,z),n(t,b),n(b,P),n(t,Y),n(t,_),n(_,C),n(l,F),n(l,h),n(h,w),n(w,g),n(g,y),n(h,L),n(h,x),n(x,M)},p:A,i:A,o:A,d(r){r&&i(f),r&&i(E),r&&i(l)}}}class en extends X{constructor(f){super(),Z(this,f,null,nn,$,{})}}export{en as component};
