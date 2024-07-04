//Methods that modify the original array (Mutability)

//shift

const colors=['yellow','blue','red']
const removedColors= colors.shift()

console.log(colors)
console.log(removedColors)

//unshift

const newColors=colors.unshift('pink','purple')

console.log(colors)
console.log(newColors)


function managePlayList(playList,cancion){
    playList.shift()
    playList.unshift(cancion)
    return playList
}

const initialPlayList=['Deshacer el mundo','La chispa Adecuada','Eye of the tiger']
const newSongToAdd='Héroe de leyenda'
console.log(initialPlayList)

const updatedPlayList= managePlayList(initialPlayList,newSongToAdd)

console.log(updatedPlayList)