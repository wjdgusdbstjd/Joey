gsap.registerPlugin(ScrollTrigger);


        // ----------------------------------------------------
        // 1. 페이지 로드 시 헤더 나타나기
        // ----------------------------------------------------
        gsap.to(".logo, .line, .main-header, .line-1", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5
        });


        // ----------------------------------------------------
        // 2. 헤더 숨기기/보이기 트윈 (충돌 방지 버전)
        // ----------------------------------------------------
        const headerHide = gsap.to(".logo, .line, .main-header, .line-1", {
            y: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut",
            paused: true,
            immediateRender: false
        });


        // ----------------------------------------------------
        // 3. 헤더 텍스트/라인 색상 변경용 ScrollTrigger
        // ----------------------------------------------------
        const ALL_HEADER_CONTENT = "header a, .line, .line-1";
        const MENU_LINES = ".left-group ul .line, .middle-group ul .line, .right-group ul .line, .line-1";

        ScrollTrigger.create({
            start: 100,

            onEnter: () => {
                gsap.to(ALL_HEADER_CONTENT, {
                    color: "#B650F0",
                    borderTopColor: "#B650F0",
                    borderColor: "#B650F0",
                    duration: 0.3
                });

                gsap.to(MENU_LINES, {
                    backgroundColor: "#B650F0",
                    borderColor: "#B650F0",
                    duration: 0.3
                });
            },

            onLeaveBack: () => {
                gsap.to(ALL_HEADER_CONTENT, {
                    color: "#ffffff",
                    borderTopColor: "#ffffff",
                    borderColor: "#ffffff",
                    duration: 0.3
                });

                gsap.to(MENU_LINES, {
                    backgroundColor: "#ffffff",
                    borderColor: "#ffffff",
                    duration: 0.3
                });
            }
        });


        // ----------------------------------------------------
        // 4. 헤더 숨김 / 표시용 ScrollTrigger (전용으로 분리)
        // ----------------------------------------------------
        ScrollTrigger.create({
            start: 0,
            end: "max",

            onUpdate: (self) => {
                // 스크롤 다운 → 헤더 숨기기
                if (self.direction === 1) {
                    if (!headerHide.isActive()) headerHide.play();
                }
                // 스크롤 업 → 헤더 나타내기
                else {
                    if (!headerHide.isActive()) headerHide.reverse();
                }
            },

            onEnterBack: () => {
                if (!headerHide.isActive()) headerHide.reverse();
            }
        });



        gsap.from(
            ".main .name",
            {
                x: "-30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .name",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".main .tag-1",
            {
                y: "4vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.5, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .tag-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".main .tag-2",
            {
                y: "4vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.5, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .tag-2",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".main .tag-3",
            {
                y: "4vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.5, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .tag-3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );







        gsap.from(
            ".section-1 .how",
            {
                x: "30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.2,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-1 .joey-1 img",
            {
                x: "-30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".joey-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-1 .joey-1 p",
            {
                y: "30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".joey-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-1 .howyou",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 .howyou",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".chicken",
            {
                y: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.2,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".chicken",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );



        gsap.from(
            ".section-2 .joey-name-bg",
            {
                x: "30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 .joey-2-txt img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        // gsap.from(
        //     ".section-2 .joey-2-txt img",
        //     {
        //         x: "25vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.6,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".joey-2-txt",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play none none none", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );


        // 1. 요소 선택
const pizzaBtn = document.querySelector('.section-2 .pizza');
const joeyHiddenImg = document.querySelector('.section-2 .joey-2');

// 2. 클릭 이벤트 리스너 추가
pizzaBtn.addEventListener('click', () => {
    
    // GSAP로 부드럽게 등장시키기
    gsap.to(joeyHiddenImg, {
        opacity: 1,       // 투명도 100% (보이게)
        scale: 1,         // 크기 정상
        duration: 0.8,    // 0.8초 동안
        ease: "back.out(1.7)", // 살짝 띠용~ 하고 튀어나오는 느낌
        onStart: () => {
            // 애니메이션 시작하면 클릭 가능하게 변경 (필요시)
            joeyHiddenImg.style.pointerEvents = "auto";
        }
    });

    // (선택사항) 피자는 클릭했으니까 사라지게 하려면 아래 주석 해제
    /*
    gsap.to(pizzaBtn, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3
    });
    */
});

        gsap.from(
            ".section-2 .joey-2-txt p",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".joey-2-txt",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-3 img",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.7, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-3 img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-4 .section-4-top img",
            {
                x: "-25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 .section-4-top img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-4 .gif",
            {
                x: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.2,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 .gif",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-4 img:nth-child(3)",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 img:nth-child(3)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-4 img:nth-child(4)",
            {
                x: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 img:nth-child(4)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-5 img:nth-child(1)",
            {
                x: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5 img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-5 img:nth-child(2)",
            {
                y: "-25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5 img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        // gsap.from(
        //     ".section-5 img:nth-child(3)",
        //     {
        //         x: "-5vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.7,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".section-5 img:nth-child(2)",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );


        gsap.from(
            ".section-5 img:nth-child(3)",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.9,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5 img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-6 ul li:nth-child(1)",
            {
                x: "-25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.9, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul li:nth-child(1) p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-6 ul li:nth-child(2)",
            {
                x: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.9, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul li:nth-child(2) p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-6 ul li:nth-child(3)",
            {
                x: "-25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.9, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul li:nth-child(3) p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-6 ul li:nth-child(4)",
            {
                x: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.9, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 ul li:nth-child(4) p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );
