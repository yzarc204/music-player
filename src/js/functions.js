function LoadSong(index) {
    //Load info
    songName.innerHTML = songs[index].name
    singer.innerHTML = songs[index].singer
    thumbnail.src = '/src/images/' + songs[index].thumbnail

    //Load song
    player.src = '/src/musics/' + songs[index].songMp3 + '.mp3'
    player.load()
    PlaySong()
}

function PauseSong() {
    player.pause()
    thumbnail.style.animationPlayState = 'paused'
}

function PlaySong() {
    player.play()
    thumbnail.style.animationPlayState = 'running'
}

function SetPlayButton(isPlay) {
    if (isPlay) {
        state.className = 'fa fa-pause'
    } else {
        state.className = 'fa fa-play'
    }
}