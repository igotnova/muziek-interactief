

$flickr = new Flickr(FLICKR_KEY, FLICKR_SECRET);
$data = $flickr->search('sun');

//$urls = $flickr->getImageUrls("machoke");

//echo "<pre>";
//print_r($urls);
//echo "</pre>";

//foreach ($urls as $a){
//    echo "<img src='$a'/><br/>";
//}

$json = file_get_contents("http://pokeapi.co/api/v1/pokedex/1/");
$data = json_decode($json);
$pokemons = $data->pokemon_entries;
$random = rand(0, count($pokemons));

$images = $flickr->getImageUrls($pokemons[$random]->pokemon_species->name);

echo '<h1>' . $pokemons[$random]->pokemon_species->name . '</h1>';
foreach($images as $imglink) {
    echo '<img src="' . $imglink . '">';
}


//Create instance of class to use for communicating with Flickr webservice
$flickr = new Flickr(FLICKR_KEY, FLICKR_SECRET);

//Check to see if the server connects properly
$connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

//TODO: from here on it's up to you!