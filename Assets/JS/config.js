// Vidéo YouTube
let Video_ID = "k_GM1JA608Y" 

// Logo
let img = "Logo.png"

// Texte
let red_text = 'Atlass'
let blue_text = 'City'

// PlayList
var tracks
tracks = [{
	"track": 1,
	"name": "Logic - Ballin",
	"duration": "",
	"file": "LogicBallin"
}, {
	"track": 2,
	"name": "Getsix - Orion",
	"duration": "",
	"file": "Music"
}, {
	"track": 3,
	"name": "Bazanji - Want The World",
	"duration": "",
	"file": "BazanjiWantTheWorld"
}, {
	"track": 4,
	"name": "Rah-C - Mayes",
	"duration": "",
	"file": "Mayes"
}]

// NE PAS EDITER
$('.open').html(red_text)
$('.hrs').html(blue_text)
$('.ACLogo').attr('src', 'Assets/IMG/' + img)
$('.VDO').attr('src', 'https://www.youtube.com/embed/' + Video_ID + '?autoplay=1&mute=1&loop=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&controls=0&volume=0')