
var videList=[
    {//뉴진스 ditto
        videoId:'pSUydWEqKwE',
        videoSrc: 'https://www.youtube.com/embed/pSUydWEqKwE',
        thumbNailSrc: 'https://img.youtube.com/vi/pSUydWEqKwE/0.jpg',
        title:'New Jeans(뉴진스) - Ditto',
        uploader:'New Jeans',
    },
    {//뉴진스 omg
        videoId:'VSOxLgnRNa8',
        videoSrc: 'https://www.youtube.com/embed/VSOxLgnRNa8',
        thumbNailSrc: 'https://img.youtube.com/vi/VSOxLgnRNa8/0.jpg',
        title:'카이지 토네가와 명대사2 더빙',
        uploader:'홍준표'
    },
    {//카이지 돈
        videoId:'rY4cxbYrlEw',
        videoSrc: 'https://www.youtube.com/embed/rY4cxbYrlEw',
        thumbNailSrc: 'https://img.youtube.com/vi/rY4cxbYrlEw/0.jpg',
        title:'카이지 - 돈에대한 환상을 깨는 명언',
        uploader:'윤석열'
    }, 
    {//카이지 빌린돈
        videoId:'qtKTVFTQ24k',
        videoSrc: 'https://www.youtube.com/embed/qtKTVFTQ24k',
        thumbNailSrc: 'https://img.youtube.com/vi/qtKTVFTQ24k/0.jpg',
        title:'카이지 - 빌린돈',
        uploader:'문재인'
    }, 
]

$(document).ready(function(){
    sideVideoListInit()
    sideVideoListEventEnroll()
})

function sideVideoListInit(){

    for(var i=0; i<videList.length; i++){
        var sideDiv=document.createElement('div');
        sideDiv.setAttribute('id','side-video');

        var leftDiv=document.createElement('div');
        leftDiv.setAttribute('id', 'side-left');
        leftDiv.setAttribute('class', videList[i].videoId);

        var thumbNailImg = document.createElement('img');
        thumbNailImg.setAttribute('src', videList[i].thumbNailSrc)
        thumbNailImg.setAttribute('class', videList[i].videoId);
        leftDiv.appendChild(thumbNailImg)

        var rightDiv=document.createElement('div');
        rightDiv.setAttribute('id','side-right');
        
        var rightDiv01 = document.createElement('div');
        var rightDiv02 = document.createElement('div');
        rightDiv01.innerText=videList[i].title
        rightDiv02.innerText=videList[i].uploader
        rightDiv.appendChild(rightDiv01);
        rightDiv.appendChild(rightDiv02);

        sideDiv.appendChild(leftDiv);
        sideDiv.appendChild(rightDiv);

        var sideVideoList = document.getElementById('side-video-list');
        sideVideoList.appendChild(sideDiv);
    }
}

function sideVideoListEventEnroll() {

    var sideLeft = document.querySelectorAll('#side-video>#side-left')
    var sideLeftImg = document.querySelectorAll('#side-video>#side-left>img')
    for (var i = 0; i < sideLeft.length; i++){
        sideLeft[i].addEventListener('click', sideVideoListClick)
        sideLeftImg[i].addEventListener('click', sideVideoListClick)
    }
        
}
function sideVideoListClick(e) {
    console.log(e.target)
    var className = e.target.className
    console.log(className)

    var mainVideo = document.querySelector("#main-video>iframe")
    var src = `https://www.youtube.com/embed/${className}?autoplay=1` 
    mainVideo.setAttribute('src',src)

    var sideVideoImg = document.querySelector('img.'+className)
    var sideVideo = sideVideoImg.parentNode.parentNode
    var sideRight = sideVideo.children[1]
    console.log('sideRight')
    console.log(sideRight)
    var sideTitle = sideRight.childNodes[0].textContent
    console.log('sideTitle')
    console.log(sideTitle)
    var mainVideoTitle=document.getElementById('main-video-title')
    mainVideoTitle.innerText=sideTitle
    //mainVideoTitle.innerText
    
}