let mm = gsap.matchMedia();

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  tablet : {smooth: true},
  smartphone: {smooth: true}
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

locomotive()


mm.add("(min-width:1300px)",()=>{

function loadAnimation() {
    var all1 = gsap.timeline()
all1.from('#page1',{
    opacity: 0,
    duration: 0.3,
    delay: 0.2
})
all1.from('#page1',{
    transform: "scaleX(0.7) scaleY(0) translateY(90%)",
    duration: 2,
    ease: "expo.out"
})
all1.from('nav',{
    opacity: 0,
    delay: 0.2
})
all1.from('#page1 h1 , #page1 div , #page1 p',{
    opacity: 0,
    transform: "translateY(20%)",
    duration: 0.3,
    stagger: 0.1
})
}

loadAnimation()

function navAnimation() {
    const nav = document.querySelector('nav');
    const navh4 = document.querySelector('nav .aur')
    let timeout ;
    navh4.addEventListener('mouseenter' , ()=> {
        timeout = setTimeout(()=>{
    let tl = gsap.timeline(); // timeline gives synconus representation ek ek karke display hoga
    tl.to("#nav-button", {
        height: '22vh',
        duration: 0.35
    })
    tl.to(".aur h5",{
        display: 'block'
    })
    tl.to(".aur h5 span",{
        y: 0,      
        duration: 0.2,                        // duration: 0.4,
        stagger: {
            amount: 0.25
            // amount: 0.6
        }
    })
},850)
})

navh4.addEventListener('mouseleave' , ()=> {
    let tl = gsap.timeline(); // timeline gives synconus representation ek ek karke display hoga
    tl.to(".aur h5 span",{
        y: 25,
        // duration: 0.4,
        stagger: {
            amount: 0.05
        }
    })
    tl.to(".aur h5",{
        display: 'none',
        duration:0.1
    })
    tl.to("#nav-button", {
        height: '0',
        duration:0.15
    })
    clearTimeout(timeout)
})
}

navAnimation()

function page2Animation() {
    const elem = document.querySelectorAll('.page2-elem')
elem.forEach(function(e) {
    e.addEventListener('mouseenter',()=>{
        gsap.to(e.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    e.addEventListener('mouseleave',()=>{
        gsap.to(e.childNodes[3],{
            opacity:0,
            scale:0,
        })
    })
    e.addEventListener('mousemove',(dets)=>{
        gsap.to(e.childNodes[3],{
            x:dets.x - e.getBoundingClientRect().x - 50,
            y:dets.y - e.getBoundingClientRect().y - 118
        })
    })
})
}

page2Animation()




function page7Animation() {
    var sections = document.querySelectorAll('.section-right')
    console.log(sections)
    // var section12 = sections[0].childNodes[3]
sections.forEach(function(e) {
    e.addEventListener('mouseenter',()=>{
        e.childNodes[5].style.opacity = 1;
        e.childNodes[5].play()
        // section12.style.zIndex = 0;
        gsap.to(e.firstElementChild,{
            opacity : 1,
            scale : 1
        })
    })
    e.addEventListener('mouseleave',()=>{
        e.childNodes[5].style.opacity = 0;
        e.childNodes[5].currentTime = 0;
        e.childNodes[5].pause()
        // e.childNodes[5].load()
        // section12.style.zIndex = 1;
        gsap.to(e.firstElementChild,{
            opacity : 0,
            scale : 0
        })
    })
    e.addEventListener('mousemove',function(dets) {
        gsap.to(e.firstElementChild,{
            x:dets.x - e.getBoundingClientRect().x - 85,
            y:dets.y - e.getBoundingClientRect().y - 85,
        })
    })
})
}

page7Animation()




function scrollEffect() {
gsap.from('.page12p2 h4',{
    x:0,
    duration: 1,
    scrollTrigger: {
    trigger: ".page12p2",
    scroller: "#main",
    start: "top 80%",
    end: "top 0%",
    scrub: true
    }
})
gsap.from('.page12p3 h4',{
    x:0,
    duration: 1,
    scrollTrigger: {
    trigger: ".page12p3",
    scroller: "#main",
    start: "top 80%",
    end: "top 0%",
    scrub: true
    }
})
gsap.from('.page12p4 h4',{
    x:0,
    duration: 1,
    scrollTrigger: {
    trigger: ".page12p4",
    scroller: "#main",
    start: "top 80%",
    end: "top 0%",
    scrub: true
    }
})



gsap.from('.page15Right img',{
    transform: "scale(1.07)",
    duration: 1.2,
    scrollTrigger: {
        trigger: ".page15Right img",
        scroller: "#main",
        start: "top 70%",
        end:"top 0%",
        scrub: true
    }
})
}

scrollEffect()

function page12Animation() {
var mytext = new SplitType('#h412')
var mytext2 = new SplitType('#h4123')
var page12btn = document.querySelector('.btn1')
page12btn.addEventListener('mouseenter',function(){
gsap.to('#h412 .char',{
    transform: "translateY(-5vh)",
    stagger: 0.02,
    delay: 0.2,
    duration: 0.4
})
gsap.to('#h4123 .char',{
    transform: "translateY(-5vh)",
    stagger: 0.02,
    delay: 0.2,
    duration: 0.4
})

})
page12btn.addEventListener('mouseleave',function(){
gsap.to('#h412 .char',{
    transform: "translateY(0vh)",
    stagger: 0.02,
    delay: 0.2,
    duration: 0.4
})
gsap.to('#h4123 .char',{
    transform: "translateY(5vh)",
    stagger: 0.02,
    delay: 0.2,
    duration: 0.4
})
})
}

page12Animation()

function page13Animation() {
var page13 = document.getElementById('page13')
var page133 = page13.firstElementChild.firstElementChild
var i1 = document.getElementById('i1')
page13.addEventListener('mouseenter',function() {
    i1.classList.add("ri-pencil-fill")
    gsap.to(page133,{
        opacity : 1,
        scale : 1
    })
})
page13.addEventListener('mouseleave',function() {
    i1.classList.remove("ri-pencil-fill")
    gsap.to(page133,{
        opacity : 0,
        scale : 0
    })

})
page13.addEventListener('mousemove',function(dets) {
    gsap.to(page133,{
        x:dets.x - page13.getBoundingClientRect().x - 85,
        y:dets.y - page13.getBoundingClientRect().y - 85,
    })
})
}

page13Animation()

function page16Animation() {
var page16 = document.getElementsByClassName('page16Left')
var page160 = page16[0]
var page166 = page160.firstElementChild
console.log(page166)
page160.addEventListener('mouseenter',function() {
    gsap.to(page166,{
        opacity : 1,
        scale : 1
    })
})
page160.addEventListener('mouseleave',function() {
    gsap.to(page166,{
        opacity : 0,
        scale : 0
    })

})
page160.addEventListener('mousemove',function(dets) {
    gsap.to(page166,{
        x:dets.x - page160.getBoundingClientRect().x - 85,
        y:dets.y - page160.getBoundingClientRect().y - 85,
    })
})
}

page16Animation()

})


function myfunction() {
    document.getElementById('i12').classList.toggle("mystyle")
}
function myfunction1() {
    document.getElementById('i123').classList.toggle("mystyle")
}
function myfunction2() {
    document.getElementById('i124').classList.toggle("mystyle")
}
function myfunction4() {
    document.getElementById('i125').classList.toggle("mystyle")
}



// Responsive




var ihbutton = document.querySelector('nav .svg2 i');
var butn = document.querySelector('nav .aur')
ihbutton.addEventListener('click',()=>{
    
    let tl = gsap.timeline()
    if(ihbutton.classList.contains('ri-menu-line')) {
        console.log(butn.offsetHeight)
        if(butn.offsetHeight > 270) {
            butn.style.height = '94vh'
        }
        else {
            console.log("hello")
            butn.style.height = '90vh'
        }
        document.querySelector('body').style.overflow = "hidden"
        ihbutton.classList.replace('ri-menu-line','ri-close-large-line')
        gsap.to('.aur',{
            transform: 'translateX(0%)'
        })
        tl.to(".aur h5 span",{
            y: 0,
            delay: 0.4,      
            duration: 0.9,
            stagger: {
                amount: 0.5
            }
        })
    } 
    else {
        document.querySelector('body').style.overflow = "initial"
        ihbutton.classList.replace('ri-close-large-line','ri-menu-line')
        gsap.to('.aur',{
            transform: 'translateX(-200%)'
        })
        tl.to(".aur h5 span",{
            y: 25,
        })
    }
})




mm.add(
    {
        isDesktop: "(min-width: 1300px)",
        isMobile: "(max-width: 1299px)",
    },
    (context) => {
        let {isDesktop , isMobile} = context.conditions;

function videoAnimation() {
    var page3center = document.querySelector('#page3')
    var video1 = document.querySelector('#page3 video')
    var nav2 = document.querySelector('nav')
    


            page3center.addEventListener('click',function() {
                if(video1.paused) {
                    play1();
                }
                else {
                    pause1();
                }
            function play1() {
                if(isMobile) {
                page3center.classList.add('active')
                }
                else {}
                nav2.style.zIndex = 0
                    video1.play()
                gsap.to(video1,{
                    transform: "scaleX(1) scaleY(1)",
                    opacity: 1,
                    borderRadius: 0,
                    zIndex: 100,
                    height: isMobile ? '50%' : '100%',
                    // objectFit: 'cover'
                })
            }
            function pause1() {
                if(isMobile) {
                page3center.classList.remove('active')
                }
                else {}
                video1.currentTime = 0;
                video1.pause()
                gsap.to(video1,{
                    transform: "scaleX(0.7) scaleY(0)",
                    opacity: 0,
                    borderRadius: "50px",
                    zIndex: 0,
                    height: '0%',
                    // objectFit: 'cover'
                })
                nav2.style.zIndex = 10
            }
        })


        
    
    
}

videoAnimation()




function page7Animation() {
    var sections = document.querySelectorAll('.section-right')
    console.log(sections)
    // var section12 = sections[0].childNodes[3]
sections.forEach(function(e) {
    e.addEventListener('click',()=>{
        if (e.childNodes[5].paused) {
            play2()
        }
        else {
            pause2()
        }
        function play2() {
        e.childNodes[5].style.opacity = 1;
        e.childNodes[5].play()
        // section12.style.zIndex = 0;
        gsap.to(e.firstElementChild,{
            opacity : 0,
            scale : 0
        })
    }
    })
    function pause2() {
        e.childNodes[5].style.opacity = 0;
        e.childNodes[5].currentTime = 0;
        e.childNodes[5].pause()
        // e.childNodes[5].load()
        // section12.style.zIndex = 1;
        gsap.to(e.firstElementChild,{
            opacity : 1,
            scale : 1
        })
    }
})
}

page7Animation()



function page8Animation() {
    let t2 = gsap.timeline();
    var iv2 = document.querySelectorAll('.iv1')
    var page81 = document.querySelector('.page81')
iv2.forEach(function(e) {
    if (isDesktop) {
    page81.addEventListener('mouseenter',() => {
        e.childNodes[3].play()
        e.childNodes[3].style.opacity = 1;
        t2.to(iv2,{
            top: 0,
            height: '85%',
            stagger: {
                amount: 0.4
            }
        })
    })
    page81.addEventListener('mouseleave',() => {
        e.childNodes[3].style.opacity = 0;
        // e.childNodes[3].currentTime = 0;
        // e.childNodes[3].pause()
        e.childNodes[3].load()
        t2.to(iv2,{
            top: '14vw',
            height: '52%',
            stagger: {
                amount: 0.2
            }
        })
    })
    }
    else {
        page81.addEventListener('click', () => {
            if (e.childNodes[3].paused) {
                e.childNodes[3].style.opacity = 1;
                e.childNodes[3].play();
                t2.to(iv2,{
                    top: 0,
                    height: '85%',
                    stagger: {
                        amount: 0.4
                    }
                })
            }
            else {
                e.childNodes[3].style.opacity = 0;
                e.childNodes[3].load();
                t2.to(iv2,{
                    top: '14vw',
                    height: '52%',
                    stagger: {
                        amount: 0.2
                    }
                })
            }
        })
    }
})


var iv3 = document.querySelectorAll('.iv2')
var page82 = document.querySelector('.page82')
iv3.forEach(function(e) {
    if(isDesktop) {
    page82.addEventListener('mouseenter',() => {
        e.childNodes[3].play()
        e.childNodes[3].style.opacity = 1;
        t2.to(iv3,{
            top: 0,
            height: '85%',
            stagger: {
                amount: 0.4
            }
        })
    })
    page82.addEventListener('mouseleave',() => {
        e.childNodes[3].style.opacity = 0;
        e.childNodes[3].load()
        t2.to(iv3,{
            top: '14vw',
            height: '52%',
            stagger: {
                amount: 0.2
            }
        })
    })
    }
    else {
        page82.addEventListener('click', () => {
            if (e.childNodes[3].paused) {
                e.childNodes[3].style.opacity = 1;
                e.childNodes[3].play();
                t2.to(iv3,{
                    top: 0,
                    height: '85%',
                    stagger: {
                        amount: 0.4
                    }
                })
            }
            else {
                e.childNodes[3].style.opacity = 0;
                e.childNodes[3].load();
                t2.to(iv3,{
                    top: '14vw',
                    height: '52%',
                    stagger: {
                        amount: 0.2
                    }
                })
            }
        })
    }
})
}

page8Animation()



}
)