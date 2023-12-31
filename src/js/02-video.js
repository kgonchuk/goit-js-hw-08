import Player from "@vimeo/player";
import throttle from "lodash.throttle";



const iframe = document.querySelector('iframe');
const CURRENT_TIME_KEY = "videoplayer-current-time";
const player = new Player(iframe);
function onPlay (currentTime){
    const seconds = currentTime.seconds;
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds))
};
    player.on('timeupdate', throttle(onPlay, 1000));


    const currentTime = Number(localStorage.getItem(CURRENT_TIME_KEY));

    player.setCurrentTime(currentTime);

    