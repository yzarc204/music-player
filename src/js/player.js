var isPlay = true;
var songIdx = 0;

// Load first song
LoadSong(songIdx)
SetPlayButton(isPlay)

// Events

btnPlay.addEventListener('click', e => {
    if (isPlay) {
        PauseSong()
    } else {
        PlaySong()
    }
    SetPlayButton(isPlay)
    isPlay = !isPlay
})

btnPrevious.addEventListener('click', e => {
    isPlay = true
    songIdx--
    if (songIdx < 0) {
        songIdx = songs.length - 1
    }
    LoadSong(songIdx)
    SetPlayButton(isPlay)
})

btnNext.addEventListener('click', e => {
    isPlay = true
    songIdx++
    if (songIdx > songs.length - 1) {
        songIdx = 0
    }
    LoadSong(songIdx)
    SetPlayButton(isPlay)
})

// Timer interval
var timeInterval = setInterval(() => {
    if (isPlay == true) {
        let duration = player.duration
        let currentTime = player.currentTime
        let fillPercent = (currentTime / duration * 100)
        filledTime.style.width = fillPercent + '%'

        if (fillPercent >= 100) {
            btnNext.click()
        }
    }
}, 50)